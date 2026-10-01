<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref } from 'vue';
import { Check, ChevronDown, Search } from 'lucide-vue-next';
import { useCssScope } from '../../composables/cssScope';
import { APP_ICON_NAMES, appIcon } from '../../services/appIcons';

/**
 * form.icon-picker — pick an app icon (`APP_ICONS`) by name. The trigger looks like an input (icon +
 * name); the panel has a search box and a grid. `v-model` is the Lucide name ("Database").
 *
 * The panel is teleported to <body> with fixed positioning (like form.select): inside a modal or a
 * scrolling card it is never clipped. It carries `data-portal` so a mini app's utilities reach it.
 */
const props = withDefaults(defineProps<{ modelValue?: string | null; placeholder?: string; disabled?: boolean }>(), {
  placeholder: 'Choose an icon',
});
const emit = defineEmits<{ 'update:modelValue': [value: string] }>();

/** `data-portal` value of the teleported panel — see composables/cssScope. */
const cssScope = useCssScope();
const open = ref(false);
const query = ref('');
const triggerRef = ref<HTMLElement | null>(null);
const panelRef = ref<HTMLElement | null>(null);
const searchRef = ref<HTMLInputElement | null>(null);
const position = ref({ top: 0, left: 0, width: 0 });

const PANEL_WIDTH = 360;
const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  // "bookopen" and "book open" both find BookOpen.
  return q ? APP_ICON_NAMES.filter(name => name.toLowerCase().includes(q.replace(/\s+/g, '')) || name.replace(/([a-z])([A-Z0-9])/g, '$1 $2').toLowerCase().includes(q)) : APP_ICON_NAMES;
});

function place(): void {
  const rect = triggerRef.value?.getBoundingClientRect();
  if (!rect) return;
  const width = Math.max(rect.width, PANEL_WIDTH);
  const left = Math.min(rect.left, window.innerWidth - width - 8);
  position.value = { top: rect.bottom + 4, left: Math.max(8, left), width };
}

async function show(): Promise<void> {
  if (props.disabled) return;
  query.value = '';
  place();
  open.value = true;
  window.addEventListener('scroll', place, true);
  window.addEventListener('resize', place);
  await nextTick();
  searchRef.value?.focus();
}

function hide(): void {
  open.value = false;
  window.removeEventListener('scroll', place, true);
  window.removeEventListener('resize', place);
}

function pick(name: string): void {
  emit('update:modelValue', name);
  hide();
  triggerRef.value?.focus();
}

function onOutside(event: MouseEvent): void {
  const target = event.target as Node;
  if (!panelRef.value?.contains(target) && !triggerRef.value?.contains(target)) hide();
}

function toggle(): void {
  if (open.value) {
    hide();
  } else {
    void show();
  }
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    event.stopPropagation();
    hide();
    triggerRef.value?.focus();
  } else if (event.key === 'Enter' && filtered.value.length) {
    event.preventDefault();
    pick(filtered.value[0]);
  }
}

window.addEventListener('mousedown', onOutside, true);
onBeforeUnmount(() => {
  hide();
  window.removeEventListener('mousedown', onOutside, true);
});

const current = computed(() => (props.modelValue ? appIcon(props.modelValue) : null));
</script>

<template>
  <button ref="triggerRef" type="button" class="input icon-picker__trigger" :disabled="disabled" :aria-expanded="open" aria-haspopup="listbox" data-testid="icon-picker" @click="toggle">
    <component :is="current" v-if="current" :size="16" class="shrink-0" />
    <span class="flex-1 min-w-0 truncate text-left" :class="modelValue ? '' : 'text-faint'">{{ modelValue || placeholder }}</span>
    <ChevronDown :size="14" class="shrink-0 text-faint" />
  </button>

  <Teleport to="body">
    <div v-if="open" ref="panelRef" :data-portal="cssScope" class="pop icon-picker__panel" role="listbox"
         :style="{ top: `${position.top}px`, left: `${position.left}px`, width: `${position.width}px` }" @keydown="onKeydown">
      <div class="pop-search">
        <Search :size="14" class="text-faint shrink-0" />
        <input ref="searchRef" v-model="query" type="search" :placeholder="$t?.('common.search') || 'Search…'" autocomplete="off" data-testid="icon-picker-search">
      </div>
      <div v-if="filtered.length" class="icon-picker__grid">
        <button v-for="name in filtered" :key="name" type="button" class="icon-picker__item" role="option"
                :aria-selected="name === modelValue" :title="name" :data-testid="`icon-${name}`" @click="pick(name)">
          <component :is="appIcon(name)" :size="18" />
          <Check v-if="name === modelValue" :size="10" class="icon-picker__check" />
        </button>
      </div>
      <div v-else class="icon-picker__empty">{{ $t?.('common.empty') || 'Nothing found' }}</div>
    </div>
  </Teleport>
</template>

<style scoped>
.icon-picker__trigger { display: flex; align-items: center; gap: var(--sp-2); width: 100%; cursor: pointer; }
.icon-picker__panel { position: fixed; z-index: 600; display: flex; flex-direction: column; max-height: min(360px, 60vh); }
.icon-picker__grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(calc(var(--touch) - var(--sp-2)), 1fr));
  gap: var(--sp-1); padding: var(--sp-2); overflow-y: auto;
}
.icon-picker__item {
  position: relative; display: grid; place-items: center; aspect-ratio: 1; border-radius: var(--radius);
  color: var(--muted-foreground); transition: background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease);
}
.icon-picker__item:hover, .icon-picker__item:focus-visible { background: var(--muted); color: var(--foreground); outline: none; }
.icon-picker__item[aria-selected="true"] { background: var(--primary-soft); color: var(--primary); }
.icon-picker__check { position: absolute; top: calc(var(--sp-1) / 2); right: calc(var(--sp-1) / 2); }
.icon-picker__empty { padding: var(--sp-4); text-align: center; font-size: var(--text-sm); color: var(--faint); }
</style>
