<script setup lang="ts">
import { onMounted, inject } from 'vue';
import { THEME } from '../tokens';
import ThemePanel from './ThemePanel.vue';
import type { IThemeConfig } from '@nhphero/vue-sapp/contracts';

const themeConfig = inject<IThemeConfig | null>('$themeConfig', null);

/**
 * 🎨 ThemeConnector (ESA v5 - Shell Bridge)
 * Injects the massive THEME object into the global CSS environment.
 * Maps nested tokens (e.g., colors.brand.midnight) to --erp-colors-brand-midnight.
 */

const injectThemeTokens = () => {
  const root = document.documentElement;

  // 🛰️ Recursive function to flatten the THEME object into CSS Variables
  const flattenTokens = (obj: any, prefix = '') => {
    Object.entries(obj).forEach(([key, value]) => {
      const currentKey = prefix ? `${prefix}-${key}` : key;
      
      if (typeof value === 'object' && value !== null) {
        flattenTokens(value, currentKey);
      } else {
        // Convert to --erp-token-name standard (informational bridge for legacy consumers).
        // Semantic tokens (--background, --primary, ...) are owned by hoff/tokens.css and are NOT overridden here.
        const cssVarName = `--erp-${currentKey.replace(/\./g, '-')}`;
        root.style.setProperty(cssVarName, value as string);
      }
    });
  };

  flattenTokens(THEME);
  
  // Allow the system or explicit toggles to handle dark mode classes
};

onMounted(() => {
  injectThemeTokens();
  // Re-apply the user's saved customization after the --erp-* bridge (tokens.css owns the semantic tier)
  themeConfig?.apply();
});
</script>

<template>
  <!-- Invisible bridge component + live theme panel host -->
  <div class="theme-connector-anchor hidden" aria-hidden="true"></div>
  <ThemePanel v-if="themeConfig" />
</template>
