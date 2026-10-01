import { reactive, watch } from 'vue';
import type { IThemeConfig, ThemeConfigState } from '@nhphero/vue-sapp/contracts';

/**
 * Live theme customization — ported from hoff-kit theme-config.js.
 * Everything is expressed as CSS variables on <html>, so it works for the Shell and every
 * mini app at once. `exportTokens()` gives the CSS to paste into hoff/tokens.css when the look is final.
 *
 * Two layers: the base (the theme defaults, or the platform's look from Admin → Config through
 * `useDefaults`) and the user's own changes on top. Only those changes go to localStorage, so a later
 * platform change reaches everyone who did not touch that setting.
 */
const STORAGE_KEY = 'sapp.theme.config';

const BASE_TEXT: Record<string, number> = { '--text-xs': 12, '--text-sm': 14, '--text-base': 16, '--text-lg': 18, '--text-xl': 20, '--text-2xl': 24, '--text-3xl': 30 };
const BASE_SPACE: Record<string, number> = { '--sp-1': 4, '--sp-2': 8, '--sp-3': 12, '--sp-4': 16, '--sp-5': 24, '--sp-6': 32, '--sp-7': 48, '--sp-8': 64, '--touch': 44, '--header-h': 52 };
const STEPS: Record<string, number> = { 50: 96, 100: 92, 200: 84, 300: 72, 400: 58, 500: 47, 600: 39, 700: 32, 800: 27, 900: 23, 950: 13 };
const RADIUS_DEFAULT = 6;
const SHADOW_DEFAULT = 1;

export const SWATCHES = [
  { name: 'Teal', hex: '#256B65' }, { name: 'Blue', hex: '#2563EB' }, { name: 'Indigo', hex: '#4F46E5' },
  { name: 'Violet', hex: '#7C3AED' }, { name: 'Rose', hex: '#E11D48' }, { name: 'Amber', hex: '#B45309' },
  { name: 'Green', hex: '#15803D' }, { name: 'Slate', hex: '#3D4B54' },
];

/**
 * Web fonts, fetched from Google Fonts only when one is actually picked.
 * Every entry below ships the `vietnamese` subset, which is the point: the local
 * stacks fall back per-glyph, so accented characters get borrowed from another
 * typeface and the word ends up drawn in two fonts at once. That mismatch is what
 * reads as "ugly" in Vietnamese UI text.
 */
export const WEB_FONTS: Record<string, string> = {
  'Be Vietnam Pro': 'Be+Vietnam+Pro:wght@400;500;600;700',   // drawn for Vietnamese
  'Inter': 'Inter:wght@400;500;600;700',
  'Plus Jakarta Sans': 'Plus+Jakarta+Sans:wght@400;500;600;700',
  'Manrope': 'Manrope:wght@400;500;600;700',
  'Lexend': 'Lexend:wght@400;500;600;700',
  'Public Sans': 'Public+Sans:wght@400;500;600;700',
  'IBM Plex Sans': 'IBM+Plex+Sans:wght@400;500;600;700',
  'Source Sans 3': 'Source+Sans+3:wght@400;500;600;700',
  'Nunito Sans': 'Nunito+Sans:wght@400;500;600;700',
  'Noto Serif': 'Noto+Serif:wght@400;500;600;700',
};

const loadedFonts = new Set<string>();
/** Injects the stylesheet once per family; a font never picked is never fetched. */
const ensureWebFont = (name: string) => {
  const spec = WEB_FONTS[name];
  if (!spec || loadedFonts.has(name) || typeof document === 'undefined') return;
  loadedFonts.add(name);
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${spec}&display=swap`;
  link.dataset.sappFont = name;
  document.head.appendChild(link);
};

/** Page surface presets. A free colour would break the card/page contrast contract,
 *  so the choice is a short list, each with its own value for light and dark. */
export const SURFACES: ReadonlyArray<{ id: string; label: string; light: string; dark: string }> = [
  { id: '',      label: 'theme.surfaceDefault', light: '',                 dark: '' },
  { id: 'paper', label: 'theme.surfacePaper',   light: 'var(--gray-100)',  dark: '#0B1116' },
  { id: 'deep',  label: 'theme.surfaceDeep',    light: 'var(--gray-300)',  dark: '#06090C' },
  { id: 'tint',  label: 'theme.surfaceTint',    light: 'var(--brand-100)', dark: 'var(--brand-950)' },
];

/** Local font stacks (Modern Font Stacks) — no network, the machine uses what it has. */
export const FONT_STACKS: Record<string, string> = {
  'System UI': '',
  'Neo-Grotesque': '"Inter", "Roboto", "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif',
  'Humanist': '"Seravek", "Gill Sans Nova", "Ubuntu", "Calibri", "DejaVu Sans", "Segoe UI", sans-serif',
  'Geometric': '"Avenir", "Avenir Next", "Montserrat", "Corbel", "URW Gothic", "Poppins", sans-serif',
  'Classical': '"Optima", "Candara", "Noto Sans", "Source Sans 3", "Segoe UI", sans-serif',
  'Rounded': 'ui-rounded, "Hiragino Maru Gothic ProN", "Quicksand", "Comfortaa", "Varela Round", sans-serif',
  'Serif': '"Charter", "Bitstream Charter", "Sitka Text", "Cambria", Georgia, serif',
};

export const THEME_CONFIG_DEFAULTS: ThemeConfigState = Object.freeze({
  mode: 'light', brand: '', font: 1, density: 1, fontFamily: 'System UI', radius: RADIUS_DEFAULT, shadow: SHADOW_DEFAULT,
  surface: '',
});

const hexToHsl = (hex: string) => {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex);
  if (!m) return null;
  const n = parseInt(m[1], 16), r = (n >> 16) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    h *= 60;
  }
  return { h, s: s * 100, l: l * 100 };
};

/** Derive the 11-step brand scale from one colour (lighter steps are desaturated). */
export const brandScale = (hex: string): Record<string, string> | null => {
  const c = hexToHsl(hex);
  if (!c) return null;
  const out: Record<string, string> = {};
  for (const step of Object.keys(STEPS)) {
    const L = STEPS[step];
    const S = c.s * (L > 85 ? 0.55 : L > 70 ? 0.75 : 1);
    out[`--brand-${step}`] = `hsl(${c.h.toFixed(0)} ${S.toFixed(0)}% ${L}%)`;
  }
  return out;
};

const radiusSet = (r: number) => ({ '--radius-sm': Math.max(0, Math.round(r * 0.5)), '--radius': r, '--radius-lg': Math.round(r * 1.7) });
const shadowSet = (f: number): Record<string, string> => {
  if (f <= 0) return { '--shadow-sm': 'none', '--shadow': 'none', '--shadow-lg': 'none' };
  const a = (x: number) => Math.min(0.6, x * f).toFixed(3);
  return {
    '--shadow-sm': `0 1px 2px rgba(0,0,0,${a(0.10)})`,
    '--shadow': `0 1px 2px rgba(0,0,0,${a(0.08)}), 0 2px 8px rgba(0,0,0,${a(0.07)})`,
    '--shadow-lg': `0 4px 14px rgba(0,0,0,${a(0.10)}), 0 14px 36px rgba(0,0,0,${a(0.13)})`,
  };
};
const fontStack = (name: string) => {
  if (!name || name === 'System UI') return '';
  if (WEB_FONTS[name]) { ensureWebFont(name); return `"${name}", system-ui, sans-serif`; }
  if (FONT_STACKS[name] != null) return FONT_STACKS[name];
  return `"${name.replace(/"/g, '')}", system-ui, sans-serif`;
};

const KEYS = Object.keys(THEME_CONFIG_DEFAULTS) as (keyof ThemeConfigState)[];

/** Known keys with the right type only. */
const pick = (input: Record<string, any> | null | undefined): Partial<ThemeConfigState> => {
  const out: Record<string, any> = {};
  for (const k of KEYS) {
    if (input?.[k] !== undefined && typeof input[k] === typeof THEME_CONFIG_DEFAULTS[k]) out[k] = input[k];
  }
  return out as Partial<ThemeConfigState>;
};

export function createThemeConfig(): IThemeConfig {
  const readSaved = (): Partial<ThemeConfigState> => {
    try { return pick(JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')); } catch { return {}; }
  };
  // Older versions saved the whole state: values equal to the theme defaults were never real changes.
  const overrides = Object.fromEntries(Object.entries(readSaved()).filter(([k, v]) => v !== (THEME_CONFIG_DEFAULTS as any)[k]));

  let base: ThemeConfigState = { ...THEME_CONFIG_DEFAULTS };
  const state = reactive<ThemeConfigState>({ ...base, ...overrides });
  const ui = reactive({ open: false, locked: false });

  /** What differs from the base — the user's changes — or nothing while the platform enforces its look. */
  const persist = () => {
    if (ui.locked) return;
    const diff = Object.fromEntries(KEYS.filter(k => state[k] !== base[k]).map(k => [k, state[k]]));
    try {
      if (Object.keys(diff).length) localStorage.setItem(STORAGE_KEY, JSON.stringify(diff));
      else localStorage.removeItem(STORAGE_KEY);
    } catch { /* quota / private mode */ }
  };
  const root = () => document.documentElement;
  const setVars = (vars: Record<string, string | number>, unit = '', remove = false) => {
    const st = root().style;
    for (const k of Object.keys(vars)) remove ? st.removeProperty(k) : st.setProperty(k, `${vars[k]}${unit}`);
  };

  const apply = () => {
    const el = root();
    if (state.mode === 'system') el.removeAttribute('data-theme');
    else el.setAttribute('data-theme', state.mode);

    const sc = state.brand ? brandScale(state.brand) : null;
    for (const s of Object.keys(STEPS)) {
      if (sc) el.style.setProperty(`--brand-${s}`, sc[`--brand-${s}`]);
      else el.style.removeProperty(`--brand-${s}`);
    }

    const mText = Number(state.font) || 1;
    const mSpace = mText * (Number(state.density) || 1);
    const scaled = (base: Record<string, number>, m: number) => Object.fromEntries(Object.entries(base).map(([k, v]) => [k, (v * m).toFixed(1)]));
    setVars(scaled(BASE_TEXT, mText), 'px', mText === 1);
    setVars(scaled(BASE_SPACE, mSpace), 'px', mSpace === 1);
    el.style.setProperty('--scale-text', mText.toFixed(3));
    el.style.setProperty('--scale-space', mSpace.toFixed(3));

    // Page surface. tokens.css reads `--page-surface` / `--page-surface-dark` through
    // var() fallbacks, so one inline value per mode cannot bleed across the other.
    const surf = SURFACES.find(x => x.id === state.surface) ?? SURFACES[0];
    if (surf.light) {
      el.style.setProperty('--page-surface', surf.light);
      el.style.setProperty('--page-surface-dark', surf.dark);
    } else {
      el.style.removeProperty('--page-surface');
      el.style.removeProperty('--page-surface-dark');
    }

    const ff = fontStack(state.fontFamily);
    if (ff) el.style.setProperty('--font-sans', ff); else el.style.removeProperty('--font-sans');

    const r = Number.isFinite(state.radius) ? state.radius : RADIUS_DEFAULT;
    setVars(radiusSet(r), 'px', r === RADIUS_DEFAULT);

    const sh = Number.isFinite(state.shadow) ? state.shadow : SHADOW_DEFAULT;
    setVars(shadowSet(sh), '', sh === SHADOW_DEFAULT);

    persist();
  };

  const exportTokens = () => {
    const lines = ['/* Tokens exported from the theme panel — paste into packages/sapp-theme-default/src/hoff/tokens.css */'];
    const sc = state.brand ? brandScale(state.brand) : null;
    if (sc) for (const k of Object.keys(sc)) lines.push(`${k}: ${sc[k]};`);
    const f = Number(state.font) || 1;
    if (f !== 1) for (const k of Object.keys(BASE_TEXT)) lines.push(`${k}: ${(BASE_TEXT[k] * f).toFixed(1)}px;`);
    const m = f * (Number(state.density) || 1);
    if (m !== 1) for (const k of Object.keys(BASE_SPACE)) lines.push(`${k}: ${(BASE_SPACE[k] * m).toFixed(1)}px;`);
    if (state.radius !== RADIUS_DEFAULT) for (const [k, v] of Object.entries(radiusSet(state.radius))) lines.push(`${k}: ${v}px;`);
    if (state.shadow !== SHADOW_DEFAULT) for (const [k, v] of Object.entries(shadowSet(state.shadow))) lines.push(`${k}: ${v};`);
    const surf = SURFACES.find(x => x.id === state.surface);
    if (surf?.light) lines.push(`--background: ${surf.light};   /* dark: ${surf.dark} */`);
    const ff = fontStack(state.fontFamily);
    if (ff) lines.push(`--font-sans: ${ff};`);
    if (lines.length === 1) lines.push('/* nothing differs from the defaults */');
    return lines.join('\n');
  };

  const config: IThemeConfig = {
    state,
    get open() { return ui.open; },
    set open(v: boolean) { ui.open = v; },
    get defaults() { return base; },
    get locked() { return ui.locked; },
    swatches: SWATCHES,
    fontStacks: FONT_STACKS,
    webFonts: WEB_FONTS,
    surfaces: SURFACES,
    set(patch) { if (!ui.locked) Object.assign(state, patch); },
    reset() { if (!ui.locked) Object.assign(state, base); },
    useDefaults(patch, options) {
      // The user's changes survive a new base (unless enforced): measured against the old base, or —
      // coming out of a lock, which never touched storage — read back from localStorage.
      const mine = options?.enforce ? {}
        : ui.locked ? readSaved()
        : Object.fromEntries(KEYS.filter(k => state[k] !== base[k]).map(k => [k, state[k]]));
      base = { ...THEME_CONFIG_DEFAULTS, ...pick(patch) };
      ui.locked = !!options?.enforce;
      Object.assign(state, base, mine);
    },
    apply,
    toggle(force) { ui.open = force ?? !ui.open; },
    exportTokens,
  };

  watch(state, apply, { deep: true });
  apply();
  return config;
}
