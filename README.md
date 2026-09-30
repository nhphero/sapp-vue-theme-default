# @nhphero/sapp-theme-default

Default theme for the Super App shell (`master-app`), built on the **hoff-kit** design system
(`ai-agents/template/UI-TEMPLATES/hoff-kit`): two-tier tokens (primitive → semantic), light/dark via
`data-theme`, product-level component classes (`.btn`, `.card`, `.badge`, `.alert`, `.field`, `.pop`, `.modal`…).
Implements `ITheme` from `@nhphero/vue-sapp/contracts`.

| Path | Contents |
| --- | --- |
| `src/hoff/tokens.css` | Design tokens (copied from hoff-kit). Change brand = the 11 `--brand-*` values. Dark mode remaps the semantic tier. |
| `src/hoff/core.css` | Component classes adapted from hoff-kit core.css, minus app-shell layout and global element selectors. Loaded into `@layer components` so Tailwind utilities can override. |
| `src/theme.css` | Tailwind v4 `@theme inline` mapping every Tailwind token to a hoff semantic variable, plus legacy palette aliases (`slate`→`gray`, `indigo`→`brand`, `emerald`/`rose`/`amber`/`blue`→status). Only `@theme` blocks, so mini apps can import it with `theme(reference)`. |
| `src/utilities.css` | Custom `@utility` definitions (semantic paddings `p-xs`…`p-2xl`). |
| `src/index.ts` | `DefaultTheme` / `defaultTheme`: registers shell UI, UI kit, icons into the kernel registry and returns `$message` (toasts + alert/confirm/prompt) / `$dialog` services |
| `src/tokens.ts` | `THEME` JS tokens, exposed as `--erp-*` variables by ThemeConnector (informational; CSS tokens are the source of truth) |
| `src/shell/` | Header, Sidebar, AppContainer, ModulePageLayout, CommandPalette, Toast/Message/Dialog providers, ThemeConnector |
| `src/components/` | UI kit registered as `ui.*`, `form.*`, `display.*`, `layout.*`, `Table*` |
| `src/store/ui.ts`, `src/services/ui.ts` | Pinia store + factories for toasts, messages and dialogs |
| `src/services/themeConfig.ts`, `src/shell/ThemePanel.vue` | Live customization (mode, brand colour, text scale, density, radius, shadow, font) as CSS variables on `:root`, persisted in localStorage; exposed as `superApp.$themeConfig`, panel opened from the Header palette button or the ⌘K command `theme.customize`. The full page lives in the Shell: `master-app/src/pages/ThemeStudio.vue` at `/system/theme` (component gallery, live token table, JSON import/export) |
| `src/utils.ts` | `cn()` (clsx + tailwind-merge) |

## Component → hoff class map

| Registry id | Component | Renders | Notes |
| --- | --- | --- | --- |
| `ui.button` | Button | `.btn` + `primary` / `danger` / `ghost` / `link`, sizes `sm` / `lg` / `icon` | Legacy variants mapped: `default`/`outline`/`secondary` → default, `premium` → primary, `destructive` → danger, `minimal` → ghost. One `primary` per screen; destructive actions are never primary. |
| `ui.badge` | Badge | `.badge` + `primary` / `muted` / `outline` / `ok` / `warn` / `danger` / `info` | `success`→`ok`, `warning`→`warn`, `destructive`→`danger`, `secondary`→`muted`. |
| `ui.alert` | Alert | `.alert` + `info` / `success` / `warning` / `danger` | `error`/`destructive` → `danger`. |
| `ui.card` | Card | `.card` | `size` adds `p-xs`…`p-2xl`. |
| `form.input`, `form.textarea`, `form.input-number`, `ui.search-input` | Input… | `.input` (+ `sm` / `lg` / `textarea`) | `invalid` prop sets `aria-invalid`. |
| `form.switch` | InputSwitch | `.switch` | Hidden checkbox + `.track`. |
| `form.select*` | radix Select | trigger `.input`, content `.pop`, item `.pop-item` | |
| `ui.modal` | Modal | `.overlay` + `.modal` | Footer slot renders inside `.actions`. |
| `ui.dropdown`, `ui.popover-content`, `ui.context-menu` | | `.pop` / `.pop-item` | Dropdown props: `align`, `surface`, `caret`, `search` (+ `search-placeholder`); with `search` the content slot receives `{ query }` for filtering. |
| `Table*`, `display.simple-pagination` | | `.table-wrap`, `.pagination` | `num` prop on head/cell for numeric columns. |
| `display.chart` | InsightChart (Chart.js) | `<canvas>` | props `kind` (bar/stacked/line/area/donut/pie/scatter), `series` or `labels`+`datasets`, `target`, `height`, `format`; colours from tokens, re-renders on theme change. Peer dep `chart.js`. |
| `layout.section-header` | SectionHeader | `.section-header` | |

## Install (outside this repo)

```bash
npm i @nhphero/sapp-theme-default @nhphero/vue-sapp
```

```css
/* Shell style.css */
@import "tailwindcss";
@import "@nhphero/sapp-theme-default/hoff/tokens.css";
@import "@nhphero/sapp-theme-default/hoff/core.css" layer(components);
@import "@nhphero/sapp-theme-default/theme.css";
@import "@nhphero/sapp-theme-default/utilities.css";
@source "../node_modules/@nhphero/sapp-theme-default/dist/**/*.js";

/* mini app mfe.css */
@import "tailwindcss/theme.css" theme(reference);
@import "@nhphero/sapp-theme-default/theme.css" theme(reference);
@import "@nhphero/sapp-theme-default/utilities.css";
@import "tailwindcss/utilities.css" layer(utilities);
```

## Usage in the Shell (this monorepo)

```css
/* master-app/src/style.css */
@import "tailwindcss";
@import "../../../../packages/sapp-theme-default/src/hoff/tokens.css";
@import "../../../../packages/sapp-theme-default/src/hoff/core.css" layer(components);
@import "../../../../packages/sapp-theme-default/src/theme.css";
@import "../../../../packages/sapp-theme-default/src/utilities.css";
@source "/packages/sapp-theme-default/src/**/*.{vue,ts,js}";
```

```ts
import { defaultTheme, THEME, useUiStore } from '@nhphero/sapp-theme-default';
const { messageService, dialogService, uiStore } = defaultTheme.register(app, superApp); // theme creates its own UI store
```

Light mode is forced with `<html data-theme="light">` in `master-app/index.html`; set `data-theme="dark"` (or remove the attribute to follow the OS) once the shell's dark variants are complete.

Mini apps import only `theme.css` (`theme(reference)`) and `utilities.css`; the `.btn`/`.card` classes are available at runtime because the Shell document loads `core.css`. Paths are relative to the Docker mount (`/packages`), 4 levels up from `<app>/src`.

Type resolution: this package has no `node_modules`; `tsconfig.json` maps `vue`, `radix-vue`, `@vueuse/core`… to the Shell's `node_modules` (local and Docker paths) because `@vue/compiler-sfc` resolves `defineProps<ImportedType>()` through the nearest tsconfig.

Rules of thumb (from hoff-kit `rules.md`): tokens before values (no hardcoded colours), one accent colour used sparingly, every screen renders empty/loading/error states, status is never colour-only, SVG icons only (no emoji), labels always visible.

- `layout.mini-app` — khung trang chuẩn cho mini app: page header (icon/title/subtitle + slot `actions`), nav `shell` (mặc định: menu lên header Shell qua module state `shell.nav`), `sidebar` (cột trái 220px trong `.page-container`, slot `footer`) hoặc `tabs` (`nav: { label, path, icon?, badge? }[]`, `active`, emit `navigate`), nội dung canh `.page-container` (`contained=false` để full-bleed).
- `form.select` — standalone với `:options` (string | {label,value,disabled}), `placeholder`, `size`, `show-search` (ô lọc `.pop-search`, ↑/↓/Enter/Esc); không truyền `options` thì là radix `SelectRoot` để ghép `form.select-trigger/-value/-content/-item`.
- `display.data-table` — `variant="grid"` (mặc định, kiểu bảng tính) | `"clean"` (bảng hoff, chỉ kẻ ngang, pager ở đáy); `show-select` + `v-model:selected` (+ `row-key`) cho cột checkbox chọn dòng/chọn cả trang; slot `cell-<col>`, `toolbar-left/-actions`.
- Header bảng (`.table-wrap th`) dùng `--table-head-bg/-fg` (đặc, không opacity: gray-800/gray-100, dark: gray-700/gray-100) để nổi hơn nền trang.
