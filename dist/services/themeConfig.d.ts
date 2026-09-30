import type { IThemeConfig, ThemeConfigState } from '@nhphero/vue-sapp/contracts';
export declare const SWATCHES: {
    name: string;
    hex: string;
}[];
/** Local font stacks (Modern Font Stacks) — no network, the machine uses what it has. */
export declare const FONT_STACKS: Record<string, string>;
export declare const THEME_CONFIG_DEFAULTS: ThemeConfigState;
/** Derive the 11-step brand scale from one colour (lighter steps are desaturated). */
export declare const brandScale: (hex: string) => Record<string, string> | null;
export declare function createThemeConfig(): IThemeConfig;
//# sourceMappingURL=themeConfig.d.ts.map