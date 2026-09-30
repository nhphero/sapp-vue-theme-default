/**
 * ui.skeleton — loading placeholder on the hoff `.skeleton` shimmer.
 *   <Skeleton />                          one text line
 *   <Skeleton :lines="3" />               paragraph (last line shorter)
 *   <Skeleton variant="circle" :size="40" />
 *   <Skeleton variant="rect" height="160px" />
 *   <Skeleton variant="table" :rows="6" :cols="5" />   table-shaped block (use inside .table-wrap or alone)
 *   <Skeleton variant="card" />           title + 3 lines + button row
 * Honors prefers-reduced-motion (shimmer off). `aria-busy` is set so screen readers skip it.
 */
type __VLS_Props = {
    variant?: 'text' | 'circle' | 'rect' | 'table' | 'card';
    /** text: number of lines */
    lines?: number;
    /** circle: diameter in px */
    size?: number;
    width?: string;
    height?: string;
    /** table: rows × cols */
    rows?: number;
    cols?: number;
    class?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    size: number;
    variant: "text" | "circle" | "rect" | "table" | "card";
    rows: number;
    lines: number;
    cols: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=Skeleton.vue.d.ts.map