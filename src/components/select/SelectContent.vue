<script setup lang="ts">
import { useCssScope } from '../../composables/cssScope';
import {
  SelectContent, type SelectContentEmits, type SelectContentProps, SelectPortal, SelectViewport, useForwardPropsEmits,
} from 'radix-vue'
import { cn } from '../../utils'

/** `data-portal` value of the teleported panel — see composables/cssScope. */
const cssScope = useCssScope()

const props = defineProps<SelectContentProps & { class?: any }>()
const emits = defineEmits<SelectContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SelectPortal>
    <SelectContent
      v-bind="forwarded"
      :data-portal="cssScope"
      :class="cn('pop relative z-[500] max-h-[280px] overflow-hidden min-w-[var(--radix-select-trigger-width)]', props.class)"
    >
      <SelectViewport>
        <slot />
      </SelectViewport>
    </SelectContent>
  </SelectPortal>
</template>
