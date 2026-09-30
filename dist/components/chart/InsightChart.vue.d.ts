/**
 * 📊 InsightChart (`display.chart`) — Chart.js wrapper that only speaks in theme tokens, so charts follow
 * brand colour, dark mode and font changes. Kinds: bar · stacked · line · area · donut · pie · scatter.
 *
 * Data: either `series` (one dataset of {label, value}) or `labels` + `datasets` (several).
 * `target` draws a dashed reference line on bar/line charts.
 */
export interface ChartSeriesPoint {
    label: string;
    value: number;
}
export interface ChartDataset {
    name: string;
    data: number[];
    kind?: 'bar' | 'line';
    color?: string;
    dashed?: boolean;
}
type __VLS_Props = {
    kind?: 'bar' | 'stacked' | 'line' | 'area' | 'donut' | 'pie' | 'scatter';
    series?: ChartSeriesPoint[];
    labels?: string[];
    datasets?: ChartDataset[];
    target?: number;
    /** Height in px (the card keeps a stable size). */
    height?: number;
    legend?: boolean;
    /** Axis/tooltip number formatter. */
    format?: (v: number) => string;
    /** Colour cycle as CSS var names or colours. */
    palette?: string[];
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    legend: boolean;
    height: number;
    kind: "bar" | "stacked" | "line" | "area" | "donut" | "pie" | "scatter";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=InsightChart.vue.d.ts.map