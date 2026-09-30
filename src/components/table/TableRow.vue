<script setup lang="ts">
import { cn } from '../../utils'
const props = defineProps<{ class?: string; selected?: boolean }>()
</script>
<template>
  <tr :data-state="selected ? 'selected' : undefined" :class="cn('transition-colors', props.class)">
    <slot />
  </tr>
</template>
