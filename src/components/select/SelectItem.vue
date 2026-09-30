<script setup lang="ts">
import { SelectItem, SelectItemIndicator, SelectItemText, type SelectItemProps, useForwardProps } from 'radix-vue'
import { Check } from 'lucide-vue-next'
import { cn } from '../../utils'

const props = defineProps<SelectItemProps & { class?: any }>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <SelectItem v-bind="forwardedProps" :class="cn('pop-item outline-none', props.class)">
    <SelectItemText><slot /></SelectItemText>
    <SelectItemIndicator class="ml-auto text-primary">
      <Check :size="14" />
    </SelectItemIndicator>
  </SelectItem>
</template>
