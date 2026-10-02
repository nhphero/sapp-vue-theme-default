/**
 * 👑 Header — the brand row (app switcher, logo, language, user) and the open app's menu.
 *
 * `layout`:
 * - `band` (default): the menu is a band of tabs under the header.
 * - `sidebar`: the logo goes left; the Shell's `#shell-sidebar` element (rendered by the Shell theme's
 *   layout, left of the page) gets two columns, teleported in: a rail of every app (icon + name, the
 *   switcher's order) and the open app's menu as a vertical list (groups as headings). Collapsing hides
 *   the menu column (localStorage `sapp:sidebar-collapsed`).
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