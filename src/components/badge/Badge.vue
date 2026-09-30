<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../utils'

/** Badge — hoff-kit `.badge`: a status always carries text, never colour alone. */
type Variant = 'default' | 'primary' | 'muted' | 'secondary' | 'outline'
  | 'success' | 'ok' | 'warning' | 'warn' | 'danger' | 'destructive' | 'info'

const props = defineProps<{ variant?: Variant; class?: string }>()

const TONE: Record<Variant, string> = {
  default: 'primary', primary: 'primary',
  muted: 'muted', secondary: 'muted', outline: 'outline',
  success: 'ok', ok: 'ok',
  warning: 'warn', warn: 'warn',
  danger: 'danger', destructive: 'danger',
  info: 'info',
}
const classes = computed(() => cn('badge', TONE[props.variant ?? 'default'] ?? 'muted', props.class))
</script>

<template>
  <span :class="classes"><slot /></span>
</template>
