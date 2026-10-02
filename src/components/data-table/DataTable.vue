<script setup lang="ts">
import { inject } from 'vue';
import { 
  ChevronDown, 
  ChevronUp, 
  ChevronsUpDown, 
  Loader2,
  Copy,
  Filter,
  ArrowLeft,
  ArrowRight,
  EyeOff,
  ClipboardList,
  X
} from 'lucide-vue-next';
import TablePagination from './TablePagination.vue';

/**
 * One sort key. The table sorts by a LIST of these, applied in order: the first rule decides,
 * the next only breaks its ties. Shift-clicking a header appends a rule.
 */
export interface SortRule {
  field: string;
  order: 'asc' | 'desc';
}

/** What the page hands in: one function that turns table params into a page of rows. */
export type FetchFunction = (params: {
  page: number;
  pageSize: number;
  /** Never null — an unsorted table sends `[]`. */
  sort: SortRule[];
}) => Promise<{ data: any[]; total: number }>;

interface DataTableSource {
  items: { value: any[] };
  displayItems: { value: any[] };
  columns: { value: string[] };
  searchQuery: { value: string };
  stickyLeft: { value: string[] };
  stickyRight: { value: string[] };
  hiddenColumns: { value: string[] };
  onCellUpdate?: (params: { column: string, value: any, row: any, index: number }) => Promise<void>;
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    loading: boolean;
  };
  params: {
    sort: SortRule[];
  };
  refresh: () => Promise<void>;
  toggleColumn: (column: string) => void;
  toggleSticky: (column: string, side: 'left' | 'right' | 'none') => void;
  setPage: (page: number) => Promise<void>;
  setPageSize: (size: number) => Promise<void>;
  setSort: (sort: SortRule[]) => Promise<void>;
  toggleSort: (field: string, additive: boolean) => Promise<void>;
}

const props = withDefaults(defineProps<{
  /**
   * The page usually passes `fetch` (plus the options below) and this component owns the
   * source. `source` stays for the rare page that needs to drive one itself.
   */
  fetch?: FetchFunction;
  /** Column labels, in display order. Reassigning them (e.g. on a locale change) is picked up. */
  columns?: string[];
  stickyLeft?: string[];
  stickyRight?: string[];
  /**
   * Columns sized to their content (plus the cell padding) instead of sharing the table's spare
   * width — actions, a status badge, a code. The spare width goes to the text columns.
   */
  fitColumns?: string[];
  /** Remembers columns, pinning, page size and sort — required on page-level tables. */
  persistId?: string;
  pageSize?: number;
  /**
   * Initial sort: one rule or a list of them, applied in order.
   * `:sort="{ field: 'Updated', order: 'desc' }"` · `:sort="[{ field: 'Group', order: 'asc' }, …]"`.
   * A remembered sort (see `persistId`) wins over this on every visit but the first.
   */
  sort?: SortRule | SortRule[];
  /** Pre-built source. Mutually exclusive with `fetch`. */
  source?: DataTableSource;
  maxHeight?: string;
  paginationPosition?: 'top' | 'bottom' | 'both';
  allowCustomColumns?: boolean;
  showSearch?: boolean;
  /** `grid` (default): spreadsheet look — outer border, cell borders, row numbers, top nav row with pagination.
   *  `clean`: hoff `.table-wrap` look — horizontal rules only, no row numbers, no top nav, pagination at the bottom only. */
  variant?: 'grid' | 'clean';
  /** Checkbox column; selected rows via `v-model:selected` (array of rows). */
  showSelect?: boolean;
  selected?: any[];
  /** Field (or function) identifying a row across pages; defaults to object identity. */
  rowKey?: string | ((row: any) => any);
  /** Floating bulk-action bar, auto-shown at the bottom centre while rows are selected. */
  showBulkBar?: boolean;
  /** Label next to the count in the bulk bar, e.g. `"selected"` / `"đã chọn"`. */
  bulkBarLabel?: string;
  /** Tooltip / aria-label of the bar's clear button. */
  bulkBarClearLabel?: string;
  /**
   * Double-click a cell to open its raw value (copy, filter by it). Off by default: on a business
   * list a double-click is usually a mis-aimed click on a link, not a request to inspect data.
   * Turn it on for data-inspection grids (SQL console, logs).
   */
  cellDetail?: boolean;
}>(), {
  cellDetail: false,
  paginationPosition: 'bottom',
  allowCustomColumns: false,
  showSearch: true,
  variant: 'grid',
  showSelect: false,
  selected: () => [],
  showBulkBar: true,
  bulkBarLabel: 'selected',
  bulkBarClearLabel: 'Clear selection'
});

const $superApp = inject<any>('$superApp');
if (!$superApp) {
  throw new Error('🚨 [DataTable] Critical: SuperApp bridge not found.');
}

const { ref, computed, watch } = $superApp.$vue;
const clean = computed(() => props.variant === 'clean');

/**
 * Own the source unless the page handed one in. Building it here is what lets a page be
 * just `:fetch="fetchProducts"` — no kernel, no factory injection, no lifecycle to manage.
 */
const ownedSource: DataTableSource | null = props.source
  ? null
  : new ($superApp as any).DataTableSource($superApp, props.fetch, {
      persistId: props.persistId,
      pageSize: props.pageSize ?? 20,
      sort: props.sort,
    });

const src = computed((): DataTableSource => props.source ?? (ownedSource as DataTableSource));

/**
 * Columns arrive as a prop and can change — a locale switch relabels every one of them.
 * When that happens the sort must follow the column it was on, so it is remapped BY POSITION
 * in the old list; comparing labels would fail precisely when the labels changed.
 */
function applyColumns(next: string[]): void {
  const previous = src.value.columns.value;
  const sortedAt = src.value.params.sort.map((rule: SortRule) => previous.indexOf(rule.field));

  src.value.columns.value = [...next];
  src.value.stickyLeft.value = [...(props.stickyLeft ?? [])];
  src.value.stickyRight.value = [...(props.stickyRight ?? [])];

  src.value.params.sort = src.value.params.sort
    .map((rule: SortRule, i: number) => {
      const at = sortedAt[i];
      if (at < 0 || !next[at]) {
        return rule;
      }
      return { field: next[at], order: rule.order };
    });
}

if (!props.source) {
  watch(
    () => props.columns,
    (next: string[] | undefined) => {
      if (!next || next.length === 0) {
        return;
      }
      applyColumns(next);
      src.value.refresh();
    },
    { immediate: true, deep: true },
  );
}

/** Re-fetch the current page. */
function refresh(): Promise<void> {
  return src.value.refresh();
}

/** Re-fetch from page 1 — use after a filter changes. */
function reload(): Promise<void> {
  return src.value.fetch({ page: 1 });
}

defineExpose({ source: src, refresh, reload });
/** The rule sorting this column, or `null`. */
function sortRuleOf(col: string): SortRule | null {
  return src.value.params.sort.find((rule: SortRule) => rule.field === col) ?? null;
}

const isSorted = (col: string) => !!sortRuleOf(col);

/**
 * 1-based position of this column in the sort list, shown next to the arrow — but only
 * while more than one column is sorted, where the order is what needs explaining.
 */
function sortRankOf(col: string): number {
  if (src.value.params.sort.length < 2) {
    return 0;
  }
  return src.value.params.sort.findIndex((rule: SortRule) => rule.field === col) + 1;
}

const visibleColumns = computed(() => {
  const all = src.value.columns.value.filter((col: string) => !src.value.hiddenColumns.value.includes(col));
  
  const left = all.filter((c: string) => src.value.stickyLeft.value.includes(c));
  const right = all.filter((c: string) => src.value.stickyRight.value.includes(c));
  const mid = all.filter((c: string) => !src.value.stickyLeft.value.includes(c) && !src.value.stickyRight.value.includes(c));
  
  return [...left, ...mid, ...right];
});

// Helper to check if a column is sticky
const isStickyLeft = (col: string) => src.value.stickyLeft.value.includes(col);
/** A fit column takes its content's width; see the `fitColumns` prop. */
const isFit = (col: string) => (props.fitColumns ?? []).includes(col);
const isStickyRight = (col: string) => src.value.stickyRight.value.includes(col);

// @ts-ignore
const containerRef = ref<HTMLElement | null>(null);
const isDragging = ref(false);
const startX = ref(0);
const startY = ref(0);
const scrollLeft = ref(0);
const scrollTop = ref(0);

const handleMouseDown = (e: MouseEvent) => {
  if (!containerRef.value) return;
  // Only drag if it's the primary mouse button
  if (e.button !== 0) return;
  
  // Don't drag if clicking interactive elements
  const target = e.target as HTMLElement;
  if (target.closest('button') || target.closest('input') || target.closest('a')) return;

  // Clear existing selection
  window.getSelection()?.removeAllRanges();

  isDragging.value = true;
  startX.value = e.pageX - containerRef.value.offsetLeft;
  startY.value = e.pageY - containerRef.value.offsetTop;
  scrollLeft.value = containerRef.value.scrollLeft;
  scrollTop.value = containerRef.value.scrollTop;
};

const handleMouseMove = (e: MouseEvent) => {
  if (!isDragging.value || !containerRef.value) return;
  e.preventDefault();
  
  const x = e.pageX - containerRef.value.offsetLeft;
  const y = e.pageY - containerRef.value.offsetTop;
  
  const walkX = (x - startX.value) * 1.5; // Scroll speed
  const walkY = (y - startY.value) * 1.5;
  
  containerRef.value.scrollLeft = scrollLeft.value - walkX;
  containerRef.value.scrollTop = scrollTop.value - walkY;
};

const stopDragging = () => {
  isDragging.value = false;
};

// 🧊 Cell detail popup state
const showCellDetail = ref(false);
const cellDetailColumn = ref('');
const cellDetailValue = ref('');
const cellFormattedValue = ref('');
const cellDetailRow = ref(0);
const isJsonData = ref(false);

const isJson = (str: string) => {
  if (typeof str !== 'string') return false;
  const trimmed = str.trim();
  if (!trimmed.startsWith('{') && !trimmed.startsWith('[')) return false;
  try {
    const val = JSON.parse(trimmed);
    return typeof val === 'object' && val !== null;
  } catch (e) {
    return false;
  }
};

const handleCellDblClick = (col: string, value: any, rowIndex: number) => {
  if (!props.cellDetail) return;
  cellDetailColumn.value = col;
  const valStr = value === null ? '' : String(value);
  cellDetailValue.value = valStr;
  cellDetailRow.value = rowIndex; // Store raw index
  
  if (isJson(valStr)) {
    try {
      cellFormattedValue.value = JSON.stringify(JSON.parse(valStr), null, 2);
      isJsonData.value = true;
    } catch (e) {
      cellFormattedValue.value = valStr;
      isJsonData.value = false;
    }
  } else {
    cellFormattedValue.value = valStr;
    isJsonData.value = false;
  }
  
  // ⚡ PURE EDITOR INITIALIZATION
  // Always populate editValue for the unified textarea interface
  editValue.value = isJsonData.value ? cellFormattedValue.value : cellDetailValue.value;
  
  showCellDetail.value = true;
};

const isEditing = ref(false);
const editValue = ref('');
const isSaving = ref(false);

const startEditing = () => {
  editValue.value = isJsonData.value ? cellFormattedValue.value : cellDetailValue.value;
  isEditing.value = true;
};

const handleSave = async () => {
  if (!src.value.onCellUpdate) return;
  
  isSaving.value = true;
  try {
    const row = src.value.displayItems.value[cellDetailRow.value];
    await src.value.onCellUpdate({
      column: cellDetailColumn.value,
      value: editValue.value,
      row: row,
      index: cellDetailRow.value
    });
    
    // Update local state if success
    row[cellDetailColumn.value] = editValue.value;
    cellDetailValue.value = editValue.value;
    
    $superApp.$message?.success('Record Updated', 'Database entry synchronized successfully.');
    isEditing.value = false;
    showCellDetail.value = false;
  } catch (err: any) {
    $superApp.$message?.error('Update Failed', err.message || 'An error occurred during synchronization.');
  } finally {
    isSaving.value = false;
  }
};

const closeCellDetail = () => {
  showCellDetail.value = false;
  isEditing.value = false;
};

const copyValue = () => {
  navigator.clipboard.writeText(isJsonData.value ? cellFormattedValue.value : cellDetailValue.value);
  $superApp.$message?.success('Copied', 'Value copied to clipboard');
};

/**
 * Header click: asc → desc → off on that column alone.
 * Shift- (or Ctrl/Cmd-) click keeps the columns already sorted and appends this one,
 * which is how a second and third sort key get added.
 */
const toggleSort = (column: string, event?: MouseEvent) => {
  const additive = !!event && (event.shiftKey || event.ctrlKey || event.metaKey);
  src.value.toggleSort(column, additive);
};

// 🎯 Alignment Strategy
const getAlignClass = (col: string) => {
  if (!col) return 'text-left';
  const c = col.toLowerCase().trim();
  
  // Center-aligned: Meta, status, identifiers
  if (
    c === 'id' || 
    c === '#' || 
    c === 'code' ||
    c === 'sku' ||
    c === 'status' || 
    c === 'role' || 
    c === 'type' ||
    c === 'gender' ||
    c === 'uom' ||
    c === 'tax'
  ) return 'text-center';
  
  // Right-aligned: Financials, quantities, dates
  if (
    c.includes('amount') || 
    c.includes('price') || 
    c.includes('total') || 
    c.includes('qty') ||
    c.includes('quantity') ||
    c.includes('discount') ||
    c.includes('vat')
  ) return 'text-right';
  
  return 'text-left';
};

const formatDisplayValue = (val: any) => {
  if (val === null || val === undefined) return val;
  const str = String(val);
  
  // Detect ISO Date strings: 2021-02-26T04:00:33.000Z or similar
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(str)) {
    // 1. Remove Z or +00:00
    // 2. Remove milliseconds (.000)
    // 3. Replace T with space
    return str
      .replace(/[Zz]$|\+00:00$/, '')
      .replace(/\.\d{3}$/, '')
      .replace('T', ' ');
  }
  
  return val;
};
const emit = defineEmits(['filter-by-value', 'update:selected']);

// ── row selection (showSelect) ──
// Local copy of `selected` so consecutive toggles compose before the parent re-renders; parent stays the source of truth.
const keyOf = (row: any) => (typeof props.rowKey === 'function' ? props.rowKey(row) : props.rowKey ? row?.[props.rowKey] : row);
const localSelected = ref([...props.selected]) as { value: any[] };
watch(() => props.selected, (v: any[]) => { localSelected.value = [...(v || [])]; });
const setSelected = (rows: any[]) => { localSelected.value = rows; emit('update:selected', rows); };
const isSelected = (row: any) => localSelected.value.some((r: any) => keyOf(r) === keyOf(row));
const toggleRow = (row: any) => setSelected(isSelected(row) ? localSelected.value.filter((r: any) => keyOf(r) !== keyOf(row)) : [...localSelected.value, row]);
const pageAllSelected = computed(() => src.value.displayItems.value.length > 0 && src.value.displayItems.value.every(isSelected));
const pageSomeSelected = computed(() => !pageAllSelected.value && src.value.displayItems.value.some(isSelected));
const togglePage = () => {
  const page = src.value.displayItems.value;
  if (pageAllSelected.value) setSelected(localSelected.value.filter((r: any) => !page.some((p: any) => keyOf(p) === keyOf(r))));
  else setSelected([...localSelected.value, ...page.filter((p: any) => !isSelected(p))]);
};

// Floating bulk bar: purely derived from the selection, so it appears the moment a row is ticked.
const selectedCount = computed(() => localSelected.value.length);
const clearSelection = () => setSelected([]);
const bulkBarVisible = computed(() => props.showSelect && props.showBulkBar && selectedCount.value > 0);

const handleFilterByValue = () => {
  emit('filter-by-value', { 
    column: cellDetailColumn.value, 
    value: cellDetailValue.value 
  });
  closeCellDetail();
};

// 🖱️ Context Menu Logic
// @ts-ignore
const headerContextMenuRef = ref<any>(null);
const activeContextColumn = ref('');

const handleHeaderContextMenu = (e: MouseEvent, col: string) => {
  activeContextColumn.value = col;
  headerContextMenuRef.value?.open(e);
};

const copyColumnData = () => {
  if (!activeContextColumn.value) return;
  const values = src.value.displayItems.value.map((item: Record<string, any>) => {
    const val = item[activeContextColumn.value];
    return val === null ? 'NULL' : String(val);
  });
  const text = values.join('\n');
  navigator.clipboard.writeText(text);
  $superApp.$message?.success('Column Copied', `${values.length} row values copied to clipboard.`);
};

const headerMenuOptions = computed(() => [
  {
    label: `Copy Column: ${activeContextColumn.value}`,
    icon: ClipboardList,
    action: copyColumnData,
    shortcut: '⌘C'
  },
  {
    label: 'Add Filter',
    icon: Filter,
    action: () => emit('filter-by-value', { column: activeContextColumn.value, value: '' })
  },
  {
    label: 'Pin Left',
    icon: ArrowLeft,
    action: () => src.value.toggleSticky(activeContextColumn.value, 'left'),
    disabled: isStickyLeft(activeContextColumn.value)
  },
  {
    label: 'Pin Right',
    icon: ArrowRight,
    action: () => src.value.toggleSticky(activeContextColumn.value, 'right'),
    disabled: isStickyRight(activeContextColumn.value)
  },
  {
    label: 'Hide Column',
    icon: EyeOff,
    variant: 'danger',
    action: () => src.value.hiddenColumns.value.push(activeContextColumn.value)
  }
]);
</script>

<template>
  <div class="relative flex-1 min-h-0 flex flex-col bg-transparent overflow-hidden" :class="clean ? 'gap-3' : 'rounded-xl border border-border'" :data-variant="variant">
    <!-- Internal Toolbar (Search & Filter) -->
    <!-- Row 1: Primary Actions (Search, Filters, Refresh) -->
    <div v-if="showSearch || $slots['toolbar-left'] || $slots['toolbar-actions']" class="flex items-center justify-between shrink-0 overflow-x-auto no-scrollbar" :class="clean ? '' : 'px-4 py-3 border-b border-border bg-muted/20'">
      <div class="flex items-center gap-4">
        <slot name="toolbar-left"></slot>
        <component 
          v-if="showSearch"
          :is="$c('ui.search-input')" 
          v-model="src.searchQuery.value" 
          placeholder="Search results in current page..." 
          :show-clear="true"
          class="control-lg max-w-full"
        />
        <slot name="toolbar-extra"></slot>
      </div>

      <div class="flex items-center gap-2">
        <slot name="toolbar-actions"></slot>
        <!-- Column picker lives next to the page size (bottom); here only when there is no bottom bar. -->
        <component
          v-if="clean && allowCustomColumns && paginationPosition === 'top'"
          :is="$c('display.column-settings')"
          :source="src"
        />
      </div>
    </div>

    <!-- Extra space for collapsible filters etc -->
    <slot name="after-toolbar"></slot>
    
    <!-- Row 2: View Controls (Pagination, Columns) - Now below filter as requested -->
    <div v-if="!clean && (allowCustomColumns || src.items.value.length > 0)" class="px-3.5 py-2.5 border-b border-border bg-card flex items-center justify-between shrink-0">
      <div class="flex items-center gap-3">
        <component 
          v-if="allowCustomColumns"
          :is="$c('display.column-settings')" 
          :source="src"
        />
        
        <slot name="nav-left"></slot>

        <!-- Essential Stats (Total Only) -->
        <div class="flex items-center gap-2 pl-4 border-l border-border ml-1">
           <span class="text-xs text-faint  font-bold">Total:</span>
           <span class="text-xs font-mono font-bold text-primary tabular-nums">{{ src.pagination.total.toLocaleString() }}</span>
        </div>
      </div>
      <div class="flex items-center gap-4">
         <slot name="nav-extra"></slot>
         <component
           v-if="src.items.value.length > 0"
           :is="$c('display.simple-pagination')"
           :source="src"
           variant="minimal"
           class="!px-0 !py-0 bg-transparent border-none"
         />
      </div>
    </div>

    <!-- Data Grid Container -->
    <!-- Grid area: sized by its rows (`flex: 0 1 auto`), never stretched to the parent's height —
         a short page ends at its last row and the pagination follows it. It only shrinks (and the
         container scrolls) when the rows are taller than the space the page gives it. -->
    <div class="dt-fit relative flex flex-col">
    <div
      ref="containerRef"
      class="data-grid-container dt-fit overflow-auto relative scrollbar-bold transition-shadow"
      :class="[
 clean && 'table-wrap bg-card',
        isDragging ? 'cursor-grabbing select-none' : 'cursor-grab',
         { 'shadow-inner': isDragging }
      ]"
      :style="{ maxHeight: maxHeight || undefined }"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="stopDragging"
      @mouseleave="stopDragging"
    >
      <table v-if="src.displayItems.value.length > 0" class="w-full table-auto min-w-max" :class="clean ? 'border-collapse' : 'border-separate border-spacing-0'">
        <thead>
          <tr>
            <th v-if="showSelect" class="sticky top-0 left-0 z-40 w-10 min-w-[40px] px-3 py-2 text-center" :class="clean ? 'border-b border-border-soft' : 'bg-muted/95 backdrop-blur-md border-b-2 border-r border-border'">
              <input type="checkbox" class="accent-primary w-4 h-4 cursor-pointer align-middle" :checked="pageAllSelected" :indeterminate="pageSomeSelected" :aria-label="'select page'" data-testid="select-all" @change="togglePage()">
            </th>
            <th v-if="!clean" class="sticky top-0 left-0 z-40 bg-muted/95 backdrop-blur-md border-b-2 border-r-2 border-border w-14 min-w-[56px] px-3 py-2 text-xs font-medium text-faint font-bold text-center">
              #
            </th>
            <th 
              v-for="col in visibleColumns" 
              :key="col" 
              class="sticky top-0 z-10 cursor-pointer transition-colors select-none group"
              :class="[
                isFit(col) && 'dt-fit-col',
 clean ? 'border-b border-border-soft hover:brightness-110' : 'bg-muted/95 backdrop-blur-md px-4 py-2.5 border-b-2 border-r border-border min-w-[150px] hover:bg-muted',
                { 
                  'w-[80px] min-w-[80px]': col.toLowerCase().trim() === 'id', 
                  'min-w-[180px]': col.toLowerCase().includes('date') || col.toLowerCase().includes('time'),
                  'bg-primary/[0.08]': !clean && isSorted(col),
                  'sorted': clean && isSorted(col),
                  'sticky left-[56px] z-30 bg-muted border-r-2 border-border': !clean && isStickyLeft(col),
                  'sticky right-0 z-30 bg-muted border-l-2 border-border': !clean && isStickyRight(col),
                  'sticky left-0 z-30': clean && isStickyLeft(col),
                  'sticky right-0 z-30': clean && isStickyRight(col)
                }
              ]"
              @click="toggleSort(col, $event)"
              @contextmenu.prevent="handleHeaderContextMenu($event, col)"
            >
              <div class="flex items-center justify-between gap-2 w-full">
                <!-- clean: size/weight/colour come from `.table-wrap th` (--text-sm, 600,
                     --table-head-fg). The old hardcoded `text-xs font-medium` overrode the
                     token and left the header greyed out and two sizes too small. -->
                <span 
                  class=" transition-colors truncate flex-1"
                  :class="[getAlignClass(col), clean ? 'text-inherit' : 'text-xs font-bold text-muted-foreground group-hover:text-primary']"
                >
                  {{ col }}
                </span>
                
                <div 
                  class="relative w-4 h-4 flex items-center justify-center shrink-0 transition-all duration-200" 
                  :class="[
 isSorted(col) ? 'opacity-100 scale-110' : (clean ? 'opacity-70 group-hover:opacity-100' : 'opacity-20 group-hover:opacity-40')
                  ]"
                >
                  <ChevronUp v-if="sortRuleOf(col)?.order === 'asc'" :size="12" :class="clean ? 'text-inherit' : 'text-primary'" />
                  <ChevronDown v-else-if="sortRuleOf(col)?.order === 'desc'" :size="12" :class="clean ? 'text-inherit' : 'text-primary'" />
                  <ChevronsUpDown v-else :size="10" />
                  <!-- rank only appears once a second column joins the sort -->
                  <span v-if="sortRankOf(col)" class="sort-rank">{{ sortRankOf(col) }}</span>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="relative">
          <!-- Loading Overlay -->
          <div v-if="src.pagination.loading" class="absolute inset-0 z-20 bg-background/40 backdrop-blur-[1px] flex items-center justify-center pointer-events-none transition-opacity duration-300">
            <div class="flex flex-col items-center gap-3">
              <div class="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            </div>
          </div>

          <tr 
            v-for="(row, i) in src.displayItems.value" 
            :key="i" 
            class="transition-all group/row"
            :class="[clean ? 'bg-card hover:bg-muted' : 'hover:bg-muted/30', !clean && showSelect && isSelected(row) && 'bg-primary/5']"
            :data-state="showSelect && isSelected(row) ? 'selected' : undefined"
          >
            <td v-if="showSelect" class="sticky left-0 z-20 w-10 min-w-[40px] px-3 text-center" :class="clean ? 'border-b border-border-soft bg-inherit' : 'py-2.5 border-r border-b border-border/30 !bg-card'" @click.stop>
              <input type="checkbox" :key="String(keyOf(row))" class="accent-primary w-4 h-4 cursor-pointer align-middle" :checked="isSelected(row)" data-testid="select-row" @change="toggleRow(row)">
            </td>
            <td v-if="!clean" class="sticky left-0 z-20 w-14 min-w-[56px] px-3 py-2.5 border-r-2 border-b border-border/30 text-center font-mono text-xs text-muted-foreground/60 !bg-card group-hover/row:!bg-muted  group-hover/row:text-primary transition-colors">
              {{ (src.pagination.page - 1) * src.pagination.pageSize + i + 1 }}
            </td>
            <td
              v-for="col in visibleColumns"
              :key="col"
              class="max-w-[300px] cursor-pointer transition-colors"
              :class="[
                isFit(col) && 'dt-fit-col',
 clean ? 'border-b border-border-soft' : 'px-4 py-2.5 border-r border-b border-border/60 active:bg-primary/5 hover:bg-muted/40',
                 clean ? {
                   'sticky left-0 z-10 bg-inherit': isStickyLeft(col),
                   'sticky right-0 z-10 bg-inherit': isStickyRight(col)
                 } : {
                   'sticky left-[56px] z-10 !bg-card  group-hover/row:!bg-muted  border-r-2 border-border': isStickyLeft(col),
                   'sticky right-0 z-10 !bg-card  group-hover/row:!bg-muted  border-l-2 border-border': isStickyRight(col)
                }
              ]"
              @dblclick="handleCellDblClick(col, row[col], i)"
              :title="row[col] === null ? 'NULL' : String(row[col])"
            >
              <template v-if="row[col] === null">
                <span class="text-xs font-mono italic text-muted-foreground/30 block w-full truncate" :class="getAlignClass(col)">NULL</span>
              </template>
              <slot v-else :name="`cell-${col}`" :value="row[col]" :row="row" :column="col" :index="i">
                <template v-if="isJson(String(row[col]))">
                  <div class="flex items-center gap-2 w-full overflow-hidden" :class="getAlignClass(col) === 'text-center' ? 'justify-center' : (getAlignClass(col) === 'text-right' ? 'justify-end' : 'justify-start')">
                    <span class="shrink-0 px-1.5 py-0.5 rounded-[4px] bg-primary/10 text-primary text-[8px] font-medium leading-none border border-primary/20">JSON</span>
                    <span class="text-xs font-mono truncate opacity-80" :class="getAlignClass(col)">{{ row[col] }}</span>
                  </div>
                </template>
                <template v-else>
                  <div 
                    class="text-xs font-mono text-foreground/90 truncate" 
                    :class="getAlignClass(col)"
                  >
                    {{ formatDisplayValue(row[col]) }}
                  </div>
                </template>
              </slot>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- First load (no rows yet): a table-shaped skeleton, so the page keeps its shape instead of
           collapsing to nothing — the grid is sized by its rows. Later loads keep the rows and overlay them. -->
      <component
        :is="$c('ui.skeleton')"
        v-if="src.displayItems.value.length === 0 && src.pagination.loading"
        variant="table"
        :rows="Math.min(props.pageSize ?? 20, 10)"
        :cols="Math.max(visibleColumns.length, 1)"
        class="!border-0 !shadow-none !rounded-none"
        data-testid="data-table-skeleton"
      />

      <!-- Empty State -->
      <div v-if="src.displayItems.value.length === 0 && !src.pagination.loading" class="h-64 flex flex-col items-center justify-center opacity-40">
        <div class="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 border border-border/50">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
          </svg>
        </div>
        <p class="text-xs text-muted-foreground font-medium">No Records Found</p>
      </div>
    </div>

    <!-- ⚡ Bulk-action bar — pinned to the bottom of the viewport while rows are selected -->
    <div
      v-if="bulkBarVisible"
      class="bulk-bar"
      role="toolbar"
      :aria-label="bulkBarLabel"
      data-testid="bulk-bar"
    >
      <!-- Row 1 · what is selected -->
      <div class="bulk-bar__row bulk-bar__row--head">
        <div class="bulk-bar__count">
          <span class="bulk-bar__n tabular-nums">{{ selectedCount }}</span>
          <span class="bulk-bar__label">{{ bulkBarLabel }}</span>
        </div>
        <button
          type="button"
          class="bulk-bar__close"
          :title="bulkBarClearLabel"
          :aria-label="bulkBarClearLabel"
          data-testid="bulk-bar-clear"
          @click="clearSelection"
        >
          <X :size="14" />
        </button>
      </div>

      <!-- Row 2 · what you can do with it -->
      <div class="bulk-bar__row bulk-bar__actions">
        <slot name="bulk-actions" :selected="localSelected" :count="selectedCount" :clear="clearSelection"></slot>
      </div>
    </div>
    </div>

    <!-- Bottom Pagination (Optional) -->
    <component
      v-if="paginationPosition === 'bottom' || paginationPosition === 'both'" 
      :is="$c('display.simple-pagination')"
      :source="src" 
      :class="clean ? '!border-0 !bg-transparent !px-0 !py-0' : 'border-t bg-muted/5 font-medium'"
    >
      <!-- How many rows and which columns are the same kind of choice — they sit together. -->
      <template v-if="clean && allowCustomColumns" #end>
        <component :is="$c('display.column-settings')" :source="src" />
      </template>
    </component>

    <!-- 🧊 Cell Detail Modal (Global Version) -->
    <component :is="$c('ui.modal')"
      :show="showCellDetail"
      @close="closeCellDetail"
      maxWidth="max-w-4xl"
    >
      <template #header>
        <div class="flex items-center justify-between w-full pr-8">
          <div class="flex flex-col gap-1">
            <h3 class="text-xs font-semibold text-primary">{{ cellDetailColumn }}</h3>
            <span class="text-xs text-muted-foreground  font-semibold opacity-50">Row #{{ cellDetailRow + 1 }} • {{ isJsonData ? 'Structured Object' : 'Raw Data' }}</span>
          </div>
        </div>
      </template>
      
      <div class="flex flex-col gap-4 max-h-[60vh] py-2">
        <div class="flex-1 flex flex-col">
            <component 
              :is="$c('form.textarea')"
              v-model="editValue"
              :readonly="!src.onCellUpdate"
              :auto-size="{ minRows: 5, maxRows: 18 }"
              class="w-full font-mono text-[13px]"
              placeholder="Enter value..."
            />
           <div v-if="src.onCellUpdate" class="mt-3 flex items-center gap-2 px-1">
              <div class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
              <span class="text-xs text-amber-600 font-semibold italic">
                Direct write mode active • Changes will commit to remote provider
              </span>
           </div>
           <div v-else class="mt-3 flex items-center gap-2 px-1 opacity-50">
              <div class="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
              <span class="text-xs text-faint font-semibold italic">
                Read-only context • Modification disabled for this result set
              </span>
           </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-3 w-full justify-between px-1">
          <div class="flex items-center gap-2">
             <component 
              :is="$c('ui.button')" 
              variant="ghost" 
              size="sm" 
              @click="closeCellDetail" 
              class="text-xs font-semibold px-8 hover:bg-muted"
              :disabled="isSaving"
            >
              {{ src.onCellUpdate ? 'Discard' : 'Close' }}
            </component>
          </div>

          <div class="flex items-center gap-3">
             <component 
               :is="$c('ui.button')" 
               variant="outline" 
               size="sm"
               @click="handleFilterByValue"
             >
               Filter by this value
             </component>

             <component 
               v-if="!src.onCellUpdate"
               :is="$c('ui.button')" 
               variant="outline" 
               size="sm"
               @click="copyValue"
             >
               Copy Value
             </component>

             <component 
               v-if="src.onCellUpdate"
               :is="$c('ui.button')" 
               variant="default" 
               size="sm"
               @click="handleSave"
               :disabled="isSaving"
             >
               <div class="flex items-center gap-2">
                  <Loader2 v-if="isSaving" :size="14" class="animate-spin" />
                  <span>{{ isSaving ? 'COMMITTING...' : 'COMMIT CHANGES' }}</span>
               </div>
             </component>
          </div>
        </div>
      </template>
    </component>

    <!-- 🧀 Header Context Menu -->
    <component 
      :is="$c('ui.context-menu')" 
      ref="headerContextMenuRef"
      :options="headerMenuOptions"
    />
  </div>
</template>

<style scoped>
/* Sized by content, never stretched: grows up to its rows, shrinks (and scrolls) only when the
   page has less room than the rows need. `min-height: 0` lets a flex child shrink below content. */
.dt-fit { flex: 0 1 auto; min-height: 0; }
/* "As narrow as the content": a zero width can only grow to the content's min-content, and no
   wrapping makes that the content's full width — padding kept, no share of the spare width.
   Not `width: 1%`: the table is `min-w-max`, and a percentage makes the browser widen the whole
   table until 1% equals the content (≈100× wider), pushing every other column off screen. */
.dt-fit-col { width: 0; white-space: nowrap; }

/* ── Bulk-action bar ──────────────────────────────────────────────────────
   Pinned to the bottom edge of the viewport (`fixed`), centred, and stacked
   into two rows: the selection summary on top, the actions underneath. */
.bulk-bar {
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 80;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: max-content;
  min-width: 320px;
  max-width: min(calc(100vw - 24px), 900px);
  padding: 10px 14px calc(12px + env(safe-area-inset-bottom, 0px));
  border: 1px solid var(--border-soft, var(--border));
  border-bottom: 0;
  border-radius: var(--radius-lg, 10px) var(--radius-lg, 10px) 0 0;
  background: var(--card);
  box-shadow: var(--shadow-lg, 0 -6px 28px rgba(14, 21, 26, 0.14));
  animation: bulk-bar-in 180ms cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes bulk-bar-in {
  from { opacity: 0; transform: translate(-50%, 100%); }
  to   { opacity: 1; transform: translate(-50%, 0); }
}
@media (prefers-reduced-motion: reduce) {
  .bulk-bar { animation: none; }
}

.bulk-bar__row {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
/* Row 1: summary left, clear button hard right. */
.bulk-bar__row--head {
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border-soft, var(--border));
}
/* Row 2: actions, scrollable sideways on narrow screens. */
.bulk-bar__actions {
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow-x: auto;
  scrollbar-width: none;
}
.bulk-bar__actions::-webkit-scrollbar { display: none; }

.bulk-bar__count {
  display: flex;
  align-items: baseline;
  gap: 6px;
  white-space: nowrap;
}
.bulk-bar__n {
  font-size: 13px;
  font-weight: 700;
  color: var(--primary);
  font-variant-numeric: tabular-nums;
}
.bulk-bar__label {
  font-size: 12px;
  color: var(--muted-foreground);
}
.bulk-bar__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  flex: none;
  border-radius: var(--radius-full, 999px);
  color: var(--muted-foreground);
  transition: background-color 120ms ease, color 120ms ease;
}
.bulk-bar__close:hover {
  background: var(--muted);
  color: var(--foreground);
}

.data-grid-container {
  background-color: transparent;
}
/* clean variant: the hoff table surface fills the whole scroll area, not only the rows */
.data-grid-container.table-wrap {
  background-color: var(--card);
}
/* The sorted column is marked by ink + the chevron, not by a grey block: a filled
   cell on a header that already has a fill reads as a stuck hover, and it stays on
   screen for as long as the sort does. */
.data-grid-container.table-wrap th.sorted { color: var(--primary); }

/* Sort rank: a small superscript on the arrow, not a second control. It is only rendered
   when two or more columns are sorted, so it never adds noise to the common case. */
.sort-rank {
  position: absolute;
  top: -4px;
  right: -6px;
  min-width: 12px;
  padding: 0 2px;
  border-radius: 999px;
  background: var(--primary);
  color: var(--primary-foreground);
  font-size: 9px;
  font-weight: 700;
  line-height: 12px;
  text-align: center;
}

/* Row states are painted on the CELLS, not on the <tr>.
   The pinned columns (select box, actions) are `position: sticky`, which gives them
   their own stacking context — a background set on the row does not reach them, and
   `bg-inherit` on the cell is unreliable once that context exists. The result was a
   hover that stopped short at both ends of the row. Painting every `td` keeps the
   band unbroken and keeps the pinned cells opaque while the table scrolls sideways. */
.data-grid-container.table-wrap tbody td { background-color: var(--card); }
.data-grid-container.table-wrap tbody tr:hover > td { background-color: var(--muted); }
/* Selection is a neutral grey mixed from `--foreground`, not a brand wash: a solid
   `--primary-soft` across twenty selected rows repaints the whole table.
   The four states have to be separable BY EYE, and the steps are not free to pick:
     rest            --card               #FFFFFF
     hover           --muted              #EDF1F3   (gray-100)
     selected        16% foreground       #DADBDD   (~gray-200, below hover)
     selected+hover  24% foreground       #C7CACB   (~gray-300)
   An earlier 8% landed on #ECEDEE — a hair off white and indistinguishable from
   hover, which is what made the selection impossible to see. */
.data-grid-container.table-wrap tbody tr[data-state="selected"] > td {
  background-color: color-mix(in srgb, var(--foreground) 16%, var(--card));
}
.data-grid-container.table-wrap tbody tr[data-state="selected"]:hover > td {
  background-color: color-mix(in srgb, var(--foreground) 24%, var(--card));
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: var(--muted-foreground);
}

table {
  border-spacing: 0;
}

th, td {
  transition: all 0.2s ease;
}

tr:hover td {
  background-color: rgba(var(--primary-rgb), 0.03);
}

.sticky-header {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.sticky-left {
  position: sticky;
  left: 0;
  z-index: 20;
  background-color: hsl(var(--card));
  border-right: 1px solid hsl(var(--border) / 0.5);
  box-shadow: 4px 0 8px -4px rgb(0 0 0 / 0.1);
}

.sticky-right {
  position: sticky;
  right: 0;
  z-index: 20;
  background-color: hsl(var(--card));
  border-left: 1px solid hsl(var(--border) / 0.5);
  box-shadow: -4px 0 8px -4px rgb(0 0 0 / 0.1);
}
</style>
