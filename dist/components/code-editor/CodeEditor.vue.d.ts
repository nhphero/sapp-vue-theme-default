type __VLS_Props = {
    modelValue: string;
    language?: 'json' | 'html' | 'javascript' | 'sql' | string;
    readonly?: boolean;
    placeholder?: string;
    context?: any;
    completions?: {
        objects?: Record<string, any>;
        keywords?: string[];
        rules?: Array<{
            pattern: RegExp;
            options: any[] | ((match: any, ctx: any) => any);
        }>;
    };
    onAutocomplete?: (ctx: any) => any;
    onChange?: (value: string) => void;
    showCopy?: boolean;
    wrap?: boolean;
    hideBuilder?: boolean;
    autofocus?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {
    focus: () => any;
    insertCode: (code: string, position?: {
        from: number;
        to: number;
    }) => void;
    getSelection: () => any;
    getValue: () => any;
    duplicateLine: () => any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    execute: (...args: any[]) => void;
    "open-builder": (...args: any[]) => void;
    shortcut: (...args: any[]) => void;
    ready: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onExecute?: ((...args: any[]) => any) | undefined;
    "onOpen-builder"?: ((...args: any[]) => any) | undefined;
    onShortcut?: ((...args: any[]) => any) | undefined;
    onReady?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=CodeEditor.vue.d.ts.map