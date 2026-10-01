import type { Component } from 'vue';
/**
 * Icons an app (registry `icon`) can carry — by Lucide name, as stored ("Database", "BookOpen").
 * A curated set, not the whole of Lucide: every app list (Header, Home, Admin) resolves through it,
 * and `form.icon-picker` offers exactly these. Add one here to make it pickable everywhere.
 */
export declare const APP_ICONS: Readonly<Record<string, Component>>;
export declare const APP_ICON_NAMES: readonly string[];
/** The component of an icon name; unknown or empty → LayoutGrid. */
export declare const appIcon: (name?: string | null) => Component;
//# sourceMappingURL=appIcons.d.ts.map