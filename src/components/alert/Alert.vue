<script setup lang="ts">
import { computed } from 'vue'
import { AlertCircle, AlertTriangle, CheckCircle2, Info, X } from 'lucide-vue-next'
import { cn } from '../../utils'

/** Alert — hoff-kit `.alert`: tone says the state; the text says why and what to do next. */
type Variant = 'info' | 'success' | 'warning' | 'danger' | 'error' | 'destructive'

const props = defineProps<{
  variant?: Variant
  class?: string
  title?: string
  dismissible?: boolean
}>()
const emit = defineEmits(['close'])

const tone = computed(() => {
  const v = props.variant ?? 'info'
  return v === 'error' || v === 'destructive' ? 'danger' : v
})
const icon = computed(() => ({ info: Info, success: CheckCircle2, warning: AlertTriangle, danger: AlertCircle }[tone.value]))
</script>

<template>
  <div :class="cn('alert', tone, props.class)" role="status">
    <component :is="icon" :size="16" stroke-width="2" aria-hidden="true" />
    <span class="body">
      <b v-if="props.title">{{ props.title }}</b>
      <small v-if="$slots.default"><slot /></small>
    </span>
    <button v-if="props.dismissible" type="button" class="icon-btn" style="width:28px;height:28px;margin:-4px -8px -4px 0" aria-label="Đóng" @click="emit('close')">
      <X :size="14" />
    </button>
  </div>
</template>
