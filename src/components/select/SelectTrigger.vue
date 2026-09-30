<script setup lang="ts">
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '../../utils'

const props = defineProps<SelectTriggerProps & { class?: any }>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="cn('input flex items-center justify-between gap-2 text-left cursor-pointer [&>span]:truncate data-[placeholder]:text-faint', props.class)"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown :size="14" class="shrink-0 text-faint" />
    </SelectIcon>
  </SelectTrigger>
</template>
