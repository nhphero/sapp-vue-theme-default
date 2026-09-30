import { type SelectRootProps } from 'radix-vue';
/**
 * form.select — two ways to use it:
 *
 *  1. Standalone (pass `options`): renders its own trigger + hoff `.pop` panel. `show-search` adds a
 *     filter box at the top of the panel. Keyboard: ↑/↓ move, Enter picks, Esc closes.
 *       <Select v-model="status" :options="[{ label: 'Active', value: 'active' }, 'draft']" show-search />
 *
 *  2. Composition (no `options`): behaves as the radix `SelectRoot`; combine with
 *     `form.select-trigger` / `form.select-value` / `form.select-content` / `form.select-item`.
 */
type Option = string | {
    label: string;
    value: string;
    disabled?: boolean;
};
type __VLS_Props = SelectRootProps & {
    options?: Option[];
    placeholder?: string;
    showSearch?: boolean;
    searchPlaceholder?: string;
    size?: 'sm' | 'default' | 'lg';
    invalid?: boolean;
    class?: any;
};
declare var __VLS_5: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    change: (value: string) => any;
    "update:open": (open: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    "onUpdate:open"?: ((open: boolean) => any) | undefined;
}>, {
    showSearch: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Select.vue.d.ts.map