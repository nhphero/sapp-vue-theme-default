<script setup lang="ts">
import { computed } from 'vue';
import { ArrowUp, ArrowDown, X, Plus } from 'lucide-vue-next';

const props = withDefaults(defineProps<{
  modelValue: any[];
  itemKey?: string | ((item: any) => string | number);
  hideReorder?: boolean;
  hideRemove?: boolean;
  emptyText?: string;
}>(), {
  modelValue: () => [],
  itemKey: 'id',
  hideReorder: false,
  hideRemove: false,
  emptyText: 'No items'
});

const emit = defineEmits(['update:modelValue', 'add', 'remove', 'reorder']);

const list = computed({
  get: () => props.modelValue || [],
  set: (val) => emit('update:modelValue', val)
});

const getKey = (item: any, index: number) => {
  if (typeof props.itemKey === 'function') {
    return props.itemKey(item);
  }
  return item[props.itemKey] !== undefined ? item[props.itemKey] : index;
};

const moveUp = (index: number) => {
  if (index <= 0) return;
  const newList = [...list.value];
  [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
  list.value = newList;
  emit('reorder', newList);
};

const moveDown = (index: number) => {
  if (index >= list.value.length - 1) return;
  const newList = [...list.value];
  [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
  list.value = newList;
  emit('reorder', newList);
};

const remove = (index: number) => {
  const newList = [...list.value];
  const removedItem = newList.splice(index, 1)[0];
  list.value = newList;
  emit('remove', { item: removedItem, index });
};

const add = () => {
  emit('add');
};
</script>

<template>
  <div class="erp-list-editor flex flex-col gap-2">
    <!-- List Items -->
    <template v-if="list.length > 0">
      <div v-for="(item, index) in list" :key="getKey(item, index)" 
           class="erp-list-item flex items-center gap-2 p-2 rounded-xl border border-border-soft bg-card  shadow-sm relative group transition-all">
        
        <!-- Default Reorder Controls (Optional) -->
        <slot name="reorder" v-bind="{ item, index, moveUp, moveDown, isFirst: index === 0, isLast: index === list.length - 1 }">
          <div v-if="!hideReorder" class="flex flex-col gap-0.5 shrink-0 opacity-30 group-hover:opacity-100 transition-opacity">
            <button @click="moveUp(index)" :disabled="index === 0"
              class="w-4 h-4 flex items-center justify-center rounded hover:bg-muted transition-all disabled:opacity-20 disabled:cursor-not-allowed text-faint">
              <ArrowUp :size="10" />
            </button>
            <button @click="moveDown(index)" :disabled="index === list.length - 1"
              class="w-4 h-4 flex items-center justify-center rounded hover:bg-muted transition-all disabled:opacity-20 disabled:cursor-not-allowed text-faint">
              <ArrowDown :size="10" />
            </button>
          </div>
        </slot>

        <!-- Main Content Slot -->
        <div class="flex-1 min-w-0">
          <slot name="item" v-bind="{ item, index, remove, moveUp, moveDown }">
            <!-- Default rendering if no slot provided -->
            <pre class="text-xs truncate">{{ item }}</pre>
          </slot>
        </div>

        <!-- Default Remove Control (Optional) -->
        <slot name="remove" v-bind="{ item, index, remove }">
          <button v-if="!hideRemove" @click="remove(index)" 
            class="w-6 h-6 flex items-center justify-center rounded-lg opacity-30 group-hover:opacity-100 hover:bg-red-50 hover:text-red-500 transition-all text-faint shrink-0">
            <X :size="14" />
          </button>
        </slot>
      </div>
    </template>

    <!-- Empty State -->
    <div v-else class="erp-list-empty py-4 text-center border-2 border-dashed border-border-soft rounded-xl">
      <slot name="empty">
        <span class="text-[10px] font-bold text-faint uppercase tracking-widest">{{ emptyText }}</span>
      </slot>
    </div>

    <!-- Footer / Add Button -->
    <div class="erp-list-footer mt-1">
      <slot name="footer" v-bind="{ add }">
        <button @click="add"
          class="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-muted hover:bg-muted text-faint hover:text-muted-foreground   transition-all text-[10px] font-bold uppercase tracking-widest">
          <Plus :size="12" />
          Add Item
        </button>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/* Add any specific styles if needed, Tailwind handles most */
</style>
