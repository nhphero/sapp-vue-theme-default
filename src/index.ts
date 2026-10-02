import { defineAsyncComponent, watch, type App } from 'vue';
import type { ISuperApp, ITheme, ThemeServices } from '@nhphero/vue-sapp/contracts';
import { createAppState } from '@nhphero/vue-sapp';
import { createMessageService, createDialogService } from './services/ui';
import { createThemeConfig } from './services/themeConfig';
import { useUiStore } from './store/ui';
import { 
  ShieldCheck, User, Lock, ArrowRight, Search, 
  Settings, Bell, LogOut, ChevronDown, ChevronRight,
  Check, AlertTriangle, Info, X
} from 'lucide-vue-next';
import MessageProvider from './shell/MessageProvider.vue';

/**
 * 🎨 DefaultTheme (Enterprise Environment)
 * Implementation of the default enterprise design system and services.
 */
export class DefaultTheme implements ITheme {
  id = 'default';
  name = 'Standard Enterprise Slate';

  register(app: App, superApp: ISuperApp, context: { uiStore?: any } = {}): ThemeServices {
    // The theme owns its UI store (Pinia must already be installed on `app`).
    const uiStore = context.uiStore ?? useUiStore();

    const messageService = createMessageService(uiStore);
    const dialogService = createDialogService(uiStore);
    const appState = createAppState();
    const themeConfig = createThemeConfig();

    app.config.globalProperties.$message = messageService;
    app.config.globalProperties.$appState = appState;
    app.config.globalProperties.$superApp = superApp;
    
    // Also attach to superApp for module-level access
    superApp.$appState = appState;
    superApp.$themeConfig = themeConfig;
    app.config.globalProperties.$themeConfig = themeConfig;
    app.provide('$themeConfig', themeConfig);

    // The platform's look (Admin → Theme, `platformConfig.look`) is the base of everyone's theme panel;
    // re-applied whenever the platform config is (boot, a save in Admin).
    watch(() => JSON.stringify(superApp.state?.platformConfig?.look ?? null), json => {
      const look = JSON.parse(json);
      if (look) themeConfig.useDefaults(look, { enforce: look.enforce === true });
    }, { immediate: true });

    // 🎨 Live theme customization panel (rendered by ThemeConnector) + ⌘K command
    superApp.registerComponent({ id: 'layout.theme-panel', category: 'Shell UI', component: defineAsyncComponent(() => import('./shell/ThemePanel.vue')) });
    superApp.registerCommand({ id: 'theme.customize', name: 'Tuỳ chỉnh giao diện', category: 'Theme', shortcut: '⌘⇧T', handler: () => themeConfig.toggle() });
    superApp.registerCommand({ id: 'theme.studio', name: 'Theme Studio', description: 'Trang tuỳ chỉnh giao diện đầy đủ', category: 'Theme', handler: () => { superApp.$router?.push('/system/theme'); } });

    // 🛠️ REGISTER THEMED SHELL COMPONENTS (WITH ALIASES FOR MAXIMUM COMPATIBILITY)
    // Legacy IDs (PascalCase) + New IDs (dotted.lowercase)
    
    // 1. Header
    const HeaderComp = defineAsyncComponent(() => import('./shell/Header.vue'));
    superApp.registerComponent({ id: 'Header', category: 'Shell UI', component: HeaderComp });
    superApp.registerComponent({ id: 'layout.header', category: 'Shell UI', component: HeaderComp });

    // 2. Sidebar
    const SidebarComp = defineAsyncComponent(() => import('./shell/Sidebar.vue'));
    superApp.registerComponent({ id: 'Sidebar', category: 'Shell UI', component: SidebarComp });
    superApp.registerComponent({ id: 'layout.sidebar', category: 'Shell UI', component: SidebarComp });

    // 3. Module Page Layout (The one causing the white screen)
    const ModulePageLayoutComp = defineAsyncComponent(() => import('./shell/ModulePageLayout.vue'));
    superApp.registerComponent({ id: 'ModulePageLayout', category: 'Shell UI', component: ModulePageLayoutComp });
    superApp.registerComponent({ id: 'layout.module-page', category: 'Shell UI', component: ModulePageLayoutComp });

    // 4. Module Header
    const ModuleHeaderComp = defineAsyncComponent(() => import('./shell/ModuleHeader.vue'));
    superApp.registerComponent({ id: 'ModuleHeader', category: 'Shell UI', component: ModuleHeaderComp });
    superApp.registerComponent({ id: 'layout.module-header', category: 'Shell UI', component: ModuleHeaderComp });

    // 5. Dual Sidebar Layout
    const DualSidebarComp = defineAsyncComponent(() => import('./shell/DualSidebarLayout.vue'));
    superApp.registerComponent({ id: 'DualSidebarLayout', category: 'Shell UI', component: DualSidebarComp });
    superApp.registerComponent({ id: 'layout.dual-sidebar', category: 'Shell UI', component: DualSidebarComp });

    // 6. Command Palette
    const CommandPaletteComp = defineAsyncComponent(() => import('./shell/ErpCommandPalette.vue'));
    superApp.registerComponent({ id: 'CommandPalette', category: 'Shell UI', component: CommandPaletteComp });
    superApp.registerComponent({ id: 'layout.command-palette', category: 'Shell UI', component: CommandPaletteComp });

    // 6b. Module gateway (route component of /app/:moduleId)
    superApp.registerComponent({ id: 'layout.app-container', category: 'Shell UI', component: defineAsyncComponent(() => import('./shell/AppContainer.vue')) });

    // 7. Core Shell Providers
    superApp.registerComponent({ id: 'ThemeConnector', category: 'Shell UI', component: defineAsyncComponent(() => import('./shell/ThemeConnector.vue')) });
    superApp.registerComponent({ id: 'ToastContainer', category: 'Shell UI', component: defineAsyncComponent(() => import('./shell/ToastContainer.vue')) });
    superApp.registerComponent({ id: 'MessageProvider', category: 'Shell UI', component: MessageProvider });
    superApp.registerComponent({ id: 'DialogProvider', category: 'Shell UI', component: defineAsyncComponent(() => import('./shell/DialogProvider.vue')) });

    // 🏗️ 4. REGISTER SHARED MASTER COMPONENTS
    superApp.registerComponent({ id: 'layout.action-bar', category: 'Layout UI', component: defineAsyncComponent(() => import('./components/ErpActionBar.vue')) });
    superApp.registerComponent({ id: 'display.data-grid', category: 'Display UI', component: defineAsyncComponent(() => import('./components/ErpDataGrid.vue')) });
    superApp.registerComponent({ id: 'form.entity-selector', category: 'Form UI', component: defineAsyncComponent(() => import('./components/ErpEntitySelector.vue')) });

    // 🧊 5. REGISTER UI BUILDING BLOCKS (ATOMIC)
    superApp.registerComponent({ id: 'ui.card', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/card/Card.vue')) });
    superApp.registerComponent({ id: 'ui.button', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/button/Button.vue')) });
    superApp.registerComponent({ id: 'ui.button-copy', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/button/ButtonCopy.vue')) });
    superApp.registerComponent({ id: 'ui.text', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/ui/Typography.vue')) });
    superApp.registerComponent({ id: 'ui.skeleton', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/ui/Skeleton.vue')) });
    superApp.registerComponent({ id: 'form.input', category: 'Form UI', component: defineAsyncComponent(() => import('./components/input/Input.vue')) });
    superApp.registerComponent({ id: 'form.input-number', category: 'Form UI', component: defineAsyncComponent(() => import('./components/input-number/InputNumber.vue')) });
    superApp.registerComponent({ id: 'form.switch', category: 'Form UI', component: defineAsyncComponent(() => import('./components/input/InputSwitch.vue')) });
    superApp.registerComponent({ id: 'InputSwitch', category: 'Form UI', component: defineAsyncComponent(() => import('./components/input/InputSwitch.vue')) });
    superApp.registerComponent({ id: 'form.textarea', category: 'Form UI', component: defineAsyncComponent(() => import('./components/textarea/Textarea.vue')) });
    superApp.registerComponent({ id: 'form.icon-picker', category: 'Form UI', component: defineAsyncComponent(() => import('./components/icon-picker/IconPicker.vue')) });
    superApp.registerComponent({ id: 'ui.app-icon', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/icon-picker/AppIcon.vue')) });
    // label · control · error/hint — the markup for the `.field` rules in hoff/core.css
    superApp.registerComponent({ id: 'form.field', category: 'Form UI', component: defineAsyncComponent(() => import('./components/form-field/FormField.vue')) });
    superApp.registerComponent({ id: 'ui.modal', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/modal/Modal.vue')) });
    superApp.registerComponent({ id: 'ui.search-input', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/search-input/SearchInput.vue')) });
    superApp.registerComponent({ id: 'ui.avatar', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/avatar/UserAvatar.vue')) });
    superApp.registerComponent({ id: 'ui.badge', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/badge/Badge.vue')) });
    superApp.registerComponent({ id: 'ui.alert', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/alert/Alert.vue')) });
    superApp.registerComponent({ id: 'layout.section-header', category: 'Layout UI', component: defineAsyncComponent(() => import('./components/section-header/SectionHeader.vue')) });
    superApp.registerComponent({ id: 'layout.mini-app', category: 'Layout UI', component: defineAsyncComponent(() => import('./shell/MiniAppLayout.vue')) });
    superApp.registerComponent({ id: 'form.code-editor', category: 'Form UI', component: defineAsyncComponent(() => import('./components/code-editor/CodeEditor.vue')) });
    superApp.registerComponent({ id: 'runtime.studio', category: 'Form UI', component: defineAsyncComponent(() => import('./components/code-editor/CodeEditor.vue')) });
    superApp.registerComponent({ id: 'button.copy', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/button/ButtonCopy.vue')) });
    superApp.registerComponent({ id: 'ui.popover', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/popover/Popover.vue')) });
    superApp.registerComponent({ id: 'ui.popover-trigger', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/popover/PopoverTrigger.vue')) });
    superApp.registerComponent({ id: 'ui.popover-content', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/popover/PopoverContent.vue')) });
    superApp.registerComponent({ id: 'ui.context-menu', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/context-menu/ContextMenu.vue')) });
    superApp.registerComponent({ id: 'ui.list-manager', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/list-manager/ListManager.vue')) });
    superApp.registerComponent({ id: 'ui.dropdown', category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/Dropdown.vue')) });

    // 📊 6. REGISTER DATA VISUALIZATION
    superApp.registerComponent({ id: 'display.chart', category: 'Display UI', component: defineAsyncComponent(() => import('./components/chart/InsightChart.vue')) });
    superApp.registerComponent({ id: 'display.data-table', category: 'Display UI', component: defineAsyncComponent(() => import('./components/data-table/DataTable.vue')) });
    superApp.registerComponent({ id: 'display.column-settings', category: 'Display UI', component: defineAsyncComponent(() => import('./components/data-table/ColumnSettings.vue')) });
    superApp.registerComponent({ id: 'display.simple-pagination', category: 'Display UI', component: defineAsyncComponent(() => import('./components/data-table/SimplePagination.vue')) });
    // Markdown (GitHub flavoured), sanitised — a package's README, docs. Loaded on first use (marked + DOMPurify).
    superApp.registerComponent({ id: 'display.markdown', category: 'Display UI', component: defineAsyncComponent(() => import('./components/markdown/Markdown.vue')) });
    // An image that opens large on click (viewer: zoom, original, Esc to close).
    superApp.registerComponent({ id: 'display.image', category: 'Display UI', component: defineAsyncComponent(() => import('./components/image-view/ImageView.vue')) });
    // A file, through the package that can show it ($hook provider `file.viewer` — OnlyOffice…), else built-in.
    superApp.registerComponent({ id: 'display.file', category: 'Display UI', component: defineAsyncComponent(() => import('./components/file-view/FileView.vue')) });
    // What packages put in a `$hook` slot (contracts/hooks.ts) — themes place one per extension point.
    superApp.registerComponent({ id: 'shell.hook-slot', category: 'Shell UI', component: defineAsyncComponent(() => import('./shell/HookSlot.vue')) });
    superApp.registerComponent({ id: 'Table', category: 'Table UI', component: defineAsyncComponent(() => import('./components/table/Table.vue')) });
    superApp.registerComponent({ id: 'TableBody', category: 'Table UI', component: defineAsyncComponent(() => import('./components/table/TableBody.vue')) });
    superApp.registerComponent({ id: 'TableCell', category: 'Table UI', component: defineAsyncComponent(() => import('./components/table/TableCell.vue')) });
    superApp.registerComponent({ id: 'TableHead', category: 'Table UI', component: defineAsyncComponent(() => import('./components/table/TableHead.vue')) });
    superApp.registerComponent({ id: 'TableHeader', category: 'Table UI', component: defineAsyncComponent(() => import('./components/table/TableHeader.vue')) });
    superApp.registerComponent({ id: 'TableRow', category: 'Table UI', component: defineAsyncComponent(() => import('./components/table/TableRow.vue')) });

    superApp.registerComponent({ id: 'form.select', category: 'Form UI', component: defineAsyncComponent(() => import('./components/select/Select.vue')) });
    superApp.registerComponent({ id: 'form.select-content', category: 'Form UI', component: defineAsyncComponent(() => import('./components/select/SelectContent.vue')) });
    superApp.registerComponent({ id: 'form.select-item', category: 'Form UI', component: defineAsyncComponent(() => import('./components/select/SelectItem.vue')) });
    superApp.registerComponent({ id: 'form.select-trigger', category: 'Form UI', component: defineAsyncComponent(() => import('./components/select/SelectTrigger.vue')) });
    superApp.registerComponent({ id: 'form.select-value', category: 'Form UI', component: defineAsyncComponent(() => import('./components/select/SelectValue.vue')) });
    
    // 🛡️ 7. REGISTER CORE UI ICONS
    superApp.registerComponent({ id: 'ui.icon.shield-check', category: 'Icons', component: ShieldCheck });
    superApp.registerComponent({ id: 'ui.icon.user', category: 'Icons', component: User });
    superApp.registerComponent({ id: 'ui.icon.lock', category: 'Icons', component: Lock });
    superApp.registerComponent({ id: 'ui.icon.arrow-right', category: 'Icons', component: ArrowRight });
    superApp.registerComponent({ id: 'ui.icon.search', category: 'Icons', component: Search });
    superApp.registerComponent({ id: 'ui.icon.settings', category: 'Icons', component: Settings });
    superApp.registerComponent({ id: 'ui.icon.bell', category: 'Icons', component: Bell });
    superApp.registerComponent({ id: 'ui.icon.logout', category: 'Icons', component: LogOut });
    superApp.registerComponent({ id: 'ui.icon.chevron-down', category: 'Icons', component: ChevronDown });
    superApp.registerComponent({ id: 'ui.icon.chevron-right', category: 'Icons', component: ChevronRight });
    superApp.registerComponent({ id: 'ui.icon.check', category: 'Icons', component: Check });
    superApp.registerComponent({ id: 'ui.icon.alert-triangle', category: 'Icons', component: AlertTriangle });
    superApp.registerComponent({ id: 'ui.icon.info', category: 'Icons', component: Info });
    superApp.registerComponent({ id: 'ui.icon.x', category: 'Icons', component: X });

    return { messageService, dialogService, appState, themeConfig, uiStore };
  }
}

export const defaultTheme = new DefaultTheme();

export { THEME, type ThemeType } from './tokens';
export { useUiStore } from './store/ui';
export { createMessageService, createDialogService } from './services/ui';
export { createThemeConfig, brandScale, SWATCHES, FONT_STACKS, THEME_CONFIG_DEFAULTS } from './services/themeConfig';
export { APP_ICONS, APP_ICON_NAMES, appIcon } from './services/appIcons';
export { cn } from './utils';
