/**
 * Modal — hoff-kit `.overlay` + `.modal` (preset modal-confirm): Esc / backdrop closes,
 * title + optional description, footer slot for `.actions` (safe button first, dangerous last).
 */
interface Props {
    show?: boolean;
    modelValue?: boolean;
    title?: string;
    description?: string;
    /** Tailwind max-w-* token or any CSS width; overrides `size`. */
    maxWidth?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    zIndex?: number;
}
declare var __VLS_5: {}, __VLS_11: {}, __VLS_13: {};
type __VLS_Slots = {} & {
    header?: (props: typeof __VLS_5) => any;
} & {
    default?: (props: typeof __VLS_11) => any;
} & {
    footer?: (props: typeof __VLS_13) => any;
};
declare const __VLS_component: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    zIndex: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Modal.vue.d.ts.map