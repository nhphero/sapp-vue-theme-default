/**
 * 🎨 THEME tokens (JS view). The CSS source of truth is hoff/tokens.css; this object feeds
 * ThemeConnector (--erp-* variables) and superApp.$theme for programmatic access only.
 * 🎨 ERP ENTERPRISE CORE DESIGN SYSTEM v2.0 (Premium Architecture)
 * -------------------------------------------------------------
 * High-performance UI tokens shared across all Micro-frontends.
 * Implementation: Deep Technical Slate + Glassmorphism + Modern Type.
 */
export declare const THEME: {
    colors: {
        brand: {
            midnight: string;
            primary: string;
            accent: string;
            success: string;
            warning: string;
            danger: string;
        };
        surface: {
            sidebar: string;
            canvas: string;
            card: string;
            glass: string;
            white: string;
        };
        text: {
            heading: string;
            body: string;
            sub: string;
            inverse: string;
            accent: string;
        };
        interaction: {
            hover: string;
            active: string;
            border: string;
        };
    };
    radii: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    spacing: {
        px: string;
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        8: string;
        10: string;
        12: string;
        16: string;
    };
    shadows: {
        soft: string;
        premium: string;
        glow: string;
    };
    typography: {
        family: {
            heading: string;
            body: string;
            mono: string;
        };
        size: {
            tiny: string;
            xs: string;
            sm: string;
            base: string;
            lg: string;
            xl: string;
            '2xl': string;
            '3xl': string;
        };
        weight: {
            black: string;
            bold: string;
            semibold: string;
            medium: string;
            normal: string;
        };
    };
    control: {
        border: {
            width: string;
            color: string;
            hover: string;
        };
        height: {
            sm: string;
            md: string;
            lg: string;
            command: string;
        };
    };
    layout: {
        sidebar: string;
        header: string;
        explorer: string;
        padding: string;
        gap: string;
        maxWidth: string;
    };
};
export type ThemeType = typeof THEME;
export default THEME;
//# sourceMappingURL=tokens.d.ts.map