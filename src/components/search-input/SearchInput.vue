<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { Search, X } from 'lucide-vue-next'
import { cn } from '../../utils'

/** Search input — `.input.sm` with a leading search icon and a clear button. */
const props = withDefaults(defineProps<{
  modelValue?: string
  placeholder?: string
  class?: string
  iconSize?: number
  showClear?: boolean
}>(), { showClear: true })

const emits = defineEmits<{ (e: 'update:modelValue', payload: string): void }>()
const modelValue = useVModel(props, 'modelValue', emits, { passive: true, defaultValue: '' })
const clear = () => { modelValue.value = '' }
</script>

<template>
  <div :class="cn('relative flex items-center w-full shrink-0', props.class)">
    <div class="absolute left-2.5 flex items-center justify-center text-faint pointer-events-none">
      <slot name="icon"><Search :size="iconSize || 14" stroke-width="2" /></slot>
    </div>
    <input
      v-model="modelValue"
      type="search"
      :placeholder="placeholder || 'Tìm…'"
      autocomplete="off"
      class="input sm pl-8"
      :class="{ 'pr-8': showClear }"
    />
    <button v-if="showClear && modelValue" type="button" class="icon-btn absolute right-0.5" style="width:28px;height:28px" aria-label="Xoá tìm kiếm" @click="clear">
      <X :size="12" />
    </button>
  </div>
</template>
