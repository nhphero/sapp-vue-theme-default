<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { Plus, Minus } from 'lucide-vue-next'
import { cn } from '../../utils'

/** Number input — `.input` with stepper buttons; numbers use tabular figures. */
defineOptions({ inheritAttrs: false })

const props = defineProps<{
  defaultValue?: number
  modelValue?: number
  min?: number
  max?: number
  step?: number
  class?: string
  containerClass?: string
}>()

const emits = defineEmits<{ (e: 'update:modelValue', payload: number): void }>()
const modelValue = useVModel(props, 'modelValue', emits, { passive: true, defaultValue: props.defaultValue ?? 0 })
const step = props.step ?? 1

const clamp = (val: number) => {
  if (props.min !== undefined && val < props.min) return props.min
  if (props.max !== undefined && val > props.max) return props.max
  return val
}
const decrease = () => { modelValue.value = clamp((modelValue.value ?? 0) - step) }
const increase = () => { modelValue.value = clamp((modelValue.value ?? 0) + step) }
const onInput = (e: any) => {
  const val = parseFloat(e.target.value)
  if (!isNaN(val)) modelValue.value = clamp(val)
}
</script>

<template>
  <div :class="cn('input flex items-stretch p-0 overflow-hidden', props.containerClass)">
    <button type="button" class="w-9 flex items-center justify-center text-faint hover:bg-muted hover:text-foreground border-r border-border-soft" aria-label="Giảm" @click="decrease">
      <Minus :size="12" />
    </button>
    <input
      type="number"
      :value="modelValue"
      v-bind="$attrs"
      @input="onInput"
      :class="cn('flex-1 min-w-0 bg-transparent border-0 outline-none text-center text-sm tabular-nums px-2', props.class)"
    >
    <button type="button" class="w-9 flex items-center justify-center text-faint hover:bg-muted hover:text-foreground border-l border-border-soft" aria-label="Tăng" @click="increase">
      <Plus :size="12" />
    </button>
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
input[type="number"] { -moz-appearance: textfield; appearance: textfield; }
</style>
