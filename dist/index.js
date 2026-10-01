import { reactive as R, watch as Z, ref as P, defineComponent as re, inject as ie, computed as G, openBlock as b, createBlock as I, resolveDynamicComponent as S, withCtx as k, createElementBlock as M, createElementVNode as w, toDisplayString as T, withKeys as ae, createCommentVNode as $, createTextVNode as z, normalizeClass as W, defineAsyncComponent as t } from "vue";
import { createAppState as se } from "@nhphero/vue-sapp";
import { defineStore as ce } from "pinia";
import { MessageSquare as le, HelpCircle as me, Zap as de, AlertTriangle as A, CheckCircle2 as ge, Info as ee, ShieldCheck as fe, User as ue, Lock as pe, ArrowRight as ye, Search as he, Settings as Ce, Bell as be, LogOut as xe, ChevronDown as ve, ChevronRight as Ie, Check as Se, X as ke } from "lucide-vue-next";
import { clsx as Ue } from "clsx";
import { twMerge as we } from "tailwind-merge";
function Te(r) {
  const i = (e) => (o, a, m = {}) => r.showToast({ id: m.id || o, message: a ? `${o}: ${a}` : o, type: e, ...m });
  return {
    success: i("success"),
    error: i("error"),
    info: i("info"),
    warning: i("warning"),
    toast: (e) => r.showToast(e),
    alert: (e) => r.showMessage(e),
    confirm: (e) => new Promise((o) => {
      r.showMessage({
        ...e,
        type: "confirm",
        onConfirm: () => {
          e.onConfirm && e.onConfirm(), o(!0);
        },
        onCancel: () => {
          e.onCancel && e.onCancel(), o(!1);
        }
      });
    }),
    prompt: (e) => new Promise((o) => {
      r.showMessage({
        ...e,
        type: "prompt",
        onConfirm: (a) => {
          e.onConfirm && e.onConfirm(a), o(a);
        },
        onCancel: () => {
          e.onCancel && e.onCancel(), o(null);
        }
      });
    })
  };
}
function $e(r) {
  return {
    open: (i) => r.openDialog(i),
    close: (i) => r.closeDialog(i),
    closeAll: () => r.closeAllDialogs()
  };
}
const E = "sapp.theme.config", O = { "--text-xs": 12, "--text-sm": 14, "--text-base": 16, "--text-lg": 18, "--text-xl": 20, "--text-2xl": 24, "--text-3xl": 30 }, N = { "--sp-1": 4, "--sp-2": 8, "--sp-3": 12, "--sp-4": 16, "--sp-5": 24, "--sp-6": 32, "--sp-7": 48, "--sp-8": 64, "--touch": 44, "--header-h": 52 }, j = { 50: 96, 100: 92, 200: 84, 300: 72, 400: 58, 500: 47, 600: 39, 700: 32, 800: 27, 900: 23, 950: 13 }, B = 6, D = 1, Fe = [
  { name: "Teal", hex: "#256B65" },
  { name: "Blue", hex: "#2563EB" },
  { name: "Indigo", hex: "#4F46E5" },
  { name: "Violet", hex: "#7C3AED" },
  { name: "Rose", hex: "#E11D48" },
  { name: "Amber", hex: "#B45309" },
  { name: "Green", hex: "#15803D" },
  { name: "Slate", hex: "#3D4B54" }
], H = {
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
}, J = /* @__PURE__ */ new Set(), Pe = (r) => {
  const i = H[r];
  if (!i || J.has(r) || typeof document > "u") return;
  J.add(r);
  const e = document.createElement("link");
  e.rel = "stylesheet", e.href = `https://fonts.googleapis.com/css2?family=${i}&display=swap`, e.dataset.sappFont = r, document.head.appendChild(e);
}, F = [
  { id: "", label: "theme.surfaceDefault", light: "", dark: "" },
  { id: "paper", label: "theme.surfacePaper", light: "var(--gray-100)", dark: "#0B1116" },
  { id: "deep", label: "theme.surfaceDeep", light: "var(--gray-300)", dark: "#06090C" },
  { id: "tint", label: "theme.surfaceTint", light: "var(--brand-100)", dark: "var(--brand-950)" }
], _ = {
  "System UI": "",
  "Neo-Grotesque": '"Inter", "Roboto", "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif',
  Humanist: '"Seravek", "Gill Sans Nova", "Ubuntu", "Calibri", "DejaVu Sans", "Segoe UI", sans-serif',
  Geometric: '"Avenir", "Avenir Next", "Montserrat", "Corbel", "URW Gothic", "Poppins", sans-serif',
  Classical: '"Optima", "Candara", "Noto Sans", "Source Sans 3", "Segoe UI", sans-serif',
  Rounded: 'ui-rounded, "Hiragino Maru Gothic ProN", "Quicksand", "Comfortaa", "Varela Round", sans-serif',
  Serif: '"Charter", "Bitstream Charter", "Sitka Text", "Cambria", Georgia, serif'
}, U = Object.freeze({
  mode: "light",
  brand: "",
  font: 1,
  density: 1,
  fontFamily: "System UI",
  radius: B,
  shadow: D,
  surface: ""
}), Be = (r) => {
  const i = /^#?([0-9a-f]{6})$/i.exec(r);
  if (!i) return null;
  const e = parseInt(i[1], 16), o = (e >> 16) / 255, a = (e >> 8 & 255) / 255, m = (e & 255) / 255, p = Math.max(o, a, m), u = Math.min(o, a, m), l = (p + u) / 2;
  let g = 0, h = 0;
  if (p !== u) {
    const n = p - u;
    h = l > 0.5 ? n / (2 - p - u) : n / (p + u), g = p === o ? (a - m) / n + (a < m ? 6 : 0) : p === a ? (m - o) / n + 2 : (o - a) / n + 4, g *= 60;
  }
  return { h: g, s: h * 100, l: l * 100 };
}, K = (r) => {
  const i = Be(r);
  if (!i) return null;
  const e = {};
  for (const o of Object.keys(j)) {
    const a = j[o], m = i.s * (a > 85 ? 0.55 : a > 70 ? 0.75 : 1);
    e[`--brand-${o}`] = `hsl(${i.h.toFixed(0)} ${m.toFixed(0)}% ${a}%)`;
  }
  return e;
}, q = (r) => ({ "--radius-sm": Math.max(0, Math.round(r * 0.5)), "--radius": r, "--radius-lg": Math.round(r * 1.7) }), X = (r) => {
  if (r <= 0) return { "--shadow-sm": "none", "--shadow": "none", "--shadow-lg": "none" };
  const i = (e) => Math.min(0.6, e * r).toFixed(3);
  return {
    "--shadow-sm": `0 1px 2px rgba(0,0,0,${i(0.1)})`,
    "--shadow": `0 1px 2px rgba(0,0,0,${i(0.08)}), 0 2px 8px rgba(0,0,0,${i(0.07)})`,
    "--shadow-lg": `0 4px 14px rgba(0,0,0,${i(0.1)}), 0 14px 36px rgba(0,0,0,${i(0.13)})`
  };
}, Y = (r) => !r || r === "System UI" ? "" : H[r] ? (Pe(r), `"${r}", system-ui, sans-serif`) : _[r] != null ? _[r] : `"${r.replace(/"/g, "")}", system-ui, sans-serif`, V = Object.keys(U), Q = (r) => {
  const i = {};
  for (const e of V)
    r?.[e] !== void 0 && typeof r[e] == typeof U[e] && (i[e] = r[e]);
  return i;
};
function De() {
  const r = () => {
    try {
      return Q(JSON.parse(localStorage.getItem(E) || "{}"));
    } catch {
      return {};
    }
  }, i = Object.fromEntries(Object.entries(r()).filter(([n, d]) => d !== U[n]));
  let e = { ...U };
  const o = R({ ...e, ...i }), a = R({ open: !1, locked: !1 }), m = () => {
    if (a.locked) return;
    const n = Object.fromEntries(V.filter((d) => o[d] !== e[d]).map((d) => [d, o[d]]));
    try {
      Object.keys(n).length ? localStorage.setItem(E, JSON.stringify(n)) : localStorage.removeItem(E);
    } catch {
    }
  }, p = () => document.documentElement, u = (n, d = "", s = !1) => {
    const c = p().style;
    for (const y of Object.keys(n)) s ? c.removeProperty(y) : c.setProperty(y, `${n[y]}${d}`);
  }, l = () => {
    const n = p();
    o.mode === "system" ? n.removeAttribute("data-theme") : n.setAttribute("data-theme", o.mode);
    const d = o.brand ? K(o.brand) : null;
    for (const v of Object.keys(j))
      d ? n.style.setProperty(`--brand-${v}`, d[`--brand-${v}`]) : n.style.removeProperty(`--brand-${v}`);
    const s = Number(o.font) || 1, c = s * (Number(o.density) || 1), y = (v, oe) => Object.fromEntries(Object.entries(v).map(([te, ne]) => [te, (ne * oe).toFixed(1)]));
    u(y(O, s), "px", s === 1), u(y(N, c), "px", c === 1), n.style.setProperty("--scale-text", s.toFixed(3)), n.style.setProperty("--scale-space", c.toFixed(3));
    const C = F.find((v) => v.id === o.surface) ?? F[0];
    C.light ? (n.style.setProperty("--page-surface", C.light), n.style.setProperty("--page-surface-dark", C.dark)) : (n.style.removeProperty("--page-surface"), n.style.removeProperty("--page-surface-dark"));
    const f = Y(o.fontFamily);
    f ? n.style.setProperty("--font-sans", f) : n.style.removeProperty("--font-sans");
    const x = Number.isFinite(o.radius) ? o.radius : B;
    u(q(x), "px", x === B);
    const L = Number.isFinite(o.shadow) ? o.shadow : D;
    u(X(L), "", L === D), m();
  }, h = {
    state: o,
    get open() {
      return a.open;
    },
    set open(n) {
      a.open = n;
    },
    get defaults() {
      return e;
    },
    get locked() {
      return a.locked;
    },
    swatches: Fe,
    fontStacks: _,
    webFonts: H,
    surfaces: F,
    set(n) {
      a.locked || Object.assign(o, n);
    },
    reset() {
      a.locked || Object.assign(o, e);
    },
    useDefaults(n, d) {
      const s = d?.enforce ? {} : a.locked ? r() : Object.fromEntries(V.filter((c) => o[c] !== e[c]).map((c) => [c, o[c]]));
      e = { ...U, ...Q(n) }, a.locked = !!d?.enforce, Object.assign(o, e, s);
    },
    apply: l,
    toggle(n) {
      a.open = n ?? !a.open;
    },
    exportTokens: () => {
      const n = ["/* Tokens exported from the theme panel — paste into packages/sapp-theme-default/src/hoff/tokens.css */"], d = o.brand ? K(o.brand) : null;
      if (d) for (const f of Object.keys(d)) n.push(`${f}: ${d[f]};`);
      const s = Number(o.font) || 1;
      if (s !== 1) for (const f of Object.keys(O)) n.push(`${f}: ${(O[f] * s).toFixed(1)}px;`);
      const c = s * (Number(o.density) || 1);
      if (c !== 1) for (const f of Object.keys(N)) n.push(`${f}: ${(N[f] * c).toFixed(1)}px;`);
      if (o.radius !== B) for (const [f, x] of Object.entries(q(o.radius))) n.push(`${f}: ${x}px;`);
      if (o.shadow !== D) for (const [f, x] of Object.entries(X(o.shadow))) n.push(`${f}: ${x};`);
      const y = F.find((f) => f.id === o.surface);
      y?.light && n.push(`--background: ${y.light};   /* dark: ${y.dark} */`);
      const C = Y(o.fontFamily);
      return C && n.push(`--font-sans: ${C};`), n.length === 1 && n.push("/* nothing differs from the defaults */"), n.join(`
`);
    }
  };
  return Z(o, l, { deep: !0 }), l(), h;
}
const Me = ce("ui", () => {
  const r = P([]);
  let i = 0;
  const e = /* @__PURE__ */ new Map(), o = (s) => {
    const c = s.id || ++i, y = { ...s, id: c, type: s.type || "info" };
    e.has(c) && (clearTimeout(e.get(c)), e.delete(c));
    const C = r.value.findIndex((x) => x.id === c);
    C !== -1 ? r.value[C] = y : r.value.push(y);
    const f = setTimeout(() => {
      a(c);
    }, s.duration || 5e3);
    e.set(c, f);
  }, a = (s) => {
    r.value = r.value.filter((c) => c.id !== s), e.has(s) && (clearTimeout(e.get(s)), e.delete(s));
  }, m = P(null), p = (s) => {
    console.log("💬 [uiStore] showMessage:", s.title), m.value = s;
  }, u = () => {
    console.log("💬 [uiStore] closeMessage"), m.value = null;
  }, l = P([]);
  let g = 0;
  return {
    toasts: r,
    showToast: o,
    removeToast: a,
    activeMessage: m,
    showMessage: p,
    closeMessage: u,
    activeDialogs: l,
    openDialog: (s) => {
      console.log("🏗️ [uiStore] openDialog:", s.title);
      const c = s.id || `dialog-${++g}`;
      return l.value.push({ ...s, id: c }), c;
    },
    closeDialog: (s) => {
      const c = l.value.find((y) => y.id === s);
      c?.onClose && c.onClose(), l.value = l.value.filter((y) => y.id !== s);
    },
    closeAllDialogs: () => {
      l.value.forEach((s) => s.onClose?.()), l.value = [];
    }
  };
}), Ee = {
  key: 0,
  class: "flex items-center gap-3"
}, Oe = { class: "modal-title !m-0" }, Ne = {
  key: 0,
  class: "py-2"
}, je = { class: "text-sm text-muted-foreground leading-relaxed mb-2" }, _e = {
  key: 0,
  class: "mt-4"
}, Ve = { class: "flex items-center justify-end gap-2 w-full" }, He = /* @__PURE__ */ re({
  __name: "MessageProvider",
  setup(r) {
    const i = ie("ui-store"), e = G(() => i?.activeMessage || null), o = P("");
    Z(e, (g) => {
      g?.type === "prompt" && (o.value = g.defaultValue || "");
    });
    const a = {
      info: { icon: ee, color: "text-info", bg: "bg-info-soft" },
      success: { icon: ge, color: "text-success", bg: "bg-success-soft" },
      warning: { icon: A, color: "text-warning", bg: "bg-warning-soft" },
      error: { icon: de, color: "text-danger", bg: "bg-danger-soft" },
      confirm: { icon: me, color: "text-primary", bg: "bg-primary-soft" },
      prompt: { icon: le, color: "text-primary", bg: "bg-primary-soft" }
    }, m = () => {
      i?.closeMessage();
    }, p = async () => {
      e.value?.type === "prompt" && !o.value?.trim() || (e.value?.onConfirm && (e.value.type === "prompt" ? await e.value.onConfirm(o.value) : await e.value.onConfirm()), m());
    }, u = () => {
      e.value?.onCancel && e.value.onCancel(), m();
    }, l = G(() => e.value ? a[e.value.type] || a.info : null);
    return (g, h) => (b(), I(S(g.$c("ui.modal")), {
      key: e.value?.title || "none",
      show: !!e.value,
      onClose: m,
      maxWidth: "max-w-md",
      zIndex: 99999
    }, {
      header: k(() => [
        e.value ? (b(), M("div", Ee, [
          w("div", {
            class: W(["w-10 h-10 rounded-lg flex items-center justify-center shrink-0", l.value?.bg])
          }, [
            (b(), I(S(l.value?.icon), {
              size: 20,
              "stroke-width": "2",
              class: W(l.value?.color)
            }, null, 8, ["class"]))
          ], 2),
          w("h3", Oe, T(e.value.title), 1)
        ])) : $("", !0)
      ]),
      footer: k(() => [
        w("div", Ve, [
          e.value?.type === "confirm" || e.value?.type === "prompt" ? (b(), I(S(g.$c("ui.button")), {
            key: 0,
            variant: "default",
            onClick: u
          }, {
            default: k(() => [
              z(T(e.value.cancelText || g.$t("common.cancel")), 1)
            ]),
            _: 1
          })) : $("", !0),
          (b(), I(S(g.$c("ui.button")), {
            variant: e.value?.type === "error" ? "danger" : "primary",
            onClick: p,
            disabled: e.value?.type === "prompt" && !o.value?.trim()
          }, {
            default: k(() => [
              z(T(e.value?.type === "prompt" ? g.$t("common.submit") : e.value?.confirmText || g.$t("common.understood")), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled"]))
        ])
      ]),
      default: k(() => [
        e.value ? (b(), M("div", Ne, [
          w("p", je, T(e.value.description), 1),
          e.value.type === "prompt" ? (b(), M("div", _e, [
            e.value.inputType === "textarea" ? (b(), I(S(g.$c("form.textarea")), {
              key: 0,
              modelValue: o.value,
              "onUpdate:modelValue": h[0] || (h[0] = (n) => o.value = n),
              placeholder: e.value.placeholder,
              rows: "4",
              class: "resize-none"
            }, null, 8, ["modelValue", "placeholder"])) : (b(), I(S(g.$c("form.input")), {
              key: 1,
              modelValue: o.value,
              "onUpdate:modelValue": h[1] || (h[1] = (n) => o.value = n),
              placeholder: e.value.placeholder,
              onKeyup: h[2] || (h[2] = ae((n) => o.value?.trim() ? p() : null, ["enter"]))
            }, null, 40, ["modelValue", "placeholder"]))
          ])) : $("", !0)
        ])) : $("", !0)
      ]),
      _: 1
    }, 40, ["show"]));
  }
}), qe = {
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
function Xe(...r) {
  return we(Ue(r));
}
class Le {
  id = "default";
  name = "Standard Enterprise Slate";
  register(i, e, o = {}) {
    const a = o.uiStore ?? Me(), m = Te(a), p = $e(a), u = se(), l = De();
    i.config.globalProperties.$message = m, i.config.globalProperties.$appState = u, i.config.globalProperties.$superApp = e, e.$appState = u, e.$themeConfig = l, i.config.globalProperties.$themeConfig = l, i.provide("$themeConfig", l), e.registerComponent({ id: "layout.theme-panel", category: "Shell UI", component: t(() => import("./chunks/ThemePanel-DO2Wq25u.js")) }), e.registerCommand({ id: "theme.customize", name: "Tuỳ chỉnh giao diện", category: "Theme", shortcut: "⌘⇧T", handler: () => l.toggle() }), e.registerCommand({ id: "theme.studio", name: "Theme Studio", description: "Trang tuỳ chỉnh giao diện đầy đủ", category: "Theme", handler: () => {
      e.$router?.push("/system/theme");
    } });
    const g = t(() => import("./chunks/Header-nzu9YQbH.js"));
    e.registerComponent({ id: "Header", category: "Shell UI", component: g }), e.registerComponent({ id: "layout.header", category: "Shell UI", component: g });
    const h = t(() => import("./chunks/Sidebar-CCmpwaOA.js"));
    e.registerComponent({ id: "Sidebar", category: "Shell UI", component: h }), e.registerComponent({ id: "layout.sidebar", category: "Shell UI", component: h });
    const n = t(() => import("./chunks/ModulePageLayout-CuSYrWur.js"));
    e.registerComponent({ id: "ModulePageLayout", category: "Shell UI", component: n }), e.registerComponent({ id: "layout.module-page", category: "Shell UI", component: n });
    const d = t(() => import("./chunks/ModuleHeader-BnrOpukT.js"));
    e.registerComponent({ id: "ModuleHeader", category: "Shell UI", component: d }), e.registerComponent({ id: "layout.module-header", category: "Shell UI", component: d });
    const s = t(() => import("./chunks/DualSidebarLayout-BH2tOx6j.js"));
    e.registerComponent({ id: "DualSidebarLayout", category: "Shell UI", component: s }), e.registerComponent({ id: "layout.dual-sidebar", category: "Shell UI", component: s });
    const c = t(() => import("./chunks/ErpCommandPalette-fx4Q0Amc.js"));
    return e.registerComponent({ id: "CommandPalette", category: "Shell UI", component: c }), e.registerComponent({ id: "layout.command-palette", category: "Shell UI", component: c }), e.registerComponent({ id: "layout.app-container", category: "Shell UI", component: t(() => import("./chunks/AppContainer-BpunbRdZ.js")) }), e.registerComponent({ id: "ThemeConnector", category: "Shell UI", component: t(() => import("./chunks/ThemeConnector-CUumAtRR.js")) }), e.registerComponent({ id: "ToastContainer", category: "Shell UI", component: t(() => import("./chunks/ToastContainer-JGwl3S_m.js")) }), e.registerComponent({ id: "MessageProvider", category: "Shell UI", component: He }), e.registerComponent({ id: "DialogProvider", category: "Shell UI", component: t(() => import("./chunks/DialogProvider-C21AipJt.js")) }), e.registerComponent({ id: "layout.action-bar", category: "Layout UI", component: t(() => import("./chunks/ErpActionBar-DR8NVTx-.js")) }), e.registerComponent({ id: "display.data-grid", category: "Display UI", component: t(() => import("./chunks/ErpDataGrid-A4UGQwRU.js")) }), e.registerComponent({ id: "form.entity-selector", category: "Form UI", component: t(() => import("./chunks/ErpEntitySelector-XLEStx_M.js")) }), e.registerComponent({ id: "ui.card", category: "UI Blocks", component: t(() => import("./chunks/Card-sv8WQzvB.js")) }), e.registerComponent({ id: "ui.button", category: "UI Blocks", component: t(() => import("./chunks/Button-Cud5Nfh1.js")) }), e.registerComponent({ id: "ui.button-copy", category: "UI Blocks", component: t(() => import("./chunks/ButtonCopy-DsdzXkaa.js")) }), e.registerComponent({ id: "ui.text", category: "UI Blocks", component: t(() => import("./chunks/Typography-CNI1yScN.js")) }), e.registerComponent({ id: "ui.skeleton", category: "UI Blocks", component: t(() => import("./chunks/Skeleton-CfLyDGWt.js")) }), e.registerComponent({ id: "form.input", category: "Form UI", component: t(() => import("./chunks/Input-B0IfgsVG.js")) }), e.registerComponent({ id: "form.input-number", category: "Form UI", component: t(() => import("./chunks/InputNumber-DBRTF-wJ.js")) }), e.registerComponent({ id: "form.switch", category: "Form UI", component: t(() => import("./chunks/InputSwitch-BPvOZo9w.js")) }), e.registerComponent({ id: "InputSwitch", category: "Form UI", component: t(() => import("./chunks/InputSwitch-BPvOZo9w.js")) }), e.registerComponent({ id: "form.textarea", category: "Form UI", component: t(() => import("./chunks/Textarea-BVKFbpBu.js")) }), e.registerComponent({ id: "form.field", category: "Form UI", component: t(() => import("./chunks/FormField-DnQICIpP.js")) }), e.registerComponent({ id: "ui.modal", category: "UI Blocks", component: t(() => import("./chunks/Modal-BVG4U5yl.js")) }), e.registerComponent({ id: "ui.search-input", category: "UI Blocks", component: t(() => import("./chunks/SearchInput-CHiFQN2g.js")) }), e.registerComponent({ id: "ui.avatar", category: "UI Blocks", component: t(() => import("./chunks/UserAvatar-DRE3opnT.js")) }), e.registerComponent({ id: "ui.badge", category: "UI Blocks", component: t(() => import("./chunks/Badge-ZzsVRpNl.js")) }), e.registerComponent({ id: "ui.alert", category: "UI Blocks", component: t(() => import("./chunks/Alert-DylOuBAF.js")) }), e.registerComponent({ id: "layout.section-header", category: "Layout UI", component: t(() => import("./chunks/SectionHeader-C8ufun_t.js")) }), e.registerComponent({ id: "layout.mini-app", category: "Layout UI", component: t(() => import("./chunks/MiniAppLayout-DGqGVVq6.js")) }), e.registerComponent({ id: "form.code-editor", category: "Form UI", component: t(() => import("./chunks/CodeEditor-0g7paalJ.js")) }), e.registerComponent({ id: "runtime.studio", category: "Form UI", component: t(() => import("./chunks/CodeEditor-0g7paalJ.js")) }), e.registerComponent({ id: "button.copy", category: "UI Blocks", component: t(() => import("./chunks/ButtonCopy-DsdzXkaa.js")) }), e.registerComponent({ id: "ui.popover", category: "UI Blocks", component: t(() => import("./chunks/Popover-DgBGd8bu.js")) }), e.registerComponent({ id: "ui.popover-trigger", category: "UI Blocks", component: t(() => import("./chunks/PopoverTrigger-CTa-i7wG.js")) }), e.registerComponent({ id: "ui.popover-content", category: "UI Blocks", component: t(() => import("./chunks/PopoverContent-0CCuXPfd.js")) }), e.registerComponent({ id: "ui.context-menu", category: "UI Blocks", component: t(() => import("./chunks/ContextMenu-D1g_2xmd.js")) }), e.registerComponent({ id: "ui.list-manager", category: "UI Blocks", component: t(() => import("./chunks/ListManager-BbjjcqOm.js")) }), e.registerComponent({ id: "ui.dropdown", category: "UI Blocks", component: t(() => import("./chunks/Dropdown-wKllpTqE.js")) }), e.registerComponent({ id: "display.chart", category: "Display UI", component: t(() => import("./chunks/InsightChart-BlF0mgf_.js")) }), e.registerComponent({ id: "display.data-table", category: "Display UI", component: t(() => import("./chunks/DataTable-CihzO6Ph.js")) }), e.registerComponent({ id: "display.column-settings", category: "Display UI", component: t(() => import("./chunks/ColumnSettings-7c2CSqKT.js")) }), e.registerComponent({ id: "display.simple-pagination", category: "Display UI", component: t(() => import("./chunks/SimplePagination-DfueDTCj.js")) }), e.registerComponent({ id: "Table", category: "Table UI", component: t(() => import("./chunks/Table-BLZjeVVX.js")) }), e.registerComponent({ id: "TableBody", category: "Table UI", component: t(() => import("./chunks/TableBody-B62z8Jcx.js")) }), e.registerComponent({ id: "TableCell", category: "Table UI", component: t(() => import("./chunks/TableCell-DEzqxj9e.js")) }), e.registerComponent({ id: "TableHead", category: "Table UI", component: t(() => import("./chunks/TableHead-DFpbn3fx.js")) }), e.registerComponent({ id: "TableHeader", category: "Table UI", component: t(() => import("./chunks/TableHeader-C6oE9KYG.js")) }), e.registerComponent({ id: "TableRow", category: "Table UI", component: t(() => import("./chunks/TableRow-BT1dHX61.js")) }), e.registerComponent({ id: "form.select", category: "Form UI", component: t(() => import("./chunks/Select-Br3bDwg3.js")) }), e.registerComponent({ id: "form.select-content", category: "Form UI", component: t(() => import("./chunks/SelectContent-DJPU2Dbi.js")) }), e.registerComponent({ id: "form.select-item", category: "Form UI", component: t(() => import("./chunks/SelectItem-ExBV4X2S.js")) }), e.registerComponent({ id: "form.select-trigger", category: "Form UI", component: t(() => import("./chunks/SelectTrigger-VqHMXKN7.js")) }), e.registerComponent({ id: "form.select-value", category: "Form UI", component: t(() => import("./chunks/SelectValue-Bo98YXZE.js")) }), e.registerComponent({ id: "ui.icon.shield-check", category: "Icons", component: fe }), e.registerComponent({ id: "ui.icon.user", category: "Icons", component: ue }), e.registerComponent({ id: "ui.icon.lock", category: "Icons", component: pe }), e.registerComponent({ id: "ui.icon.arrow-right", category: "Icons", component: ye }), e.registerComponent({ id: "ui.icon.search", category: "Icons", component: he }), e.registerComponent({ id: "ui.icon.settings", category: "Icons", component: Ce }), e.registerComponent({ id: "ui.icon.bell", category: "Icons", component: be }), e.registerComponent({ id: "ui.icon.logout", category: "Icons", component: xe }), e.registerComponent({ id: "ui.icon.chevron-down", category: "Icons", component: ve }), e.registerComponent({ id: "ui.icon.chevron-right", category: "Icons", component: Ie }), e.registerComponent({ id: "ui.icon.check", category: "Icons", component: Se }), e.registerComponent({ id: "ui.icon.alert-triangle", category: "Icons", component: A }), e.registerComponent({ id: "ui.icon.info", category: "Icons", component: ee }), e.registerComponent({ id: "ui.icon.x", category: "Icons", component: ke }), { messageService: m, dialogService: p, appState: u, themeConfig: l, uiStore: a };
  }
}
const Ye = new Le();
export {
  Le as DefaultTheme,
  _ as FONT_STACKS,
  Fe as SWATCHES,
  qe as THEME,
  U as THEME_CONFIG_DEFAULTS,
  K as brandScale,
  Xe as cn,
  $e as createDialogService,
  Te as createMessageService,
  De as createThemeConfig,
  Ye as defaultTheme,
  Me as useUiStore
};
//# sourceMappingURL=index.js.map
