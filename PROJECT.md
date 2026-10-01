# PROJECT.md — `@nhphero/sapp-theme-default`

> Tài liệu chi tiết của theme mặc định. Kiến trúc chung của Super App: [`PROJECT.md`](../../PROJECT.md) ở gốc repo.

Theme mặc định của Shell: design token hoff-kit, class component (`core.css`), UI kit đăng ký vào registry (`ui.*`, `form.*`, `display.*`, `layout.*`), các shell component (Header, MiniAppLayout, ThemePanel…) và service UI (`$message`, `$dialog`). Repo GitHub: `nhphero/sapp-vue-theme-default` (thư mục này là một git repo riêng).

## Cấu trúc package

Implement `ITheme` (contract trong `vue-sapp/contracts/theme.ts`), dựng trên design system **hoff-kit** (`ai-agents/template/UI-TEMPLATES/hoff-kit`):

- `src/hoff/tokens.css`: token 2 tầng (primitive `--gray-*`/`--brand-*` → semantic `--background`, `--primary`, `--border`…), light/dark qua `data-theme`. Đổi brand = sửa 11 giá trị `--brand-*`.
- `src/hoff/core.css`: class component sản phẩm (`.btn`, `.card`, `.badge`, `.alert`, `.input`, `.switch`, `.pop`, `.modal`, `.table-wrap`…), nạp vào `@layer components` nên utility Tailwind vẫn override được.
- `src/theme.css`: `@theme inline` map toàn bộ token Tailwind (`bg-primary`, `text-muted-foreground`, `rounded-lg`, `text-sm`…) sang biến semantic của hoff, kèm alias palette cũ (`slate`→`gray`, `indigo`→`brand`, `emerald`/`rose`/`amber`/`blue`→status) để markup cũ tự đổi diện mạo. Không được thêm `--spacing-xs/sm/md/lg/xl` vào đây (sẽ phá `max-w-xl`, `gap-md`…).
- Component Vue chỉ là wrapper mỏng trên class hoff, giữ nguyên props API cũ (variant/size được map). Dark mode: chỉ tầng semantic được remap, nên markup **không dùng** `bg-white`, `text-slate-*`, `dark:*`; dùng `bg-card`, `bg-muted`, `text-foreground`, `text-muted-foreground`, `text-faint`, `border-border(-soft)`, `bg-primary text-primary-foreground` (toàn bộ shell, admin-app, mini-app đã được chuyển). Bảng map ở `packages/sapp-theme-default/README.md`.

Gồm `defaultTheme` (đăng ký shell UI + UI kit + icon vào registry, trả về `ThemeServices`), `THEME` tokens JS, `useUiStore` (Pinia store cho toast/message/dialog), `createMessageService` / `createDialogService`, `cn()`. Shell dùng:

```ts
import { defaultTheme, THEME, useUiStore } from '@nhphero/sapp-theme-default';
import AppContainer from '@nhphero/sapp-theme-default/shell/AppContainer.vue';
import { Button } from '@nhphero/sapp-theme-default/components/button';   // chỉ trong Shell; mini app luôn đi qua registry
```

Đổi theme = viết package khác implement `ITheme` và thay import trong `main.ts`. `style.css` của Shell import `hoff/tokens.css`, `hoff/core.css` (layer components), `theme.css`, `utilities.css` và phải khai báo `@source "../node_modules/@nhphero/sapp-theme-default/src/**/*.{vue,ts,js}";` để Tailwind sinh class cho theme (Tailwind v4 bỏ qua `node_modules` khi tự dò, nên phải khai báo tường minh).

## Theme đăng ký component dùng chung

`packages/sapp-theme-default/src/index.ts` đăng ký toàn bộ UI kit vào registry:

```ts
superApp.registerComponent({ id: 'ui.button',   category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/button/Button.vue')) });
superApp.registerComponent({ id: 'form.input',  category: 'Form UI',   component: defineAsyncComponent(() => import('./components/input/Input.vue')) });
superApp.registerComponent({ id: 'ui.modal',    category: 'UI Blocks', component: defineAsyncComponent(() => import('./components/modal/Modal.vue')) });
```

Nhóm id hiện có: `ui.*` (button, button-copy, card, badge, alert, modal, popover, dropdown, context-menu, list-manager, search-input, text), `form.*` (input, input-number, switch, textarea, select [`:options` + `show-search` hoặc composition trigger/content/item] + select-trigger/value/content/item, code-editor, entity-selector), `display.*` (data-table, data-grid, column-settings, simple-pagination), `layout.*` (header, sidebar, module-page, module-header, dual-sidebar, action-bar, section-header, command-palette).

## Tuỳ chỉnh giao diện live (màu · cỡ · hình khối)

Toàn bộ giao diện chạy trên CSS variable ở `:root` (`hoff/tokens.css`), nên tuỳ chỉnh live = ghi đè biến trên `<html>` và lưu `localStorage['sapp.theme.config']`. Theme package cung cấp service `createThemeConfig()` (contract `IThemeConfig` trong `vue-sapp/contracts/theme.ts`), `DefaultTheme.register` gắn nó vào `superApp.$themeConfig`, `provide('$themeConfig')` và `globalProperties.$themeConfig`.

| Tuỳ chọn | Biến CSS bị ghi đè |
| --- | --- |
| `mode` light / dark / system | `data-theme` trên `<html>` |
| `brand` (#hex) | `--brand-50…950` sinh từ một màu gốc (HSL ladder, nấc nhạt giảm bão hoà) → `--primary`, `--ring`, `--link`… đổi theo |
| `font` (0.85–1.2) | `--text-xs…3xl` và `--sp-*`, `--touch` |
| `density` (0.9 / 1 / 1.1) | `--sp-*`, `--touch` nhân thêm |
| `radius` (0–14px) | `--radius-sm`, `--radius`, `--radius-lg` |
| `shadow` (0–2) | `--shadow-sm`, `--shadow`, `--shadow-lg` |
| `fontFamily` | `--font-sans` (stack cục bộ, không gọi mạng) |

Panel nhanh: `shell/ThemePanel.vue` (render trong `ThemeConnector`, id `layout.theme-panel`), mở bằng nút palette trên Header hoặc lệnh ⌘K `theme.customize`. Trang đầy đủ: `master-app/src/pages/ThemeStudio.vue` tại `/system/theme` (menu user → Theme Studio, lệnh ⌘K `theme.studio`): cùng bộ điều khiển + gallery mọi component, bảng token đang áp dụng, nhập/tải JSON, xuất CSS. Bằng code:

```ts
superApp.$themeConfig.toggle();                       // mở/đóng panel
superApp.$themeConfig.set({ brand: '#2563EB', radius: 10, font: 1.1 });
superApp.$themeConfig.reset();
superApp.$themeConfig.exportTokens();                 // CSS để dán vào hoff/tokens.css khi chốt
```

Mini app dùng được y hệt vì cùng document. Muốn lưu theo user/tenant thay vì localStorage: đọc `state` sau `set` và gọi `superApp.doAction('system.variables.set', …)`, rồi `set(saved)` sau khi discovery load.

## Build

`vite build` + `vue-tsc` + copy CSS (`dist/theme.css`, `dist/utilities.css`, `dist/hoff/*.css`). devDependency `@nhphero/vue-sapp` trỏ tới tarball GitHub của `vue-sapp`, nên phải build và push `vue-sapp` trước. Danh sách id component đầy đủ có ở trang *Component* của app documentation.

## Header: version của app

Nút chuyển app hiện version dạng badge nhỏ cùng hàng với tên app đang mở (màu lấy theo chữ của thanh, version dài thì cắt bớt), lấy từ `manifest.json` của nguồn hiện tại (`superApp.loadAppManifest(id)`): app package → version đang deploy (ví dụ `v1`, `20261001-103516`); app remote không có version (dev server) → `dev`. Class `.app-version` dùng `var(--text-xs)`.


## Header: app gần đây

Dropdown chuyển app có hàng **Gần đây** ở trên cùng: tối đa 5 app vừa mở (mới nhất trước, không tính app đang mở), dạng pill nhỏ, lọc theo ô tìm kiếm. Lưu theo trình duyệt ở localStorage `sapp:recent-apps` (mọi truy cập bọc try/catch — storage bị chặn thì hàng chỉ sống trong phiên). Nhãn `shell.recent` nằm trong i18n của `vue-sapp`.
