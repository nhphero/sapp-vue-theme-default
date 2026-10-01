/**
 * form.icon-picker — pick an app icon (`APP_ICONS`) by name. The trigger looks like an input (icon +
 * name); the panel has a search box and a grid. `v-model` is the Lucide name ("Database").
 *
 * The panel is teleported to <body> with fixed positioning (like form.select): inside a modal or a
 * scrolling card it is never clipped. It carries `data-portal` so a mini app's utilities reach it.
 */
type __VLS_Props = {
    modelValue?: string | null;
    placeholder?: string;
    disabled?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    placeholder: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=IconPicker.vue.d.ts.map