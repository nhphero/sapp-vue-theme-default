<script setup lang="ts">
import { inject, computed, ref, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps<{
  class?: string;
  align?: 'start' | 'center' | 'end';
}>();

const { isOpen, align: parentAlign, triggerRef } = inject<any>('popover');

const style = ref<Record<string, string>>({
  top: '0px',
  left: '0px',
  minWidth: '200px'
});

const updatePosition = () => {
  if (!triggerRef.value) return;
  const rect = triggerRef.value.getBoundingClientRect();
  const a = props.align || parentAlign || 'center';
  
  let left = rect.left;
  if (a === 'center') left = rect.left + rect.width / 2;
  if (a === 'end') left = rect.left + rect.width;

  // Not enough room below (a trigger near the bottom of the screen, e.g. in a pagination bar):
  // open upwards, anchored to the trigger's top edge.
  const flipUp = window.innerHeight - rect.bottom < 360 && rect.top > window.innerHeight - rect.bottom;
  // The panel is `position: fixed`, so a flipped panel is pinned by its bottom edge instead of
  // being translated — the horizontal alignment classes keep using `translate` untouched.
  style.value = flipUp
    ? { top: 'auto', bottom: `${window.innerHeight - rect.top + 8}px`, left: `${left + window.scrollX}px`, minWidth: '200px' }
    : { top: `${rect.bottom + window.scrollY + 8}px`, bottom: 'auto', left: `${left + window.scrollX}px`, minWidth: '200px' };
};

watch(isOpen, (val) => {
  if (val) {
    updatePosition();
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
  } else {
    window.removeEventListener('scroll', updatePosition, true);
    window.removeEventListener('resize', updatePosition);
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', updatePosition, true);
  window.removeEventListener('resize', updatePosition);
});

const alignmentClass = computed(() => {
  const a = props.align || parentAlign || 'center';
  if (a === 'start') return '';
  if (a === 'end') return '-translate-x-full';
  return '-translate-x-1/2';
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <div
        v-if="isOpen"
        data-portal
        :style="style"
        :class="[
 'pop fixed z-[9999] p-0 overflow-hidden outline-none',
          alignmentClass,
          props.class
        ]"
        @click.stop
      >
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>
