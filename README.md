# Default theme (hoff-kit)

The design system every Shell theme and mini app is drawn with: tokens, component classes and the
UI kit in the kernel's registry (`$c('ui.button')`, `$c('display.data-table')`…), the shell parts
(header, app container, mini app layout), `$message` / `$dialog`, and live customization. Built on
**hoff-kit**; implements `ITheme` of `@nhphero/vue-sapp/contracts`. It is a module bundle, not a
Shell: a Shell theme (e.g. `sapp-theme-dashboard`) is built on it.

| | |
|---|---|
| Package | `sapp-theme-default` · theme (module bundle) · npm `@nhphero/sapp-theme-default` |
| Repo | `nhphero/sapp-vue-theme-default` (pinned by commit tarball) |
| Used by | Shell themes (CSS + `defaultTheme`), mini apps (`theme.css` as `theme(reference)` + utilities) |
| Peers | `vue`, `pinia`, `vue-router`, `@vueuse/core`, `radix-vue`, `lucide-vue-next`, `chart.js` |

## Features

- **Tokens** (`hoff/tokens.css`) — primitive → semantic tiers, light / dark through `data-theme`,
  default font **Roboto, sans-serif**. Sizes (`--text-*`, `--sp-*`, `--touch`, `--radius*`) scale live.
- **Component classes** (`hoff/core.css`, in `@layer components`) — `.btn`, `.card`, `.badge`,
  `.alert`, `.field`, `.input`, `.switch`, `.pop`, `.modal`, `.table-wrap`, `.stat`…
- **Tailwind mapping** (`theme.css`) — every Tailwind token on a hoff variable, legacy palette aliases
  (`slate`→`gray`, `indigo`→`brand`…), so utilities follow the theme.
- **UI kit in the registry** — `ui.*`, `form.*` (input, select with search, switch, code editor,
  icon picker…), `display.*` (data table, chart, **markdown**, **image** — thumbnail + full-screen viewer), `layout.*` (header, mini app layout,
  command palette…).
- **Services** — `$message` (toasts, alert / confirm / prompt) and `$dialog` (any component in a modal).
- **Live customization** — `superApp.$themeConfig`: mode, brand colour (full 50→950 ramp; text on it
  picked by WCAG contrast, `--on-brand-<step>`), font, text scale, density, **control size** (one
  height for every control, `--control-h`), radius, shadow, page surface, contrast, header preset
  (`--header-*`); the platform look (Admin → Theme) as the base,
  optionally locked; the quick panel (⌘K `theme.customize`).

### Components → classes

| Registry id | Renders | Notes |
|---|---|---|
| `ui.button` | `.btn` + `primary` / `danger` / `ghost` / `link`, `sm` / `lg` / `icon` | One primary per screen. |
| `ui.badge` | `.badge` + `ok` / `warn` / `danger` / `info` / `primary` / `muted` / `outline` | |
| `ui.alert` | `.alert` + `info` / `success` / `warning` / `danger` | |
| `form.input`, `form.textarea`, `form.input-number` | `.input` (+ `sm` / `lg` / `textarea`) | `invalid` sets `aria-invalid`. |
| `form.select` | `.input` + `.pop` | `:options` + `show-search`, or composed trigger / content / item. |
| `form.icon-picker`, `ui.app-icon` | Lucide icons by name | Searchable picker. |
| `display.data-table` | `.table-wrap` grid | `:fetch`, `:columns`, `persist-id`, sort, paging, selection. |
| `display.chart` | Chart.js canvas | bar / stacked / line / area / donut / pie / scatter; colours from tokens. |
| `display.markdown` | sanitised HTML | GitHub Markdown via `marked`, cleaned by `DOMPurify`. `url` (fetched) or `source`; relative links from the url's folder or `base-url`; slots `loading`, `empty`. |
| `display.image` | thumbnail + viewer | `src`, `fit`; click opens it full screen; `:preview="false"` for a plain image. |
| `layout.mini-app` | page frame | Header, nav in the Shell band / sidebar / tabs, `.page-container`; an in-app sidebar moves into the Shell sidebar when the Shell has one. |

## Configuration

None at build time. At runtime: the platform look (Admin → Theme) and each user's Theme Studio
choices (localStorage `sapp.theme.config`). Web fonts other than the default load only when picked.

## Use it

```css
/* a Shell theme's style.css */
@import "tailwindcss";
@import "@nhphero/sapp-theme-default/hoff/tokens.css";
@import "@nhphero/sapp-theme-default/hoff/core.css" layer(components);
@import "@nhphero/sapp-theme-default/theme.css";
@import "@nhphero/sapp-theme-default/utilities.css";

/* a mini app's src/mfe.css — never the full tailwindcss */
@import "tailwindcss/theme.css" theme(reference);
@import "@nhphero/sapp-theme-default/theme.css" theme(reference);
@import "@nhphero/sapp-theme-default/utilities.css";
@import "tailwindcss/utilities.css" layer(utilities);
```

```ts
import { defaultTheme, THEME } from '@nhphero/sapp-theme-default';
const sapp = await createSapp({ theme: defaultTheme, tokens: THEME, /* … */ });
```

Rules of thumb: tokens before values (no hardcoded colours or px, no raw palette colours), one control height, one accent used sparingly, every
screen has empty / loading / error states, status is never colour-only, SVG icons only.

## Develop

```bash
npm install              # from the repo root (npm workspace)
npm run typecheck -w @nhphero/sapp-theme-default
```

## Deploy

Push to `main`, then re-pin the apps that use it (`sapp update @nhphero/sapp-theme-default`, or the
commit SHA in each `package.json`) and reinstall. A Shell theme bundles it into its own build.

## Changes

- **2026-10-02** — `display.image`; control size (`--control-h`), header presets (`--header-*`), contrast,
  text on brand by WCAG contrast; mini app sidebar menus go to the Shell sidebar.
- **2026-10-02** — `display.markdown`; default font Roboto, sans-serif.
- **2026-10-02** — `$themeConfig.preview()`; platform look from `platformConfig.look`.
- **2026-10-01** — App icons, `form.icon-picker`, per-app CSS scope.
