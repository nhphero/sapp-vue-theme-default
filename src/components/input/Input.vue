<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { cn } from '../../utils'

/** Input — hoff-kit control (`.input`). Optional prefix/suffix slots for icons. */
defineOptions({ inheritAttrs: false })

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: string
  containerClass?: string
  size?: 'sm' | 'default' | 'lg'
  invalid?: boolean
}>()

const emits = defineEmits<{ (e: 'update:modelValue', payload: string | number): void }>()

const modelValue = useVModel(props, 'modelValue', emits, { passive: true, defaultValue: props.defaultValue })
</script>

<template>
  <div :class="cn('relative flex items-center w-full', props.containerClass)">
    <div v-if="$slots.prefix" class="absolute left-2.5 flex items-center justify-center pointer-events-none text-faint">
      <slot name="prefix" />
    </div>

    <input
      v-model="modelValue"
      v-bind="$attrs"
      :aria-invalid="invalid || undefined"
      :class="cn('input', size === 'sm' && 'sm', size === 'lg' && 'lg', $slots.prefix && 'pl-9', $slots.suffix && 'pr-9', props.class)"
    >

    <div v-if="$slots.suffix" class="absolute right-2.5 flex items-center justify-center text-faint">
      <slot name="suffix" />
    </div>
  </div>
</template>
