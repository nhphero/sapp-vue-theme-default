/**
 * One labelled form row: label · control · error or hint.
 *
 * It lives here because the CSS it renders against is the theme's — `.field`, `.field label`,
 * `.field .hint`, `.field .error`, `.field.invalid` are all in `hoff/core.css`. A component
 * that hand-writes that markup inside an app is half of a contract whose other half is here,
 * and the two drift: the app writes `class="help"`, the theme styles `.hint`, and the help
 * text silently loses its styling.
 *
 * The control itself stays in the caller's slot, so this never guesses what kind of input it
 * wraps — an `<input>`, a `form.select`, a row of buttons.
 */
type __VLS_Props = {
    label: string;
    /** Validation message; its presence is what marks the field invalid. */
    error?: string;
    /** Shown only while there is no error — an error replaces it rather than stacking. */
    hint?: string;
    /** Span both columns of a two-column form grid. */
    wide?: boolean;
};
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    error: string;
    hint: string;
    wide: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=FormField.vue.d.ts.map