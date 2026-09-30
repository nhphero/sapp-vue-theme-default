<script setup lang="ts">
import { cn } from '../../utils'
/** `num` right-aligns with tabular figures (rules.md §4). */
const props = defineProps<{ class?: string; num?: boolean }>()
</script>
<template>
  <th :class="cn(props.num && 'num', props.class)">
    <slot />
  </th>
</template>
