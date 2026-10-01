import { reactive as _, watch as q, ref as T, defineComponent as Z, inject as A, computed as V, openBlock as C, createBlock as x, resolveDynamicComponent as b, withCtx as v, createElementBlock as D, createElementVNode as S, toDisplayString as U, withKeys as ee, createCommentVNode as k, createTextVNode as H, normalizeClass as L, defineAsyncComponent as t } from "vue";
import { createAppState as oe } from "@nhphero/vue-sapp";
import { defineStore as te } from "pinia";
import { MessageSquare as ne, HelpCircle as re, Zap as ie, AlertTriangle as X, CheckCircle2 as ae, Info as Q, ShieldCheck as se, User as ce, Lock as le, ArrowRight as me, Search as de, Settings as ge, Bell as ue, LogOut as fe, ChevronDown as pe, ChevronRight as ye, Check as he, X as Ce } from "lucide-vue-next";
import { clsx as xe } from "clsx";
import { twMerge as be } from "tailwind-merge";
function ve(o) {
  const i = (e) => (a, l, u = {}) => o.showToast({ id: u.id || a, message: l ? `${a}: ${l}` : a, type: e, ...u });
  return {
    success: i("success"),
    error: i("error"),
    info: i("info"),
    warning: i("warning"),
    toast: (e) => o.showToast(e),
    alert: (e) => o.showMessage(e),
    confirm: (e) => new Promise((a) => {
      o.showMessage({
        ...e,
        type: "confirm",
        onConfirm: () => {
          e.onConfirm && e.onConfirm(), a(!0);
        },
        onCancel: () => {
          e.onCancel && e.onCancel(), a(!1);
        }
      });
    }),
    prompt: (e) => new Promise((a) => {
      o.showMessage({
        ...e,
        type: "prompt",
        onConfirm: (l) => {
          e.onConfirm && e.onConfirm(l), a(l);
        },
        onCancel: () => {
          e.onCancel && e.onCancel(), a(null);
        }
      });
    })
  };
}
function Ie(o) {
  return {
    open: (i) => o.openDialog(i),
    close: (i) => o.closeDialog(i),
    closeAll: () => o.closeAllDialogs()
  };
}
const R = "sapp.theme.config", M = { "--text-xs": 12, "--text-sm": 14, "--text-base": 16, "--text-lg": 18, "--text-xl": 20, "--text-2xl": 24, "--text-3xl": 30 }, E = { "--sp-1": 4, "--sp-2": 8, "--sp-3": 12, "--sp-4": 16, "--sp-5": 24, "--sp-6": 32, "--sp-7": 48, "--sp-8": 64, "--touch": 44, "--header-h": 52 }, N = { 50: 96, 100: 92, 200: 84, 300: 72, 400: 58, 500: 47, 600: 39, 700: 32, 800: 27, 900: 23, 950: 13 }, $ = 6, F = 1, Se = [
  { name: "Teal", hex: "#256B65" },
  { name: "Blue", hex: "#2563EB" },
  { name: "Indigo", hex: "#4F46E5" },
  { name: "Violet", hex: "#7C3AED" },
  { name: "Rose", hex: "#E11D48" },
  { name: "Amber", hex: "#B45309" },
  { name: "Green", hex: "#15803D" },
  { name: "Slate", hex: "#3D4B54" }
], j = {
  "Be Vietnam Pro": "Be+Vietnam+Pro:wght@400;500;600;700",
  // drawn for Vietnamese
  Inter: "Inter:wght@400;500;600;700",
  "Plus Jakarta Sans": "Plus+Jakarta+Sans:wght@400;500;600;700",
  Manrope: "Manrope:wght@400;500;600;700",
  Lexend: "Lexend:wght@400;500;600;700",
  "Public Sans": "Public+Sans:wght@400;500;600;700",
  "IBM Plex Sans": "IBM+Plex+Sans:wght@400;500;600;700",
  "Source Sans 3": "Source+Sans+3:wght@400;500;600;700",
  "Nunito Sans": "Nunito+Sans:wght@400;500;600;700",
  "Noto Serif": "Noto+Serif:wght@400;500;600;700"
}, G = /* @__PURE__ */ new Set(), Ue = (o) => {
  const i = j[o];
  if (!i || G.has(o) || typeof document > "u") return;
  G.add(o);
  const e = document.createElement("link");
  e.rel = "stylesheet", e.href = `https://fonts.googleapis.com/css2?family=${i}&display=swap`, e.dataset.sappFont = o, document.head.appendChild(e);
}, w = [
  { id: "", label: "theme.surfaceDefault", light: "", dark: "" },
  { id: "paper", label: "theme.surfacePaper", light: "var(--gray-100)", dark: "#0B1116" },
  { id: "deep", label: "theme.surfaceDeep", light: "var(--gray-300)", dark: "#06090C" },
  { id: "tint", label: "theme.surfaceTint", light: "var(--brand-100)", dark: "var(--brand-950)" }
], O = {
  "System UI": "",
  "Neo-Grotesque": '"Inter", "Roboto", "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif',
  Humanist: '"Seravek", "Gill Sans Nova", "Ubuntu", "Calibri", "DejaVu Sans", "Segoe UI", sans-serif',
  Geometric: '"Avenir", "Avenir Next", "Montserrat", "Corbel", "URW Gothic", "Poppins", sans-serif',
  Classical: '"Optima", "Candara", "Noto Sans", "Source Sans 3", "Segoe UI", sans-serif',
  Rounded: 'ui-rounded, "Hiragino Maru Gothic ProN", "Quicksand", "Comfortaa", "Varela Round", sans-serif',
  Serif: '"Charter", "Bitstream Charter", "Sitka Text", "Cambria", Georgia, serif'
}, I = Object.freeze({
  mode: "light",
  brand: "",
  font: 1,
  density: 1,
  fontFamily: "System UI",
  radius: $,
  shadow: F,
  surface: ""
}), ke = (o) => {
  const i = /^#?([0-9a-f]{6})$/i.exec(o);
  if (!i) return null;
  const e = parseInt(i[1], 16), a = (e >> 16) / 255, l = (e >> 8 & 255) / 255, u = (e & 255) / 255, f = Math.max(a, l, u), n = Math.min(a, l, u), s = (f + n) / 2;
  let c = 0, g = 0;
  if (f !== n) {
    const m = f - n;
    g = s > 0.5 ? m / (2 - f - n) : m / (f + n), c = f === a ? (l - u) / m + (l < u ? 6 : 0) : f === l ? (u - a) / m + 2 : (a - l) / m + 4, c *= 60;
  }
  return { h: c, s: g * 100, l: s * 100 };
}, z = (o) => {
  const i = ke(o);
  if (!i) return null;
  const e = {};
  for (const a of Object.keys(N)) {
    const l = N[a], u = i.s * (l > 85 ? 0.55 : l > 70 ? 0.75 : 1);
    e[`--brand-${a}`] = `hsl(${i.h.toFixed(0)} ${u.toFixed(0)}% ${l}%)`;
  }
  return e;
}, W = (o) => ({ "--radius-sm": Math.max(0, Math.round(o * 0.5)), "--radius": o, "--radius-lg": Math.round(o * 1.7) }), J = (o) => {
  if (o <= 0) return { "--shadow-sm": "none", "--shadow": "none", "--shadow-lg": "none" };
  const i = (e) => Math.min(0.6, e * o).toFixed(3);
  return {
    "--shadow-sm": `0 1px 2px rgba(0,0,0,${i(0.1)})`,
    "--shadow": `0 1px 2px rgba(0,0,0,${i(0.08)}), 0 2px 8px rgba(0,0,0,${i(0.07)})`,
    "--shadow-lg": `0 4px 14px rgba(0,0,0,${i(0.1)}), 0 14px 36px rgba(0,0,0,${i(0.13)})`
  };
}, K = (o) => !o || o === "System UI" ? "" : j[o] ? (Ue(o), `"${o}", system-ui, sans-serif`) : O[o] != null ? O[o] : `"${o.replace(/"/g, "")}", system-ui, sans-serif`;
function we() {
  const o = _({ ...I });
  try {
    const n = JSON.parse(localStorage.getItem(R) || "{}");
    for (const s of Object.keys(I))
      n[s] !== void 0 && typeof n[s] == typeof I[s] && (o[s] = n[s]);
  } catch {
  }
  const i = _({ open: !1 }), e = () => document.documentElement, a = (n, s = "", c = !1) => {
    const g = e().style;
    for (const m of Object.keys(n)) c ? g.removeProperty(m) : g.setProperty(m, `${n[m]}${s}`);
  }, l = () => {
    const n = e();
    o.mode === "system" ? n.removeAttribute("data-theme") : n.setAttribute("data-theme", o.mode);
    const s = o.brand ? z(o.brand) : null;
    for (const y of Object.keys(N))
      s ? n.style.setProperty(`--brand-${y}`, s[`--brand-${y}`]) : n.style.removeProperty(`--brand-${y}`);
    const c = Number(o.font) || 1, g = c * (Number(o.density) || 1), m = (y, P) => Object.fromEntries(Object.entries(y).map(([B, Y]) => [B, (Y * P).toFixed(1)]));
    a(m(M, c), "px", c === 1), a(m(E, g), "px", g === 1), n.style.setProperty("--scale-text", c.toFixed(3)), n.style.setProperty("--scale-space", g.toFixed(3));
    const p = w.find((y) => y.id === o.surface) ?? w[0];
    p.light ? (n.style.setProperty("--page-surface", p.light), n.style.setProperty("--page-surface-dark", p.dark)) : (n.style.removeProperty("--page-surface"), n.style.removeProperty("--page-surface-dark"));
    const r = K(o.fontFamily);
    r ? n.style.setProperty("--font-sans", r) : n.style.removeProperty("--font-sans");
    const d = Number.isFinite(o.radius) ? o.radius : $;
    a(W(d), "px", d === $);
    const h = Number.isFinite(o.shadow) ? o.shadow : F;
    a(J(h), "", h === F);
    try {
      localStorage.setItem(R, JSON.stringify(o));
    } catch {
    }
  }, f = {
    state: o,
    get open() {
      return i.open;
    },
    set open(n) {
      i.open = n;
    },
    defaults: I,
    swatches: Se,
    fontStacks: O,
    webFonts: j,
    surfaces: w,
    set(n) {
      Object.assign(o, n);
    },
    reset() {
      Object.assign(o, I);
    },
    apply: l,
    toggle(n) {
      i.open = n ?? !i.open;
    },
    exportTokens: () => {
      const n = ["/* Tokens exported from the theme panel — paste into packages/sapp-theme-default/src/hoff/tokens.css */"], s = o.brand ? z(o.brand) : null;
      if (s) for (const r of Object.keys(s)) n.push(`${r}: ${s[r]};`);
      const c = Number(o.font) || 1;
      if (c !== 1) for (const r of Object.keys(M)) n.push(`${r}: ${(M[r] * c).toFixed(1)}px;`);
      const g = c * (Number(o.density) || 1);
      if (g !== 1) for (const r of Object.keys(E)) n.push(`${r}: ${(E[r] * g).toFixed(1)}px;`);
      if (o.radius !== $) for (const [r, d] of Object.entries(W(o.radius))) n.push(`${r}: ${d}px;`);
      if (o.shadow !== F) for (const [r, d] of Object.entries(J(o.shadow))) n.push(`${r}: ${d};`);
      const m = w.find((r) => r.id === o.surface);
      m?.light && n.push(`--background: ${m.light};   /* dark: ${m.dark} */`);
      const p = K(o.fontFamily);
      return p && n.push(`--font-sans: ${p};`), n.length === 1 && n.push("/* nothing differs from the defaults */"), n.join(`
`);
    }
  };
  return q(o, l, { deep: !0 }), l(), f;
}
const Te = te("ui", () => {
  const o = T([]);
  let i = 0;
  const e = /* @__PURE__ */ new Map(), a = (r) => {
    const d = r.id || ++i, h = { ...r, id: d, type: r.type || "info" };
    e.has(d) && (clearTimeout(e.get(d)), e.delete(d));
    const y = o.value.findIndex((B) => B.id === d);
    y !== -1 ? o.value[y] = h : o.value.push(h);
    const P = setTimeout(() => {
      l(d);
    }, r.duration || 5e3);
    e.set(d, P);
  }, l = (r) => {
    o.value = o.value.filter((d) => d.id !== r), e.has(r) && (clearTimeout(e.get(r)), e.delete(r));
  }, u = T(null), f = (r) => {
    console.log("💬 [uiStore] showMessage:", r.title), u.value = r;
  }, n = () => {
    console.log("💬 [uiStore] closeMessage"), u.value = null;
  }, s = T([]);
  let c = 0;
  return {
    toasts: o,
    showToast: a,
    removeToast: l,
    activeMessage: u,
    showMessage: f,
    closeMessage: n,
    activeDialogs: s,
    openDialog: (r) => {
      console.log("🏗️ [uiStore] openDialog:", r.title);
      const d = r.id || `dialog-${++c}`;
      return s.value.push({ ...r, id: d }), d;
    },
    closeDialog: (r) => {
      const d = s.value.find((h) => h.id === r);
      d?.onClose && d.onClose(), s.value = s.value.filter((h) => h.id !== r);
    },
    closeAllDialogs: () => {
      s.value.forEach((r) => r.onClose?.()), s.value = [];
    }
  };
}), $e = {
  key: 0,
  class: "flex items-center gap-3"
}, Fe = { class: "modal-title !m-0" }, Pe = {
  key: 0,
  class: "py-2"
}, Be = { class: "text-sm text-muted-foreground leading-relaxed mb-2" }, De = {
  key: 0,
  class: "mt-4"
}, Me = { class: "flex items-center justify-end gap-2 w-full" }, Ee = /* @__PURE__ */ Z({
  __name: "MessageProvider",
  setup(o) {
    const i = A("ui-store"), e = V(() => i?.activeMessage || null), a = T("");
    q(e, (c) => {
      c?.type === "prompt" && (a.value = c.defaultValue || "");
    });
    const l = {
      info: { icon: Q, color: "text-info", bg: "bg-info-soft" },
      success: { icon: ae, color: "text-success", bg: "bg-success-soft" },
      warning: { icon: X, color: "text-warning", bg: "bg-warning-soft" },
      error: { icon: ie, color: "text-danger", bg: "bg-danger-soft" },
      confirm: { icon: re, color: "text-primary", bg: "bg-primary-soft" },
      prompt: { icon: ne, color: "text-primary", bg: "bg-primary-soft" }
    }, u = () => {
      i?.closeMessage();
    }, f = async () => {
      e.value?.type === "prompt" && !a.value?.trim() || (e.value?.onConfirm && (e.value.type === "prompt" ? await e.value.onConfirm(a.value) : await e.value.onConfirm()), u());
    }, n = () => {
      e.value?.onCancel && e.value.onCancel(), u();
    }, s = V(() => e.value ? l[e.value.type] || l.info : null);
    return (c, g) => (C(), x(b(c.$c("ui.modal")), {
      key: e.value?.title || "none",
      show: !!e.value,
      onClose: u,
      maxWidth: "max-w-md",
      zIndex: 99999
    }, {
      header: v(() => [
        e.value ? (C(), D("div", $e, [
          S("div", {
            class: L(["w-10 h-10 rounded-lg flex items-center justify-center shrink-0", s.value?.bg])
          }, [
            (C(), x(b(s.value?.icon), {
              size: 20,
              "stroke-width": "2",
              class: L(s.value?.color)
            }, null, 8, ["class"]))
          ], 2),
          S("h3", Fe, U(e.value.title), 1)
        ])) : k("", !0)
      ]),
      footer: v(() => [
        S("div", Me, [
          e.value?.type === "confirm" || e.value?.type === "prompt" ? (C(), x(b(c.$c("ui.button")), {
            key: 0,
            variant: "default",
            onClick: n
          }, {
            default: v(() => [
              H(U(e.value.cancelText || c.$t("common.cancel")), 1)
            ]),
            _: 1
          })) : k("", !0),
          (C(), x(b(c.$c("ui.button")), {
            variant: e.value?.type === "error" ? "danger" : "primary",
            onClick: f,
            disabled: e.value?.type === "prompt" && !a.value?.trim()
          }, {
            default: v(() => [
              H(U(e.value?.type === "prompt" ? c.$t("common.submit") : e.value?.confirmText || c.$t("common.understood")), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled"]))
        ])
      ]),
      default: v(() => [
        e.value ? (C(), D("div", Pe, [
          S("p", Be, U(e.value.description), 1),
          e.value.type === "prompt" ? (C(), D("div", De, [
            e.value.inputType === "textarea" ? (C(), x(b(c.$c("form.textarea")), {
              key: 0,
              modelValue: a.value,
              "onUpdate:modelValue": g[0] || (g[0] = (m) => a.value = m),
              placeholder: e.value.placeholder,
              rows: "4",
              class: "resize-none"
            }, null, 8, ["modelValue", "placeholder"])) : (C(), x(b(c.$c("form.input")), {
              key: 1,
              modelValue: a.value,
              "onUpdate:modelValue": g[1] || (g[1] = (m) => a.value = m),
              placeholder: e.value.placeholder,
              onKeyup: g[2] || (g[2] = ee((m) => a.value?.trim() ? f() : null, ["enter"]))
            }, null, 40, ["modelValue", "placeholder"]))
          ])) : k("", !0)
        ])) : k("", !0)
      ]),
      _: 1
    }, 40, ["show"]));
  }
}), Re = {
  // --- 🌈 PREMIUM COLOR PALETTE ---
  colors: {
    // Brand Identity (Cyber Technical)
    brand: {
      midnight: "#0b1121",
      // Absolute Deep Slate (Background)
      primary: "#0ea5e9",
      // Vibrant Sky Cyan (Interaction)
      accent: "#6366f1",
      // Indigo Shift (Highlight)
      success: "#10b981",
      warning: "#f59e0b",
      danger: "#f43f5e"
    },
    // Surface & Layout (Layered Depth)
    surface: {
      sidebar: "rgba(15, 23, 42, 0.8)",
      // Glass Slate
      canvas: "#0f172a",
      // Master Background
      card: "#1e293b",
      // Slate Depth
      glass: "rgba(30, 41, 59, 0.7)",
      white: "#ffffff"
    },
    // Typography (Precision Contrast)
    text: {
      heading: "#f8fafc",
      // White Slate
      body: "#cbd5e1",
      // Soft Slate
      sub: "#94a3b8",
      // Muted Slate
      inverse: "#0f172a",
      accent: "#38bdf8"
    },
    // Interaction states
    interaction: {
      hover: "rgba(56, 189, 248, 0.1)",
      active: "rgba(56, 189, 248, 0.2)",
      border: "rgba(148, 163, 184, 0.1)"
    }
  },
  // --- 📐 SHAPES & RADII ---
  radii: {
    none: "0px",
    sm: "2px",
    md: "4px",
    lg: "8px",
    xl: "12px",
    full: "9999px"
  },
  // --- 📏 SPACING & LAYOUT (GRID-BASED) ---
  spacing: {
    px: "1px",
    0: "0px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px"
  },
  // --- 💠 SHADOWS (TECHNICAL DEPTH) ---
  shadows: {
    soft: "0 4px 20px -5px rgba(0,0,0,0.3)",
    premium: "0 20px 50px -12px rgba(0,0,0,0.5)",
    glow: "0 0 15px rgba(14, 165, 233, 0.4)"
    // Cyan Glow
  },
  // --- 📝 TYPOGRAPHY TOKENS (INTER + OUTFIT) ---
  typography: {
    family: {
      heading: "'Outfit', 'Inter', system-ui, sans-serif",
      body: "'Inter', system-ui, sans-serif",
      mono: "'JetBrains Mono', monospace"
    },
    size: {
      tiny: "9px",
      xs: "11px",
      sm: "12px",
      base: "14px",
      lg: "16px",
      xl: "18px",
      "2xl": "24px",
      "3xl": "32px"
    },
    weight: {
      black: "900",
      bold: "700",
      semibold: "600",
      medium: "500",
      normal: "400"
    }
  },
  // --- 🛠️ CONTROL ELEMENTS (SIZING & BORDERS) ---
  control: {
    border: {
      width: "1px",
      color: "rgba(148, 163, 184, 0.2)",
      // Slate-400 equivalent
      hover: "#6366f1"
    },
    height: {
      sm: "32px",
      md: "40px",
      lg: "48px",
      command: "44px"
    }
  },
  // --- 🧊 LAYOUT ARCHITECTURE (CENTRALIZED) ---
  layout: {
    sidebar: "280px",
    header: "64px",
    explorer: "320px",
    // Right-side metadata panel
    padding: "40px",
    gap: "24px",
    maxWidth: "1600px"
  }
};
function Ge(...o) {
  return be(xe(o));
}
class Ne {
  id = "default";
  name = "Standard Enterprise Slate";
  register(i, e, a = {}) {
    const l = a.uiStore ?? Te(), u = ve(l), f = Ie(l), n = oe(), s = we();
    i.config.globalProperties.$message = u, i.config.globalProperties.$appState = n, i.config.globalProperties.$superApp = e, e.$appState = n, e.$themeConfig = s, i.config.globalProperties.$themeConfig = s, i.provide("$themeConfig", s), e.registerComponent({ id: "layout.theme-panel", category: "Shell UI", component: t(() => import("./chunks/ThemePanel-BGYFWrcC.js")) }), e.registerCommand({ id: "theme.customize", name: "Tuỳ chỉnh giao diện", category: "Theme", shortcut: "⌘⇧T", handler: () => s.toggle() }), e.registerCommand({ id: "theme.studio", name: "Theme Studio", description: "Trang tuỳ chỉnh giao diện đầy đủ", category: "Theme", handler: () => {
      e.$router?.push("/system/theme");
    } });
    const c = t(() => import("./chunks/Header-DY_zv-A5.js"));
    e.registerComponent({ id: "Header", category: "Shell UI", component: c }), e.registerComponent({ id: "layout.header", category: "Shell UI", component: c });
    const g = t(() => import("./chunks/Sidebar-CCmpwaOA.js"));
    e.registerComponent({ id: "Sidebar", category: "Shell UI", component: g }), e.registerComponent({ id: "layout.sidebar", category: "Shell UI", component: g });
    const m = t(() => import("./chunks/ModulePageLayout-CuSYrWur.js"));
    e.registerComponent({ id: "ModulePageLayout", category: "Shell UI", component: m }), e.registerComponent({ id: "layout.module-page", category: "Shell UI", component: m });
    const p = t(() => import("./chunks/ModuleHeader-BnrOpukT.js"));
    e.registerComponent({ id: "ModuleHeader", category: "Shell UI", component: p }), e.registerComponent({ id: "layout.module-header", category: "Shell UI", component: p });
    const r = t(() => import("./chunks/DualSidebarLayout-BH2tOx6j.js"));
    e.registerComponent({ id: "DualSidebarLayout", category: "Shell UI", component: r }), e.registerComponent({ id: "layout.dual-sidebar", category: "Shell UI", component: r });
    const d = t(() => import("./chunks/ErpCommandPalette-fx4Q0Amc.js"));
    return e.registerComponent({ id: "CommandPalette", category: "Shell UI", component: d }), e.registerComponent({ id: "layout.command-palette", category: "Shell UI", component: d }), e.registerComponent({ id: "layout.app-container", category: "Shell UI", component: t(() => import("./chunks/AppContainer-LSa7vCxm.js")) }), e.registerComponent({ id: "ThemeConnector", category: "Shell UI", component: t(() => import("./chunks/ThemeConnector-ZAqIUWMw.js")) }), e.registerComponent({ id: "ToastContainer", category: "Shell UI", component: t(() => import("./chunks/ToastContainer-JGwl3S_m.js")) }), e.registerComponent({ id: "MessageProvider", category: "Shell UI", component: Ee }), e.registerComponent({ id: "DialogProvider", category: "Shell UI", component: t(() => import("./chunks/DialogProvider-C21AipJt.js")) }), e.registerComponent({ id: "layout.action-bar", category: "Layout UI", component: t(() => import("./chunks/ErpActionBar-DR8NVTx-.js")) }), e.registerComponent({ id: "display.data-grid", category: "Display UI", component: t(() => import("./chunks/ErpDataGrid-A4UGQwRU.js")) }), e.registerComponent({ id: "form.entity-selector", category: "Form UI", component: t(() => import("./chunks/ErpEntitySelector-XLEStx_M.js")) }), e.registerComponent({ id: "ui.card", category: "UI Blocks", component: t(() => import("./chunks/Card-sv8WQzvB.js")) }), e.registerComponent({ id: "ui.button", category: "UI Blocks", component: t(() => import("./chunks/Button-Cud5Nfh1.js")) }), e.registerComponent({ id: "ui.button-copy", category: "UI Blocks", component: t(() => import("./chunks/ButtonCopy-DsdzXkaa.js")) }), e.registerComponent({ id: "ui.text", category: "UI Blocks", component: t(() => import("./chunks/Typography-CNI1yScN.js")) }), e.registerComponent({ id: "ui.skeleton", category: "UI Blocks", component: t(() => import("./chunks/Skeleton-CfLyDGWt.js")) }), e.registerComponent({ id: "form.input", category: "Form UI", component: t(() => import("./chunks/Input-B0IfgsVG.js")) }), e.registerComponent({ id: "form.input-number", category: "Form UI", component: t(() => import("./chunks/InputNumber-DBRTF-wJ.js")) }), e.registerComponent({ id: "form.switch", category: "Form UI", component: t(() => import("./chunks/InputSwitch-BPvOZo9w.js")) }), e.registerComponent({ id: "InputSwitch", category: "Form UI", component: t(() => import("./chunks/InputSwitch-BPvOZo9w.js")) }), e.registerComponent({ id: "form.textarea", category: "Form UI", component: t(() => import("./chunks/Textarea-BVKFbpBu.js")) }), e.registerComponent({ id: "form.field", category: "Form UI", component: t(() => import("./chunks/FormField-DnQICIpP.js")) }), e.registerComponent({ id: "ui.modal", category: "UI Blocks", component: t(() => import("./chunks/Modal-BEp0XNLa.js")) }), e.registerComponent({ id: "ui.search-input", category: "UI Blocks", component: t(() => import("./chunks/SearchInput-CHiFQN2g.js")) }), e.registerComponent({ id: "ui.avatar", category: "UI Blocks", component: t(() => import("./chunks/UserAvatar-DRE3opnT.js")) }), e.registerComponent({ id: "ui.badge", category: "UI Blocks", component: t(() => import("./chunks/Badge-ZzsVRpNl.js")) }), e.registerComponent({ id: "ui.alert", category: "UI Blocks", component: t(() => import("./chunks/Alert-DylOuBAF.js")) }), e.registerComponent({ id: "layout.section-header", category: "Layout UI", component: t(() => import("./chunks/SectionHeader-C8ufun_t.js")) }), e.registerComponent({ id: "layout.mini-app", category: "Layout UI", component: t(() => import("./chunks/MiniAppLayout-DGqGVVq6.js")) }), e.registerComponent({ id: "form.code-editor", category: "Form UI", component: t(() => import("./chunks/CodeEditor-0g7paalJ.js")) }), e.registerComponent({ id: "runtime.studio", category: "Form UI", component: t(() => import("./chunks/CodeEditor-0g7paalJ.js")) }), e.registerComponent({ id: "button.copy", category: "UI Blocks", component: t(() => import("./chunks/ButtonCopy-DsdzXkaa.js")) }), e.registerComponent({ id: "ui.popover", category: "UI Blocks", component: t(() => import("./chunks/Popover-DgBGd8bu.js")) }), e.registerComponent({ id: "ui.popover-trigger", category: "UI Blocks", component: t(() => import("./chunks/PopoverTrigger-CTa-i7wG.js")) }), e.registerComponent({ id: "ui.popover-content", category: "UI Blocks", component: t(() => import("./chunks/PopoverContent-YSyq__72.js")) }), e.registerComponent({ id: "ui.context-menu", category: "UI Blocks", component: t(() => import("./chunks/ContextMenu-B4gNeut2.js")) }), e.registerComponent({ id: "ui.list-manager", category: "UI Blocks", component: t(() => import("./chunks/ListManager-BbjjcqOm.js")) }), e.registerComponent({ id: "ui.dropdown", category: "UI Blocks", component: t(() => import("./chunks/Dropdown-wKllpTqE.js")) }), e.registerComponent({ id: "display.chart", category: "Display UI", component: t(() => import("./chunks/InsightChart-BlF0mgf_.js")) }), e.registerComponent({ id: "display.data-table", category: "Display UI", component: t(() => import("./chunks/DataTable-CihzO6Ph.js")) }), e.registerComponent({ id: "display.column-settings", category: "Display UI", component: t(() => import("./chunks/ColumnSettings-7c2CSqKT.js")) }), e.registerComponent({ id: "display.simple-pagination", category: "Display UI", component: t(() => import("./chunks/SimplePagination-DfueDTCj.js")) }), e.registerComponent({ id: "Table", category: "Table UI", component: t(() => import("./chunks/Table-BLZjeVVX.js")) }), e.registerComponent({ id: "TableBody", category: "Table UI", component: t(() => import("./chunks/TableBody-B62z8Jcx.js")) }), e.registerComponent({ id: "TableCell", category: "Table UI", component: t(() => import("./chunks/TableCell-DEzqxj9e.js")) }), e.registerComponent({ id: "TableHead", category: "Table UI", component: t(() => import("./chunks/TableHead-DFpbn3fx.js")) }), e.registerComponent({ id: "TableHeader", category: "Table UI", component: t(() => import("./chunks/TableHeader-C6oE9KYG.js")) }), e.registerComponent({ id: "TableRow", category: "Table UI", component: t(() => import("./chunks/TableRow-BT1dHX61.js")) }), e.registerComponent({ id: "form.select", category: "Form UI", component: t(() => import("./chunks/Select-DDUhkQv2.js")) }), e.registerComponent({ id: "form.select-content", category: "Form UI", component: t(() => import("./chunks/SelectContent-tzsySqUy.js")) }), e.registerComponent({ id: "form.select-item", category: "Form UI", component: t(() => import("./chunks/SelectItem-ExBV4X2S.js")) }), e.registerComponent({ id: "form.select-trigger", category: "Form UI", component: t(() => import("./chunks/SelectTrigger-VqHMXKN7.js")) }), e.registerComponent({ id: "form.select-value", category: "Form UI", component: t(() => import("./chunks/SelectValue-Bo98YXZE.js")) }), e.registerComponent({ id: "ui.icon.shield-check", category: "Icons", component: se }), e.registerComponent({ id: "ui.icon.user", category: "Icons", component: ce }), e.registerComponent({ id: "ui.icon.lock", category: "Icons", component: le }), e.registerComponent({ id: "ui.icon.arrow-right", category: "Icons", component: me }), e.registerComponent({ id: "ui.icon.search", category: "Icons", component: de }), e.registerComponent({ id: "ui.icon.settings", category: "Icons", component: ge }), e.registerComponent({ id: "ui.icon.bell", category: "Icons", component: ue }), e.registerComponent({ id: "ui.icon.logout", category: "Icons", component: fe }), e.registerComponent({ id: "ui.icon.chevron-down", category: "Icons", component: pe }), e.registerComponent({ id: "ui.icon.chevron-right", category: "Icons", component: ye }), e.registerComponent({ id: "ui.icon.check", category: "Icons", component: he }), e.registerComponent({ id: "ui.icon.alert-triangle", category: "Icons", component: X }), e.registerComponent({ id: "ui.icon.info", category: "Icons", component: Q }), e.registerComponent({ id: "ui.icon.x", category: "Icons", component: Ce }), { messageService: u, dialogService: f, appState: n, themeConfig: s, uiStore: l };
  }
}
const ze = new Ne();
export {
  Ne as DefaultTheme,
  O as FONT_STACKS,
  Se as SWATCHES,
  Re as THEME,
  I as THEME_CONFIG_DEFAULTS,
  z as brandScale,
  Ge as cn,
  Ie as createDialogService,
  ve as createMessageService,
  we as createThemeConfig,
  ze as defaultTheme,
  Te as useUiStore
};
//# sourceMappingURL=index.js.map
