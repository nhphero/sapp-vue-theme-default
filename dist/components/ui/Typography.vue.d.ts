/** Typography — token-based text styles (hoff scale: 12 / 13.5 / 15 / 18 / 21.5 / 26 / 31). */
interface Props {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'label' | 'mono' | 'code';
    color?: 'default' | 'muted' | 'faint' | 'primary' | 'success' | 'warning' | 'error' | 'danger' | 'white';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'black';
    as?: string;
    truncate?: boolean;
}
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {
    color: "default" | "muted" | "faint" | "primary" | "success" | "warning" | "error" | "danger" | "white";
    variant: "h1" | "h2" | "h3" | "h4" | "body" | "small" | "label" | "mono" | "code";
    as: string;
    truncate: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Typography.vue.d.ts.map