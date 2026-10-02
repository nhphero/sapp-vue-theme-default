<script setup lang="ts">
import { inject, computed } from 'vue';
import { 
  Settings2,
  Search,
  ArrowLeft,
  ArrowRight
} from 'lucide-vue-next';

const props = withDefaults(defineProps<{
  source: any;
  variant?: string;
  buttonClass?: string;
  /** Borders between the columns (DataTable `bordered`); shown as a switch when the table passes it. */
  bordered?: boolean;
  /** Some column has a width of its own (resized) — offers "Reset column widths". */
  hasWidths?: boolean;
}>(), {
  variant: 'outline',
  buttonClass: '',
  bordered: undefined,
  hasWidths: false,
});
const emit = defineEmits<{ (e: 'update:bordered', value: boolean): void; (e: 'reset-widths'): void }>();

const $superApp = inject<any>('$superApp');
const columnSearch = $superApp.$vue.ref('');

const filteredColumns = computed(() => {
  const all = props.source.columns.value || [];
  if (!columnSearch.value) return all;
  const q = columnSearch.value.toLowerCase();
  return all.filter((c: string) => c.toLowerCase().includes(q));
});
</script>

<template>
  <div v-if="source.columns.value.length" class="flex items-center">
    <component :is="$c('ui.popover')">
      <component :is="$c('ui.popover-trigger')">
        <component :is="$c('ui.button')" :variant="variant" size="sm" :class="[buttonClass, 'group']">
          <Settings2 :size="13" class="opacity-60 group-hover:text-primary transition-colors" />
          <span>Columns</span>
        </component>
      </component>
      
      <component :is="$c('ui.popover-content')" align="end" class="w-80 p-0 bg-card border-border shadow-2xl rounded-2xl overflow-hidden flex flex-col">
         <div class="px-3 py-3 border-b border-border bg-muted/20 flex flex-col gap-2.5">
            <div class="flex items-center justify-between px-1">
               <span class="text-xs font-semibold text-muted-foreground">Columns Settings</span>
               <div class="flex items-center gap-1.5">
                  <button @click="source.hiddenColumns.value = []" 
                          class="text-xs font-bold text-primary hover:underline">Show All</button>
                  <span class="text-xs text-muted-foreground/30">/</span>
                  <button @click="source.hiddenColumns.value = [...source.columns.value]" 
                          class="text-xs font-bold text-muted-foreground hover:text-danger transition-colors">Hide All</button>
               </div>
            </div>
            <div class="relative group">
               <component :is="$c('ui.search-input')" 
                          v-model="columnSearch" 
                          placeholder="Search column names..." 
                          :show-clear="true"
                          class="bg-background border-border/40 group-hover:border-primary/30 transition-shadow shadow-sm"
               />
            </div>
         </div>
         
         <div class="max-h-[450px] overflow-y-auto custom-scrollbar p-2 pb-4 flex flex-col gap-0.5">
            <div v-for="col in filteredColumns" :key="col" 
                 class="flex items-center justify-between px-2.5 py-1.5 rounded-xl hover:bg-muted/50 transition-all group/col-item"
            >
               <div class="flex items-center gap-3 min-w-0 cursor-pointer flex-1" @click="source.toggleColumn(col)">
                  <div class="w-7 h-4 rounded-full p-0.5 transition-all border border-border shrink-0" 
                       :class="source.hiddenColumns.value.includes(col) ? 'bg-sunken' : 'bg-primary shadow-[0_2px_8px_rgba(var(--primary-rgb),0.3)]'">
                     <div class="w-2.5 h-2.5 rounded-full bg-card shadow-sm transition-transform"
                          :class="source.hiddenColumns.value.includes(col) ? 'translate-x-0' : 'translate-x-3'"></div>
                  </div>
                  <span class="text-xs font-medium truncate transition-colors" :class="source.hiddenColumns.value.includes(col) ? 'opacity-40 line-through text-faint' : 'text-muted-foreground '">{{ col }}</span>
               </div>

               <div class="flex items-center gap-1 transition-opacity">
                  <component :is="$c('ui.button')" 
                    variant="ghost" size="icon"
                    :class="{ 'text-primary bg-primary/10 opacity-100': source.stickyLeft.value.includes(col) }"
                    title="Pin to Left"
                    @click.stop="source.toggleSticky(col, source.stickyLeft.value.includes(col) ? 'none' : 'left')"
                  >
                     <ArrowLeft :size="12" />
                  </component>
                  <component :is="$c('ui.button')" 
                    variant="ghost" size="icon"
                    :class="{ 'text-primary bg-primary/10 opacity-100': source.stickyRight.value.includes(col) }"
                    title="Pin to Right"
                    @click.stop="source.toggleSticky(col, source.stickyRight.value.includes(col) ? 'none' : 'right')"
                  >
                     <ArrowRight :size="12" />
                  </component>
               </div>
            </div>
            
            <div v-if="filteredColumns.length === 0" class="py-10 text-center opacity-30">
               <Search :size="20" class="mx-auto mb-2" />
               <p class="text-xs font-medium">No columns found</p>
            </div>
         </div>
         <!-- Table look: borders between the columns, column widths -->
         <div v-if="bordered !== undefined || hasWidths" class="cs-footer">
            <label v-if="bordered !== undefined" class="cs-row">
               <span>Show borders</span>
               <component :is="$c('form.switch')" :model-value="bordered" data-testid="table-borders" @update:model-value="emit('update:bordered', !!$event)" />
            </label>
            <button v-if="hasWidths" type="button" class="cs-reset" data-testid="table-reset-widths" @click="emit('reset-widths')">Reset column widths</button>
         </div>
      </component>
    </component>
  </div>
</template>

<style scoped>
.cs-footer { display: flex; flex-direction: column; gap: var(--sp-2); padding: var(--sp-3); border-top: 1px solid var(--border-soft); }
.cs-row { display: flex; align-items: center; justify-content: space-between; gap: var(--sp-3); font-size: var(--text-sm); color: var(--foreground); cursor: pointer; }
.cs-reset { align-self: flex-start; border: 0; background: transparent; padding: 0; font-size: var(--text-xs); font-weight: 600; color: var(--primary); cursor: pointer; }
.cs-reset:hover { text-decoration: underline; }
</style>
