<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { cn } from '../../utils'

/** Textarea — hoff-kit control (`.input.textarea`). */
const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: string
  invalid?: boolean
}>()

const emits = defineEmits<{ (e: 'update:modelValue', payload: string | number): void }>()

const modelValue = useVModel(props, 'modelValue', emits, { passive: true, defaultValue: props.defaultValue })
</script>

<template>
  <textarea v-model="modelValue" :aria-invalid="invalid || undefined" :class="cn('input textarea', props.class)"></textarea>
</template>
