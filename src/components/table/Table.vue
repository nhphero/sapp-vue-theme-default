<script setup lang="ts">
import { cn } from '../../utils'
/** Table — hoff-kit `.table-wrap > table` (scoped header/row styles). */
const props = defineProps<{ class?: string; wrapClass?: string }>()
</script>
<template>
  <div :class="cn('table-wrap w-full', props.wrapClass)">
    <table :class="cn('w-full', props.class)">
      <slot />
    </table>
  </div>
</template>
