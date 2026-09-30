<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { Plus, Trash2, GripVertical } from 'lucide-vue-next';

interface ListItem {
  id: string;
  key: string;
  value: string;
  enabled: boolean;
}

const props = defineProps<{
  modelValue: Record<string, string>;
  title?: string;
  keyPlaceholder?: string;
  valuePlaceholder?: string;
  addButtonLabel?: string;
}>();

const emit = defineEmits(['update:modelValue']);

// Internal state as an array for easier UI management
const items = ref<ListItem[]>([]);

// Initialize from modelValue
const syncFromProps = () => {
  const newItems: ListItem[] = [];
  const entries = Object.entries(props.modelValue || {});
  
  if (entries.length > 0) {
    entries.forEach(([key, value]) => {
      newItems.push({
        id: Math.random().toString(36).substring(7),
        key,
        value,
        enabled: true
      });
    });
  }
  items.value = newItems;
};

// Sync back to modelValue
const syncToParent = () => {
  const result: Record<string, string> = {};
  items.value.forEach(item => {
    if (item.enabled && item.key.trim()) {
      result[item.key.trim()] = item.value;
    }
  });
  emit('update:modelValue', result);
};

const addItem = () => {
  items.value.push({
    id: Math.random().toString(36).substring(7),
    key: '',
    value: '',
    enabled: true
  });
};

const removeItem = (id: string) => {
  items.value = items.value.filter(i => i.id !== id);
  syncToParent();
};

watch(items, syncToParent, { deep: true });
onMounted(syncFromProps);

</script>

<template>
  <div class="flex flex-col gap-3 w-full">
    <div v-if="title" class="text-[10px] font-black uppercase tracking-[0.2em] text-faint mb-1">
      {{ title }}
    </div>

    <div class="flex flex-col gap-2">
      <div v-for="(item, index) in items" :key="item.id" 
           class="group flex items-center gap-3 animate-in slide-in-from-left-2 duration-300"
           :style="{ transitionDelay: `${index * 50}ms` }">
        
        <!-- Drag Handle / Checkbox -->
        <div class="flex items-center gap-2 shrink-0">
          <input type="checkbox" v-model="item.enabled" 
                 class="w-4 h-4 rounded border-border text-primary focus:ring-primary/20 transition-all cursor-pointer">
        </div>

        <div class="flex-1 grid grid-cols-2 gap-2">
          <!-- Key Input -->
          <div class="relative">
            <input 
              v-model="item.key" 
              :placeholder="keyPlaceholder || 'Key'"
              class="w-full h-9 px-4 text-[11px] font-bold bg-card border border-border-soft  rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none"
            />
          </div>

          <!-- Value Input -->
          <div class="relative">
            <input 
              v-model="item.value" 
              :placeholder="valuePlaceholder || 'Value'"
              class="w-full h-9 px-4 text-[11px] bg-muted border border-border-soft  rounded-lg focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            />
          </div>
        </div>

        <!-- Delete Action -->
        <button 
          @click="removeItem(item.id)"
          class="p-2 text-faint hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
        >
          <Trash2 :size="14" />
        </button>
      </div>

      <!-- Add Button -->
      <button 
        @click="addItem"
        class="mt-1 flex items-center justify-center gap-2 py-2.5 border-2 border-dashed border-border-soft rounded-xl text-[10px] font-black uppercase tracking-widest text-faint hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all w-full"
      >
        <Plus :size="14" stroke-width="3" />
        {{ addButtonLabel || 'Add New Entry' }}
      </button>

      <div v-if="items.length === 0" class="text-[9px] text-faint italic text-center py-4 opacity-60">
        No active entries configured.
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-in {
  animation: slideIn 0.3s ease-out forwards;
}
@keyframes slideIn {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}
</style>
