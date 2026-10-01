<script setup lang="ts">
import { useCssScope } from '../../composables/cssScope';
import { ref, onMounted, onUnmounted, inject, Teleport } from 'vue';

/** `data-portal` value of the teleported panel — see composables/cssScope. */
const cssScope = useCssScope()

/** Context menu — hoff `.pop` + `.pop-item`. Call `open(event)` from a @contextmenu handler. */
const props = defineProps<{
  options: {
    label: string;
    icon?: any;
    action: () => void;
    variant?: 'default' | 'danger' | 'primary';
    disabled?: boolean;
    shortcut?: string;
  }[];
}>();

const $superApp = inject<any>('$superApp');
const isOpen = ref(false);
const x = ref(0);
const y = ref(0);
const menuRef = ref<HTMLElement | null>(null);

const open = (e: MouseEvent) => {
  e.preventDefault();
  isOpen.value = true;
  x.value = e.clientX;
  y.value = e.clientY;
  $superApp.$vue.nextTick(() => {
    if (!menuRef.value) return;
    const rect = menuRef.value.getBoundingClientRect();
    if (x.value + rect.width > window.innerWidth) x.value = window.innerWidth - rect.width - 10;
    if (y.value + rect.height > window.innerHeight) y.value = window.innerHeight - rect.height - 10;
  });
};
const close = () => { isOpen.value = false; };
const handleAction = (action: () => void) => { action(); close(); };

defineExpose({ open, close });
onMounted(() => { window.addEventListener('scroll', close, true); window.addEventListener('resize', close); });
onUnmounted(() => { window.removeEventListener('scroll', close, true); window.removeEventListener('resize', close); });
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-[9999]" :data-portal="cssScope" @mousedown="close" @contextmenu.prevent="close">
      <div ref="menuRef" class="pop absolute min-w-[200px]" role="menu" :style="{ left: `${x}px`, top: `${y}px` }" @mousedown.stop>
        <button
          v-for="(opt, i) in props.options" :key="i" type="button" role="menuitem"
          class="pop-item justify-between"
          :class="{ danger: opt.variant === 'danger', 'text-primary': opt.variant === 'primary' }"
          :disabled="opt.disabled"
          :aria-disabled="opt.disabled || undefined"
          @click="handleAction(opt.action)"
        >
          <span class="flex items-center gap-2">
            <component :is="opt.icon" v-if="opt.icon" :size="14" class="text-faint" />
            <span>{{ opt.label }}</span>
          </span>
          <span v-if="opt.shortcut" class="text-xs text-faint font-mono">{{ opt.shortcut }}</span>
        </button>
      </div>
    </div>
  </Teleport>
</template>
