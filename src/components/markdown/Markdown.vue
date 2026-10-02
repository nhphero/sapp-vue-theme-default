<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { Marked } from 'marked';
import DOMPurify from 'dompurify';

/**
 * `display.markdown` — renders a Markdown document (GitHub flavoured: tables, task lists, fenced code)
 * as sanitised HTML. Give it the text (`source`) or where it lives (`url` — fetched, no cache).
 * The document is anyone's (a package's README.md): DOMPurify strips scripts, event handlers and
 * `javascript:` links; links open in a new tab. Relative links and images resolve against `baseUrl`,
 * else the folder of `url` (`docs/x.png` next to the README).
 *
 *   <component :is="$c('display.markdown')" url="https://host/pkg/1.0/README.md" />
 *   <component :is="$c('display.markdown')" :source="text" base-url="https://host/pkg/1.0/" />
 *
 * Slots: `empty` — nothing to show (no text, the URL answered 404 or could not be reached; gets
 * `{ url, status }`); `loading`. Emits `loaded` (the text) and `error` ({ url, status }).
 */
const props = defineProps<{
  /** The Markdown text. Wins over `url`. */
  source?: string;
  /** Where the Markdown file is; fetched whenever it changes. */
  url?: string;
  /** Base for relative links and images; default: the folder of `url`. */
  baseUrl?: string;
}>();

const emit = defineEmits<{
  (e: 'loaded', text: string): void;
  (e: 'error', detail: { url: string; status: number }): void;
}>();

const fetched = ref<string | null>(null);
const loading = ref(false);
/** HTTP status of a failed fetch; 0 = unreachable (network, CORS). */
const failedStatus = ref<number | null>(null);

/** Latest fetch wins: a slow answer for an old URL never replaces the current one. */
let requestId = 0;

async function load(url: string | undefined): Promise<void> {
  const id = ++requestId;
  fetched.value = null;
  failedStatus.value = null;
  if (!url) {
    loading.value = false;
    return;
  }
  loading.value = true;
  try {
    const response = await fetch(url, { cache: 'no-cache' });
    if (id !== requestId) return;
    if (!response.ok) {
      failedStatus.value = response.status;
      emit('error', { url, status: response.status });
      return;
    }
    fetched.value = await response.text();
    emit('loaded', fetched.value);
  } catch {
    if (id !== requestId) return;
    failedStatus.value = 0;
    emit('error', { url, status: 0 });
  } finally {
    if (id === requestId) loading.value = false;
  }
}

watch(() => props.url, load, { immediate: true });

const text = computed(() => (props.source !== undefined && props.source !== null ? props.source : fetched.value) ?? '');

/** Relative links / images: against baseUrl, else the folder of url. */
const base = computed(() => {
  if (props.baseUrl) return props.baseUrl;
  if (!props.url) return '';
  try {
    return new URL('.', new URL(props.url, location.href)).href;
  } catch {
    return '';
  }
});

const ABSOLUTE = /^([a-z][a-z0-9+.-]*:|\/\/|#|\/)/i;

function resolve(href: string): string {
  if (!base.value || ABSOLUTE.test(href)) {
    return href;
  }
  try {
    return new URL(href, base.value).href;
  } catch {
    return href;
  }
}

const marked = new Marked({ gfm: true, breaks: false });

const html = computed(() => {
  if (!text.value) return '';
  const raw = marked.parse(text.value, { async: false }) as string;
  const clean = DOMPurify.sanitize(raw, { USE_PROFILES: { html: true } });
  // Relative links / images against the base; every link opens outside the Shell.
  const doc = new DOMParser().parseFromString(`<div>${clean}</div>`, 'text/html');
  const root = doc.body.firstElementChild as HTMLElement;
  root.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href') ?? '';
    if (href.startsWith('#')) return;
    a.setAttribute('href', resolve(href));
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });
  root.querySelectorAll('img[src]').forEach(img => img.setAttribute('src', resolve(img.getAttribute('src') ?? '')));
  // A facts table written `| | |` has an empty header row: drop it.
  root.querySelectorAll('thead').forEach(head => {
    if (!Array.from(head.querySelectorAll('th')).some(th => th.textContent?.trim())) head.remove();
  });
  return root.innerHTML;
});
</script>

<template>
  <div v-if="loading && !text" class="sapp-markdown-state">
    <slot name="loading">Loading…</slot>
  </div>
  <!-- eslint-disable-next-line vue/no-v-html — sanitised by DOMPurify above -->
  <div v-else-if="html" class="sapp-markdown" v-html="html" />
  <div v-else class="sapp-markdown-state">
    <slot name="empty" :url="url" :status="failedStatus">Nothing to show.</slot>
  </div>
</template>

<style scoped>
/* Sizes and colours from the theme tokens, so the document follows Theme Studio like every screen. */
.sapp-markdown-state { font-size: var(--text-sm); color: var(--muted-foreground); }
.sapp-markdown { font-size: var(--text-sm); line-height: 1.65; color: var(--foreground); overflow-wrap: anywhere; }
.sapp-markdown :deep(> :first-child) { margin-top: 0; }
.sapp-markdown :deep(> :last-child) { margin-bottom: 0; }
.sapp-markdown :deep(h1), .sapp-markdown :deep(h2), .sapp-markdown :deep(h3), .sapp-markdown :deep(h4) {
  font-weight: 700; line-height: 1.3; margin: var(--sp-5) 0 var(--sp-2); color: var(--foreground);
}
.sapp-markdown :deep(h1) { font-size: var(--text-2xl); padding-bottom: var(--sp-2); border-bottom: 1px solid var(--border-soft); }
.sapp-markdown :deep(h2) { font-size: var(--text-xl); padding-bottom: var(--sp-1); border-bottom: 1px solid var(--border-soft); }
.sapp-markdown :deep(h3) { font-size: var(--text-lg); }
.sapp-markdown :deep(h4) { font-size: var(--text-base); }
.sapp-markdown :deep(p), .sapp-markdown :deep(ul), .sapp-markdown :deep(ol), .sapp-markdown :deep(blockquote),
.sapp-markdown :deep(pre), .sapp-markdown :deep(table) { margin: 0 0 var(--sp-3); }
.sapp-markdown :deep(ul), .sapp-markdown :deep(ol) { padding-left: var(--sp-5); }
.sapp-markdown :deep(ul) { list-style: disc; }
.sapp-markdown :deep(ol) { list-style: decimal; }
.sapp-markdown :deep(li + li) { margin-top: var(--sp-1); }
.sapp-markdown :deep(li > input[type="checkbox"]) { margin-right: var(--sp-2); }
.sapp-markdown :deep(a) { color: var(--link, var(--primary)); text-decoration: underline; text-underline-offset: 2px; }
.sapp-markdown :deep(strong) { font-weight: 700; }
.sapp-markdown :deep(code) { font-family: var(--font-mono); font-size: 0.9em; background: var(--muted); padding: 0.1em 0.35em; border-radius: var(--radius-sm); }
.sapp-markdown :deep(pre) { background: var(--muted); border: 1px solid var(--border-soft); border-radius: var(--radius); padding: var(--sp-3) var(--sp-4); overflow-x: auto; }
.sapp-markdown :deep(pre code) { background: none; padding: 0; font-size: var(--text-xs); line-height: 1.6; }
.sapp-markdown :deep(blockquote) { border-left: 3px solid var(--border); padding-left: var(--sp-3); color: var(--muted-foreground); }
.sapp-markdown :deep(hr) { border: 0; border-top: 1px solid var(--border-soft); margin: var(--sp-5) 0; }
.sapp-markdown :deep(table) { display: block; overflow-x: auto; border-collapse: collapse; font-size: var(--text-xs); }
.sapp-markdown :deep(th), .sapp-markdown :deep(td) { border: 1px solid var(--border-soft); padding: var(--sp-1) var(--sp-2); text-align: left; vertical-align: top; }
.sapp-markdown :deep(th) { background: var(--muted); font-weight: 600; }
.sapp-markdown :deep(img) { max-width: 100%; border-radius: var(--radius-sm); }
</style>
