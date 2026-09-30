<script setup lang="ts">
import { cn } from '../../utils'

/** Label — always visible (rules.md §5): never replace a label with a placeholder. */
const props = defineProps<{ for?: string; class?: string }>()
</script>

<template>
  <label :for="props.for" :class="cn('label', props.class)">
    <slot />
  </label>
</template>
