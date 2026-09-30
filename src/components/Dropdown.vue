<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { Search } from 'lucide-vue-next'

/**
 * Dropdown — headless trigger/content wrapper with click-outside. The content panel gets the
 * hoff-kit `.pop` surface; put `.pop-head` / `.pop-item` elements inside the content slot.
 */
// Boolean props default to `false` when absent, so `surface` needs an explicit default.
const props = withDefaults(defineProps<{
  modelValue?: boolean
  align?: 'left' | 'right'
  /** Set false when the slot renders its own surface. */
  surface?: boolean
  /** Small arrow on the panel pointing at the trigger (default true). */
  caret?: boolean
  /** Show a search box at the top of the panel; the content slot receives `query`. */
  search?: boolean
  searchPlaceholder?: string
}>(), { surface: true, caret: true, search: false })

const emit = defineEmits(['update:modelValue'])

const containerRef = ref<HTMLElement | null>(null)
const searchRef = ref<HTMLInputElement | null>(null)
const internalOpen = ref(props.modelValue || false)
const query = ref('')
// reset + focus the search box every time the panel opens
watch(internalOpen, async (open) => { if (open) { query.value = ''; if (props.search) { await nextTick(); searchRef.value?.focus() } } })

watch(() => props.modelValue, (val) => { if (val !== undefined) internalOpen.value = val })

const toggle = (event: Event) => {
  event.preventDefault()
  event.stopPropagation()
  internalOpen.value = !internalOpen.value
  emit('update:modelValue', internalOpen.value)
}

const handleClickOutside = (event: MouseEvent) => {
  if (!internalOpen.value) return
  if (containerRef.value && !containerRef.value.contains(event.target as Node)) {
    internalOpen.value = false
    emit('update:modelValue', false)
  }
}

onMounted(() => window.addEventListener('click', handleClickOutside, true))
onUnmounted(() => window.removeEventListener('click', handleClickOutside, true))
</script>

<template>
  <div class="relative inline-flex" ref="containerRef">
    <div @click="toggle" class="cursor-pointer h-full flex items-center min-w-[20px] min-h-[20px]">
      <slot name="trigger" />
    </div>

    <Transition name="pop">
      <div v-if="internalOpen"
           class="absolute z-[150] top-[calc(100%+8px)]"
           :class="[align === 'right' ? 'right-0 pop-caret-right' : 'left-0 pop-caret-left', props.surface && 'pop', props.caret && props.surface && 'pop-caret']">
        <div v-if="props.search" class="pop-search">
          <Search :size="14" class="text-faint shrink-0" />
          <input ref="searchRef" v-model="query" type="search" :placeholder="searchPlaceholder || $t?.('common.search') || 'Search…'" autocomplete="off" @keydown.esc.stop="internalOpen = false; emit('update:modelValue', false)">
        </div>
        <slot name="content" :query="query" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* caret: rotated square sharing the panel's surface + border */
.pop-caret::before { content: ''; position: absolute; top: -6px; width: 10px; height: 10px; background: var(--card);
  border-left: 1px solid var(--border); border-top: 1px solid var(--border); transform: rotate(45deg); }
.pop-caret-left::before { left: 16px; }
.pop-caret-right::before { right: 16px; }
.pop-enter-active { transition: opacity var(--dur-fast) var(--ease), transform var(--dur-fast) var(--ease); }
.pop-enter-from { opacity: 0; transform: translateY(-4px); }
</style>
