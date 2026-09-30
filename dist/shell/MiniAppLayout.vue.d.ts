/**
 * layout.mini-app — standard frame for a mini app.
 *
 *  variant="sidebar" (default)              variant="tabs"
 *  ┌──────────┬──────────────────────┐      ┌──────────────────────────────┐
 *  │ app icon │ Page title   actions │      │ App title            actions │
 *  │ app name │                      │      │ tab · tab · tab              │
 *  │ nav item │ content              │      │ content                      │
 *  │ nav item │                      │      │                              │
 *  └──────────┴──────────────────────┘      └──────────────────────────────┘
 *
 * Mini apps only pass data (title, nav items, active path) and listen to `navigate`;
 * every visual decision stays in the theme so all apps look alike.
 */
export interface MiniNavItem {
    label: string;
    path: string;
    icon?: any;
    badge?: string | number;
}
type __VLS_Props = {
    /** App name (sidebar head, or page title in the tabs variant). */
    title?: string;
    subtitle?: string;
    /** Lucide component, or an icon name resolved through the `ui.icon.<name>` registry. */
    icon?: any;
    nav?: MiniNavItem[];
    /** Sub-path of the active nav item (compare with `router.pathOf(route)`). */
    active?: string;
    /** Title of the current page (sidebar variant). Defaults to the active nav label. */
    pageTitle?: string;
    pageSubtitle?: string;
    /** `shell` (default): menu is shown in the Shell header under the app switcher; `sidebar` / `tabs` render it inside the app. */
    variant?: 'shell' | 'sidebar' | 'tabs';
    /** Content sits in `.page-container` (aligned with the Shell header); set false for full-bleed. */
    contained?: boolean;
};
declare var __VLS_9: {}, __VLS_11: {}, __VLS_17: {};
type __VLS_Slots = {} & {
    footer?: (props: typeof __VLS_9) => any;
} & {
    actions?: (props: typeof __VLS_11) => any;
} & {
    default?: (props: typeof __VLS_17) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    navigate: (path: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onNavigate?: ((path: string) => any) | undefined;
}>, {
    nav: MiniNavItem[];
    variant: "shell" | "sidebar" | "tabs";
    contained: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=MiniAppLayout.vue.d.ts.map