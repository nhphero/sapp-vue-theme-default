import type { IThemeConfig, ThemeConfigState } from '@nhphero/vue-sapp/contracts';
export declare const SWATCHES: {
    name: string;
    hex: string;
}[];
/**
 * Web fonts, fetched from Google Fonts only when one is actually picked.
 * Every entry below ships the `vietnamese` subset, which is the point: the local
 * stacks fall back per-glyph, so accented characters get borrowed from another
 * typeface and the word ends up drawn in two fonts at once. That mismatch is what
 * reads as "ugly" in Vietnamese UI text.
 */
export declare const WEB_FONTS: Record<string, string>;
/** Page surface presets. A free colour would break the card/page contrast contract,
 *  so the choice is a short list, each with its own value for light and dark. */
export declare const SURFACES: ReadonlyArray<{
    id: string;
    label: string;
    light: string;
    dark: string;
}>;
/** Local font stacks (Modern Font Stacks) — no network, the machine uses what it has. */
export declare const FONT_STACKS: Record<string, string>;
export declare const THEME_CONFIG_DEFAULTS: ThemeConfigState;
/** Derive the 11-step brand scale from one colour (lighter steps are desaturated). */
export declare const brandScale: (hex: string) => Record<string, string> | null;
export declare function createThemeConfig(): IThemeConfig;
//# sourceMappingURL=themeConfig.d.ts.map