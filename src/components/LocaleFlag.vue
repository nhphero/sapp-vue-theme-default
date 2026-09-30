<script setup lang="ts">
import { computed } from 'vue';

/**
 * Inline SVG flag for a locale code (no emoji: consistent on every OS, inherits nothing).
 * Unknown locales fall back to a two-letter badge.
 */
const props = withDefaults(defineProps<{ locale: string; size?: number }>(), { size: 18 });

const code = computed(() => (props.locale || '').toLowerCase().split(/[-_]/)[0]);
const KNOWN = new Set(['vi', 'en', 'ja', 'ko', 'zh', 'fr', 'de']);
const known = computed(() => KNOWN.has(code.value));
</script>

<template>
  <svg v-if="known" :width="size" :height="Math.round(size * 0.7)" viewBox="0 0 30 21" class="rounded-[3px] shrink-0 shadow-sm" aria-hidden="true">
    <!-- Việt Nam -->
    <template v-if="code === 'vi'">
      <rect width="30" height="21" fill="#DA251D" />
      <polygon fill="#FFFF00" points="15,4.2 16.9,9.3 22.3,9.3 17.9,12.5 19.6,17.7 15,14.5 10.4,17.7 12.1,12.5 7.7,9.3 13.1,9.3" />
    </template>
    <!-- English (United Kingdom) -->
    <template v-else-if="code === 'en'">
      <rect width="30" height="21" fill="#012169" />
      <path d="M0,0 L30,21 M30,0 L0,21" stroke="#FFF" stroke-width="4" />
      <path d="M0,0 L30,21 M30,0 L0,21" stroke="#C8102E" stroke-width="2" />
      <path d="M15,0 V21 M0,10.5 H30" stroke="#FFF" stroke-width="6" />
      <path d="M15,0 V21 M0,10.5 H30" stroke="#C8102E" stroke-width="3.5" />
    </template>
    <!-- 日本語 -->
    <template v-else-if="code === 'ja'">
      <rect width="30" height="21" fill="#FFF" /><circle cx="15" cy="10.5" r="6" fill="#BC002D" />
    </template>
    <!-- 한국어 (simplified) -->
    <template v-else-if="code === 'ko'">
      <rect width="30" height="21" fill="#FFF" /><circle cx="15" cy="10.5" r="6" fill="#CD2E3A" /><path d="M9,10.5 a6,6 0 0 0 12,0 a3,3 0 0 0 -6,0 a3,3 0 0 1 -6,0" fill="#0047A0" />
    </template>
    <!-- 中文 -->
    <template v-else-if="code === 'zh'">
      <rect width="30" height="21" fill="#DE2910" /><polygon fill="#FFDE00" points="6,3 7.4,6.6 11.2,6.6 8.1,8.8 9.3,12.4 6,10.2 2.7,12.4 3.9,8.8 0.8,6.6 4.6,6.6" />
    </template>
    <!-- Français -->
    <template v-else-if="code === 'fr'">
      <rect width="10" height="21" fill="#0055A4" /><rect x="10" width="10" height="21" fill="#FFF" /><rect x="20" width="10" height="21" fill="#EF4135" />
    </template>
    <!-- Deutsch -->
    <template v-else-if="code === 'de'">
      <rect width="30" height="7" fill="#000" /><rect y="7" width="30" height="7" fill="#DD0000" /><rect y="14" width="30" height="7" fill="#FFCE00" />
    </template>
  </svg>
  <span v-else class="inline-flex items-center justify-center rounded-[3px] bg-muted text-faint font-mono font-bold uppercase shrink-0"
        :style="{ width: size + 'px', height: Math.round(size * 0.7) + 'px', fontSize: Math.round(size * 0.45) + 'px' }" aria-hidden="true">{{ code.slice(0, 2) }}</span>
</template>
