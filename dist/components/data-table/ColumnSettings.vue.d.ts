type __VLS_Props = {
    source: any;
    variant?: string;
    buttonClass?: string;
    /** Borders between the columns (DataTable `bordered`); shown as a switch when the table passes it. */
    bordered?: boolean;
    /** Some column has a width of its own (resized) — offers "Reset column widths". */
    hasWidths?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:bordered": (value: boolean) => any;
    "reset-widths": () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:bordered"?: ((value: boolean) => any) | undefined;
    "onReset-widths"?: (() => any) | undefined;
}>, {
    variant: string;
    bordered: boolean;
    buttonClass: string;
    hasWidths: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=ColumnSettings.vue.d.ts.map