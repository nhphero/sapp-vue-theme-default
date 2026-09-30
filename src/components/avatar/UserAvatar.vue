<script setup lang="ts">
import { computed, ref, watch } from 'vue';

/** Avatar: image when `src` is given (falls back to initials if it fails to load), otherwise initials on primary. */
const props = withDefaults(defineProps<{
  src?: string | null;
  name?: string;
  size?: number;
  rounded?: 'full' | 'lg';
}>(), { size: 36, rounded: 'full' });

const broken = ref(false);
watch(() => props.src, () => { broken.value = false; });
const showImage = computed(() => !!props.src && !broken.value);
const initials = computed(() => {
  const parts = (props.name || '').trim().split(/\s+/).filter(Boolean);
  const s = parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : (parts[0] || '?').slice(0, 2);
  return s.toUpperCase();
});
</script>

<template>
  <span class="inline-grid place-items-center overflow-hidden shrink-0 bg-primary text-primary-foreground font-bold select-none"
        :class="rounded === 'full' ? 'rounded-full' : 'rounded-lg'"
        :style="{ width: size + 'px', height: size + 'px', fontSize: Math.round(size * 0.38) + 'px' }"
        :title="name" role="img" :aria-label="name">
    <img v-if="showImage" :src="src!" :alt="name || ''" class="w-full h-full object-cover" @error="broken = true" />
    <template v-else>{{ initials }}</template>
  </span>
</template>
