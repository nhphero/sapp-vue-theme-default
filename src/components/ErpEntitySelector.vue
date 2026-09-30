<script setup lang="ts">
import Card from './card/Card.vue'

defineProps<{
  items: Array<{ id: string, label: string, count: string, icon: any }>,
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const select = (id: string) => {
  emit('update:modelValue', id)
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 select-none w-full">
    <Card v-for="item in items" :key="item.id"
         @click="select(item.id)"
         class="flex flex-col p-6 bg-card border rounded-2xl transition-all cursor-pointer group shadow-sm hover:shadow-md h-32"
         :class="modelValue === item.id 
 ? 'border-foreground  ring-2 ring-border ' 
           : 'border-border-soft  hover:border-border '">
      <div class="flex flex-col justify-between h-full">
        <div class="flex items-center justify-between">
           <div class="w-10 h-10 rounded-xl bg-muted flex items-center justify-center transition-colors group-hover:scale-110 duration-500"
                :class="{'bg-primary text-primary-foreground  shadow-lg shadow-primary/20': modelValue === item.id}">
              <component :is="item.icon" :size="20" stroke-width="2.5" />
           </div>
           <span class="text-[28px] font-mono tabular-nums font-black tracking-tighter leading-none"
                 :class="modelValue === item.id ? 'text-foreground ' : 'text-faint '">
             {{ item.count }}
           </span>
        </div>
        <div class="flex flex-col gap-1">
           <span class="text-[10px] font-black uppercase tracking-[0.2em] text-faint group-hover:text-foreground transition-colors"
                 :class="{'text-foreground ': modelValue === item.id}">{{ item.label }}</span>
           <div class="h-1 w-full bg-muted rounded-full overflow-hidden mt-1">
              <div class="h-full bg-primary transition-all duration-700 rounded-full" 
                   :style="{ width: modelValue === item.id ? '100%' : '20%' }"></div>
           </div>
        </div>
      </div>
    </Card>
  </div>
</template>
