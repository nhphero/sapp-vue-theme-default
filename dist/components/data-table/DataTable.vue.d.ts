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
}) => Promise<{
    data: any[];
    total: number;
}>;
interface DataTableSource {
    items: {
        value: any[];
    };
    displayItems: {
        value: any[];
    };
    columns: {
        value: string[];
    };
    searchQuery: {
        value: string;
    };
    stickyLeft: {
        value: string[];
    };
    stickyRight: {
        value: string[];
    };
    hiddenColumns: {
        value: string[];
    };
    onCellUpdate?: (params: {
        column: string;
        value: any;
        row: any;
        index: number;
    }) => Promise<void>;
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
type __VLS_Props = {
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
};
/** Re-fetch the current page. */
declare function refresh(): Promise<void>;
/** Re-fetch from page 1 — use after a filter changes. */
declare function reload(): Promise<void>;
declare var __VLS_1: {}, __VLS_7: {}, __VLS_9: {}, __VLS_15: {}, __VLS_21: {}, __VLS_23: {}, __VLS_42: `cell-${any}`, __VLS_43: {
    value: any;
    row: any;
    column: any;
    index: number;
}, __VLS_53: {
    selected: {
        value: any[];
    };
    count: any;
    clear: () => void;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_42>]?: (props: typeof __VLS_43) => any;
} & {
    'toolbar-left'?: (props: typeof __VLS_1) => any;
} & {
    'toolbar-extra'?: (props: typeof __VLS_7) => any;
} & {
    'toolbar-actions'?: (props: typeof __VLS_9) => any;
} & {
    'after-toolbar'?: (props: typeof __VLS_15) => any;
} & {
    'nav-left'?: (props: typeof __VLS_21) => any;
} & {
    'nav-extra'?: (props: typeof __VLS_23) => any;
} & {
    'bulk-actions'?: (props: typeof __VLS_53) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {
    source: any;
    refresh: typeof refresh;
    reload: typeof reload;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "filter-by-value": (...args: any[]) => void;
    "update:selected": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onFilter-by-value"?: ((...args: any[]) => any) | undefined;
    "onUpdate:selected"?: ((...args: any[]) => any) | undefined;
}>, {
    variant: "grid" | "clean";
    selected: any[];
    paginationPosition: "top" | "bottom" | "both";
    allowCustomColumns: boolean;
    showSearch: boolean;
    showSelect: boolean;
    showBulkBar: boolean;
    bulkBarLabel: string;
    bulkBarClearLabel: string;
    cellDetail: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=DataTable.vue.d.ts.map