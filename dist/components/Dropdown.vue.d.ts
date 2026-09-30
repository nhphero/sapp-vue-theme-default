/**
 * Dropdown — headless trigger/content wrapper with click-outside. The content panel gets the
 * hoff-kit `.pop` surface; put `.pop-head` / `.pop-item` elements inside the content slot.
 */
type __VLS_Props = {
    modelValue?: boolean;
    align?: 'left' | 'right';
    /** Set false when the slot renders its own surface. */
    surface?: boolean;
    /** Small arrow on the panel pointing at the trigger (default true). */
    caret?: boolean;
    /** Show a search box at the top of the panel; the content slot receives `query`. */
    search?: boolean;
    searchPlaceholder?: string;
};
declare var __VLS_1: {}, __VLS_11: {
    query: string;
};
type __VLS_Slots = {} & {
    trigger?: (props: typeof __VLS_1) => any;
} & {
    content?: (props: typeof __VLS_11) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    search: boolean;
    surface: boolean;
    caret: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Dropdown.vue.d.ts.map