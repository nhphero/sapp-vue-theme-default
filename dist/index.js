import { reactive as N, watch as W, ref as w, defineComponent as q, inject as X, computed as j, openBlock as h, createBlock as C, resolveDynamicComponent as x, withCtx as b, createElementBlock as F, createElementVNode as S, toDisplayString as U, withKeys as Q, createCommentVNode as k, createTextVNode as _, normalizeClass as H, defineAsyncComponent as n } from "vue";
import { createAppState as Y } from "@nhphero/vue-sapp";
import { defineStore as Z } from "pinia";
import { MessageSquare as A, HelpCircle as ee, Zap as oe, AlertTriangle as K, CheckCircle2 as te, Info as J, ShieldCheck as ne, User as re, Lock as ie, ArrowRight as ae, Search as se, Settings as ce, Bell as me, LogOut as le, ChevronDown as ge, ChevronRight as de, Check as ue, X as fe } from "lucide-vue-next";
import { clsx as pe } from "clsx";
import { twMerge as ye } from "tailwind-merge";
function he(o) {
  return {
    show: (t) => o.showToast(t),
    success: (t, e, i = {}) => o.showToast({ id: i.id || t, message: e ? `${t}: ${e}` : t, type: "success", ...i }),
    error: (t, e, i = {}) => o.showToast({ id: i.id || t, message: e ? `${t}: ${e}` : t, type: "error", ...i }),
    info: (t, e, i = {}) => o.showToast({ id: i.id || t, message: e ? `${t}: ${e}` : t, type: "info", ...i }),
    warning: (t, e, i = {}) => o.showToast({ id: i.id || t, message: e ? `${t}: ${e}` : t, type: "warning", ...i })
  };
}
function Ce(o) {
  return {
    show: (t) => o.showMessage(t),
    confirm: (t) => new Promise((e) => {
      o.showMessage({
        ...t,
        type: "confirm",
        onConfirm: () => {
          t.onConfirm && t.onConfirm(), e(!0);
        },
        onCancel: () => {
          t.onCancel && t.onCancel(), e(!1);
        }
      });
    }),
    prompt: (t) => new Promise((e) => {
      o.showMessage({
        ...t,
        type: "prompt",
        onConfirm: (i) => {
          t.onConfirm && t.onConfirm(i), e(i);
        },
        onCancel: () => {
          t.onCancel && t.onCancel(), e(null);
        }
      });
    }),
    success: (t, e) => o.showMessage({ title: t, description: e, type: "success" }),
    error: (t, e) => o.showMessage({ title: t, description: e, type: "error" })
  };
}
function xe(o) {
  return {
    open: (t) => o.openDialog(t),
    close: (t) => o.closeDialog(t),
    closeAll: () => o.closeAllDialogs()
  };
}
const V = "sapp.theme.config", B = { "--text-xs": 12, "--text-sm": 14, "--text-base": 16, "--text-lg": 18, "--text-xl": 20, "--text-2xl": 24, "--text-3xl": 30 }, P = { "--sp-1": 4, "--sp-2": 8, "--sp-3": 12, "--sp-4": 16, "--sp-5": 24, "--sp-6": 32, "--sp-7": 48, "--sp-8": 64, "--touch": 44, "--header-h": 52 }, E = { 50: 96, 100: 92, 200: 84, 300: 72, 400: 58, 500: 47, 600: 39, 700: 32, 800: 27, 900: 23, 950: 13 }, T = 6, $ = 1, be = [
  { name: "Teal", hex: "#256B65" },
  { name: "Blue", hex: "#2563EB" },
  { name: "Indigo", hex: "#4F46E5" },
  { name: "Violet", hex: "#7C3AED" },
  { name: "Rose", hex: "#E11D48" },
  { name: "Amber", hex: "#B45309" },
  { name: "Green", hex: "#15803D" },
  { name: "Slate", hex: "#3D4B54" }
], O = {
  "System UI": "",
  "Neo-Grotesque": '"Inter", "Roboto", "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif',
  Humanist: '"Seravek", "Gill Sans Nova", "Ubuntu", "Calibri", "DejaVu Sans", "Segoe UI", sans-serif',
  Geometric: '"Avenir", "Avenir Next", "Montserrat", "Corbel", "URW Gothic", "Poppins", sans-serif',
  Classical: '"Optima", "Candara", "Noto Sans", "Source Sans 3", "Segoe UI", sans-serif',
  Rounded: 'ui-rounded, "Hiragino Maru Gothic ProN", "Quicksand", "Comfortaa", "Varela Round", sans-serif',
  Serif: '"Charter", "Bitstream Charter", "Sitka Text", "Cambria", Georgia, serif'
}, v = Object.freeze({
  mode: "light",
  brand: "",
  font: 1,
  density: 1,
  fontFamily: "System UI",
  radius: T,
  shadow: $
}), ve = (o) => {
  const t = /^#?([0-9a-f]{6})$/i.exec(o);
  if (!t) return null;
  const e = parseInt(t[1], 16), i = (e >> 16) / 255, m = (e >> 8 & 255) / 255, u = (e & 255) / 255, p = Math.max(i, m, u), r = Math.min(i, m, u), s = (p + r) / 2;
  let a = 0, g = 0;
  if (p !== r) {
    const l = p - r;
    g = s > 0.5 ? l / (2 - p - r) : l / (p + r), a = p === i ? (m - u) / l + (m < u ? 6 : 0) : p === m ? (u - i) / l + 2 : (i - m) / l + 4, a *= 60;
  }
  return { h: a, s: g * 100, l: s * 100 };
}, L = (o) => {
  const t = ve(o);
  if (!t) return null;
  const e = {};
  for (const i of Object.keys(E)) {
    const m = E[i], u = t.s * (m > 85 ? 0.55 : m > 70 ? 0.75 : 1);
    e[`--brand-${i}`] = `hsl(${t.h.toFixed(0)} ${u.toFixed(0)}% ${m}%)`;
  }
  return e;
}, R = (o) => ({ "--radius-sm": Math.max(0, Math.round(o * 0.5)), "--radius": o, "--radius-lg": Math.round(o * 1.7) }), G = (o) => {
  if (o <= 0) return { "--shadow-sm": "none", "--shadow": "none", "--shadow-lg": "none" };
  const t = (e) => Math.min(0.6, e * o).toFixed(3);
  return {
    "--shadow-sm": `0 1px 2px rgba(0,0,0,${t(0.1)})`,
    "--shadow": `0 1px 2px rgba(0,0,0,${t(0.08)}), 0 2px 8px rgba(0,0,0,${t(0.07)})`,
    "--shadow-lg": `0 4px 14px rgba(0,0,0,${t(0.1)}), 0 14px 36px rgba(0,0,0,${t(0.13)})`
  };
}, z = (o) => !o || o === "System UI" ? "" : O[o] != null ? O[o] : `"${o.replace(/"/g, "")}", system-ui, sans-serif`;
function Ie() {
  const o = N({ ...v });
  try {
    const r = JSON.parse(localStorage.getItem(V) || "{}");
    for (const s of Object.keys(v))
      r[s] !== void 0 && typeof r[s] == typeof v[s] && (o[s] = r[s]);
  } catch {
  }
  const t = N({ open: !1 }), e = () => document.documentElement, i = (r, s = "", a = !1) => {
    const g = e().style;
    for (const l of Object.keys(r)) a ? g.removeProperty(l) : g.setProperty(l, `${r[l]}${s}`);
  }, m = () => {
    const r = e();
    o.mode === "system" ? r.removeAttribute("data-theme") : r.setAttribute("data-theme", o.mode);
    const s = o.brand ? L(o.brand) : null;
    for (const y of Object.keys(E))
      s ? r.style.setProperty(`--brand-${y}`, s[`--brand-${y}`]) : r.style.removeProperty(`--brand-${y}`);
    const a = Number(o.font) || 1, g = a * (Number(o.density) || 1), l = (y, I) => Object.fromEntries(Object.entries(y).map(([D, M]) => [D, (M * I).toFixed(1)]));
    i(l(B, a), "px", a === 1), i(l(P, g), "px", g === 1), r.style.setProperty("--scale-text", a.toFixed(3)), r.style.setProperty("--scale-space", g.toFixed(3));
    const f = z(o.fontFamily);
    f ? r.style.setProperty("--font-sans", f) : r.style.removeProperty("--font-sans");
    const c = Number.isFinite(o.radius) ? o.radius : T;
    i(R(c), "px", c === T);
    const d = Number.isFinite(o.shadow) ? o.shadow : $;
    i(G(d), "", d === $);
    try {
      localStorage.setItem(V, JSON.stringify(o));
    } catch {
    }
  }, p = {
    state: o,
    get open() {
      return t.open;
    },
    set open(r) {
      t.open = r;
    },
    defaults: v,
    swatches: be,
    fontStacks: O,
    set(r) {
      Object.assign(o, r);
    },
    reset() {
      Object.assign(o, v);
    },
    apply: m,
    toggle(r) {
      t.open = r ?? !t.open;
    },
    exportTokens: () => {
      const r = ["/* Tokens exported from the theme panel — paste into packages/sapp-theme-default/src/hoff/tokens.css */"], s = o.brand ? L(o.brand) : null;
      if (s) for (const f of Object.keys(s)) r.push(`${f}: ${s[f]};`);
      const a = Number(o.font) || 1;
      if (a !== 1) for (const f of Object.keys(B)) r.push(`${f}: ${(B[f] * a).toFixed(1)}px;`);
      const g = a * (Number(o.density) || 1);
      if (g !== 1) for (const f of Object.keys(P)) r.push(`${f}: ${(P[f] * g).toFixed(1)}px;`);
      if (o.radius !== T) for (const [f, c] of Object.entries(R(o.radius))) r.push(`${f}: ${c}px;`);
      if (o.shadow !== $) for (const [f, c] of Object.entries(G(o.shadow))) r.push(`${f}: ${c};`);
      const l = z(o.fontFamily);
      return l && r.push(`--font-sans: ${l};`), r.length === 1 && r.push("/* nothing differs from the defaults */"), r.join(`
`);
    }
  };
  return W(o, m, { deep: !0 }), m(), p;
}
const Se = Z("ui", () => {
  const o = w([]);
  let t = 0;
  const e = /* @__PURE__ */ new Map(), i = (c) => {
    const d = c.id || ++t, y = { ...c, id: d, type: c.type || "info" };
    e.has(d) && (clearTimeout(e.get(d)), e.delete(d));
    const I = o.value.findIndex((M) => M.id === d);
    I !== -1 ? o.value[I] = y : o.value.push(y);
    const D = setTimeout(() => {
      m(d);
    }, c.duration || 5e3);
    e.set(d, D);
  }, m = (c) => {
    o.value = o.value.filter((d) => d.id !== c), e.has(c) && (clearTimeout(e.get(c)), e.delete(c));
  }, u = w(null), p = (c) => {
    console.log("💬 [uiStore] showMessage:", c.title), u.value = c;
  }, r = () => {
    console.log("💬 [uiStore] closeMessage"), u.value = null;
  }, s = w([]);
  let a = 0;
  return {
    toasts: o,
    showToast: i,
    removeToast: m,
    activeMessage: u,
    showMessage: p,
    closeMessage: r,
    activeDialogs: s,
    openDialog: (c) => {
      console.log("🏗️ [uiStore] openDialog:", c.title);
      const d = c.id || `dialog-${++a}`;
      return s.value.push({ ...c, id: d }), d;
    },
    closeDialog: (c) => {
      const d = s.value.find((y) => y.id === c);
      d?.onClose && d.onClose(), s.value = s.value.filter((y) => y.id !== c);
    },
    closeAllDialogs: () => {
      s.value.forEach((c) => c.onClose?.()), s.value = [];
    }
  };
}), Ue = {
  key: 0,
  class: "flex items-center gap-3"
}, ke = { class: "modal-title !m-0" }, we = {
  key: 0,
  class: "py-2"
}, Te = { class: "text-sm text-muted-foreground leading-relaxed mb-2" }, $e = {
  key: 0,
  class: "mt-4"
}, De = { class: "flex items-center justify-end gap-2 w-full" }, Me = /* @__PURE__ */ q({
  __name: "MessageProvider",
  setup(o) {
    const t = X("ui-store"), e = j(() => t?.activeMessage || null), i = w("");
    W(e, (a) => {
      a?.type === "prompt" && (i.value = a.defaultValue || "");
    });
    const m = {
      info: { icon: J, color: "text-info", bg: "bg-info-soft" },
      success: { icon: te, color: "text-success", bg: "bg-success-soft" },
      warning: { icon: K, color: "text-warning", bg: "bg-warning-soft" },
      error: { icon: oe, color: "text-danger", bg: "bg-danger-soft" },
      confirm: { icon: ee, color: "text-primary", bg: "bg-primary-soft" },
      prompt: { icon: A, color: "text-primary", bg: "bg-primary-soft" }
    }, u = () => {
      t?.closeMessage();
    }, p = async () => {
      e.value?.type === "prompt" && !i.value?.trim() || (e.value?.onConfirm && (e.value.type === "prompt" ? await e.value.onConfirm(i.value) : await e.value.onConfirm()), u());
    }, r = () => {
      e.value?.onCancel && e.value.onCancel(), u();
    }, s = j(() => e.value ? m[e.value.type] || m.info : null);
    return (a, g) => (h(), C(x(a.$c("ui.modal")), {
      key: e.value?.title || "none",
      show: !!e.value,
      onClose: u,
      maxWidth: "max-w-md",
      zIndex: 99999
    }, {
      header: b(() => [
        e.value ? (h(), F("div", Ue, [
          S("div", {
            class: H(["w-10 h-10 rounded-lg flex items-center justify-center shrink-0", s.value?.bg])
          }, [
            (h(), C(x(s.value?.icon), {
              size: 20,
              "stroke-width": "2",
              class: H(s.value?.color)
            }, null, 8, ["class"]))
          ], 2),
          S("h3", ke, U(e.value.title), 1)
        ])) : k("", !0)
      ]),
      footer: b(() => [
        S("div", De, [
          e.value?.type === "confirm" || e.value?.type === "prompt" ? (h(), C(x(a.$c("ui.button")), {
            key: 0,
            variant: "default",
            onClick: r
          }, {
            default: b(() => [
              _(U(e.value.cancelText || a.$t("common.cancel")), 1)
            ]),
            _: 1
          })) : k("", !0),
          (h(), C(x(a.$c("ui.button")), {
            variant: e.value?.type === "error" ? "danger" : "primary",
            onClick: p,
            disabled: e.value?.type === "prompt" && !i.value?.trim()
          }, {
            default: b(() => [
              _(U(e.value?.type === "prompt" ? a.$t("common.submit") : e.value?.confirmText || a.$t("common.understood")), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled"]))
        ])
      ]),
      default: b(() => [
        e.value ? (h(), F("div", we, [
          S("p", Te, U(e.value.description), 1),
          e.value.type === "prompt" ? (h(), F("div", $e, [
            e.value.inputType === "textarea" ? (h(), C(x(a.$c("form.textarea")), {
              key: 0,
              modelValue: i.value,
              "onUpdate:modelValue": g[0] || (g[0] = (l) => i.value = l),
              placeholder: e.value.placeholder,
              rows: "4",
              class: "resize-none"
            }, null, 8, ["modelValue", "placeholder"])) : (h(), C(x(a.$c("form.input")), {
              key: 1,
              modelValue: i.value,
              "onUpdate:modelValue": g[1] || (g[1] = (l) => i.value = l),
              placeholder: e.value.placeholder,
              onKeyup: g[2] || (g[2] = Q((l) => i.value?.trim() ? p() : null, ["enter"]))
            }, null, 40, ["modelValue", "placeholder"]))
          ])) : k("", !0)
        ])) : k("", !0)
      ]),
      _: 1
    }, 40, ["show"]));
  }
}), _e = {
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
function He(...o) {
  return ye(pe(o));
}
class Fe {
  id = "default";
  name = "Standard Enterprise Slate";
  register(t, e, i = {}) {
    const m = i.uiStore ?? Se(), u = he(m), p = Ce(m), r = xe(m), s = Y(), a = Ie();
    t.config.globalProperties.$toast = u, t.config.globalProperties.$message = p, t.config.globalProperties.$appState = s, t.config.globalProperties.$superApp = e, e.$appState = s, e.$themeConfig = a, t.config.globalProperties.$themeConfig = a, t.provide("$themeConfig", a), e.registerComponent({ id: "layout.theme-panel", category: "Shell UI", component: n(() => import("./chunks/ThemePanel-BKir-qxo.js")) }), e.registerCommand({ id: "theme.customize", name: "Tuỳ chỉnh giao diện", category: "Theme", shortcut: "⌘⇧T", handler: () => a.toggle() }), e.registerCommand({ id: "theme.studio", name: "Theme Studio", description: "Trang tuỳ chỉnh giao diện đầy đủ", category: "Theme", handler: () => {
      e.$router?.push("/system/theme");
    } });
    const g = n(() => import("./chunks/Header-0EKz5UN7.js"));
    e.registerComponent({ id: "Header", category: "Shell UI", component: g }), e.registerComponent({ id: "layout.header", category: "Shell UI", component: g });
    const l = n(() => import("./chunks/Sidebar-CCmpwaOA.js"));
    e.registerComponent({ id: "Sidebar", category: "Shell UI", component: l }), e.registerComponent({ id: "layout.sidebar", category: "Shell UI", component: l });
    const f = n(() => import("./chunks/ModulePageLayout-CuSYrWur.js"));
    e.registerComponent({ id: "ModulePageLayout", category: "Shell UI", component: f }), e.registerComponent({ id: "layout.module-page", category: "Shell UI", component: f });
    const c = n(() => import("./chunks/ModuleHeader-BnrOpukT.js"));
    e.registerComponent({ id: "ModuleHeader", category: "Shell UI", component: c }), e.registerComponent({ id: "layout.module-header", category: "Shell UI", component: c });
    const d = n(() => import("./chunks/DualSidebarLayout-BH2tOx6j.js"));
    e.registerComponent({ id: "DualSidebarLayout", category: "Shell UI", component: d }), e.registerComponent({ id: "layout.dual-sidebar", category: "Shell UI", component: d });
    const y = n(() => import("./chunks/ErpCommandPalette-fx4Q0Amc.js"));
    return e.registerComponent({ id: "CommandPalette", category: "Shell UI", component: y }), e.registerComponent({ id: "layout.command-palette", category: "Shell UI", component: y }), e.registerComponent({ id: "layout.app-container", category: "Shell UI", component: n(() => import("./chunks/AppContainer-LSa7vCxm.js")) }), e.registerComponent({ id: "ThemeConnector", category: "Shell UI", component: n(() => import("./chunks/ThemeConnector-CDbJXNMh.js")) }), e.registerComponent({ id: "ToastContainer", category: "Shell UI", component: n(() => import("./chunks/ToastContainer-JGwl3S_m.js")) }), e.registerComponent({ id: "MessageProvider", category: "Shell UI", component: Me }), e.registerComponent({ id: "DialogProvider", category: "Shell UI", component: n(() => import("./chunks/DialogProvider-C21AipJt.js")) }), e.registerComponent({ id: "layout.action-bar", category: "Layout UI", component: n(() => import("./chunks/ErpActionBar-DR8NVTx-.js")) }), e.registerComponent({ id: "display.data-grid", category: "Display UI", component: n(() => import("./chunks/ErpDataGrid-A4UGQwRU.js")) }), e.registerComponent({ id: "form.entity-selector", category: "Form UI", component: n(() => import("./chunks/ErpEntitySelector-XLEStx_M.js")) }), e.registerComponent({ id: "ui.card", category: "UI Blocks", component: n(() => import("./chunks/Card-sv8WQzvB.js")) }), e.registerComponent({ id: "ui.button", category: "UI Blocks", component: n(() => import("./chunks/Button-Cud5Nfh1.js")) }), e.registerComponent({ id: "ui.button-copy", category: "UI Blocks", component: n(() => import("./chunks/ButtonCopy-DHLLo4Pm.js")) }), e.registerComponent({ id: "ui.text", category: "UI Blocks", component: n(() => import("./chunks/Typography-CNI1yScN.js")) }), e.registerComponent({ id: "ui.skeleton", category: "UI Blocks", component: n(() => import("./chunks/Skeleton-CfLyDGWt.js")) }), e.registerComponent({ id: "form.input", category: "Form UI", component: n(() => import("./chunks/Input-B0IfgsVG.js")) }), e.registerComponent({ id: "form.input-number", category: "Form UI", component: n(() => import("./chunks/InputNumber-DBRTF-wJ.js")) }), e.registerComponent({ id: "form.switch", category: "Form UI", component: n(() => import("./chunks/InputSwitch-BT6wq4iq.js")) }), e.registerComponent({ id: "InputSwitch", category: "Form UI", component: n(() => import("./chunks/InputSwitch-BT6wq4iq.js")) }), e.registerComponent({ id: "form.textarea", category: "Form UI", component: n(() => import("./chunks/Textarea-BVKFbpBu.js")) }), e.registerComponent({ id: "ui.modal", category: "UI Blocks", component: n(() => import("./chunks/Modal-Bh_xjaON.js")) }), e.registerComponent({ id: "ui.search-input", category: "UI Blocks", component: n(() => import("./chunks/SearchInput-CHiFQN2g.js")) }), e.registerComponent({ id: "ui.avatar", category: "UI Blocks", component: n(() => import("./chunks/UserAvatar-DRE3opnT.js")) }), e.registerComponent({ id: "ui.badge", category: "UI Blocks", component: n(() => import("./chunks/Badge-ZzsVRpNl.js")) }), e.registerComponent({ id: "ui.alert", category: "UI Blocks", component: n(() => import("./chunks/Alert-DylOuBAF.js")) }), e.registerComponent({ id: "layout.section-header", category: "Layout UI", component: n(() => import("./chunks/SectionHeader-C8ufun_t.js")) }), e.registerComponent({ id: "layout.mini-app", category: "Layout UI", component: n(() => import("./chunks/MiniAppLayout-DEmrq9oq.js")) }), e.registerComponent({ id: "form.code-editor", category: "Form UI", component: n(() => import("./chunks/CodeEditor-BiENsVj5.js")) }), e.registerComponent({ id: "runtime.studio", category: "Form UI", component: n(() => import("./chunks/CodeEditor-BiENsVj5.js")) }), e.registerComponent({ id: "button.copy", category: "UI Blocks", component: n(() => import("./chunks/ButtonCopy-DHLLo4Pm.js")) }), e.registerComponent({ id: "ui.popover", category: "UI Blocks", component: n(() => import("./chunks/Popover-Cj2uYSMk.js")) }), e.registerComponent({ id: "ui.popover-trigger", category: "UI Blocks", component: n(() => import("./chunks/PopoverTrigger-CTa-i7wG.js")) }), e.registerComponent({ id: "ui.popover-content", category: "UI Blocks", component: n(() => import("./chunks/PopoverContent-CMU8J2kl.js")) }), e.registerComponent({ id: "ui.context-menu", category: "UI Blocks", component: n(() => import("./chunks/ContextMenu-B4gNeut2.js")) }), e.registerComponent({ id: "ui.list-manager", category: "UI Blocks", component: n(() => import("./chunks/ListManager-BbjjcqOm.js")) }), e.registerComponent({ id: "ui.dropdown", category: "UI Blocks", component: n(() => import("./chunks/Dropdown-wKllpTqE.js")) }), e.registerComponent({ id: "display.chart", category: "Display UI", component: n(() => import("./chunks/InsightChart-BlF0mgf_.js")) }), e.registerComponent({ id: "display.data-table", category: "Display UI", component: n(() => import("./chunks/DataTable-DCFx8TGK.js")) }), e.registerComponent({ id: "display.column-settings", category: "Display UI", component: n(() => import("./chunks/ColumnSettings-7c2CSqKT.js")) }), e.registerComponent({ id: "display.simple-pagination", category: "Display UI", component: n(() => import("./chunks/SimplePagination-DpkIfSxT.js")) }), e.registerComponent({ id: "Table", category: "Table UI", component: n(() => import("./chunks/Table-BLZjeVVX.js")) }), e.registerComponent({ id: "TableBody", category: "Table UI", component: n(() => import("./chunks/TableBody-B62z8Jcx.js")) }), e.registerComponent({ id: "TableCell", category: "Table UI", component: n(() => import("./chunks/TableCell-DEzqxj9e.js")) }), e.registerComponent({ id: "TableHead", category: "Table UI", component: n(() => import("./chunks/TableHead-DFpbn3fx.js")) }), e.registerComponent({ id: "TableHeader", category: "Table UI", component: n(() => import("./chunks/TableHeader-C6oE9KYG.js")) }), e.registerComponent({ id: "TableRow", category: "Table UI", component: n(() => import("./chunks/TableRow-BT1dHX61.js")) }), e.registerComponent({ id: "form.select", category: "Form UI", component: n(() => import("./chunks/Select-DDUhkQv2.js")) }), e.registerComponent({ id: "form.select-content", category: "Form UI", component: n(() => import("./chunks/SelectContent-tzsySqUy.js")) }), e.registerComponent({ id: "form.select-item", category: "Form UI", component: n(() => import("./chunks/SelectItem-ExBV4X2S.js")) }), e.registerComponent({ id: "form.select-trigger", category: "Form UI", component: n(() => import("./chunks/SelectTrigger-VqHMXKN7.js")) }), e.registerComponent({ id: "form.select-value", category: "Form UI", component: n(() => import("./chunks/SelectValue-Bo98YXZE.js")) }), e.registerComponent({ id: "ui.icon.shield-check", category: "Icons", component: ne }), e.registerComponent({ id: "ui.icon.user", category: "Icons", component: re }), e.registerComponent({ id: "ui.icon.lock", category: "Icons", component: ie }), e.registerComponent({ id: "ui.icon.arrow-right", category: "Icons", component: ae }), e.registerComponent({ id: "ui.icon.search", category: "Icons", component: se }), e.registerComponent({ id: "ui.icon.settings", category: "Icons", component: ce }), e.registerComponent({ id: "ui.icon.bell", category: "Icons", component: me }), e.registerComponent({ id: "ui.icon.logout", category: "Icons", component: le }), e.registerComponent({ id: "ui.icon.chevron-down", category: "Icons", component: ge }), e.registerComponent({ id: "ui.icon.chevron-right", category: "Icons", component: de }), e.registerComponent({ id: "ui.icon.check", category: "Icons", component: ue }), e.registerComponent({ id: "ui.icon.alert-triangle", category: "Icons", component: K }), e.registerComponent({ id: "ui.icon.info", category: "Icons", component: J }), e.registerComponent({ id: "ui.icon.x", category: "Icons", component: fe }), { toastService: u, messageService: p, dialogService: r, appState: s, themeConfig: a, uiStore: m };
  }
}
const Ve = new Fe();
export {
  Fe as DefaultTheme,
  O as FONT_STACKS,
  be as SWATCHES,
  _e as THEME,
  v as THEME_CONFIG_DEFAULTS,
  L as brandScale,
  He as cn,
  xe as createDialogService,
  Ce as createMessageService,
  Ie as createThemeConfig,
  he as createToastService,
  Ve as defaultTheme,
  Se as useUiStore
};
//# sourceMappingURL=index.js.map
