/**
 * 🖼️ `display.image` — an image that opens large on click.
 *
 *   <component :is="$c('display.image')" :src="url" alt="Logo" class="h-8" />
 *
 * The thumbnail takes the classes / size you give it (the image fits inside, `fit`). Click (or Enter)
 * opens the viewer: the image as large as the screen allows, on a checkerboard so transparent parts show,
 * zoom in / out, a link to the original; Esc, the close button or a click outside closes it.
 * `preview: false` keeps it a plain image. A broken or empty `src` shows a placeholder, never opens.
 */
type __VLS_Props = {
    src?: string | null;
    alt?: string;
    /** How the image fits its box: `contain` (default, all of it) or `cover` (fills, cropped). */
    fit?: 'contain' | 'cover';
    /** Click opens the viewer (default true). */
    preview?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    preview: boolean;
    src: string | null;
    alt: string;
    fit: "contain" | "cover";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=ImageView.vue.d.ts.map