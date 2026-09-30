/** Context menu — hoff `.pop` + `.pop-item`. Call `open(event)` from a @contextmenu handler. */
type __VLS_Props = {
    options: {
        label: string;
        icon?: any;
        action: () => void;
        variant?: 'default' | 'danger' | 'primary';
        disabled?: boolean;
        shortcut?: string;
    }[];
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {
    open: (e: MouseEvent) => void;
    close: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=ContextMenu.vue.d.ts.map