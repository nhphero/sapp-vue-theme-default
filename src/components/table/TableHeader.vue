<script setup lang="ts">
import { cn } from '../../utils'
const props = defineProps<{ class?: string }>()
</script>
<template>
  <thead :class="cn(props.class)">
    <slot />
  </thead>
</template>
