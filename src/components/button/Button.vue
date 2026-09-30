<script setup lang="ts">
import { computed } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { Loader2 } from 'lucide-vue-next'
import { cn } from '../../utils'

/**
 * Button — hoff-kit `.btn` (rules.md §9): one `primary` per screen, destructive actions are
 * `danger` (outlined red, never primary), secondary actions are the default outlined button.
 * Legacy variant names are still accepted and mapped.
 */
type Variant = 'default' | 'primary' | 'danger' | 'ghost' | 'link'
  | 'outline' | 'secondary' | 'destructive' | 'premium' | 'warning' | 'minimal'
type Size = 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'

interface Props extends /* @vue-ignore */ PrimitiveProps {
  variant?: Variant
  size?: Size
  as?: string
  asChild?: boolean
  class?: string
  loading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  as: 'button',
  asChild: false,
  loading: false,
  disabled: false,
  type: 'button',
})

const VARIANT_CLASS: Record<Variant, string> = {
  default: '',
  outline: '',
  secondary: '',
  warning: '',
  primary: 'primary',
  premium: 'primary',
  danger: 'danger',
  destructive: 'danger',
  ghost: 'ghost',
  minimal: 'ghost',
  link: 'link',
}

const SIZE_CLASS: Record<Size, string> = {
  default: '',
  sm: 'sm',
  lg: 'lg',
  icon: 'icon',
  'icon-sm': 'icon sm',
  'icon-lg': 'icon lg',
}

const classes = computed(() => cn('btn', VARIANT_CLASS[props.variant] ?? '', SIZE_CLASS[props.size] ?? '', props.class))
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :type="as === 'button' ? type : undefined"
    :disabled="disabled || loading"
    :aria-busy="loading || undefined"
    :class="classes"
  >
    <Loader2 v-if="loading" :size="14" class="animate-spin" aria-hidden="true" />
    <slot v-else name="icon" />
    <slot />
  </Primitive>
</template>
