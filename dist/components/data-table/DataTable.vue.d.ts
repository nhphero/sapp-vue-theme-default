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
        sortField: string | null;
        sortOrder: 'asc' | 'desc' | null;
    };
    refresh: () => Promise<void>;
    toggleColumn: (column: string) => void;
    toggleSticky: (column: string, side: 'left' | 'right' | 'none') => void;
    setPage: (page: number) => Promise<void>;
    setPageSize: (size: number) => Promise<void>;
    setSort: (field: string, order: 'asc' | 'desc' | null) => Promise<void>;
}
type __VLS_Props = {
    source: DataTableSource;
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
};
declare var __VLS_1: {}, __VLS_7: {}, __VLS_9: {}, __VLS_15: {}, __VLS_21: {}, __VLS_23: {}, __VLS_42: `cell-${any}`, __VLS_43: {
    value: any;
    row: any;
    column: any;
    index: number;
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
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=DataTable.vue.d.ts.map