/**
 * `display.markdown` — renders a Markdown document (GitHub flavoured: tables, task lists, fenced code)
 * as sanitised HTML. Give it the text (`source`) or where it lives (`url` — fetched, no cache).
 * The document is anyone's (a package's README.md): DOMPurify strips scripts, event handlers and
 * `javascript:` links; links open in a new tab. Relative links and images resolve against `baseUrl`,
 * else the folder of `url` (`docs/x.png` next to the README).
 *
 *   <component :is="$c('display.markdown')" url="https://host/pkg/1.0/README.md" />
 *   <component :is="$c('display.markdown')" :source="text" base-url="https://host/pkg/1.0/" />
 *
 * Slots: `empty` — nothing to show (no text, the URL answered 404 or could not be reached; gets
 * `{ url, status }`); `loading`. Emits `loaded` (the text) and `error` ({ url, status }).
 */
type __VLS_Props = {
    /** The Markdown text. Wins over `url`. */
    source?: string;
    /** Where the Markdown file is; fetched whenever it changes. */
    url?: string;
    /** Base for relative links and images; default: the folder of `url`. */
    baseUrl?: string;
};
declare var __VLS_1: {}, __VLS_3: {
    url: string | undefined;
    status: number | null;
};
type __VLS_Slots = {} & {
    loading?: (props: typeof __VLS_1) => any;
} & {
    empty?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    error: (detail: {
        url: string;
        status: number;
    }) => any;
    loaded: (text: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onError?: ((detail: {
        url: string;
        status: number;
    }) => any) | undefined;
    onLoaded?: ((text: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Markdown.vue.d.ts.map