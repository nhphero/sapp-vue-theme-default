<script setup lang="ts">
import { cn } from '../../utils'

/** Section header — muted strip with an uppercase xs label and an actions area. */
const props = defineProps<{ title?: string; description?: string; class?: string }>()
</script>

<template>
  <div :class="cn('section-header shrink-0 w-full', props.class)">
    <div class="flex items-center gap-2 min-w-0">
      <slot name="icon" />
      <slot name="title">
        <span class="title truncate">{{ title }}</span>
        <span v-if="description" class="text-xs text-faint truncate">· {{ description }}</span>
      </slot>
    </div>
    <div class="flex items-center gap-1">
      <slot name="actions" />
    </div>
  </div>
</template>
