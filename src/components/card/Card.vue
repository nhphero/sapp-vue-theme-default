<script setup lang="ts">
import { cn } from '../../utils'

/** Card — hoff-kit `.card` (surface, soft border, radius-lg, shadow). `size` maps to the semantic padding scale. */
const props = defineProps<{
  class?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}>()
</script>

<template>
  <div :class="cn(
 'card',
    {
      'p-xs': props.size === 'xs',
      'p-sm': props.size === 'sm',
      'p-md': props.size === 'md',
      'p-lg': props.size === 'lg',
      'p-xl': props.size === 'xl',
      'p-2xl': props.size === '2xl',
    },
    props.class
  )">
    <slot />
  </div>
</template>
