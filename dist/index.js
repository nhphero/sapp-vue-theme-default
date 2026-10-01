import { reactive as G, watch as Z, ref as P, defineComponent as ue, inject as pe, computed as R, openBlock as b, createBlock as v, resolveDynamicComponent as I, withCtx as k, createElementBlock as D, createElementVNode as w, toDisplayString as T, withKeys as fe, createCommentVNode as $, createTextVNode as W, normalizeClass as z, defineAsyncComponent as t } from "vue";
import { createAppState as ye } from "@nhphero/vue-sapp";
import { defineStore as he } from "pinia";
import { MessageSquare as A, HelpCircle as Ce, Zap as ee, AlertTriangle as oe, CheckCircle2 as be, Info as te, Headphones as xe, Video as Se, Camera as ve, Image as Ie, Palette as ke, Flag as Ue, Sparkles as we, Heart as Te, Star as $e, Rocket as Be, Settings as ne, Lock as re, KeyRound as Pe, Key as Fe, Car as Me, Truck as De, Tags as Oe, Tag as Ee, ShoppingBag as Ne, ShoppingCart as je, Megaphone as He, Phone as _e, Mail as Le, Bell as ae, Clock as Ve, CalendarDays as Ge, Calendar as Re, Target as We, Gauge as ze, Activity as Ke, TrendingUp as Je, PieChart as qe, BarChart3 as Xe, Gavel as Ye, Scale as Qe, PiggyBank as Ze, DollarSign as Ae, Banknote as eo, Receipt as oo, CreditCard as to, Wallet as no, Award as ro, GraduationCap as ao, Handshake as io, Briefcase as so, Contact as co, UserCog as lo, User as ie, Users as mo, Compass as go, Map as uo, MapPin as po, Wrench as fo, Hammer as yo, Ruler as ho, HardHat as Co, Warehouse as bo, Store as xo, Factory as So, Landmark as vo, Hotel as Io, Home as ko, Building2 as Uo, Building as wo, ListChecks as To, ClipboardCheck as $o, ClipboardList as Bo, Archive as Po, FolderOpen as Fo, Folder as Mo, Files as Do, FileText as Oo, Book as Eo, BookOpen as No, GitBranch as jo, Workflow as Ho, Network as _o, Braces as Lo, Code as Vo, Cloud as Go, Server as Ro, Database as Wo, Cpu as zo, Terminal as Ko, Boxes as Jo, Package as qo, Box as Xo, ShieldCheck as se, Shield as Yo, Globe as Qo, LayoutDashboard as Zo, LayoutGrid as ce, Layers as Ao, ArrowRight as et, Search as ot, LogOut as tt, ChevronDown as nt, ChevronRight as rt, Check as at, X as it } from "lucide-vue-next";
import { clsx as st } from "clsx";
import { twMerge as ct } from "tailwind-merge";
function lt(n) {
  const a = (e) => (o, i, m = {}) => n.showToast({ id: m.id || o, message: i ? `${o}: ${i}` : o, type: e, ...m });
  return {
    success: a("success"),
    error: a("error"),
    info: a("info"),
    warning: a("warning"),
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
        onConfirm: (i) => {
          e.onConfirm && e.onConfirm(i), o(i);
        },
        onCancel: () => {
          e.onCancel && e.onCancel(), o(null);
        }
      });
    })
  };
}
function mt(n) {
  return {
    open: (a) => n.openDialog(a),
    close: (a) => n.closeDialog(a),
    closeAll: () => n.closeAllDialogs()
  };
}
const O = "sapp.theme.config", E = { "--text-xs": 12, "--text-sm": 14, "--text-base": 16, "--text-lg": 18, "--text-xl": 20, "--text-2xl": 24, "--text-3xl": 30 }, N = { "--sp-1": 4, "--sp-2": 8, "--sp-3": 12, "--sp-4": 16, "--sp-5": 24, "--sp-6": 32, "--sp-7": 48, "--sp-8": 64, "--touch": 44, "--header-h": 52 }, j = { 50: 96, 100: 92, 200: 84, 300: 72, 400: 58, 500: 47, 600: 39, 700: 32, 800: 27, 900: 23, 950: 13 }, F = 6, M = 1, dt = [
  { name: "Teal", hex: "#256B65" },
  { name: "Blue", hex: "#2563EB" },
  { name: "Indigo", hex: "#4F46E5" },
  { name: "Violet", hex: "#7C3AED" },
  { name: "Rose", hex: "#E11D48" },
  { name: "Amber", hex: "#B45309" },
  { name: "Green", hex: "#15803D" },
  { name: "Slate", hex: "#3D4B54" }
], L = {
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
}, K = /* @__PURE__ */ new Set(), gt = (n) => {
  const a = L[n];
  if (!a || K.has(n) || typeof document > "u") return;
  K.add(n);
  const e = document.createElement("link");
  e.rel = "stylesheet", e.href = `https://fonts.googleapis.com/css2?family=${a}&display=swap`, e.dataset.sappFont = n, document.head.appendChild(e);
}, B = [
  { id: "", label: "theme.surfaceDefault", light: "", dark: "" },
  { id: "paper", label: "theme.surfacePaper", light: "var(--gray-100)", dark: "#0B1116" },
  { id: "deep", label: "theme.surfaceDeep", light: "var(--gray-300)", dark: "#06090C" },
  { id: "tint", label: "theme.surfaceTint", light: "var(--brand-100)", dark: "var(--brand-950)" }
], H = {
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
  radius: F,
  shadow: M,
  surface: ""
}), ut = (n) => {
  const a = /^#?([0-9a-f]{6})$/i.exec(n);
  if (!a) return null;
  const e = parseInt(a[1], 16), o = (e >> 16) / 255, i = (e >> 8 & 255) / 255, m = (e & 255) / 255, f = Math.max(o, i, m), p = Math.min(o, i, m), l = (f + p) / 2;
  let g = 0, h = 0;
  if (f !== p) {
    const r = f - p;
    h = l > 0.5 ? r / (2 - f - p) : r / (f + p), g = f === o ? (i - m) / r + (i < m ? 6 : 0) : f === i ? (m - o) / r + 2 : (o - i) / r + 4, g *= 60;
  }
  return { h: g, s: h * 100, l: l * 100 };
}, J = (n) => {
  const a = ut(n);
  if (!a) return null;
  const e = {};
  for (const o of Object.keys(j)) {
    const i = j[o], m = a.s * (i > 85 ? 0.55 : i > 70 ? 0.75 : 1);
    e[`--brand-${o}`] = `hsl(${a.h.toFixed(0)} ${m.toFixed(0)}% ${i}%)`;
  }
  return e;
}, q = (n) => ({ "--radius-sm": Math.max(0, Math.round(n * 0.5)), "--radius": n, "--radius-lg": Math.round(n * 1.7) }), X = (n) => {
  if (n <= 0) return { "--shadow-sm": "none", "--shadow": "none", "--shadow-lg": "none" };
  const a = (e) => Math.min(0.6, e * n).toFixed(3);
  return {
    "--shadow-sm": `0 1px 2px rgba(0,0,0,${a(0.1)})`,
    "--shadow": `0 1px 2px rgba(0,0,0,${a(0.08)}), 0 2px 8px rgba(0,0,0,${a(0.07)})`,
    "--shadow-lg": `0 4px 14px rgba(0,0,0,${a(0.1)}), 0 14px 36px rgba(0,0,0,${a(0.13)})`
  };
}, Y = (n) => !n || n === "System UI" ? "" : L[n] ? (gt(n), `"${n}", system-ui, sans-serif`) : H[n] != null ? H[n] : `"${n.replace(/"/g, "")}", system-ui, sans-serif`, _ = Object.keys(U), Q = (n) => {
  const a = {};
  for (const e of _)
    n?.[e] !== void 0 && typeof n[e] == typeof U[e] && (a[e] = n[e]);
  return a;
};
function pt() {
  const n = () => {
    try {
      return Q(JSON.parse(localStorage.getItem(O) || "{}"));
    } catch {
      return {};
    }
  }, a = Object.fromEntries(Object.entries(n()).filter(([r, d]) => d !== U[r]));
  let e = { ...U };
  const o = G({ ...e, ...a }), i = G({ open: !1, locked: !1 }), m = () => {
    if (i.locked) return;
    const r = Object.fromEntries(_.filter((d) => o[d] !== e[d]).map((d) => [d, o[d]]));
    try {
      Object.keys(r).length ? localStorage.setItem(O, JSON.stringify(r)) : localStorage.removeItem(O);
    } catch {
    }
  }, f = () => document.documentElement, p = (r, d = "", s = !1) => {
    const c = f().style;
    for (const y of Object.keys(r)) s ? c.removeProperty(y) : c.setProperty(y, `${r[y]}${d}`);
  }, l = () => {
    const r = f();
    o.mode === "system" ? r.removeAttribute("data-theme") : r.setAttribute("data-theme", o.mode);
    const d = o.brand ? J(o.brand) : null;
    for (const S of Object.keys(j))
      d ? r.style.setProperty(`--brand-${S}`, d[`--brand-${S}`]) : r.style.removeProperty(`--brand-${S}`);
    const s = Number(o.font) || 1, c = s * (Number(o.density) || 1), y = (S, me) => Object.fromEntries(Object.entries(S).map(([de, ge]) => [de, (ge * me).toFixed(1)]));
    p(y(E, s), "px", s === 1), p(y(N, c), "px", c === 1), r.style.setProperty("--scale-text", s.toFixed(3)), r.style.setProperty("--scale-space", c.toFixed(3));
    const C = B.find((S) => S.id === o.surface) ?? B[0];
    C.light ? (r.style.setProperty("--page-surface", C.light), r.style.setProperty("--page-surface-dark", C.dark)) : (r.style.removeProperty("--page-surface"), r.style.removeProperty("--page-surface-dark"));
    const u = Y(o.fontFamily);
    u ? r.style.setProperty("--font-sans", u) : r.style.removeProperty("--font-sans");
    const x = Number.isFinite(o.radius) ? o.radius : F;
    p(q(x), "px", x === F);
    const V = Number.isFinite(o.shadow) ? o.shadow : M;
    p(X(V), "", V === M), m();
  }, h = {
    state: o,
    get open() {
      return i.open;
    },
    set open(r) {
      i.open = r;
    },
    get defaults() {
      return e;
    },
    get locked() {
      return i.locked;
    },
    swatches: dt,
    fontStacks: H,
    webFonts: L,
    surfaces: B,
    set(r) {
      i.locked || Object.assign(o, r);
    },
    reset() {
      i.locked || Object.assign(o, e);
    },
    useDefaults(r, d) {
      const s = d?.enforce ? {} : i.locked ? n() : Object.fromEntries(_.filter((c) => o[c] !== e[c]).map((c) => [c, o[c]]));
      e = { ...U, ...Q(r) }, i.locked = !!d?.enforce, Object.assign(o, e, s);
    },
    apply: l,
    toggle(r) {
      i.open = r ?? !i.open;
    },
    exportTokens: () => {
      const r = ["/* Tokens exported from the theme panel — paste into packages/sapp-theme-default/src/hoff/tokens.css */"], d = o.brand ? J(o.brand) : null;
      if (d) for (const u of Object.keys(d)) r.push(`${u}: ${d[u]};`);
      const s = Number(o.font) || 1;
      if (s !== 1) for (const u of Object.keys(E)) r.push(`${u}: ${(E[u] * s).toFixed(1)}px;`);
      const c = s * (Number(o.density) || 1);
      if (c !== 1) for (const u of Object.keys(N)) r.push(`${u}: ${(N[u] * c).toFixed(1)}px;`);
      if (o.radius !== F) for (const [u, x] of Object.entries(q(o.radius))) r.push(`${u}: ${x}px;`);
      if (o.shadow !== M) for (const [u, x] of Object.entries(X(o.shadow))) r.push(`${u}: ${x};`);
      const y = B.find((u) => u.id === o.surface);
      y?.light && r.push(`--background: ${y.light};   /* dark: ${y.dark} */`);
      const C = Y(o.fontFamily);
      return C && r.push(`--font-sans: ${C};`), r.length === 1 && r.push("/* nothing differs from the defaults */"), r.join(`
`);
    }
  };
  return Z(o, l, { deep: !0 }), l(), h;
}
const ft = he("ui", () => {
  const n = P([]);
  let a = 0;
  const e = /* @__PURE__ */ new Map(), o = (s) => {
    const c = s.id || ++a, y = { ...s, id: c, type: s.type || "info" };
    e.has(c) && (clearTimeout(e.get(c)), e.delete(c));
    const C = n.value.findIndex((x) => x.id === c);
    C !== -1 ? n.value[C] = y : n.value.push(y);
    const u = setTimeout(() => {
      i(c);
    }, s.duration || 5e3);
    e.set(c, u);
  }, i = (s) => {
    n.value = n.value.filter((c) => c.id !== s), e.has(s) && (clearTimeout(e.get(s)), e.delete(s));
  }, m = P(null), f = (s) => {
    console.log("💬 [uiStore] showMessage:", s.title), m.value = s;
  }, p = () => {
    console.log("💬 [uiStore] closeMessage"), m.value = null;
  }, l = P([]);
  let g = 0;
  return {
    toasts: n,
    showToast: o,
    removeToast: i,
    activeMessage: m,
    showMessage: f,
    closeMessage: p,
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
}), yt = {
  key: 0,
  class: "flex items-center gap-3"
}, ht = { class: "modal-title !m-0" }, Ct = {
  key: 0,
  class: "py-2"
}, bt = { class: "text-sm text-muted-foreground leading-relaxed mb-2" }, xt = {
  key: 0,
  class: "mt-4"
}, St = { class: "flex items-center justify-end gap-2 w-full" }, vt = /* @__PURE__ */ ue({
  __name: "MessageProvider",
  setup(n) {
    const a = pe("ui-store"), e = R(() => a?.activeMessage || null), o = P("");
    Z(e, (g) => {
      g?.type === "prompt" && (o.value = g.defaultValue || "");
    });
    const i = {
      info: { icon: te, color: "text-info", bg: "bg-info-soft" },
      success: { icon: be, color: "text-success", bg: "bg-success-soft" },
      warning: { icon: oe, color: "text-warning", bg: "bg-warning-soft" },
      error: { icon: ee, color: "text-danger", bg: "bg-danger-soft" },
      confirm: { icon: Ce, color: "text-primary", bg: "bg-primary-soft" },
      prompt: { icon: A, color: "text-primary", bg: "bg-primary-soft" }
    }, m = () => {
      a?.closeMessage();
    }, f = async () => {
      e.value?.type === "prompt" && !o.value?.trim() || (e.value?.onConfirm && (e.value.type === "prompt" ? await e.value.onConfirm(o.value) : await e.value.onConfirm()), m());
    }, p = () => {
      e.value?.onCancel && e.value.onCancel(), m();
    }, l = R(() => e.value ? i[e.value.type] || i.info : null);
    return (g, h) => (b(), v(I(g.$c("ui.modal")), {
      key: e.value?.title || "none",
      show: !!e.value,
      onClose: m,
      maxWidth: "max-w-md",
      zIndex: 99999
    }, {
      header: k(() => [
        e.value ? (b(), D("div", yt, [
          w("div", {
            class: z(["w-10 h-10 rounded-lg flex items-center justify-center shrink-0", l.value?.bg])
          }, [
            (b(), v(I(l.value?.icon), {
              size: 20,
              "stroke-width": "2",
              class: z(l.value?.color)
            }, null, 8, ["class"]))
          ], 2),
          w("h3", ht, T(e.value.title), 1)
        ])) : $("", !0)
      ]),
      footer: k(() => [
        w("div", St, [
          e.value?.type === "confirm" || e.value?.type === "prompt" ? (b(), v(I(g.$c("ui.button")), {
            key: 0,
            variant: "default",
            onClick: p
          }, {
            default: k(() => [
              W(T(e.value.cancelText || g.$t("common.cancel")), 1)
            ]),
            _: 1
          })) : $("", !0),
          (b(), v(I(g.$c("ui.button")), {
            variant: e.value?.type === "error" ? "danger" : "primary",
            onClick: f,
            disabled: e.value?.type === "prompt" && !o.value?.trim()
          }, {
            default: k(() => [
              W(T(e.value?.type === "prompt" ? g.$t("common.submit") : e.value?.confirmText || g.$t("common.understood")), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled"]))
        ])
      ]),
      default: k(() => [
        e.value ? (b(), D("div", Ct, [
          w("p", bt, T(e.value.description), 1),
          e.value.type === "prompt" ? (b(), D("div", xt, [
            e.value.inputType === "textarea" ? (b(), v(I(g.$c("form.textarea")), {
              key: 0,
              modelValue: o.value,
              "onUpdate:modelValue": h[0] || (h[0] = (r) => o.value = r),
              placeholder: e.value.placeholder,
              rows: "4",
              class: "resize-none"
            }, null, 8, ["modelValue", "placeholder"])) : (b(), v(I(g.$c("form.input")), {
              key: 1,
              modelValue: o.value,
              "onUpdate:modelValue": h[1] || (h[1] = (r) => o.value = r),
              placeholder: e.value.placeholder,
              onKeyup: h[2] || (h[2] = fe((r) => o.value?.trim() ? f() : null, ["enter"]))
            }, null, 40, ["modelValue", "placeholder"]))
          ])) : $("", !0)
        ])) : $("", !0)
      ]),
      _: 1
    }, 40, ["show"]));
  }
}), Pt = {
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
}, le = {
  Layers: Ao,
  LayoutGrid: ce,
  LayoutDashboard: Zo,
  Globe: Qo,
  Shield: Yo,
  ShieldCheck: se,
  Zap: ee,
  Box: Xo,
  Package: qo,
  Boxes: Jo,
  Terminal: Ko,
  Cpu: zo,
  Database: Wo,
  Server: Ro,
  Cloud: Go,
  Code: Vo,
  Braces: Lo,
  Network: _o,
  Workflow: Ho,
  GitBranch: jo,
  BookOpen: No,
  Book: Eo,
  FileText: Oo,
  Files: Do,
  Folder: Mo,
  FolderOpen: Fo,
  Archive: Po,
  ClipboardList: Bo,
  ClipboardCheck: $o,
  ListChecks: To,
  Building: wo,
  Building2: Uo,
  Home: ko,
  Hotel: Io,
  Landmark: vo,
  Factory: So,
  Store: xo,
  Warehouse: bo,
  HardHat: Co,
  Ruler: ho,
  Hammer: yo,
  Wrench: fo,
  MapPin: po,
  Map: uo,
  Compass: go,
  Users: mo,
  User: ie,
  UserCog: lo,
  Contact: co,
  Briefcase: so,
  Handshake: io,
  GraduationCap: ao,
  Award: ro,
  Wallet: no,
  CreditCard: to,
  Receipt: oo,
  Banknote: eo,
  DollarSign: Ae,
  PiggyBank: Ze,
  Scale: Qe,
  Gavel: Ye,
  BarChart3: Xe,
  PieChart: qe,
  TrendingUp: Je,
  Activity: Ke,
  Gauge: ze,
  Target: We,
  Calendar: Re,
  CalendarDays: Ge,
  Clock: Ve,
  Bell: ae,
  Mail: Le,
  MessageSquare: A,
  Phone: _e,
  Megaphone: He,
  ShoppingCart: je,
  ShoppingBag: Ne,
  Tag: Ee,
  Tags: Oe,
  Truck: De,
  Car: Me,
  Key: Fe,
  KeyRound: Pe,
  Lock: re,
  Settings: ne,
  Rocket: Be,
  Star: $e,
  Heart: Te,
  Sparkles: we,
  Flag: Ue,
  Palette: ke,
  Image: Ie,
  Camera: ve,
  Video: Se,
  Headphones: xe
}, Ft = Object.keys(le), Mt = (n) => n && le[n] || ce;
function Dt(...n) {
  return ct(st(n));
}
class It {
  id = "default";
  name = "Standard Enterprise Slate";
  register(a, e, o = {}) {
    const i = o.uiStore ?? ft(), m = lt(i), f = mt(i), p = ye(), l = pt();
    a.config.globalProperties.$message = m, a.config.globalProperties.$appState = p, a.config.globalProperties.$superApp = e, e.$appState = p, e.$themeConfig = l, a.config.globalProperties.$themeConfig = l, a.provide("$themeConfig", l), e.registerComponent({ id: "layout.theme-panel", category: "Shell UI", component: t(() => import("./chunks/ThemePanel-DO2Wq25u.js")) }), e.registerCommand({ id: "theme.customize", name: "Tuỳ chỉnh giao diện", category: "Theme", shortcut: "⌘⇧T", handler: () => l.toggle() }), e.registerCommand({ id: "theme.studio", name: "Theme Studio", description: "Trang tuỳ chỉnh giao diện đầy đủ", category: "Theme", handler: () => {
      e.$router?.push("/system/theme");
    } });
    const g = t(() => import("./chunks/Header-DgtUlo6P.js"));
    e.registerComponent({ id: "Header", category: "Shell UI", component: g }), e.registerComponent({ id: "layout.header", category: "Shell UI", component: g });
    const h = t(() => import("./chunks/Sidebar-CCmpwaOA.js"));
    e.registerComponent({ id: "Sidebar", category: "Shell UI", component: h }), e.registerComponent({ id: "layout.sidebar", category: "Shell UI", component: h });
    const r = t(() => import("./chunks/ModulePageLayout-CuSYrWur.js"));
    e.registerComponent({ id: "ModulePageLayout", category: "Shell UI", component: r }), e.registerComponent({ id: "layout.module-page", category: "Shell UI", component: r });
    const d = t(() => import("./chunks/ModuleHeader-BnrOpukT.js"));
    e.registerComponent({ id: "ModuleHeader", category: "Shell UI", component: d }), e.registerComponent({ id: "layout.module-header", category: "Shell UI", component: d });
    const s = t(() => import("./chunks/DualSidebarLayout-BH2tOx6j.js"));
    e.registerComponent({ id: "DualSidebarLayout", category: "Shell UI", component: s }), e.registerComponent({ id: "layout.dual-sidebar", category: "Shell UI", component: s });
    const c = t(() => import("./chunks/ErpCommandPalette-fx4Q0Amc.js"));
    return e.registerComponent({ id: "CommandPalette", category: "Shell UI", component: c }), e.registerComponent({ id: "layout.command-palette", category: "Shell UI", component: c }), e.registerComponent({ id: "layout.app-container", category: "Shell UI", component: t(() => import("./chunks/AppContainer-irTvFfYX.js")) }), e.registerComponent({ id: "ThemeConnector", category: "Shell UI", component: t(() => import("./chunks/ThemeConnector-CUumAtRR.js")) }), e.registerComponent({ id: "ToastContainer", category: "Shell UI", component: t(() => import("./chunks/ToastContainer-JGwl3S_m.js")) }), e.registerComponent({ id: "MessageProvider", category: "Shell UI", component: vt }), e.registerComponent({ id: "DialogProvider", category: "Shell UI", component: t(() => import("./chunks/DialogProvider-C21AipJt.js")) }), e.registerComponent({ id: "layout.action-bar", category: "Layout UI", component: t(() => import("./chunks/ErpActionBar-DR8NVTx-.js")) }), e.registerComponent({ id: "display.data-grid", category: "Display UI", component: t(() => import("./chunks/ErpDataGrid-A4UGQwRU.js")) }), e.registerComponent({ id: "form.entity-selector", category: "Form UI", component: t(() => import("./chunks/ErpEntitySelector-XLEStx_M.js")) }), e.registerComponent({ id: "ui.card", category: "UI Blocks", component: t(() => import("./chunks/Card-sv8WQzvB.js")) }), e.registerComponent({ id: "ui.button", category: "UI Blocks", component: t(() => import("./chunks/Button-Cud5Nfh1.js")) }), e.registerComponent({ id: "ui.button-copy", category: "UI Blocks", component: t(() => import("./chunks/ButtonCopy-DsdzXkaa.js")) }), e.registerComponent({ id: "ui.text", category: "UI Blocks", component: t(() => import("./chunks/Typography-CNI1yScN.js")) }), e.registerComponent({ id: "ui.skeleton", category: "UI Blocks", component: t(() => import("./chunks/Skeleton-CfLyDGWt.js")) }), e.registerComponent({ id: "form.input", category: "Form UI", component: t(() => import("./chunks/Input-B0IfgsVG.js")) }), e.registerComponent({ id: "form.input-number", category: "Form UI", component: t(() => import("./chunks/InputNumber-DBRTF-wJ.js")) }), e.registerComponent({ id: "form.switch", category: "Form UI", component: t(() => import("./chunks/InputSwitch-BPvOZo9w.js")) }), e.registerComponent({ id: "InputSwitch", category: "Form UI", component: t(() => import("./chunks/InputSwitch-BPvOZo9w.js")) }), e.registerComponent({ id: "form.textarea", category: "Form UI", component: t(() => import("./chunks/Textarea-BVKFbpBu.js")) }), e.registerComponent({ id: "form.icon-picker", category: "Form UI", component: t(() => import("./chunks/IconPicker-DbgxD0io.js")) }), e.registerComponent({ id: "ui.app-icon", category: "UI Blocks", component: t(() => import("./chunks/AppIcon-CZVJSONO.js")) }), e.registerComponent({ id: "form.field", category: "Form UI", component: t(() => import("./chunks/FormField-DnQICIpP.js")) }), e.registerComponent({ id: "ui.modal", category: "UI Blocks", component: t(() => import("./chunks/Modal-BVG4U5yl.js")) }), e.registerComponent({ id: "ui.search-input", category: "UI Blocks", component: t(() => import("./chunks/SearchInput-CHiFQN2g.js")) }), e.registerComponent({ id: "ui.avatar", category: "UI Blocks", component: t(() => import("./chunks/UserAvatar-DRE3opnT.js")) }), e.registerComponent({ id: "ui.badge", category: "UI Blocks", component: t(() => import("./chunks/Badge-ZzsVRpNl.js")) }), e.registerComponent({ id: "ui.alert", category: "UI Blocks", component: t(() => import("./chunks/Alert-DylOuBAF.js")) }), e.registerComponent({ id: "layout.section-header", category: "Layout UI", component: t(() => import("./chunks/SectionHeader-C8ufun_t.js")) }), e.registerComponent({ id: "layout.mini-app", category: "Layout UI", component: t(() => import("./chunks/MiniAppLayout-DGqGVVq6.js")) }), e.registerComponent({ id: "form.code-editor", category: "Form UI", component: t(() => import("./chunks/CodeEditor-0g7paalJ.js")) }), e.registerComponent({ id: "runtime.studio", category: "Form UI", component: t(() => import("./chunks/CodeEditor-0g7paalJ.js")) }), e.registerComponent({ id: "button.copy", category: "UI Blocks", component: t(() => import("./chunks/ButtonCopy-DsdzXkaa.js")) }), e.registerComponent({ id: "ui.popover", category: "UI Blocks", component: t(() => import("./chunks/Popover-DgBGd8bu.js")) }), e.registerComponent({ id: "ui.popover-trigger", category: "UI Blocks", component: t(() => import("./chunks/PopoverTrigger-CTa-i7wG.js")) }), e.registerComponent({ id: "ui.popover-content", category: "UI Blocks", component: t(() => import("./chunks/PopoverContent-0CCuXPfd.js")) }), e.registerComponent({ id: "ui.context-menu", category: "UI Blocks", component: t(() => import("./chunks/ContextMenu-D1g_2xmd.js")) }), e.registerComponent({ id: "ui.list-manager", category: "UI Blocks", component: t(() => import("./chunks/ListManager-BbjjcqOm.js")) }), e.registerComponent({ id: "ui.dropdown", category: "UI Blocks", component: t(() => import("./chunks/Dropdown-wKllpTqE.js")) }), e.registerComponent({ id: "display.chart", category: "Display UI", component: t(() => import("./chunks/InsightChart-BlF0mgf_.js")) }), e.registerComponent({ id: "display.data-table", category: "Display UI", component: t(() => import("./chunks/DataTable-CihzO6Ph.js")) }), e.registerComponent({ id: "display.column-settings", category: "Display UI", component: t(() => import("./chunks/ColumnSettings-7c2CSqKT.js")) }), e.registerComponent({ id: "display.simple-pagination", category: "Display UI", component: t(() => import("./chunks/SimplePagination-DfueDTCj.js")) }), e.registerComponent({ id: "Table", category: "Table UI", component: t(() => import("./chunks/Table-BLZjeVVX.js")) }), e.registerComponent({ id: "TableBody", category: "Table UI", component: t(() => import("./chunks/TableBody-B62z8Jcx.js")) }), e.registerComponent({ id: "TableCell", category: "Table UI", component: t(() => import("./chunks/TableCell-DEzqxj9e.js")) }), e.registerComponent({ id: "TableHead", category: "Table UI", component: t(() => import("./chunks/TableHead-DFpbn3fx.js")) }), e.registerComponent({ id: "TableHeader", category: "Table UI", component: t(() => import("./chunks/TableHeader-C6oE9KYG.js")) }), e.registerComponent({ id: "TableRow", category: "Table UI", component: t(() => import("./chunks/TableRow-BT1dHX61.js")) }), e.registerComponent({ id: "form.select", category: "Form UI", component: t(() => import("./chunks/Select-Br3bDwg3.js")) }), e.registerComponent({ id: "form.select-content", category: "Form UI", component: t(() => import("./chunks/SelectContent-DJPU2Dbi.js")) }), e.registerComponent({ id: "form.select-item", category: "Form UI", component: t(() => import("./chunks/SelectItem-ExBV4X2S.js")) }), e.registerComponent({ id: "form.select-trigger", category: "Form UI", component: t(() => import("./chunks/SelectTrigger-VqHMXKN7.js")) }), e.registerComponent({ id: "form.select-value", category: "Form UI", component: t(() => import("./chunks/SelectValue-Bo98YXZE.js")) }), e.registerComponent({ id: "ui.icon.shield-check", category: "Icons", component: se }), e.registerComponent({ id: "ui.icon.user", category: "Icons", component: ie }), e.registerComponent({ id: "ui.icon.lock", category: "Icons", component: re }), e.registerComponent({ id: "ui.icon.arrow-right", category: "Icons", component: et }), e.registerComponent({ id: "ui.icon.search", category: "Icons", component: ot }), e.registerComponent({ id: "ui.icon.settings", category: "Icons", component: ne }), e.registerComponent({ id: "ui.icon.bell", category: "Icons", component: ae }), e.registerComponent({ id: "ui.icon.logout", category: "Icons", component: tt }), e.registerComponent({ id: "ui.icon.chevron-down", category: "Icons", component: nt }), e.registerComponent({ id: "ui.icon.chevron-right", category: "Icons", component: rt }), e.registerComponent({ id: "ui.icon.check", category: "Icons", component: at }), e.registerComponent({ id: "ui.icon.alert-triangle", category: "Icons", component: oe }), e.registerComponent({ id: "ui.icon.info", category: "Icons", component: te }), e.registerComponent({ id: "ui.icon.x", category: "Icons", component: it }), { messageService: m, dialogService: f, appState: p, themeConfig: l, uiStore: i };
  }
}
const Ot = new It();
export {
  le as APP_ICONS,
  Ft as APP_ICON_NAMES,
  It as DefaultTheme,
  H as FONT_STACKS,
  dt as SWATCHES,
  Pt as THEME,
  U as THEME_CONFIG_DEFAULTS,
  Mt as appIcon,
  J as brandScale,
  Dt as cn,
  mt as createDialogService,
  lt as createMessageService,
  pt as createThemeConfig,
  Ot as defaultTheme,
  ft as useUiStore
};
//# sourceMappingURL=index.js.map
