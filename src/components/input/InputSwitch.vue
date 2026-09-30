<script setup lang="ts">
import { computed } from 'vue';
import { Loader2 } from 'lucide-vue-next';

/**
 * Switch — hoff-kit `.switch` (hidden checkbox + track). Keeps the trueValue/falseValue API.
 * `loading`: a change is being saved — the switch shows a spinner, dims, and ignores clicks until
 * the caller clears it (an inline toggle must never look settled while its request is in flight).
 */
const props = defineProps({
  modelValue: { type: [Boolean, String, Number], default: false },
  label: { type: String, default: '' },
  trueValue: { type: [Boolean, String, Number], default: true },
  falseValue: { type: [Boolean, String, Number], default: false },
  trueLabel: { type: String, default: 'Active' },
  falseLabel: { type: String, default: 'Inactive' },
  showStatus: { type: Boolean, default: true },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue', 'change']);

const isActive = computed(() => props.modelValue === props.trueValue);
const locked = computed(() => props.disabled || props.loading);

const onChange = (e: Event) => {
  if (locked.value) return;
  const next = (e.target as HTMLInputElement).checked ? props.trueValue : props.falseValue;
  emit('update:modelValue', next);
  emit('change', next);
};
</script>

<template>
  <label class="switch" :class="{ 'opacity-55': disabled, 'switch--loading': loading }" :aria-busy="loading || undefined">
    <span v-if="label" class="label" style="margin-right: var(--sp-1)">{{ label }}</span>
    <input type="checkbox" role="switch" :checked="isActive" :disabled="locked" @change="onChange">
    <span class="track" aria-hidden="true"></span>
    <Loader2 v-if="loading" :size="14" class="switch__spinner animate-spin text-primary" aria-hidden="true" />
    <span v-if="showStatus" class="text-xs" :class="isActive ? 'text-primary font-semibold' : 'text-faint'">
      {{ isActive ? trueLabel : falseLabel }}
    </span>
  </label>
</template>

<style scoped>
/* Saving: the track dims and stops reacting; the spinner beside it says why. */
.switch--loading { cursor: progress; }
.switch--loading .track { opacity: 0.6; }
.switch__spinner { flex: none; }
</style>
