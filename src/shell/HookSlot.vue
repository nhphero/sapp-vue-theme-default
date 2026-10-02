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
