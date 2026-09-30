import { type App } from 'vue';
import type { ISuperApp, ITheme, ThemeServices } from '@nhphero/vue-sapp/contracts';
/**
 * 🎨 DefaultTheme (Enterprise Environment)
 * Implementation of the default enterprise design system and services.
 */
export declare class DefaultTheme implements ITheme {
    id: string;
    name: string;
    register(app: App, superApp: ISuperApp, context?: {
        uiStore?: any;
    }): ThemeServices;
}
export declare const defaultTheme: DefaultTheme;
export { THEME, type ThemeType } from './tokens';
export { useUiStore } from './store/ui';
export { createMessageService, createDialogService } from './services/ui';
export { createThemeConfig, brandScale, SWATCHES, FONT_STACKS, THEME_CONFIG_DEFAULTS } from './services/themeConfig';
export { cn } from './utils';
//# sourceMappingURL=index.d.ts.map