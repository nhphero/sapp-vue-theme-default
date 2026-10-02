<script setup lang="ts">
import { computed, inject } from 'vue';
import { FileText, Download, ExternalLink } from 'lucide-vue-next';

/**
 * 📄 `display.file` — shows a file, through whatever package can:
 *
 *   <component :is="$c('display.file')" :file="{ name: 'Báo cáo.docx', url }" mode="edit" />
 *
 * Asks `$hook.resolve('file.viewer', file)` first: a plugin (OnlyOffice, a PDF viewer…) that registered a
 * provider whose `match(file)` takes it renders it, with props `{ file, mode }`. Nobody takes it: an
 * image shows as `display.image`, a PDF in a frame, anything else as a card to open or download.
 */
interface ViewFile { name: string; url: string; type?: string; size?: number }
const props = withDefaults(defineProps<{ file: ViewFile; mode?: 'view' | 'edit'; height?: string }>(), { mode: 'view', height: '70vh' });

const $superApp = inject<any>('$superApp');
const provider = computed(() => $superApp?.$hook?.resolve?.('file.viewer', props.file) ?? null);

const ext = computed(() => (props.file?.name?.split('.').pop() ?? '').toLowerCase());
const isImage = computed(() => (props.file?.type ?? '').startsWith('image/') || ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'bmp'].includes(ext.value));
const isPdf = computed(() => props.file?.type === 'application/pdf' || ext.value === 'pdf');
const size = computed(() => {
  const bytes = props.file?.size;
  if (!bytes) return '';
  return bytes >= 1048576 ? `${(bytes / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
});
</script>

<template>
  <div class="file-view" data-testid="file-view">
    <component :is="provider.component" v-if="provider?.component" :file="file" :mode="mode" :height="height" />
    <component :is="$c('display.image')" v-else-if="isImage" :src="file.url" :alt="file.name" class="file-view__image" />
    <iframe v-else-if="isPdf" :src="file.url" :title="file.name" class="file-view__frame" :style="{ height }"></iframe>
    <div v-else class="file-view__card">
      <span class="file-view__icon"><FileText :size="22" /></span>
      <span class="file-view__meta">
        <span class="file-view__name">{{ file.name }}</span>
        <span class="file-view__hint">{{ [ext.toUpperCase(), size].filter(Boolean).join(' · ') }} — no viewer installed for this kind of file</span>
      </span>
      <a class="btn sm" :href="file.url" target="_blank" rel="noopener"><ExternalLink :size="14" /> Open</a>
      <a class="btn sm" :href="file.url" :download="file.name"><Download :size="14" /> Download</a>
    </div>
  </div>
</template>

<style scoped>
.file-view { min-width: 0; }
.file-view__image { max-height: 70vh; max-width: 100%; }
.file-view__frame { display: block; width: 100%; border: 1px solid var(--border-soft); border-radius: var(--radius-lg); background: var(--card); }
.file-view__card { display: flex; align-items: center; gap: var(--sp-3); flex-wrap: wrap; padding: var(--sp-4); border: 1px solid var(--border-soft); border-radius: var(--radius-lg); background: var(--card); }
.file-view__icon { flex: none; display: grid; place-items: center; width: var(--control-h); height: var(--control-h); border-radius: var(--radius); background: var(--muted); color: var(--muted-foreground); }
.file-view__meta { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.file-view__name { font-size: var(--text-sm); font-weight: 600; color: var(--foreground); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.file-view__hint { font-size: var(--text-xs); color: var(--muted-foreground); }
</style>
