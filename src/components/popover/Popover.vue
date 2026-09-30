<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  align?: 'start' | 'center' | 'end';
}>();

const isOpen = ref(false);
const triggerRef = ref<HTMLElement | null>(null);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const close = () => {
  isOpen.value = false;
};

provide('popover', {
  isOpen,
  toggle,
  close,
  align: props.align || 'center',
  triggerRef
});

const handleClickOutside = (event: MouseEvent) => {
  if (triggerRef.value && !triggerRef.value.contains(event.target as Node)) {
    close();
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <!-- `close` is exposed for content that acts and should dismiss the panel (the content stops click
       propagation, so the outside-click handler never sees clicks inside it). -->
  <div class="relative inline-block" ref="triggerRef">
    <slot :close="close" :is-open="isOpen" />
  </div>
</template>
