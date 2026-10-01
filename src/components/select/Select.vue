<script setup lang="ts">
import { useCssScope } from '../../composables/cssScope';
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { SelectRoot, type SelectRootEmits, type SelectRootProps, useForwardPropsEmits } from 'radix-vue'
import { Check, ChevronDown, Search } from 'lucide-vue-next'
import { cn } from '../../utils'

/** `data-portal` value of the teleported panel — see composables/cssScope. */
const cssScope = useCssScope()

/**
 * form.select — two ways to use it:
 *
 *  1. Standalone (pass `options`): renders its own trigger + hoff `.pop` panel. `show-search` adds a
 *     filter box at the top of the panel. Keyboard: ↑/↓ move, Enter picks, Esc closes.
 *       <Select v-model="status" :options="[{ label: 'Active', value: 'active' }, 'draft']" show-search />
 *
 *  2. Composition (no `options`): behaves as the radix `SelectRoot`; combine with
 *     `form.select-trigger` / `form.select-value` / `form.select-content` / `form.select-item`.
 */
type Option = string | { label: string; value: string; disabled?: boolean }

const props = withDefaults(defineProps<SelectRootProps & {
  options?: Option[]
  placeholder?: string
  showSearch?: boolean
  searchPlaceholder?: string
  size?: 'sm' | 'default' | 'lg'
  invalid?: boolean
  class?: any
}>(), { showSearch: false })
const emits = defineEmits<{ 'update:modelValue': [value: string]; 'update:open': [open: boolean]; change: [value: string] }>()

// ── composition mode: forward everything to radix ────────────────────────────
const forwarded = useForwardPropsEmits(props as SelectRootProps, emits as any)
const standalone = computed(() => Array.isArray(props.options))

// ── standalone mode ──────────────────────────────────────────────────────────
const items = computed(() => (props.options ?? []).map(o => (typeof o === 'string' ? { label: o, value: o } : o)))
const selected = computed(() => items.value.find(o => o.value === props.modelValue))
const open = ref(false)
const query = ref('')
const highlighted = ref(0)
const triggerRef = ref<HTMLElement | null>(null)
const searchRef = ref<HTMLInputElement | null>(null)
const panelRef = ref<HTMLElement | null>(null)
const pos = ref({ top: 0, left: 0, width: 0 })

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return q ? items.value.filter(o => `${o.label} ${o.value}`.toLowerCase().includes(q)) : items.value
})

const place = () => {
  const r = triggerRef.value?.getBoundingClientRect()
  if (!r) return
  const below = window.innerHeight - r.bottom
  pos.value = { top: below < 240 && r.top > below ? r.top - 4 : r.bottom + 4, left: r.left, width: r.width }
  flipUp.value = below < 240 && r.top > below
}
const flipUp = ref(false)

const toggle = async () => {
  if (props.disabled) return
  open.value = !open.value
  if (open.value) {
    query.value = ''
    highlighted.value = Math.max(0, items.value.findIndex(o => o.value === props.modelValue))
    place()
    await nextTick()
    if (props.showSearch) searchRef.value?.focus(); else panelRef.value?.focus()
  }
}
const close = () => { open.value = false; triggerRef.value?.focus() }
const pick = (o: { value: string; disabled?: boolean }) => {
  if (o.disabled) return
  emits('update:modelValue', o.value)
  emits('change', o.value)
  open.value = false
}
const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') { e.preventDefault(); close(); return }
  if (e.key === 'ArrowDown') { e.preventDefault(); highlighted.value = Math.min(filtered.value.length - 1, highlighted.value + 1) }
  else if (e.key === 'ArrowUp') { e.preventDefault(); highlighted.value = Math.max(0, highlighted.value - 1) }
  else if (e.key === 'Enter') { e.preventDefault(); const o = filtered.value[highlighted.value]; if (o) pick(o) }
  else return
  nextTick(() => panelRef.value?.querySelector<HTMLElement>('[data-hi="true"]')?.scrollIntoView({ block: 'nearest' }))
}
watch(query, () => { highlighted.value = 0 })

const onDocClick = (e: MouseEvent) => {
  const t = e.target as Node
  if (triggerRef.value?.contains(t) || panelRef.value?.contains(t)) return
  open.value = false
}
watch(open, (v) => {
  if (v) { document.addEventListener('mousedown', onDocClick, true); window.addEventListener('scroll', place, true); window.addEventListener('resize', place) }
  else { document.removeEventListener('mousedown', onDocClick, true); window.removeEventListener('scroll', place, true); window.removeEventListener('resize', place) }
})
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onDocClick, true)
  window.removeEventListener('scroll', place, true)
  window.removeEventListener('resize', place)
})
</script>

<template>
  <!-- composition mode -->
  <SelectRoot v-if="!standalone" v-bind="forwarded">
    <slot />
  </SelectRoot>

  <!-- standalone mode -->
  <div v-else :class="cn('relative', props.class)" data-select>
    <button ref="triggerRef" type="button" :disabled="disabled" :aria-expanded="open" aria-haspopup="listbox" :aria-invalid="invalid || undefined"
            :class="cn('input flex items-center justify-between gap-2 text-left cursor-pointer', size === 'sm' && 'sm', size === 'lg' && 'lg')"
            @click="toggle" @keydown.down.prevent="!open && toggle()">
      <span class="truncate" :class="!selected && 'text-faint'">{{ selected?.label ?? placeholder ?? '—' }}</span>
      <ChevronDown :size="14" class="shrink-0 text-faint transition-transform" :class="open && 'rotate-180'" />
    </button>

    <Teleport to="body">
      <Transition name="pop">
        <div v-if="open" ref="panelRef" :data-portal="cssScope" tabindex="-1" role="listbox" class="pop fixed z-[500] outline-none flex flex-col"
             :style="{ top: `${pos.top}px`, left: `${pos.left}px`, width: `${pos.width}px`, maxHeight: '280px', transform: flipUp ? 'translateY(-100%)' : undefined }"
             @keydown="onKey">
          <div v-if="showSearch" class="pop-search">
            <Search :size="14" class="text-faint shrink-0" />
            <input ref="searchRef" v-model="query" type="search" autocomplete="off" :placeholder="searchPlaceholder || $t?.('common.search') || 'Search…'">
          </div>
          <div class="overflow-y-auto min-h-0">
            <button v-for="(o, i) in filtered" :key="o.value" type="button" role="option" class="pop-item" :aria-selected="o.value === modelValue"
                    :aria-disabled="o.disabled || undefined" :class="i === highlighted && 'hi'" :data-hi="i === highlighted || undefined"
                    @mouseenter="highlighted = i" @click="pick(o)">
              <span class="truncate">{{ o.label }}</span>
              <Check v-if="o.value === modelValue" :size="14" class="ml-auto text-primary shrink-0" />
            </button>
            <div v-if="!filtered.length" class="px-3 py-4 text-sm text-faint text-center">{{ $t?.('common.empty') || 'No results' }}</div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.pop-enter-active { transition: opacity var(--dur-fast) var(--ease), transform var(--dur-fast) var(--ease); }
.pop-enter-from { opacity: 0; }
</style>
