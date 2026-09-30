<script setup lang="ts">
import { cn } from '../../utils'
const props = defineProps<{ class?: string; num?: boolean }>()
</script>
<template>
  <td :class="cn(props.num && 'num', props.class)">
    <slot />
  </td>
</template>
