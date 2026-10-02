<script setup lang="ts">
import { computed, inject } from 'vue';

/**
 * 🪝 `shell.hook-slot` — renders what packages put in a slot of `$hook` (contracts/hooks.ts):
 *
 *   <component :is="$c('shell.hook-slot')" name="shell.menu.end" class="flex items-center gap-1" />
 *
 * Each entry's component with its props, in order; an entry whose `when()` is false is left out. The
 * slot draws nothing when it is empty (no wrapper either), so themes can place slots anywhere. `context`
 * is handed to every entry as a prop (e.g. the user menu passes `close`).
 */
const props = withDefaults(defineProps<{ name: string; tag?: string; context?: Record<string, unknown> }>(), { tag: 'div', context: () => ({}) });

const $superApp = inject<any>('$superApp');
const entries = computed(() => $superApp?.$hook?.entries?.(props.name) ?? []);
</script>

<template>
  <component :is="tag" v-if="entries.length" class="hook-slot" :data-hook-slot="name">
    <component :is="entry.component" v-for="entry in entries" :key="entry.id" v-bind="{ ...context, ...(entry.props ?? {}) }" :data-hook-entry="entry.id" />
  </component>
</template>

<style>
/*
 * `.hook-btn` — the icon button a plugin puts in a Shell slot: square, control height, the ink of where it
 * sits (header, the brand band, the sidebar), a soft plate on hover / when `aria-pressed`.
 * A badge: a child `.hook-btn__dot` (a dot) or `.hook-btn__count` (a number).
 */
.hook-btn {
  position: relative; display: inline-grid; place-items: center; width: var(--control-h); height: var(--control-h);
  border: 0; border-radius: var(--radius); background: transparent; color: inherit; opacity: .85; cursor: pointer;
  transition: background-color var(--dur, .15s) ease, opacity var(--dur, .15s) ease;
}
.app-band__end .hook-btn { color: var(--app-band-fg, currentColor); }
.hook-btn:hover { opacity: 1; background: color-mix(in oklab, currentColor 14%, transparent); }
.hook-btn[aria-pressed="true"] { opacity: 1; background: color-mix(in oklab, currentColor 20%, transparent); }
.hook-btn:focus { outline: none; }
.hook-btn:focus-visible { outline: 2px solid var(--header-accent, var(--ring)); outline-offset: -2px; }
.hook-btn__dot { position: absolute; top: calc(var(--sp-1) * 1.25); right: calc(var(--sp-1) * 1.25); width: var(--sp-2); height: var(--sp-2); border-radius: 999px; background: var(--danger); }
.hook-btn__count {
  position: absolute; top: calc(var(--sp-1) * 0.5); right: calc(var(--sp-1) * 0.5); min-width: var(--sp-4); height: var(--sp-4); padding: 0 calc(var(--sp-1) * 0.75);
  border-radius: 999px; background: var(--primary); color: var(--primary-foreground); font-size: calc(var(--text-xs) * 0.8); font-weight: 700; line-height: var(--sp-4); text-align: center;
}
</style>
