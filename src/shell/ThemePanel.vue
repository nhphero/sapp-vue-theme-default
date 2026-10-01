<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import { Palette, X, RotateCcw, Copy, Check, Maximize2 } from 'lucide-vue-next';
import type { IThemeConfig, ThemeMode } from '@nhphero/vue-sapp/contracts';
import LocaleFlag from '../components/LocaleFlag.vue';

/**
 * Theme panel — live customization of colour, size and shape (ported from hoff-kit theme-config).
 * Opened via `superApp.$themeConfig.toggle()` or the ⌘K command `theme.customize`.
 */
const config = inject<IThemeConfig>('$themeConfig')!;
const $superApp = inject<any>('$superApp');
const i18n = $superApp?.$i18n;
const LOCALE_LABELS: Record<string, string> = { vi: 'Tiếng Việt', en: 'English' };
const openStudio = () => { config.toggle(false); $superApp?.$router?.push('/system/theme'); };
const state = config.state;

const MODES: { id: ThemeMode; label: string }[] = [
  { id: 'light', label: 'theme.light' }, { id: 'dark', label: 'theme.dark' }, { id: 'system', label: 'theme.system' },
];
const DENSITIES = [{ v: 0.9, label: 'theme.compact' }, { v: 1, label: 'theme.normal' }, { v: 1.1, label: 'theme.spacious' }];

const isCustomBrand = computed(() => !!state.brand && !config.swatches.some(s => s.hex.toLowerCase() === state.brand.toLowerCase()));
const copied = ref(false);
const copyTokens = async () => {
  try { await navigator.clipboard.writeText(config.exportTokens()); copied.value = true; setTimeout(() => (copied.value = false), 1400); } catch { /* clipboard unavailable */ }
};
const fill = (value: number, min: number, max: number) => `${((value - min) / (max - min)) * 100}%`;
</script>

<template>
  <Teleport to="body">
    <Transition name="tp">
      <aside v-if="config.open" class="tp-panel" role="dialog" aria-label="Tuỳ chỉnh giao diện">
        <header class="tp-head">
          <Palette :size="16" />
          <b>{{ $t('shell.theme') }}</b>
          <span class="tp-note">{{ config.locked ? $t('theme.locked') : $t('theme.savedOnDevice') }}</span>
          <button type="button" class="icon-btn" aria-label="Đóng" @click="config.toggle(false)"><X :size="16" /></button>
        </header>

        <!-- Locked = the platform enforces its look (Admin → Theme); only the language stays editable -->
        <div class="tp-body" :class="{ 'is-locked': config.locked }">
          <div v-if="i18n" class="tp-row tp-lang">
            <span>{{ $t('shell.language') }}</span>
            <div class="tp-seg" role="group">
              <button v-for="l in i18n.availableLocales" :key="l" type="button" class="flex items-center justify-center gap-1.5" :aria-pressed="i18n.locale === l" @click="i18n.setLocale(l)"><LocaleFlag :locale="l" :size="16" />{{ LOCALE_LABELS[l] ?? l }}</button>
            </div>
          </div>

          <div class="tp-row">
            <span>{{ $t('theme.mode') }}</span>
            <div class="tp-seg" role="group">
              <button v-for="m in MODES" :key="m.id" type="button" :aria-pressed="state.mode === m.id" @click="config.set({ mode: m.id })">{{ $t(m.label) }}</button>
            </div>
          </div>

          <div class="tp-row">
            <span>{{ $t('theme.brand') }}</span>
            <div class="tp-swatches">
              <button v-for="s in config.swatches" :key="s.hex" type="button" class="tp-swatch" :title="s.name"
                      :style="{ background: s.hex }" :aria-pressed="state.brand.toLowerCase() === s.hex.toLowerCase()"
                      @click="config.set({ brand: s.hex })" />
              <label class="tp-custom" :aria-pressed="isCustomBrand" title="Màu tuỳ chọn">
                <input type="color" :value="state.brand || '#256B65'" @input="config.set({ brand: ($event.target as HTMLInputElement).value })">
              </label>
              <button v-if="state.brand" type="button" class="btn ghost sm" @click="config.set({ brand: '' })">Mặc định</button>
            </div>
          </div>

          <div class="tp-row">
            <span>{{ $t('theme.fontSize') }} <output class="tp-out">{{ Math.round(state.font * 100) }}%</output></span>
            <input class="tp-range" type="range" min="0.85" max="1.2" step="0.05" :value="state.font"
                   :style="{ '--tp-fill': fill(state.font, 0.85, 1.2) }"
                   @input="config.set({ font: Number(($event.target as HTMLInputElement).value) })">
            <div class="tp-scale"><i>Aa</i><i>Aa</i></div>
          </div>

          <div class="tp-row">
            <span>{{ $t('theme.density') }}</span>
            <div class="tp-seg" role="group">
              <button v-for="d in DENSITIES" :key="d.v" type="button" :aria-pressed="state.density === d.v" @click="config.set({ density: d.v })">{{ $t(d.label) }}</button>
            </div>
          </div>

          <div class="tp-row">
            <span>{{ $t('theme.surface') }}</span>
            <div class="tp-seg" role="group">
              <button v-for="s in config.surfaces" :key="s.id" type="button" :aria-pressed="state.surface === s.id"
                      @click="config.set({ surface: s.id })">{{ $t(s.label) }}</button>
            </div>
          </div>

          <div class="tp-row">
            <span>{{ $t('theme.radius') }} <output class="tp-out">{{ state.radius }}px</output></span>
            <input class="tp-range" type="range" min="0" max="14" step="1" :value="state.radius"
                   :style="{ '--tp-fill': fill(state.radius, 0, 14) }"
                   @input="config.set({ radius: Number(($event.target as HTMLInputElement).value) })">
          </div>

          <div class="tp-row">
            <span>{{ $t('theme.shadow') }} <output class="tp-out">{{ state.shadow.toFixed(1) }}×</output></span>
            <input class="tp-range" type="range" min="0" max="2" step="0.25" :value="state.shadow"
                   :style="{ '--tp-fill': fill(state.shadow, 0, 2) }"
                   @input="config.set({ shadow: Number(($event.target as HTMLInputElement).value) })">
          </div>

          <div class="tp-row">
            <span>{{ $t('theme.font') }}</span>
            <select class="input" :value="state.fontFamily" @change="config.set({ fontFamily: ($event.target as HTMLSelectElement).value })">
              <optgroup :label="$t('theme.fontsLocal')">
                <option v-for="(_, name) in config.fontStacks" :key="name" :value="name">{{ name }}</option>
              </optgroup>
              <optgroup :label="$t('theme.fontsWeb')">
                <option v-for="(_, name) in config.webFonts" :key="name" :value="name">{{ name }}</option>
              </optgroup>
            </select>
          </div>

          <div class="tp-preview card">
            <div class="flex items-center gap-2 flex-wrap">
              <button type="button" class="btn primary sm">Chính</button>
              <button type="button" class="btn sm">Phụ</button>
              <button type="button" class="btn danger sm">Xoá</button>
              <span class="badge ok">Hoạt động</span>
              <span class="badge warn">Chờ duyệt</span>
            </div>
            <input class="input sm" placeholder="Ô nhập liệu" style="margin-top: var(--sp-2)">
          </div>
        </div>

        <footer class="tp-actions">
          <button type="button" class="btn sm" title="Theme Studio" @click="openStudio"><Maximize2 :size="14" /> {{ $t('theme.fullPage') }}</button>
          <button type="button" class="btn sm" :disabled="config.locked" @click="config.reset()"><RotateCcw :size="14" /> {{ $t('theme.reset') }}</button>
          <button type="button" class="btn sm" @click="copyTokens">
            <Check v-if="copied" :size="14" class="text-success" /><Copy v-else :size="14" /> {{ copied ? $t('theme.copied') : $t('theme.exportTokens') }}
          </button>
        </footer>
      </aside>
    </Transition>
  </Teleport>
</template>

<style scoped>
.tp-panel { position: fixed; top: 0; right: 0; bottom: 0; z-index: var(--z-modal, 50); width: min(380px, 100vw);
  display: flex; flex-direction: column; background: var(--card); color: var(--foreground);
  border-left: 1px solid var(--border); box-shadow: var(--shadow-lg); font-size: var(--text-sm); }
.tp-head { display: flex; align-items: center; gap: var(--sp-2); padding: var(--sp-3) var(--sp-4); border-bottom: 1px solid var(--border-soft); }
.tp-head b { font-size: var(--text-base); }
.tp-note { margin-left: auto; font-size: var(--text-xs); color: var(--faint); }
.tp-body { flex: 1; overflow-y: auto; padding: var(--sp-4); }
.tp-body.is-locked .tp-row:not(.tp-lang) { opacity: .5; pointer-events: none; }
.tp-row { margin-bottom: var(--sp-4); }
.tp-row > span { display: block; font: 650 10px/1 var(--font-mono); letter-spacing: .1em; text-transform: uppercase; color: var(--faint); margin-bottom: var(--sp-2); }
.tp-out { float: right; font: 600 11px/1 var(--font-mono); color: var(--muted-foreground); text-transform: none; letter-spacing: 0; }
.tp-seg { display: flex; background: var(--muted); border-radius: var(--radius); padding: 3px; gap: 2px; }
.tp-seg button { flex: 1; border: 0; background: transparent; padding: 6px 4px; border-radius: var(--radius-sm);
  font: 550 12px/1 var(--font-sans); color: var(--muted-foreground); cursor: pointer; }
.tp-seg button[aria-pressed="true"] { background: var(--card); color: var(--foreground); box-shadow: var(--shadow-sm); font-weight: 650; }
.tp-swatches { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
.tp-swatch { width: 26px; height: 26px; border-radius: 50%; cursor: pointer; border: 2px solid transparent; padding: 0; }
.tp-swatch[aria-pressed="true"] { border-color: var(--foreground); box-shadow: 0 0 0 2px var(--card) inset; }
.tp-custom { position: relative; width: 26px; height: 26px; border: 1px dashed var(--border); border-radius: 50%; overflow: hidden; cursor: pointer;
  background: conic-gradient(#f43f5e, #f59e0b, #10b981, #3b82f6, #8b5cf6, #f43f5e); }
.tp-custom[aria-pressed="true"] { border: 2px solid var(--foreground); }
.tp-custom input { position: absolute; inset: -8px; width: 200%; height: 200%; opacity: 0; cursor: pointer; }
.tp-range { width: 100%; margin: 2px 0 4px; appearance: none; -webkit-appearance: none; height: 22px; background: none; cursor: pointer; }
.tp-range::-webkit-slider-runnable-track { height: 4px; border-radius: 2px;
  background: linear-gradient(to right, var(--primary) 0 var(--tp-fill, 50%), var(--muted) var(--tp-fill, 50%) 100%); }
.tp-range::-moz-range-track { height: 4px; border-radius: 2px; background: var(--muted); }
.tp-range::-moz-range-progress { height: 4px; border-radius: 2px; background: var(--primary); }
.tp-range::-webkit-slider-thumb { appearance: none; -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%;
  background: var(--card); border: 2px solid var(--primary); box-shadow: var(--shadow-sm); margin-top: -6px; }
.tp-range::-moz-range-thumb { width: 12px; height: 12px; border-radius: 50%; background: var(--card); border: 2px solid var(--primary); }
.tp-scale { display: flex; justify-content: space-between; color: var(--faint); }
.tp-scale i { font-style: normal; } .tp-scale i:first-child { font-size: 10px; } .tp-scale i:last-child { font-size: 16px; }
.tp-preview { margin-top: var(--sp-2); }
.tp-actions { display: flex; gap: var(--sp-2); padding: var(--sp-3) var(--sp-4); border-top: 1px solid var(--border-soft); }
.tp-actions .btn { flex: 1; }
.tp-enter-active, .tp-leave-active { transition: transform var(--dur) var(--ease), opacity var(--dur) var(--ease); }
.tp-enter-from, .tp-leave-to { transform: translateX(24px); opacity: 0; }
</style>
