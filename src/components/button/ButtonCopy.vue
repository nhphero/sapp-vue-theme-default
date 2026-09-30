<script setup lang="ts">
import { inject } from 'vue';
import { Copy, Check } from 'lucide-vue-next';
import { ref } from 'vue';
import { cn } from '../../utils';

/** Copy button — `.btn.icon.sm`; shows a check for a moment after copying. */
const props = defineProps<{
  text: string;
  toastMessage?: string;
  class?: string;
  style?: any;
}>();

const superApp = inject<any>('$superApp');
const $message = inject<any>('$message');
const emit = defineEmits(['copy-success']);
const copied = ref(false);

const handleCopy = async () => {
  if (!props.text) return;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(props.text);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = props.text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    copied.value = true;
    setTimeout(() => { copied.value = false; }, 1400);
    const message = props.toastMessage || 'Đã copy';
    if ($message?.success) $message.success(message);
    else if (superApp?.$message?.success) superApp.$message.success(message);
    emit('copy-success', message);
  } catch (err) {
    console.error('Copy failed:', err);
  }
};
</script>

<template>
  <button type="button" :class="cn('btn icon sm', props.class)" :style="props.style" title="Copy" aria-label="Copy" @click.stop="handleCopy">
    <Check v-if="copied" :size="14" class="text-success" />
    <Copy v-else :size="14" />
  </button>
</template>
