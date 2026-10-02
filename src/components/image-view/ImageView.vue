<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { X, ZoomIn, ZoomOut, ExternalLink, ImageOff } from 'lucide-vue-next';

/**
 * 🖼️ `display.image` — an image that opens large on click.
 *
 *   <component :is="$c('display.image')" :src="url" alt="Logo" class="h-8" />
 *
 * The thumbnail takes the classes / size you give it (the image fits inside, `fit`). Click (or Enter)
 * opens the viewer: the image as large as the screen allows, on a checkerboard so transparent parts show,
 * zoom in / out, a link to the original; Esc, the close button or a click outside closes it.
 * `preview: false` keeps it a plain image. A broken or empty `src` shows a placeholder, never opens.
 */
const props = withDefaults(defineProps<{
  src?: string | null;
  alt?: string;
  /** How the image fits its box: `contain` (default, all of it) or `cover` (fills, cropped). */
  fit?: 'contain' | 'cover';
  /** Click opens the viewer (default true). */
  preview?: boolean;
}>(), { src: '', alt: '', fit: 'contain', preview: true });

const open = ref(false);
const failed = ref(false);
const zoom = ref(1);
const ZOOMS = [0.5, 0.75, 1, 1.5, 2, 3];

watch(() => props.src, () => { failed.value = false; });
const canOpen = computed(() => props.preview && !!props.src && !failed.value);

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close();
  else if (e.key === '+' || e.key === '=') zoomBy(1);
  else if (e.key === '-') zoomBy(-1);
};
function show(): void {
  if (!canOpen.value) return;
  zoom.value = 1;
  open.value = true;
  window.addEventListener('keydown', onKey);
}
function close(): void {
  open.value = false;
  window.removeEventListener('keydown', onKey);
}
function zoomBy(step: number): void {
  const i = ZOOMS.indexOf(zoom.value);
  zoom.value = ZOOMS[Math.min(ZOOMS.length - 1, Math.max(0, (i === -1 ? 2 : i) + step))];
}
onBeforeUnmount(() => window.removeEventListener('keydown', onKey));
</script>

<template>
  <span
    class="image-view" :class="canOpen && 'is-previewable'" :role="canOpen ? 'button' : undefined" :tabindex="canOpen ? 0 : undefined"
    :title="canOpen ? (alt ? `${alt} — click to view` : 'Click to view') : alt" data-testid="image-view"
    @click="show" @keydown.enter.prevent="show"
  >
    <img v-if="src && !failed" :src="src" :alt="alt" :style="{ objectFit: fit }" @error="failed = true" />
    <ImageOff v-else :size="20" class="image-view__empty" aria-hidden="true" />

  <!-- Inside the thumbnail so it stays one root (classes / attrs land on the thumbnail); rendered on body. -->
  <Teleport to="body">
    <div v-if="open" class="image-viewer" role="dialog" aria-modal="true" :aria-label="alt || 'Image'" data-testid="image-viewer" @click.stop="$event.target === $event.currentTarget && close()" @keydown.stop>
      <div class="image-viewer__bar">
        <span class="image-viewer__title">{{ alt }}</span>
        <span class="image-viewer__zoom">{{ Math.round(zoom * 100) }}%</span>
        <button type="button" class="image-viewer__btn" title="Zoom out (−)" :disabled="zoom <= ZOOMS[0]" @click="zoomBy(-1)"><ZoomOut :size="16" /></button>
        <button type="button" class="image-viewer__btn" title="Zoom in (+)" :disabled="zoom >= ZOOMS[ZOOMS.length - 1]" @click="zoomBy(1)"><ZoomIn :size="16" /></button>
        <a class="image-viewer__btn" :href="src || undefined" target="_blank" rel="noopener" title="Open the original"><ExternalLink :size="16" /></a>
        <button type="button" class="image-viewer__btn" title="Close (Esc)" data-testid="image-viewer-close" @click="close"><X :size="18" /></button>
      </div>
      <div class="image-viewer__stage" @click.self="close">
        <img :src="src || undefined" :alt="alt" class="image-viewer__img" :style="{ transform: `scale(${zoom})` }" @dblclick="zoom = zoom === 1 ? 2 : 1" />
      </div>
    </div>
  </Teleport>
  </span>
</template>

<style scoped>
/* Thumbnail: the box is whatever the caller sizes it to; the image fits inside. */
.image-view { display: inline-flex; align-items: center; justify-content: center; max-width: 100%; min-width: 0; overflow: hidden; border-radius: var(--radius-sm, 4px); }
.image-view img { display: block; width: 100%; height: 100%; max-width: 100%; max-height: 100%; }
.image-view.is-previewable { cursor: zoom-in; transition: opacity var(--dur) var(--ease); }
.image-view.is-previewable:hover { opacity: .85; }
.image-view.is-previewable:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
.image-view__empty { color: var(--faint); }

/* Viewer: full screen, dark scrim, a bar on top, the image centred. */
.image-viewer { position: fixed; inset: 0; z-index: 1000; display: flex; flex-direction: column; background: rgb(8 10 12 / .94); backdrop-filter: blur(6px); }
.image-viewer__bar { display: flex; align-items: center; gap: var(--sp-1); padding: var(--sp-2) var(--sp-3); color: #fff; }
.image-viewer__title { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: var(--text-sm); font-weight: 600; }
.image-viewer__zoom { margin-right: var(--sp-2); font-size: var(--text-xs); font-variant-numeric: tabular-nums; opacity: .7; }
.image-viewer__btn { display: grid; place-items: center; width: var(--control-h); height: var(--control-h); border: 0; border-radius: var(--radius); background: transparent; color: #fff; cursor: pointer; }
.image-viewer__btn:hover { background: rgb(255 255 255 / .12); }
.image-viewer__btn:disabled { opacity: .35; cursor: default; }
.image-viewer__stage { flex: 1; min-height: 0; overflow: auto; display: grid; place-items: center; padding: var(--sp-6); }
.image-viewer__img {
  /* Large whatever its own size: a small logo / icon is scaled up to the stage (kept in proportion). */
  width: min(80vw, 1200px); height: auto; max-height: calc(100vh - var(--control-h) * 3); object-fit: contain; transform-origin: center;
  transition: transform var(--dur) var(--ease); border-radius: var(--radius); box-shadow: var(--shadow-lg);
  /* checkerboard: transparent parts of a logo / icon stay visible */
  background: repeating-conic-gradient(#e9ecef 0% 25%, #fff 0% 50%) 50% / 16px 16px;
}
</style>
