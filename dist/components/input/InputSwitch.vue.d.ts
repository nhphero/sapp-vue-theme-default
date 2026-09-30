declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    trueValue: {
        type: (NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    falseValue: {
        type: (NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    trueLabel: {
        type: StringConstructor;
        default: string;
    };
    falseLabel: {
        type: StringConstructor;
        default: string;
    };
    showStatus: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    change: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    trueValue: {
        type: (NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    falseValue: {
        type: (NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    trueLabel: {
        type: StringConstructor;
        default: string;
    };
    falseLabel: {
        type: StringConstructor;
        default: string;
    };
    showStatus: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    label: string;
    disabled: boolean;
    modelValue: string | number | boolean;
    loading: boolean;
    trueValue: string | number | boolean;
    falseValue: string | number | boolean;
    trueLabel: string;
    falseLabel: string;
    showStatus: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=InputSwitch.vue.d.ts.map