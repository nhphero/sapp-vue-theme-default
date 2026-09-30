type __VLS_Props = {
    headers: Array<{
        key: string;
        label: string;
        width?: string;
        align?: string;
    }>;
    rows: Array<any>;
};
declare var __VLS_34: `cell(${string})`, __VLS_35: {
    row: any;
}, __VLS_41: {
    row: any;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_34>]?: (props: typeof __VLS_35) => any;
} & {
    actions?: (props: typeof __VLS_41) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ErpDataGrid.vue.d.ts.map