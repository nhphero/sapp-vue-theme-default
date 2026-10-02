/**
 * 📄 `display.file` — shows a file, through whatever package can:
 *
 *   <component :is="$c('display.file')" :file="{ name: 'Báo cáo.docx', url }" mode="edit" />
 *
 * Asks `$hook.resolve('file.viewer', file)` first: a plugin (OnlyOffice, a PDF viewer…) that registered a
 * provider whose `match(file)` takes it renders it, with props `{ file, mode }`. Nobody takes it: an
 * image shows as `display.image`, a PDF in a frame, anything else as a card to open or download.
 */
interface ViewFile {
    name: string;
    url: string;
    type?: string;
    size?: number;
}
type __VLS_Props = {
    file: ViewFile;
    mode?: 'view' | 'edit';
    height?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    mode: "view" | "edit";
    height: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=FileView.vue.d.ts.map