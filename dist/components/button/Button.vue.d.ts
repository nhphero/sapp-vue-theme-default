import { type PrimitiveProps } from 'radix-vue';
/**
 * Button — hoff-kit `.btn` (rules.md §9): one `primary` per screen, destructive actions are
 * `danger` (outlined red, never primary), secondary actions are the default outlined button.
 * Legacy variant names are still accepted and mapped.
 */
type Variant = 'default' | 'primary' | 'danger' | 'ghost' | 'link' | 'outline' | 'secondary' | 'destructive' | 'premium' | 'warning' | 'minimal';
type Size = 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';
interface Props extends /* @vue-ignore */ PrimitiveProps {
    variant?: Variant;
    size?: Size;
    as?: string;
    asChild?: boolean;
    class?: string;
    loading?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}
declare var __VLS_10: {}, __VLS_12: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_10) => any;
} & {
    default?: (props: typeof __VLS_12) => any;
};
declare const __VLS_component: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {
    type: "button" | "submit" | "reset";
    size: Size;
    disabled: boolean;
    variant: Variant;
    as: string;
    asChild: boolean;
    loading: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Button.vue.d.ts.map