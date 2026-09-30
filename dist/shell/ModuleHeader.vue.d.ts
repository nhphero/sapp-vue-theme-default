/**
 * 🗺️ ModuleHeader (ESA v5 - Shell Reconstruction)
 * Horizontal tab-based navigation for internal module paths.
 * Updates the router path for deep-linking persistence.
 */
type __VLS_Props = {
    items: Array<{
        id: string;
        label: string;
        icon?: any;
    }>;
    modelValue: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    openCommandPalette: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onOpenCommandPalette?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=ModuleHeader.vue.d.ts.map