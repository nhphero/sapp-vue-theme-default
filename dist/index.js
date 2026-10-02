import { reactive as K, watch as V, ref as D, defineComponent as be, inject as xe, computed as q, openBlock as x, createBlock as k, resolveDynamicComponent as I, withCtx as U, createElementBlock as O, createElementVNode as T, toDisplayString as $, withKeys as ve, createCommentVNode as B, createTextVNode as X, normalizeClass as Y, defineAsyncComponent as n } from "vue";
import { createAppState as Se } from "@nhphero/vue-sapp";
import { defineStore as ke } from "pinia";
import { MessageSquare as ae, HelpCircle as Ie, Zap as ie, AlertTriangle as se, CheckCircle2 as Ue, Info as ce, Headphones as we, Video as Te, Camera as $e, Image as Be, Palette as Pe, Flag as De, Sparkles as Fe, Heart as Me, Star as Oe, Rocket as Ne, Settings as le, Lock as me, KeyRound as Ee, Key as je, Car as He, Truck as Le, Tags as Re, Tag as _e, ShoppingBag as Ve, ShoppingCart as Ge, Megaphone as We, Phone as ze, Mail as Je, Bell as de, Clock as Ke, CalendarDays as qe, Calendar as Xe, Target as Ye, Gauge as Ze, Activity as Qe, TrendingUp as Ae, PieChart as eo, BarChart3 as oo, Gavel as to, Scale as no, PiggyBank as ro, DollarSign as ao, Banknote as io, Receipt as so, CreditCard as co, Wallet as lo, Award as mo, GraduationCap as go, Handshake as fo, Briefcase as uo, Contact as po, UserCog as ho, User as ge, Users as yo, Compass as Co, Map as bo, MapPin as xo, Wrench as vo, Hammer as So, Ruler as ko, HardHat as Io, Warehouse as Uo, Store as wo, Factory as To, Landmark as $o, Hotel as Bo, Home as Po, Building2 as Do, Building as Fo, ListChecks as Mo, ClipboardCheck as Oo, ClipboardList as No, Archive as Eo, FolderOpen as jo, Folder as Ho, Files as Lo, FileText as Ro, Book as _o, BookOpen as Vo, GitBranch as Go, Workflow as Wo, Network as zo, Braces as Jo, Code as Ko, Cloud as qo, Server as Xo, Database as Yo, Cpu as Zo, Terminal as Qo, Boxes as Ao, Package as et, Box as ot, ShieldCheck as fe, Shield as tt, Globe as nt, LayoutDashboard as rt, LayoutGrid as ue, Layers as at, ArrowRight as it, Search as st, LogOut as ct, ChevronDown as lt, ChevronRight as mt, Check as dt, X as gt } from "lucide-vue-next";
import { clsx as ft } from "clsx";
import { twMerge as ut } from "tailwind-merge";
function pt(r) {
  const i = (e) => (o, s, g = {}) => r.showToast({ id: g.id || o, message: s ? `${o}: ${s}` : o, type: e, ...g });
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
function ht(r) {
  return {
    open: (i) => r.openDialog(i),
    close: (i) => r.closeDialog(i),
    closeAll: () => r.closeAllDialogs()
  };
}
const N = "sapp.theme.config", E = { "--text-xs": 12, "--text-sm": 14, "--text-base": 16, "--text-lg": 18, "--text-xl": 20, "--text-2xl": 24, "--text-3xl": 30 }, j = { "--sp-1": 4, "--sp-2": 8, "--sp-3": 12, "--sp-4": 16, "--sp-5": 24, "--sp-6": 32, "--sp-7": 48, "--sp-8": 64, "--touch": 44, "--header-h": 52 }, L = { 50: 96, 100: 92, 200: 84, 300: 72, 400: 58, 500: 47, 600: 39, 700: 32, 800: 27, 900: 23, 950: 13 }, F = 6, M = 1, yt = [
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
}, Z = /* @__PURE__ */ new Set(), Ct = (r) => {
  const i = G[r];
  if (!i || Z.has(r) || typeof document > "u") return;
  Z.add(r);
  const e = document.createElement("link");
  e.rel = "stylesheet", e.href = `https://fonts.googleapis.com/css2?family=${i}&display=swap`, e.dataset.sappFont = r, document.head.appendChild(e);
}, P = [
  { id: "", label: "theme.surfaceDefault", light: "", dark: "" },
  { id: "paper", label: "theme.surfacePaper", light: "var(--gray-100)", dark: "#0B1116" },
  { id: "deep", label: "theme.surfaceDeep", light: "var(--gray-300)", dark: "#06090C" },
  { id: "tint", label: "theme.surfaceTint", light: "var(--brand-100)", dark: "var(--brand-950)" }
], Q = [
  { id: "", label: "theme.contrastDefault" },
  { id: "high", label: "theme.contrastHigh" },
  { id: "max", label: "theme.contrastMax" }
], A = [
  { id: "", label: "theme.headerLight" },
  { id: "tint", label: "theme.headerTint" },
  { id: "brand", label: "theme.headerBrand" },
  { id: "gradient", label: "theme.headerGradient" },
  { id: "dark", label: "theme.headerDark" }
], bt = [
  { v: 0.9, label: "theme.controlCompact" },
  { v: 1, label: "theme.controlDefault" },
  { v: 1.15, label: "theme.controlLarge" }
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
  header: "",
  control: 1
}), xt = (r) => {
  const i = /^#?([0-9a-f]{6})$/i.exec(r);
  if (!i) return null;
  const e = parseInt(i[1], 16), o = (e >> 16) / 255, s = (e >> 8 & 255) / 255, g = (e & 255) / 255, h = Math.max(o, s, g), u = Math.min(o, s, g), l = (h + u) / 2;
  let m = 0, C = 0;
  if (h !== u) {
    const y = h - u;
    C = l > 0.5 ? y / (2 - h - u) : y / (h + u), m = h === o ? (s - g) / y + (s < g ? 6 : 0) : h === s ? (g - o) / y + 2 : (o - s) / y + 4, m *= 60;
  }
  return { h: m, s: C * 100, l: l * 100 };
}, ee = (r) => {
  const i = xt(r);
  if (!i) return null;
  const e = {};
  for (const o of Object.keys(L)) {
    const s = L[o], g = i.s * (s > 85 ? 0.55 : s > 70 ? 0.75 : 1);
    e[`--brand-${o}`] = `hsl(${i.h.toFixed(0)} ${g.toFixed(0)}% ${s}%)`;
  }
  return e;
}, oe = (r) => ({ "--radius-sm": Math.max(0, Math.round(r * 0.5)), "--radius": r, "--radius-lg": Math.round(r * 1.7) }), te = (r) => {
  if (r <= 0) return { "--shadow-sm": "none", "--shadow": "none", "--shadow-lg": "none" };
  const i = (e) => Math.min(0.6, e * r).toFixed(3);
  return {
    "--shadow-sm": `0 1px 2px rgba(0,0,0,${i(0.1)})`,
    "--shadow": `0 1px 2px rgba(0,0,0,${i(0.08)}), 0 2px 8px rgba(0,0,0,${i(0.07)})`,
    "--shadow-lg": `0 4px 14px rgba(0,0,0,${i(0.1)}), 0 14px 36px rgba(0,0,0,${i(0.13)})`
  };
}, ne = (r) => /^[A-Za-z][\w-]*$/.test(r) ? r : `"${r.replace(/"/g, "")}"`, re = (r) => r ? G[r] ? (Ct(r), `${ne(r)}, sans-serif`) : R[r] != null ? R[r] : `${ne(r)}, sans-serif` : "", _ = Object.keys(w), H = (r) => {
  const i = {};
  for (const e of _)
    r?.[e] !== void 0 && typeof r[e] == typeof w[e] && (i[e] = r[e]);
  return i;
};
function vt() {
  const r = () => {
    try {
      return H(JSON.parse(localStorage.getItem(N) || "{}"));
    } catch {
      return {};
    }
  }, i = Object.fromEntries(Object.entries(r()).filter(([a, t]) => t !== w[a]));
  let e = { ...w };
  const o = K({ ...e, ...i }), s = K({ open: !1, locked: !1 }), g = () => {
    if (s.locked) return;
    const a = Object.fromEntries(_.filter((t) => o[t] !== e[t]).map((t) => [t, o[t]]));
    try {
      Object.keys(a).length ? localStorage.setItem(N, JSON.stringify(a)) : localStorage.removeItem(N);
    } catch {
    }
  }, h = () => document.documentElement, u = (a, t = "", c = !1) => {
    const d = h().style;
    for (const p of Object.keys(a)) c ? d.removeProperty(p) : d.setProperty(p, `${a[p]}${t}`);
  };
  let l = null;
  const m = () => {
    const a = h(), t = l ? { ...o, ...l } : o;
    t.mode === "system" ? a.removeAttribute("data-theme") : a.setAttribute("data-theme", t.mode);
    const c = t.brand ? ee(t.brand) : null;
    for (const b of Object.keys(L))
      c ? a.style.setProperty(`--brand-${b}`, c[`--brand-${b}`]) : a.style.removeProperty(`--brand-${b}`);
    const d = Number(t.font) || 1, p = d * (Number(t.density) || 1), v = (b, he) => Object.fromEntries(Object.entries(b).map(([ye, Ce]) => [ye, (Ce * he).toFixed(1)]));
    u(v(E, d), "px", d === 1), u(v(j, p), "px", p === 1), a.style.setProperty("--scale-text", d.toFixed(3)), a.style.setProperty("--scale-space", p.toFixed(3));
    const f = P.find((b) => b.id === t.surface) ?? P[0];
    f.light ? (a.style.setProperty("--page-surface", f.light), a.style.setProperty("--page-surface-dark", f.dark)) : (a.style.removeProperty("--page-surface"), a.style.removeProperty("--page-surface-dark")), Q.some((b) => b.id && b.id === t.contrast) ? a.setAttribute("data-contrast", t.contrast) : a.removeAttribute("data-contrast");
    const S = Number(t.control) || 1;
    S !== 1 ? a.style.setProperty("--control-scale", String(S)) : a.style.removeProperty("--control-scale"), A.some((b) => b.id && b.id === t.header) ? a.setAttribute("data-header", t.header) : a.removeAttribute("data-header");
    const W = re(t.fontFamily);
    W ? a.style.setProperty("--font-sans", W) : a.style.removeProperty("--font-sans");
    const z = Number.isFinite(t.radius) ? t.radius : F;
    u(oe(z), "px", z === F);
    const J = Number.isFinite(t.shadow) ? t.shadow : M;
    u(te(J), "", J === M), l || g();
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
    swatches: yt,
    fontStacks: R,
    webFonts: G,
    surfaces: P,
    contrasts: Q,
    headers: A,
    controls: bt,
    set(a) {
      s.locked || Object.assign(o, a);
    },
    reset() {
      s.locked || Object.assign(o, e);
    },
    useDefaults(a, t) {
      const c = t?.enforce ? {} : s.locked ? r() : Object.fromEntries(_.filter((d) => o[d] !== e[d]).map((d) => [d, o[d]]));
      e = { ...w, ...H(a) }, s.locked = !!t?.enforce, Object.assign(o, e, c);
    },
    preview(a) {
      l = a ? H(a) : null, m();
    },
    apply: m,
    toggle(a) {
      s.open = a ?? !s.open;
    },
    exportTokens: () => {
      const a = ["/* Tokens exported from the theme panel — paste into packages/sapp-theme-default/src/hoff/tokens.css */"], t = o.brand ? ee(o.brand) : null;
      if (t) for (const f of Object.keys(t)) a.push(`${f}: ${t[f]};`);
      const c = Number(o.font) || 1;
      if (c !== 1) for (const f of Object.keys(E)) a.push(`${f}: ${(E[f] * c).toFixed(1)}px;`);
      const d = c * (Number(o.density) || 1);
      if (d !== 1) for (const f of Object.keys(j)) a.push(`${f}: ${(j[f] * d).toFixed(1)}px;`);
      if (o.radius !== F) for (const [f, S] of Object.entries(oe(o.radius))) a.push(`${f}: ${S}px;`);
      if (o.shadow !== M) for (const [f, S] of Object.entries(te(o.shadow))) a.push(`${f}: ${S};`);
      const p = P.find((f) => f.id === o.surface);
      p?.light && a.push(`--background: ${p.light};   /* dark: ${p.dark} */`);
      const v = re(o.fontFamily);
      return v && a.push(`--font-sans: ${v};`), o.header && a.push(`/* header: ${o.header} — <html data-header="${o.header}"> (the [data-header] values of tokens.css) */`), o.contrast && a.push(`/* contrast: ${o.contrast} — the [data-contrast="${o.contrast}"] values of tokens.css */`), a.length === 1 && a.push("/* nothing differs from the defaults */"), a.join(`
`);
    }
  };
  return V(o, m, { deep: !0 }), m(), y;
}
const St = ke("ui", () => {
  const r = D([]);
  let i = 0;
  const e = /* @__PURE__ */ new Map(), o = (t) => {
    const c = t.id || ++i, d = { ...t, id: c, type: t.type || "info" };
    e.has(c) && (clearTimeout(e.get(c)), e.delete(c));
    const p = r.value.findIndex((f) => f.id === c);
    p !== -1 ? r.value[p] = d : r.value.push(d);
    const v = setTimeout(() => {
      s(c);
    }, t.duration || 5e3);
    e.set(c, v);
  }, s = (t) => {
    r.value = r.value.filter((c) => c.id !== t), e.has(t) && (clearTimeout(e.get(t)), e.delete(t));
  }, g = D(null), h = (t) => {
    console.log("💬 [uiStore] showMessage:", t.title), g.value = t;
  }, u = () => {
    console.log("💬 [uiStore] closeMessage"), g.value = null;
  }, l = D([]);
  let m = 0;
  return {
    toasts: r,
    showToast: o,
    removeToast: s,
    activeMessage: g,
    showMessage: h,
    closeMessage: u,
    activeDialogs: l,
    openDialog: (t) => {
      console.log("🏗️ [uiStore] openDialog:", t.title);
      const c = t.id || `dialog-${++m}`;
      return l.value.push({ ...t, id: c }), c;
    },
    closeDialog: (t) => {
      const c = l.value.find((d) => d.id === t);
      c?.onClose && c.onClose(), l.value = l.value.filter((d) => d.id !== t);
    },
    closeAllDialogs: () => {
      l.value.forEach((t) => t.onClose?.()), l.value = [];
    }
  };
}), kt = {
  key: 0,
  class: "flex items-center gap-3"
}, It = { class: "modal-title !m-0" }, Ut = {
  key: 0,
  class: "py-2"
}, wt = { class: "text-sm text-muted-foreground leading-relaxed mb-2" }, Tt = {
  key: 0,
  class: "mt-4"
}, $t = { class: "flex items-center justify-end gap-2 w-full" }, Bt = /* @__PURE__ */ be({
  __name: "MessageProvider",
  setup(r) {
    const i = xe("ui-store"), e = q(() => i?.activeMessage || null), o = D("");
    V(e, (m) => {
      m?.type === "prompt" && (o.value = m.defaultValue || "");
    });
    const s = {
      info: { icon: ce, color: "text-info", bg: "bg-info-soft" },
      success: { icon: Ue, color: "text-success", bg: "bg-success-soft" },
      warning: { icon: se, color: "text-warning", bg: "bg-warning-soft" },
      error: { icon: ie, color: "text-danger", bg: "bg-danger-soft" },
      confirm: { icon: Ie, color: "text-primary", bg: "bg-primary-soft" },
      prompt: { icon: ae, color: "text-primary", bg: "bg-primary-soft" }
    }, g = () => {
      i?.closeMessage();
    }, h = async () => {
      e.value?.type === "prompt" && !o.value?.trim() || (e.value?.onConfirm && (e.value.type === "prompt" ? await e.value.onConfirm(o.value) : await e.value.onConfirm()), g());
    }, u = () => {
      e.value?.onCancel && e.value.onCancel(), g();
    }, l = q(() => e.value ? s[e.value.type] || s.info : null);
    return (m, C) => (x(), k(I(m.$c("ui.modal")), {
      key: e.value?.title || "none",
      show: !!e.value,
      onClose: g,
      maxWidth: "max-w-md",
      zIndex: 99999
    }, {
      header: U(() => [
        e.value ? (x(), O("div", kt, [
          T("div", {
            class: Y(["w-10 h-10 rounded-lg flex items-center justify-center shrink-0", l.value?.bg])
          }, [
            (x(), k(I(l.value?.icon), {
              size: 20,
              "stroke-width": "2",
              class: Y(l.value?.color)
            }, null, 8, ["class"]))
          ], 2),
          T("h3", It, $(e.value.title), 1)
        ])) : B("", !0)
      ]),
      footer: U(() => [
        T("div", $t, [
          e.value?.type === "confirm" || e.value?.type === "prompt" ? (x(), k(I(m.$c("ui.button")), {
            key: 0,
            variant: "default",
            onClick: u
          }, {
            default: U(() => [
              X($(e.value.cancelText || m.$t("common.cancel")), 1)
            ]),
            _: 1
          })) : B("", !0),
          (x(), k(I(m.$c("ui.button")), {
            variant: e.value?.type === "error" ? "danger" : "primary",
            onClick: h,
            disabled: e.value?.type === "prompt" && !o.value?.trim()
          }, {
            default: U(() => [
              X($(e.value?.type === "prompt" ? m.$t("common.submit") : e.value?.confirmText || m.$t("common.understood")), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled"]))
        ])
      ]),
      default: U(() => [
        e.value ? (x(), O("div", Ut, [
          T("p", wt, $(e.value.description), 1),
          e.value.type === "prompt" ? (x(), O("div", Tt, [
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
              onKeyup: C[2] || (C[2] = ve((y) => o.value?.trim() ? h() : null, ["enter"]))
            }, null, 40, ["modelValue", "placeholder"]))
          ])) : B("", !0)
        ])) : B("", !0)
      ]),
      _: 1
    }, 40, ["show"]));
  }
}), jt = {
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
}, pe = {
  Layers: at,
  LayoutGrid: ue,
  LayoutDashboard: rt,
  Globe: nt,
  Shield: tt,
  ShieldCheck: fe,
  Zap: ie,
  Box: ot,
  Package: et,
  Boxes: Ao,
  Terminal: Qo,
  Cpu: Zo,
  Database: Yo,
  Server: Xo,
  Cloud: qo,
  Code: Ko,
  Braces: Jo,
  Network: zo,
  Workflow: Wo,
  GitBranch: Go,
  BookOpen: Vo,
  Book: _o,
  FileText: Ro,
  Files: Lo,
  Folder: Ho,
  FolderOpen: jo,
  Archive: Eo,
  ClipboardList: No,
  ClipboardCheck: Oo,
  ListChecks: Mo,
  Building: Fo,
  Building2: Do,
  Home: Po,
  Hotel: Bo,
  Landmark: $o,
  Factory: To,
  Store: wo,
  Warehouse: Uo,
  HardHat: Io,
  Ruler: ko,
  Hammer: So,
  Wrench: vo,
  MapPin: xo,
  Map: bo,
  Compass: Co,
  Users: yo,
  User: ge,
  UserCog: ho,
  Contact: po,
  Briefcase: uo,
  Handshake: fo,
  GraduationCap: go,
  Award: mo,
  Wallet: lo,
  CreditCard: co,
  Receipt: so,
  Banknote: io,
  DollarSign: ao,
  PiggyBank: ro,
  Scale: no,
  Gavel: to,
  BarChart3: oo,
  PieChart: eo,
  TrendingUp: Ae,
  Activity: Qe,
  Gauge: Ze,
  Target: Ye,
  Calendar: Xe,
  CalendarDays: qe,
  Clock: Ke,
  Bell: de,
  Mail: Je,
  MessageSquare: ae,
  Phone: ze,
  Megaphone: We,
  ShoppingCart: Ge,
  ShoppingBag: Ve,
  Tag: _e,
  Tags: Re,
  Truck: Le,
  Car: He,
  Key: je,
  KeyRound: Ee,
  Lock: me,
  Settings: le,
  Rocket: Ne,
  Star: Oe,
  Heart: Me,
  Sparkles: Fe,
  Flag: De,
  Palette: Pe,
  Image: Be,
  Camera: $e,
  Video: Te,
  Headphones: we
}, Ht = Object.keys(pe), Lt = (r) => r && pe[r] || ue;
function Rt(...r) {
  return ut(ft(r));
}
class Pt {
  id = "default";
  name = "Standard Enterprise Slate";
  register(i, e, o = {}) {
    const s = o.uiStore ?? St(), g = pt(s), h = ht(s), u = Se(), l = vt();
    i.config.globalProperties.$message = g, i.config.globalProperties.$appState = u, i.config.globalProperties.$superApp = e, e.$appState = u, e.$themeConfig = l, i.config.globalProperties.$themeConfig = l, i.provide("$themeConfig", l), V(() => JSON.stringify(e.state?.platformConfig?.look ?? null), (d) => {
      const p = JSON.parse(d);
      p && l.useDefaults(p, { enforce: p.enforce === !0 });
    }, { immediate: !0 }), e.registerComponent({ id: "layout.theme-panel", category: "Shell UI", component: n(() => import("./chunks/ThemePanel-Uc2h0rYa.js")) }), e.registerCommand({ id: "theme.customize", name: "Tuỳ chỉnh giao diện", category: "Theme", shortcut: "⌘⇧T", handler: () => l.toggle() }), e.registerCommand({ id: "theme.studio", name: "Theme Studio", description: "Trang tuỳ chỉnh giao diện đầy đủ", category: "Theme", handler: () => {
      e.$router?.push("/system/theme");
    } });
    const m = n(() => import("./chunks/Header-BTyjBXRK.js"));
    e.registerComponent({ id: "Header", category: "Shell UI", component: m }), e.registerComponent({ id: "layout.header", category: "Shell UI", component: m });
    const C = n(() => import("./chunks/Sidebar-CCmpwaOA.js"));
    e.registerComponent({ id: "Sidebar", category: "Shell UI", component: C }), e.registerComponent({ id: "layout.sidebar", category: "Shell UI", component: C });
    const y = n(() => import("./chunks/ModulePageLayout-CuSYrWur.js"));
    e.registerComponent({ id: "ModulePageLayout", category: "Shell UI", component: y }), e.registerComponent({ id: "layout.module-page", category: "Shell UI", component: y });
    const a = n(() => import("./chunks/ModuleHeader-BnrOpukT.js"));
    e.registerComponent({ id: "ModuleHeader", category: "Shell UI", component: a }), e.registerComponent({ id: "layout.module-header", category: "Shell UI", component: a });
    const t = n(() => import("./chunks/DualSidebarLayout-BH2tOx6j.js"));
    e.registerComponent({ id: "DualSidebarLayout", category: "Shell UI", component: t }), e.registerComponent({ id: "layout.dual-sidebar", category: "Shell UI", component: t });
    const c = n(() => import("./chunks/ErpCommandPalette-fx4Q0Amc.js"));
    return e.registerComponent({ id: "CommandPalette", category: "Shell UI", component: c }), e.registerComponent({ id: "layout.command-palette", category: "Shell UI", component: c }), e.registerComponent({ id: "layout.app-container", category: "Shell UI", component: n(() => import("./chunks/AppContainer-1auGMDoE.js")) }), e.registerComponent({ id: "ThemeConnector", category: "Shell UI", component: n(() => import("./chunks/ThemeConnector-BURiF21B.js")) }), e.registerComponent({ id: "ToastContainer", category: "Shell UI", component: n(() => import("./chunks/ToastContainer-JGwl3S_m.js")) }), e.registerComponent({ id: "MessageProvider", category: "Shell UI", component: Bt }), e.registerComponent({ id: "DialogProvider", category: "Shell UI", component: n(() => import("./chunks/DialogProvider-C21AipJt.js")) }), e.registerComponent({ id: "layout.action-bar", category: "Layout UI", component: n(() => import("./chunks/ErpActionBar-DR8NVTx-.js")) }), e.registerComponent({ id: "display.data-grid", category: "Display UI", component: n(() => import("./chunks/ErpDataGrid-A4UGQwRU.js")) }), e.registerComponent({ id: "form.entity-selector", category: "Form UI", component: n(() => import("./chunks/ErpEntitySelector-XLEStx_M.js")) }), e.registerComponent({ id: "ui.card", category: "UI Blocks", component: n(() => import("./chunks/Card-sv8WQzvB.js")) }), e.registerComponent({ id: "ui.button", category: "UI Blocks", component: n(() => import("./chunks/Button-Cud5Nfh1.js")) }), e.registerComponent({ id: "ui.button-copy", category: "UI Blocks", component: n(() => import("./chunks/ButtonCopy-DsdzXkaa.js")) }), e.registerComponent({ id: "ui.text", category: "UI Blocks", component: n(() => import("./chunks/Typography-CNI1yScN.js")) }), e.registerComponent({ id: "ui.skeleton", category: "UI Blocks", component: n(() => import("./chunks/Skeleton-CfLyDGWt.js")) }), e.registerComponent({ id: "form.input", category: "Form UI", component: n(() => import("./chunks/Input-B0IfgsVG.js")) }), e.registerComponent({ id: "form.input-number", category: "Form UI", component: n(() => import("./chunks/InputNumber-DBRTF-wJ.js")) }), e.registerComponent({ id: "form.switch", category: "Form UI", component: n(() => import("./chunks/InputSwitch-BPvOZo9w.js")) }), e.registerComponent({ id: "InputSwitch", category: "Form UI", component: n(() => import("./chunks/InputSwitch-BPvOZo9w.js")) }), e.registerComponent({ id: "form.textarea", category: "Form UI", component: n(() => import("./chunks/Textarea-BVKFbpBu.js")) }), e.registerComponent({ id: "form.icon-picker", category: "Form UI", component: n(() => import("./chunks/IconPicker-DbgxD0io.js")) }), e.registerComponent({ id: "ui.app-icon", category: "UI Blocks", component: n(() => import("./chunks/AppIcon-CZVJSONO.js")) }), e.registerComponent({ id: "form.field", category: "Form UI", component: n(() => import("./chunks/FormField-DnQICIpP.js")) }), e.registerComponent({ id: "ui.modal", category: "UI Blocks", component: n(() => import("./chunks/Modal-BVG4U5yl.js")) }), e.registerComponent({ id: "ui.search-input", category: "UI Blocks", component: n(() => import("./chunks/SearchInput-CHiFQN2g.js")) }), e.registerComponent({ id: "ui.avatar", category: "UI Blocks", component: n(() => import("./chunks/UserAvatar-DRE3opnT.js")) }), e.registerComponent({ id: "ui.badge", category: "UI Blocks", component: n(() => import("./chunks/Badge-ZzsVRpNl.js")) }), e.registerComponent({ id: "ui.alert", category: "UI Blocks", component: n(() => import("./chunks/Alert-DylOuBAF.js")) }), e.registerComponent({ id: "layout.section-header", category: "Layout UI", component: n(() => import("./chunks/SectionHeader-C8ufun_t.js")) }), e.registerComponent({ id: "layout.mini-app", category: "Layout UI", component: n(() => import("./chunks/MiniAppLayout-DcMLR1CC.js")) }), e.registerComponent({ id: "form.code-editor", category: "Form UI", component: n(() => import("./chunks/CodeEditor-0g7paalJ.js")) }), e.registerComponent({ id: "runtime.studio", category: "Form UI", component: n(() => import("./chunks/CodeEditor-0g7paalJ.js")) }), e.registerComponent({ id: "button.copy", category: "UI Blocks", component: n(() => import("./chunks/ButtonCopy-DsdzXkaa.js")) }), e.registerComponent({ id: "ui.popover", category: "UI Blocks", component: n(() => import("./chunks/Popover-DgBGd8bu.js")) }), e.registerComponent({ id: "ui.popover-trigger", category: "UI Blocks", component: n(() => import("./chunks/PopoverTrigger-CTa-i7wG.js")) }), e.registerComponent({ id: "ui.popover-content", category: "UI Blocks", component: n(() => import("./chunks/PopoverContent-0CCuXPfd.js")) }), e.registerComponent({ id: "ui.context-menu", category: "UI Blocks", component: n(() => import("./chunks/ContextMenu-D1g_2xmd.js")) }), e.registerComponent({ id: "ui.list-manager", category: "UI Blocks", component: n(() => import("./chunks/ListManager-BbjjcqOm.js")) }), e.registerComponent({ id: "ui.dropdown", category: "UI Blocks", component: n(() => import("./chunks/Dropdown-wKllpTqE.js")) }), e.registerComponent({ id: "display.chart", category: "Display UI", component: n(() => import("./chunks/InsightChart-BlF0mgf_.js")) }), e.registerComponent({ id: "display.data-table", category: "Display UI", component: n(() => import("./chunks/DataTable-BDouONVY.js")) }), e.registerComponent({ id: "display.column-settings", category: "Display UI", component: n(() => import("./chunks/ColumnSettings-Bv6YxjSC.js")) }), e.registerComponent({ id: "display.simple-pagination", category: "Display UI", component: n(() => import("./chunks/SimplePagination-Dz9OfQYH.js")) }), e.registerComponent({ id: "display.markdown", category: "Display UI", component: n(() => import("./chunks/Markdown-B7Z-2crI.js")) }), e.registerComponent({ id: "Table", category: "Table UI", component: n(() => import("./chunks/Table-BLZjeVVX.js")) }), e.registerComponent({ id: "TableBody", category: "Table UI", component: n(() => import("./chunks/TableBody-B62z8Jcx.js")) }), e.registerComponent({ id: "TableCell", category: "Table UI", component: n(() => import("./chunks/TableCell-DEzqxj9e.js")) }), e.registerComponent({ id: "TableHead", category: "Table UI", component: n(() => import("./chunks/TableHead-DFpbn3fx.js")) }), e.registerComponent({ id: "TableHeader", category: "Table UI", component: n(() => import("./chunks/TableHeader-C6oE9KYG.js")) }), e.registerComponent({ id: "TableRow", category: "Table UI", component: n(() => import("./chunks/TableRow-BT1dHX61.js")) }), e.registerComponent({ id: "form.select", category: "Form UI", component: n(() => import("./chunks/Select-Br3bDwg3.js")) }), e.registerComponent({ id: "form.select-content", category: "Form UI", component: n(() => import("./chunks/SelectContent-DJPU2Dbi.js")) }), e.registerComponent({ id: "form.select-item", category: "Form UI", component: n(() => import("./chunks/SelectItem-ExBV4X2S.js")) }), e.registerComponent({ id: "form.select-trigger", category: "Form UI", component: n(() => import("./chunks/SelectTrigger-VqHMXKN7.js")) }), e.registerComponent({ id: "form.select-value", category: "Form UI", component: n(() => import("./chunks/SelectValue-Bo98YXZE.js")) }), e.registerComponent({ id: "ui.icon.shield-check", category: "Icons", component: fe }), e.registerComponent({ id: "ui.icon.user", category: "Icons", component: ge }), e.registerComponent({ id: "ui.icon.lock", category: "Icons", component: me }), e.registerComponent({ id: "ui.icon.arrow-right", category: "Icons", component: it }), e.registerComponent({ id: "ui.icon.search", category: "Icons", component: st }), e.registerComponent({ id: "ui.icon.settings", category: "Icons", component: le }), e.registerComponent({ id: "ui.icon.bell", category: "Icons", component: de }), e.registerComponent({ id: "ui.icon.logout", category: "Icons", component: ct }), e.registerComponent({ id: "ui.icon.chevron-down", category: "Icons", component: lt }), e.registerComponent({ id: "ui.icon.chevron-right", category: "Icons", component: mt }), e.registerComponent({ id: "ui.icon.check", category: "Icons", component: dt }), e.registerComponent({ id: "ui.icon.alert-triangle", category: "Icons", component: se }), e.registerComponent({ id: "ui.icon.info", category: "Icons", component: ce }), e.registerComponent({ id: "ui.icon.x", category: "Icons", component: gt }), { messageService: g, dialogService: h, appState: u, themeConfig: l, uiStore: s };
  }
}
const _t = new Pt();
export {
  pe as APP_ICONS,
  Ht as APP_ICON_NAMES,
  Pt as DefaultTheme,
  R as FONT_STACKS,
  yt as SWATCHES,
  jt as THEME,
  w as THEME_CONFIG_DEFAULTS,
  Lt as appIcon,
  ee as brandScale,
  Rt as cn,
  ht as createDialogService,
  pt as createMessageService,
  vt as createThemeConfig,
  _t as defaultTheme,
  St as useUiStore
};
//# sourceMappingURL=index.js.map
