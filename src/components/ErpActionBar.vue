<script setup lang="ts">
import { Search, Filter } from 'lucide-vue-next'
import Input from './input/Input.vue'
import Button from './button/Button.vue'

/** Toolbar above a table: search + filter (hoff `.toolbar`). Provide the default slot to fully customize. */
defineProps<{ modelValue: string; placeholder?: string }>()
const emit = defineEmits(['update:modelValue'])
const onInput = (e: any) => emit('update:modelValue', e.target.value)
</script>

<template>
  <div class="toolbar w-full">
    <slot />
    <template v-if="!$slots.default">
      <Input :placeholder="placeholder || 'Tìm…'" :model-value="modelValue" container-class="flex-1" @input="onInput">
        <template #prefix><Search :size="14" /></template>
      </Input>
      <Button variant="default">
        <template #icon><Filter :size="14" /></template>
        Lọc
      </Button>
    </template>
  </div>
</template>
