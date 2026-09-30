/**
 * 🎨 THEME tokens (JS view). The CSS source of truth is hoff/tokens.css; this object feeds
 * ThemeConnector (--erp-* variables) and superApp.$theme for programmatic access only.
 * 🎨 ERP ENTERPRISE CORE DESIGN SYSTEM v2.0 (Premium Architecture)
 * -------------------------------------------------------------
 * High-performance UI tokens shared across all Micro-frontends.
 * Implementation: Deep Technical Slate + Glassmorphism + Modern Type.
 */

export const THEME = {
  // --- 🌈 PREMIUM COLOR PALETTE ---
  colors: {
    // Brand Identity (Cyber Technical)
    brand: {
      midnight: '#0b1121', // Absolute Deep Slate (Background)
      primary: '#0ea5e9',  // Vibrant Sky Cyan (Interaction)
      accent: '#6366f1',   // Indigo Shift (Highlight)
      success: '#10b981',  
      warning: '#f59e0b',  
      danger: '#f43f5e',   
    },
    // Surface & Layout (Layered Depth)
    surface: {
      sidebar: 'rgba(15, 23, 42, 0.8)', // Glass Slate
      canvas: '#0f172a',      // Master Background
      card: '#1e293b',        // Slate Depth
      glass: 'rgba(30, 41, 59, 0.7)',
      white: '#ffffff',
    },
    // Typography (Precision Contrast)
    text: {
      heading: '#f8fafc',  // White Slate
      body: '#cbd5e1',     // Soft Slate
      sub: '#94a3b8',      // Muted Slate
      inverse: '#0f172a',
      accent: '#38bdf8',
    },
    // Interaction states
    interaction: {
      hover: 'rgba(56, 189, 248, 0.1)',
      active: 'rgba(56, 189, 248, 0.2)',
      border: 'rgba(148, 163, 184, 0.1)',
    }
  },

  // --- 📐 SHAPES & RADII ---
  radii: {
    none: '0px',
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '12px', 
    full: '9999px',
  },

  // --- 📏 SPACING & LAYOUT (GRID-BASED) ---
  spacing: {
    px: '1px',
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
  },

  // --- 💠 SHADOWS (TECHNICAL DEPTH) ---
  shadows: {
    soft: '0 4px 20px -5px rgba(0,0,0,0.3)',
    premium: '0 20px 50px -12px rgba(0,0,0,0.5)',
    glow: '0 0 15px rgba(14, 165, 233, 0.4)', // Cyan Glow
  },

  // --- 📝 TYPOGRAPHY TOKENS (INTER + OUTFIT) ---
  typography: {
    family: {
      heading: "'Outfit', 'Inter', system-ui, sans-serif",
      body: "'Inter', system-ui, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    size: {
      tiny: '9px',
      xs: '11px',
      sm: '12px',
      base: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': '24px',
      '3xl': '32px',
    },
    weight: {
      black: '900',
      bold: '700',
      semibold: '600',
      medium: '500',
      normal: '400',
    }
  },

  // --- 🛠️ CONTROL ELEMENTS (SIZING & BORDERS) ---
  control: {
    border: {
      width: '1px',
      color: 'rgba(148, 163, 184, 0.2)', // Slate-400 equivalent
      hover: '#6366f1',
    },
    height: {
      sm: '32px',
      md: '40px',
      lg: '48px',
      command: '44px',
    }
  },

  // --- 🧊 LAYOUT ARCHITECTURE (CENTRALIZED) ---
  layout: {
    sidebar: '280px',
    header: '64px',
    explorer: '320px', // Right-side metadata panel
    padding: '40px',
    gap: '24px',
    maxWidth: '1600px',
  },

};

export type ThemeType = typeof THEME;
export default THEME;
