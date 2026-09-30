<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { computed } from 'vue';

/**
 * Modal — hoff-kit `.overlay` + `.modal` (preset modal-confirm): Esc / backdrop closes,
 * title + optional description, footer slot for `.actions` (safe button first, dangerous last).
 */
interface Props {
  show?: boolean;
  modelValue?: boolean;
  title?: string;
  description?: string;
  /** Tailwind max-w-* token or any CSS width; overrides `size`. */
  maxWidth?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  zIndex?: number;
}

const props = withDefaults(defineProps<Props>(), { zIndex: 200 });
const emit = defineEmits(['close', 'update:modelValue']);

// Boolean props default to `false` when absent, so `show` and `modelValue` are combined instead of preferring one.
const isOpen = computed(() => !!(props.modelValue || props.show));

const close = () => {
  emit('update:modelValue', false);
  emit('close');
};

const WIDTHS: Record<string, string> = {
  'max-w-sm': '400px', 'max-w-md': '450px', 'max-w-lg': '550px', 'max-w-xl': '650px',
  'max-w-2xl': '800px', 'max-w-3xl': '900px', 'max-w-4xl': '1000px',
  sm: '400px', md: '550px', lg: '800px', xl: '1000px', full: '95vw',
};
const maxWidth = computed(() => {
  if (props.maxWidth) return WIDTHS[props.maxWidth] ?? props.maxWidth.replace(/^max-w-\[(.+)\]$/, '$1');
  return WIDTHS[props.size ?? 'md'];
});

const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
</script>

<template>
  <Transition name="modal">
    <!-- `data-portal`: a mini app's Tailwind utilities are scoped to
         `@scope (#module-viewport, [data-portal])` by `mfeScopedCssPlugin`. A dialog is
         rendered by DialogProvider at the Shell root, i.e. OUTSIDE the module viewport,
         so without this marker every utility class in the dialog's content would be
         dropped — same reason Select marks its popover panel. -->
    <div
      v-if="isOpen"
      class="overlay"
      data-portal
      :style="{ zIndex: props.zIndex }"
      role="dialog"
      aria-modal="true"
      :aria-label="title"
      tabindex="-1"
      @click.self="close"
      @keydown="onKey"
    >
      <div class="modal flex flex-col gap-4" :style="{ maxWidth }">
        <div v-if="title || $slots.header" class="flex items-start justify-between gap-4">
          <slot name="header">
            <div class="min-w-0">
              <h3 class="modal-title">{{ title }}</h3>
              <p v-if="description" class="modal-desc">{{ description }}</p>
            </div>
          </slot>
          <button type="button" class="icon-btn -mr-2 -mt-1" aria-label="Đóng" @click="close">
            <X :size="18" />
          </button>
        </div>

        <div class="modal-body flex flex-col min-h-0">
          <slot />
        </div>

        <div v-if="$slots.footer" class="actions !mt-2">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-enter-active { transition: opacity var(--dur) var(--ease); }
.modal-leave-active { transition: opacity var(--dur-fast) var(--ease); }
.modal-enter-active .modal { transition: transform var(--dur) var(--ease), opacity var(--dur) var(--ease); }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-from .modal { transform: translateY(8px) scale(.98); opacity: 0; }
</style>
