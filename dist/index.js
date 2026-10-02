import { reactive as J, watch as V, ref as D, defineComponent as Ce, inject as be, computed as K, openBlock as x, createBlock as k, resolveDynamicComponent as I, withCtx as U, createElementBlock as O, createElementVNode as T, toDisplayString as $, withKeys as xe, createCommentVNode as B, createTextVNode as q, normalizeClass as X, defineAsyncComponent as t } from "vue";
import { createAppState as ve } from "@nhphero/vue-sapp";
import { defineStore as Se } from "pinia";
import { MessageSquare as re, HelpCircle as ke, Zap as ae, AlertTriangle as ie, CheckCircle2 as Ie, Info as se, Headphones as Ue, Video as we, Camera as Te, Image as $e, Palette as Be, Flag as Pe, Sparkles as De, Heart as Fe, Star as Me, Rocket as Oe, Settings as ce, Lock as le, KeyRound as Ee, Key as Ne, Car as je, Truck as He, Tags as Le, Tag as Re, ShoppingBag as _e, ShoppingCart as Ve, Megaphone as Ge, Phone as We, Mail as ze, Bell as me, Clock as Je, CalendarDays as Ke, Calendar as qe, Target as Xe, Gauge as Ye, Activity as Ze, TrendingUp as Qe, PieChart as Ae, BarChart3 as eo, Gavel as oo, Scale as to, PiggyBank as no, DollarSign as ro, Banknote as ao, Receipt as io, CreditCard as so, Wallet as co, Award as lo, GraduationCap as mo, Handshake as go, Briefcase as fo, Contact as uo, UserCog as po, User as de, Users as ho, Compass as yo, Map as Co, MapPin as bo, Wrench as xo, Hammer as vo, Ruler as So, HardHat as ko, Warehouse as Io, Store as Uo, Factory as wo, Landmark as To, Hotel as $o, Home as Bo, Building2 as Po, Building as Do, ListChecks as Fo, ClipboardCheck as Mo, ClipboardList as Oo, Archive as Eo, FolderOpen as No, Folder as jo, Files as Ho, FileText as Lo, Book as Ro, BookOpen as _o, GitBranch as Vo, Workflow as Go, Network as Wo, Braces as zo, Code as Jo, Cloud as Ko, Server as qo, Database as Xo, Cpu as Yo, Terminal as Zo, Boxes as Qo, Package as Ao, Box as et, ShieldCheck as ge, Shield as ot, Globe as tt, LayoutDashboard as nt, LayoutGrid as fe, Layers as rt, ArrowRight as at, Search as it, LogOut as st, ChevronDown as ct, ChevronRight as lt, Check as mt, X as dt } from "lucide-vue-next";
import { clsx as gt } from "clsx";
import { twMerge as ft } from "tailwind-merge";
function ut(n) {
  const i = (e) => (o, s, g = {}) => n.showToast({ id: g.id || o, message: s ? `${o}: ${s}` : o, type: e, ...g });
  return {
    success: i("success"),
    error: i("error"),
    info: i("info"),
    warning: i("warning"),
    toast: (e) => n.showToast(e),
    alert: (e) => n.showMessage(e),
    confirm: (e) => new Promise((o) => {
      n.showMessage({
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
      n.showMessage({
        ...e,
        type: "prompt",
        onConfirm: (s) => {
          e.onConfirm && e.onConfirm(s), o(s);
        },
        onCancel: () => {
          e.onCancel && e.onCancel(), o(null);
        }
      });
    })
  };
}
function pt(n) {
  return {
    open: (i) => n.openDialog(i),
    close: (i) => n.closeDialog(i),
    closeAll: () => n.closeAllDialogs()
  };
}
const E = "sapp.theme.config", N = { "--text-xs": 12, "--text-sm": 14, "--text-base": 16, "--text-lg": 18, "--text-xl": 20, "--text-2xl": 24, "--text-3xl": 30 }, j = { "--sp-1": 4, "--sp-2": 8, "--sp-3": 12, "--sp-4": 16, "--sp-5": 24, "--sp-6": 32, "--sp-7": 48, "--sp-8": 64, "--touch": 44, "--header-h": 52 }, L = { 50: 96, 100: 92, 200: 84, 300: 72, 400: 58, 500: 47, 600: 39, 700: 32, 800: 27, 900: 23, 950: 13 }, F = 6, M = 1, ht = [
  { name: "Teal", hex: "#256B65" },
  { name: "Blue", hex: "#2563EB" },
  { name: "Indigo", hex: "#4F46E5" },
  { name: "Violet", hex: "#7C3AED" },
  { name: "Rose", hex: "#E11D48" },
  { name: "Amber", hex: "#B45309" },
  { name: "Green", hex: "#15803D" },
  { name: "Slate", hex: "#3D4B54" }
], G = {
  Roboto: "Roboto:wght@400;500;700",
  // the default
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
}, Y = /* @__PURE__ */ new Set(), yt = (n) => {
  const i = G[n];
  if (!i || Y.has(n) || typeof document > "u") return;
  Y.add(n);
  const e = document.createElement("link");
  e.rel = "stylesheet", e.href = `https://fonts.googleapis.com/css2?family=${i}&display=swap`, e.dataset.sappFont = n, document.head.appendChild(e);
}, P = [
  { id: "", label: "theme.surfaceDefault", light: "", dark: "" },
  { id: "paper", label: "theme.surfacePaper", light: "var(--gray-100)", dark: "#0B1116" },
  { id: "deep", label: "theme.surfaceDeep", light: "var(--gray-300)", dark: "#06090C" },
  { id: "tint", label: "theme.surfaceTint", light: "var(--brand-100)", dark: "var(--brand-950)" }
], Z = [
  { id: "", label: "theme.contrastDefault" },
  { id: "high", label: "theme.contrastHigh" },
  { id: "max", label: "theme.contrastMax" }
], Q = [
  { id: "", label: "theme.headerLight" },
  { id: "tint", label: "theme.headerTint" },
  { id: "brand", label: "theme.headerBrand" },
  { id: "gradient", label: "theme.headerGradient" },
  { id: "dark", label: "theme.headerDark" }
], R = {
  // The machine's own UI font (the default is Roboto, so this one is spelled out).
  "System UI": 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  "Neo-Grotesque": '"Inter", "Roboto", "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif',
  Humanist: '"Seravek", "Gill Sans Nova", "Ubuntu", "Calibri", "DejaVu Sans", "Segoe UI", sans-serif',
  Geometric: '"Avenir", "Avenir Next", "Montserrat", "Corbel", "URW Gothic", "Poppins", sans-serif',
  Classical: '"Optima", "Candara", "Noto Sans", "Source Sans 3", "Segoe UI", sans-serif',
  Rounded: 'ui-rounded, "Hiragino Maru Gothic ProN", "Quicksand", "Comfortaa", "Varela Round", sans-serif',
  Serif: '"Charter", "Bitstream Charter", "Sitka Text", "Cambria", Georgia, serif'
}, w = Object.freeze({
  mode: "light",
  brand: "",
  font: 1,
  density: 1,
  fontFamily: "Roboto",
  radius: F,
  shadow: M,
  surface: "",
  contrast: "",
  header: ""
}), Ct = (n) => {
  const i = /^#?([0-9a-f]{6})$/i.exec(n);
  if (!i) return null;
  const e = parseInt(i[1], 16), o = (e >> 16) / 255, s = (e >> 8 & 255) / 255, g = (e & 255) / 255, h = Math.max(o, s, g), u = Math.min(o, s, g), l = (h + u) / 2;
  let m = 0, C = 0;
  if (h !== u) {
    const y = h - u;
    C = l > 0.5 ? y / (2 - h - u) : y / (h + u), m = h === o ? (s - g) / y + (s < g ? 6 : 0) : h === s ? (g - o) / y + 2 : (o - s) / y + 4, m *= 60;
  }
  return { h: m, s: C * 100, l: l * 100 };
}, A = (n) => {
  const i = Ct(n);
  if (!i) return null;
  const e = {};
  for (const o of Object.keys(L)) {
    const s = L[o], g = i.s * (s > 85 ? 0.55 : s > 70 ? 0.75 : 1);
    e[`--brand-${o}`] = `hsl(${i.h.toFixed(0)} ${g.toFixed(0)}% ${s}%)`;
  }
  return e;
}, ee = (n) => ({ "--radius-sm": Math.max(0, Math.round(n * 0.5)), "--radius": n, "--radius-lg": Math.round(n * 1.7) }), oe = (n) => {
  if (n <= 0) return { "--shadow-sm": "none", "--shadow": "none", "--shadow-lg": "none" };
  const i = (e) => Math.min(0.6, e * n).toFixed(3);
  return {
    "--shadow-sm": `0 1px 2px rgba(0,0,0,${i(0.1)})`,
    "--shadow": `0 1px 2px rgba(0,0,0,${i(0.08)}), 0 2px 8px rgba(0,0,0,${i(0.07)})`,
    "--shadow-lg": `0 4px 14px rgba(0,0,0,${i(0.1)}), 0 14px 36px rgba(0,0,0,${i(0.13)})`
  };
}, te = (n) => /^[A-Za-z][\w-]*$/.test(n) ? n : `"${n.replace(/"/g, "")}"`, ne = (n) => n ? G[n] ? (yt(n), `${te(n)}, sans-serif`) : R[n] != null ? R[n] : `${te(n)}, sans-serif` : "", _ = Object.keys(w), H = (n) => {
  const i = {};
  for (const e of _)
    n?.[e] !== void 0 && typeof n[e] == typeof w[e] && (i[e] = n[e]);
  return i;
};
function bt() {
  const n = () => {
    try {
      return H(JSON.parse(localStorage.getItem(E) || "{}"));
    } catch {
      return {};
    }
  }, i = Object.fromEntries(Object.entries(n()).filter(([a, r]) => r !== w[a]));
  let e = { ...w };
  const o = J({ ...e, ...i }), s = J({ open: !1, locked: !1 }), g = () => {
    if (s.locked) return;
    const a = Object.fromEntries(_.filter((r) => o[r] !== e[r]).map((r) => [r, o[r]]));
    try {
      Object.keys(a).length ? localStorage.setItem(E, JSON.stringify(a)) : localStorage.removeItem(E);
    } catch {
    }
  }, h = () => document.documentElement, u = (a, r = "", c = !1) => {
    const d = h().style;
    for (const p of Object.keys(a)) c ? d.removeProperty(p) : d.setProperty(p, `${a[p]}${r}`);
  };
  let l = null;
  const m = () => {
    const a = h(), r = l ? { ...o, ...l } : o;
    r.mode === "system" ? a.removeAttribute("data-theme") : a.setAttribute("data-theme", r.mode);
    const c = r.brand ? A(r.brand) : null;
    for (const b of Object.keys(L))
      c ? a.style.setProperty(`--brand-${b}`, c[`--brand-${b}`]) : a.style.removeProperty(`--brand-${b}`);
    const d = Number(r.font) || 1, p = d * (Number(r.density) || 1), v = (b, pe) => Object.fromEntries(Object.entries(b).map(([he, ye]) => [he, (ye * pe).toFixed(1)]));
    u(v(N, d), "px", d === 1), u(v(j, p), "px", p === 1), a.style.setProperty("--scale-text", d.toFixed(3)), a.style.setProperty("--scale-space", p.toFixed(3));
    const f = P.find((b) => b.id === r.surface) ?? P[0];
    f.light ? (a.style.setProperty("--page-surface", f.light), a.style.setProperty("--page-surface-dark", f.dark)) : (a.style.removeProperty("--page-surface"), a.style.removeProperty("--page-surface-dark")), Z.some((b) => b.id && b.id === r.contrast) ? a.setAttribute("data-contrast", r.contrast) : a.removeAttribute("data-contrast"), Q.some((b) => b.id && b.id === r.header) ? a.setAttribute("data-header", r.header) : a.removeAttribute("data-header");
    const S = ne(r.fontFamily);
    S ? a.style.setProperty("--font-sans", S) : a.style.removeProperty("--font-sans");
    const W = Number.isFinite(r.radius) ? r.radius : F;
    u(ee(W), "px", W === F);
    const z = Number.isFinite(r.shadow) ? r.shadow : M;
    u(oe(z), "", z === M), l || g();
  }, y = {
    state: o,
    get open() {
      return s.open;
    },
    set open(a) {
      s.open = a;
    },
    get defaults() {
      return e;
    },
    get locked() {
      return s.locked;
    },
    swatches: ht,
    fontStacks: R,
    webFonts: G,
    surfaces: P,
    contrasts: Z,
    headers: Q,
    set(a) {
      s.locked || Object.assign(o, a);
    },
    reset() {
      s.locked || Object.assign(o, e);
    },
    useDefaults(a, r) {
      const c = r?.enforce ? {} : s.locked ? n() : Object.fromEntries(_.filter((d) => o[d] !== e[d]).map((d) => [d, o[d]]));
      e = { ...w, ...H(a) }, s.locked = !!r?.enforce, Object.assign(o, e, c);
    },
    preview(a) {
      l = a ? H(a) : null, m();
    },
    apply: m,
    toggle(a) {
      s.open = a ?? !s.open;
    },
    exportTokens: () => {
      const a = ["/* Tokens exported from the theme panel — paste into packages/sapp-theme-default/src/hoff/tokens.css */"], r = o.brand ? A(o.brand) : null;
      if (r) for (const f of Object.keys(r)) a.push(`${f}: ${r[f]};`);
      const c = Number(o.font) || 1;
      if (c !== 1) for (const f of Object.keys(N)) a.push(`${f}: ${(N[f] * c).toFixed(1)}px;`);
      const d = c * (Number(o.density) || 1);
      if (d !== 1) for (const f of Object.keys(j)) a.push(`${f}: ${(j[f] * d).toFixed(1)}px;`);
      if (o.radius !== F) for (const [f, S] of Object.entries(ee(o.radius))) a.push(`${f}: ${S}px;`);
      if (o.shadow !== M) for (const [f, S] of Object.entries(oe(o.shadow))) a.push(`${f}: ${S};`);
      const p = P.find((f) => f.id === o.surface);
      p?.light && a.push(`--background: ${p.light};   /* dark: ${p.dark} */`);
      const v = ne(o.fontFamily);
      return v && a.push(`--font-sans: ${v};`), o.header && a.push(`/* header: ${o.header} — <html data-header="${o.header}"> (the [data-header] values of tokens.css) */`), o.contrast && a.push(`/* contrast: ${o.contrast} — the [data-contrast="${o.contrast}"] values of tokens.css */`), a.length === 1 && a.push("/* nothing differs from the defaults */"), a.join(`
`);
    }
  };
  return V(o, m, { deep: !0 }), m(), y;
}
const xt = Se("ui", () => {
  const n = D([]);
  let i = 0;
  const e = /* @__PURE__ */ new Map(), o = (r) => {
    const c = r.id || ++i, d = { ...r, id: c, type: r.type || "info" };
    e.has(c) && (clearTimeout(e.get(c)), e.delete(c));
    const p = n.value.findIndex((f) => f.id === c);
    p !== -1 ? n.value[p] = d : n.value.push(d);
    const v = setTimeout(() => {
      s(c);
    }, r.duration || 5e3);
    e.set(c, v);
  }, s = (r) => {
    n.value = n.value.filter((c) => c.id !== r), e.has(r) && (clearTimeout(e.get(r)), e.delete(r));
  }, g = D(null), h = (r) => {
    console.log("💬 [uiStore] showMessage:", r.title), g.value = r;
  }, u = () => {
    console.log("💬 [uiStore] closeMessage"), g.value = null;
  }, l = D([]);
  let m = 0;
  return {
    toasts: n,
    showToast: o,
    removeToast: s,
    activeMessage: g,
    showMessage: h,
    closeMessage: u,
    activeDialogs: l,
    openDialog: (r) => {
      console.log("🏗️ [uiStore] openDialog:", r.title);
      const c = r.id || `dialog-${++m}`;
      return l.value.push({ ...r, id: c }), c;
    },
    closeDialog: (r) => {
      const c = l.value.find((d) => d.id === r);
      c?.onClose && c.onClose(), l.value = l.value.filter((d) => d.id !== r);
    },
    closeAllDialogs: () => {
      l.value.forEach((r) => r.onClose?.()), l.value = [];
    }
  };
}), vt = {
  key: 0,
  class: "flex items-center gap-3"
}, St = { class: "modal-title !m-0" }, kt = {
  key: 0,
  class: "py-2"
}, It = { class: "text-sm text-muted-foreground leading-relaxed mb-2" }, Ut = {
  key: 0,
  class: "mt-4"
}, wt = { class: "flex items-center justify-end gap-2 w-full" }, Tt = /* @__PURE__ */ Ce({
  __name: "MessageProvider",
  setup(n) {
    const i = be("ui-store"), e = K(() => i?.activeMessage || null), o = D("");
    V(e, (m) => {
      m?.type === "prompt" && (o.value = m.defaultValue || "");
    });
    const s = {
      info: { icon: se, color: "text-info", bg: "bg-info-soft" },
      success: { icon: Ie, color: "text-success", bg: "bg-success-soft" },
      warning: { icon: ie, color: "text-warning", bg: "bg-warning-soft" },
      error: { icon: ae, color: "text-danger", bg: "bg-danger-soft" },
      confirm: { icon: ke, color: "text-primary", bg: "bg-primary-soft" },
      prompt: { icon: re, color: "text-primary", bg: "bg-primary-soft" }
    }, g = () => {
      i?.closeMessage();
    }, h = async () => {
      e.value?.type === "prompt" && !o.value?.trim() || (e.value?.onConfirm && (e.value.type === "prompt" ? await e.value.onConfirm(o.value) : await e.value.onConfirm()), g());
    }, u = () => {
      e.value?.onCancel && e.value.onCancel(), g();
    }, l = K(() => e.value ? s[e.value.type] || s.info : null);
    return (m, C) => (x(), k(I(m.$c("ui.modal")), {
      key: e.value?.title || "none",
      show: !!e.value,
      onClose: g,
      maxWidth: "max-w-md",
      zIndex: 99999
    }, {
      header: U(() => [
        e.value ? (x(), O("div", vt, [
          T("div", {
            class: X(["w-10 h-10 rounded-lg flex items-center justify-center shrink-0", l.value?.bg])
          }, [
            (x(), k(I(l.value?.icon), {
              size: 20,
              "stroke-width": "2",
              class: X(l.value?.color)
            }, null, 8, ["class"]))
          ], 2),
          T("h3", St, $(e.value.title), 1)
        ])) : B("", !0)
      ]),
      footer: U(() => [
        T("div", wt, [
          e.value?.type === "confirm" || e.value?.type === "prompt" ? (x(), k(I(m.$c("ui.button")), {
            key: 0,
            variant: "default",
            onClick: u
          }, {
            default: U(() => [
              q($(e.value.cancelText || m.$t("common.cancel")), 1)
            ]),
            _: 1
          })) : B("", !0),
          (x(), k(I(m.$c("ui.button")), {
            variant: e.value?.type === "error" ? "danger" : "primary",
            onClick: h,
            disabled: e.value?.type === "prompt" && !o.value?.trim()
          }, {
            default: U(() => [
              q($(e.value?.type === "prompt" ? m.$t("common.submit") : e.value?.confirmText || m.$t("common.understood")), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled"]))
        ])
      ]),
      default: U(() => [
        e.value ? (x(), O("div", kt, [
          T("p", It, $(e.value.description), 1),
          e.value.type === "prompt" ? (x(), O("div", Ut, [
            e.value.inputType === "textarea" ? (x(), k(I(m.$c("form.textarea")), {
              key: 0,
              modelValue: o.value,
              "onUpdate:modelValue": C[0] || (C[0] = (y) => o.value = y),
              placeholder: e.value.placeholder,
              rows: "4",
              class: "resize-none"
            }, null, 8, ["modelValue", "placeholder"])) : (x(), k(I(m.$c("form.input")), {
              key: 1,
              modelValue: o.value,
              "onUpdate:modelValue": C[1] || (C[1] = (y) => o.value = y),
              placeholder: e.value.placeholder,
              onKeyup: C[2] || (C[2] = xe((y) => o.value?.trim() ? h() : null, ["enter"]))
            }, null, 40, ["modelValue", "placeholder"]))
          ])) : B("", !0)
        ])) : B("", !0)
      ]),
      _: 1
    }, 40, ["show"]));
  }
}), Et = {
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
}, ue = {
  Layers: rt,
  LayoutGrid: fe,
  LayoutDashboard: nt,
  Globe: tt,
  Shield: ot,
  ShieldCheck: ge,
  Zap: ae,
  Box: et,
  Package: Ao,
  Boxes: Qo,
  Terminal: Zo,
  Cpu: Yo,
  Database: Xo,
  Server: qo,
  Cloud: Ko,
  Code: Jo,
  Braces: zo,
  Network: Wo,
  Workflow: Go,
  GitBranch: Vo,
  BookOpen: _o,
  Book: Ro,
  FileText: Lo,
  Files: Ho,
  Folder: jo,
  FolderOpen: No,
  Archive: Eo,
  ClipboardList: Oo,
  ClipboardCheck: Mo,
  ListChecks: Fo,
  Building: Do,
  Building2: Po,
  Home: Bo,
  Hotel: $o,
  Landmark: To,
  Factory: wo,
  Store: Uo,
  Warehouse: Io,
  HardHat: ko,
  Ruler: So,
  Hammer: vo,
  Wrench: xo,
  MapPin: bo,
  Map: Co,
  Compass: yo,
  Users: ho,
  User: de,
  UserCog: po,
  Contact: uo,
  Briefcase: fo,
  Handshake: go,
  GraduationCap: mo,
  Award: lo,
  Wallet: co,
  CreditCard: so,
  Receipt: io,
  Banknote: ao,
  DollarSign: ro,
  PiggyBank: no,
  Scale: to,
  Gavel: oo,
  BarChart3: eo,
  PieChart: Ae,
  TrendingUp: Qe,
  Activity: Ze,
  Gauge: Ye,
  Target: Xe,
  Calendar: qe,
  CalendarDays: Ke,
  Clock: Je,
  Bell: me,
  Mail: ze,
  MessageSquare: re,
  Phone: We,
  Megaphone: Ge,
  ShoppingCart: Ve,
  ShoppingBag: _e,
  Tag: Re,
  Tags: Le,
  Truck: He,
  Car: je,
  Key: Ne,
  KeyRound: Ee,
  Lock: le,
  Settings: ce,
  Rocket: Oe,
  Star: Me,
  Heart: Fe,
  Sparkles: De,
  Flag: Pe,
  Palette: Be,
  Image: $e,
  Camera: Te,
  Video: we,
  Headphones: Ue
}, Nt = Object.keys(ue), jt = (n) => n && ue[n] || fe;
function Ht(...n) {
  return ft(gt(n));
}
class $t {
  id = "default";
  name = "Standard Enterprise Slate";
  register(i, e, o = {}) {
    const s = o.uiStore ?? xt(), g = ut(s), h = pt(s), u = ve(), l = bt();
    i.config.globalProperties.$message = g, i.config.globalProperties.$appState = u, i.config.globalProperties.$superApp = e, e.$appState = u, e.$themeConfig = l, i.config.globalProperties.$themeConfig = l, i.provide("$themeConfig", l), V(() => JSON.stringify(e.state?.platformConfig?.look ?? null), (d) => {
      const p = JSON.parse(d);
      p && l.useDefaults(p, { enforce: p.enforce === !0 });
    }, { immediate: !0 }), e.registerComponent({ id: "layout.theme-panel", category: "Shell UI", component: t(() => import("./chunks/ThemePanel-x3IBQrbd.js")) }), e.registerCommand({ id: "theme.customize", name: "Tuỳ chỉnh giao diện", category: "Theme", shortcut: "⌘⇧T", handler: () => l.toggle() }), e.registerCommand({ id: "theme.studio", name: "Theme Studio", description: "Trang tuỳ chỉnh giao diện đầy đủ", category: "Theme", handler: () => {
      e.$router?.push("/system/theme");
    } });
    const m = t(() => import("./chunks/Header-BFHOpJgR.js"));
    e.registerComponent({ id: "Header", category: "Shell UI", component: m }), e.registerComponent({ id: "layout.header", category: "Shell UI", component: m });
    const C = t(() => import("./chunks/Sidebar-CCmpwaOA.js"));
    e.registerComponent({ id: "Sidebar", category: "Shell UI", component: C }), e.registerComponent({ id: "layout.sidebar", category: "Shell UI", component: C });
    const y = t(() => import("./chunks/ModulePageLayout-CuSYrWur.js"));
    e.registerComponent({ id: "ModulePageLayout", category: "Shell UI", component: y }), e.registerComponent({ id: "layout.module-page", category: "Shell UI", component: y });
    const a = t(() => import("./chunks/ModuleHeader-BnrOpukT.js"));
    e.registerComponent({ id: "ModuleHeader", category: "Shell UI", component: a }), e.registerComponent({ id: "layout.module-header", category: "Shell UI", component: a });
    const r = t(() => import("./chunks/DualSidebarLayout-BH2tOx6j.js"));
    e.registerComponent({ id: "DualSidebarLayout", category: "Shell UI", component: r }), e.registerComponent({ id: "layout.dual-sidebar", category: "Shell UI", component: r });
    const c = t(() => import("./chunks/ErpCommandPalette-fx4Q0Amc.js"));
    return e.registerComponent({ id: "CommandPalette", category: "Shell UI", component: c }), e.registerComponent({ id: "layout.command-palette", category: "Shell UI", component: c }), e.registerComponent({ id: "layout.app-container", category: "Shell UI", component: t(() => import("./chunks/AppContainer-1auGMDoE.js")) }), e.registerComponent({ id: "ThemeConnector", category: "Shell UI", component: t(() => import("./chunks/ThemeConnector-5EOVn-zh.js")) }), e.registerComponent({ id: "ToastContainer", category: "Shell UI", component: t(() => import("./chunks/ToastContainer-JGwl3S_m.js")) }), e.registerComponent({ id: "MessageProvider", category: "Shell UI", component: Tt }), e.registerComponent({ id: "DialogProvider", category: "Shell UI", component: t(() => import("./chunks/DialogProvider-C21AipJt.js")) }), e.registerComponent({ id: "layout.action-bar", category: "Layout UI", component: t(() => import("./chunks/ErpActionBar-DR8NVTx-.js")) }), e.registerComponent({ id: "display.data-grid", category: "Display UI", component: t(() => import("./chunks/ErpDataGrid-A4UGQwRU.js")) }), e.registerComponent({ id: "form.entity-selector", category: "Form UI", component: t(() => import("./chunks/ErpEntitySelector-XLEStx_M.js")) }), e.registerComponent({ id: "ui.card", category: "UI Blocks", component: t(() => import("./chunks/Card-sv8WQzvB.js")) }), e.registerComponent({ id: "ui.button", category: "UI Blocks", component: t(() => import("./chunks/Button-Cud5Nfh1.js")) }), e.registerComponent({ id: "ui.button-copy", category: "UI Blocks", component: t(() => import("./chunks/ButtonCopy-DsdzXkaa.js")) }), e.registerComponent({ id: "ui.text", category: "UI Blocks", component: t(() => import("./chunks/Typography-CNI1yScN.js")) }), e.registerComponent({ id: "ui.skeleton", category: "UI Blocks", component: t(() => import("./chunks/Skeleton-CfLyDGWt.js")) }), e.registerComponent({ id: "form.input", category: "Form UI", component: t(() => import("./chunks/Input-B0IfgsVG.js")) }), e.registerComponent({ id: "form.input-number", category: "Form UI", component: t(() => import("./chunks/InputNumber-DBRTF-wJ.js")) }), e.registerComponent({ id: "form.switch", category: "Form UI", component: t(() => import("./chunks/InputSwitch-BPvOZo9w.js")) }), e.registerComponent({ id: "InputSwitch", category: "Form UI", component: t(() => import("./chunks/InputSwitch-BPvOZo9w.js")) }), e.registerComponent({ id: "form.textarea", category: "Form UI", component: t(() => import("./chunks/Textarea-BVKFbpBu.js")) }), e.registerComponent({ id: "form.icon-picker", category: "Form UI", component: t(() => import("./chunks/IconPicker-DbgxD0io.js")) }), e.registerComponent({ id: "ui.app-icon", category: "UI Blocks", component: t(() => import("./chunks/AppIcon-CZVJSONO.js")) }), e.registerComponent({ id: "form.field", category: "Form UI", component: t(() => import("./chunks/FormField-DnQICIpP.js")) }), e.registerComponent({ id: "ui.modal", category: "UI Blocks", component: t(() => import("./chunks/Modal-BVG4U5yl.js")) }), e.registerComponent({ id: "ui.search-input", category: "UI Blocks", component: t(() => import("./chunks/SearchInput-CHiFQN2g.js")) }), e.registerComponent({ id: "ui.avatar", category: "UI Blocks", component: t(() => import("./chunks/UserAvatar-DRE3opnT.js")) }), e.registerComponent({ id: "ui.badge", category: "UI Blocks", component: t(() => import("./chunks/Badge-ZzsVRpNl.js")) }), e.registerComponent({ id: "ui.alert", category: "UI Blocks", component: t(() => import("./chunks/Alert-DylOuBAF.js")) }), e.registerComponent({ id: "layout.section-header", category: "Layout UI", component: t(() => import("./chunks/SectionHeader-C8ufun_t.js")) }), e.registerComponent({ id: "layout.mini-app", category: "Layout UI", component: t(() => import("./chunks/MiniAppLayout-Cmd1kJV6.js")) }), e.registerComponent({ id: "form.code-editor", category: "Form UI", component: t(() => import("./chunks/CodeEditor-0g7paalJ.js")) }), e.registerComponent({ id: "runtime.studio", category: "Form UI", component: t(() => import("./chunks/CodeEditor-0g7paalJ.js")) }), e.registerComponent({ id: "button.copy", category: "UI Blocks", component: t(() => import("./chunks/ButtonCopy-DsdzXkaa.js")) }), e.registerComponent({ id: "ui.popover", category: "UI Blocks", component: t(() => import("./chunks/Popover-DgBGd8bu.js")) }), e.registerComponent({ id: "ui.popover-trigger", category: "UI Blocks", component: t(() => import("./chunks/PopoverTrigger-CTa-i7wG.js")) }), e.registerComponent({ id: "ui.popover-content", category: "UI Blocks", component: t(() => import("./chunks/PopoverContent-0CCuXPfd.js")) }), e.registerComponent({ id: "ui.context-menu", category: "UI Blocks", component: t(() => import("./chunks/ContextMenu-D1g_2xmd.js")) }), e.registerComponent({ id: "ui.list-manager", category: "UI Blocks", component: t(() => import("./chunks/ListManager-BbjjcqOm.js")) }), e.registerComponent({ id: "ui.dropdown", category: "UI Blocks", component: t(() => import("./chunks/Dropdown-wKllpTqE.js")) }), e.registerComponent({ id: "display.chart", category: "Display UI", component: t(() => import("./chunks/InsightChart-BlF0mgf_.js")) }), e.registerComponent({ id: "display.data-table", category: "Display UI", component: t(() => import("./chunks/DataTable-CihzO6Ph.js")) }), e.registerComponent({ id: "display.column-settings", category: "Display UI", component: t(() => import("./chunks/ColumnSettings-7c2CSqKT.js")) }), e.registerComponent({ id: "display.simple-pagination", category: "Display UI", component: t(() => import("./chunks/SimplePagination-DfueDTCj.js")) }), e.registerComponent({ id: "display.markdown", category: "Display UI", component: t(() => import("./chunks/Markdown-B7Z-2crI.js")) }), e.registerComponent({ id: "Table", category: "Table UI", component: t(() => import("./chunks/Table-BLZjeVVX.js")) }), e.registerComponent({ id: "TableBody", category: "Table UI", component: t(() => import("./chunks/TableBody-B62z8Jcx.js")) }), e.registerComponent({ id: "TableCell", category: "Table UI", component: t(() => import("./chunks/TableCell-DEzqxj9e.js")) }), e.registerComponent({ id: "TableHead", category: "Table UI", component: t(() => import("./chunks/TableHead-DFpbn3fx.js")) }), e.registerComponent({ id: "TableHeader", category: "Table UI", component: t(() => import("./chunks/TableHeader-C6oE9KYG.js")) }), e.registerComponent({ id: "TableRow", category: "Table UI", component: t(() => import("./chunks/TableRow-BT1dHX61.js")) }), e.registerComponent({ id: "form.select", category: "Form UI", component: t(() => import("./chunks/Select-Br3bDwg3.js")) }), e.registerComponent({ id: "form.select-content", category: "Form UI", component: t(() => import("./chunks/SelectContent-DJPU2Dbi.js")) }), e.registerComponent({ id: "form.select-item", category: "Form UI", component: t(() => import("./chunks/SelectItem-ExBV4X2S.js")) }), e.registerComponent({ id: "form.select-trigger", category: "Form UI", component: t(() => import("./chunks/SelectTrigger-VqHMXKN7.js")) }), e.registerComponent({ id: "form.select-value", category: "Form UI", component: t(() => import("./chunks/SelectValue-Bo98YXZE.js")) }), e.registerComponent({ id: "ui.icon.shield-check", category: "Icons", component: ge }), e.registerComponent({ id: "ui.icon.user", category: "Icons", component: de }), e.registerComponent({ id: "ui.icon.lock", category: "Icons", component: le }), e.registerComponent({ id: "ui.icon.arrow-right", category: "Icons", component: at }), e.registerComponent({ id: "ui.icon.search", category: "Icons", component: it }), e.registerComponent({ id: "ui.icon.settings", category: "Icons", component: ce }), e.registerComponent({ id: "ui.icon.bell", category: "Icons", component: me }), e.registerComponent({ id: "ui.icon.logout", category: "Icons", component: st }), e.registerComponent({ id: "ui.icon.chevron-down", category: "Icons", component: ct }), e.registerComponent({ id: "ui.icon.chevron-right", category: "Icons", component: lt }), e.registerComponent({ id: "ui.icon.check", category: "Icons", component: mt }), e.registerComponent({ id: "ui.icon.alert-triangle", category: "Icons", component: ie }), e.registerComponent({ id: "ui.icon.info", category: "Icons", component: se }), e.registerComponent({ id: "ui.icon.x", category: "Icons", component: dt }), { messageService: g, dialogService: h, appState: u, themeConfig: l, uiStore: s };
  }
}
const Lt = new $t();
export {
  ue as APP_ICONS,
  Nt as APP_ICON_NAMES,
  $t as DefaultTheme,
  R as FONT_STACKS,
  ht as SWATCHES,
  Et as THEME,
  w as THEME_CONFIG_DEFAULTS,
  jt as appIcon,
  A as brandScale,
  Ht as cn,
  pt as createDialogService,
  ut as createMessageService,
  bt as createThemeConfig,
  Lt as defaultTheme,
  xt as useUiStore
};
//# sourceMappingURL=index.js.map
