/**
 * 👑 Header — the brand row (app switcher, logo, language, user) and the open app's menu.
 *
 * `layout`:
 * - `band` (default): the menu is a band of tabs under the header.
 * - `sidebar`: the logo goes left; the app switcher and the menu are teleported into the Shell's
 *   `#shell-sidebar` element (the Shell theme's layout renders it, left of the page), the menu as a
 *   vertical list (groups as headings); collapsible to icons (localStorage `sapp:sidebar-collapsed`).
 *   The `shell.band` controls move to the header's right side.
 */
type __VLS_Props = {
    layout?: 'band' | 'sidebar';
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    layout: "band" | "sidebar";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=Header.vue.d.ts.map