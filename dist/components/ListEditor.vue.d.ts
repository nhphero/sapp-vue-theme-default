type __VLS_Props = {
    modelValue: any[];
    itemKey?: string | ((item: any) => string | number);
    hideReorder?: boolean;
    hideRemove?: boolean;
    emptyText?: string;
};
declare var __VLS_1: {
    item: any;
    index: number;
    moveUp: (index: number) => void;
    moveDown: (index: number) => void;
    isFirst: boolean;
    isLast: boolean;
}, __VLS_11: {
    item: any;
    index: number;
    remove: (index: number) => void;
    moveUp: (index: number) => void;
    moveDown: (index: number) => void;
}, __VLS_13: {
    item: any;
    index: number;
    remove: (index: number) => void;
}, __VLS_19: {}, __VLS_21: {
    add: () => void;
};
type __VLS_Slots = {} & {
    reorder?: (props: typeof __VLS_1) => any;
} & {
    item?: (props: typeof __VLS_11) => any;
} & {
    remove?: (props: typeof __VLS_13) => any;
} & {
    empty?: (props: typeof __VLS_19) => any;
} & {
    footer?: (props: typeof __VLS_21) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    add: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    remove: (...args: any[]) => void;
    reorder: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onAdd?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onRemove?: ((...args: any[]) => any) | undefined;
    onReorder?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: any[];
    itemKey: string | ((item: any) => string | number);
    hideReorder: boolean;
    hideRemove: boolean;
    emptyText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ListEditor.vue.d.ts.map