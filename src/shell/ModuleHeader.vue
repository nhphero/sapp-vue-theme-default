<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'

/**
 * 🗺️ ModuleHeader (ESA v5 - Shell Reconstruction)
 * Horizontal tab-based navigation for internal module paths.
 * Updates the router path for deep-linking persistence.
 */
const props = defineProps<{
  items: Array<{ id: string, label: string, icon?: any }>,
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue', 'openCommandPalette'])
const router = useRouter()
const route = useRoute()
const $superApp = inject<any>('$superApp')

const select = (id: string) => {
  emit('update:modelValue', id)
  
  // 🔗 Update URL for deep-linking persistence (ESA v1 rule)
  if (router) {
    const segments = route.path.split('/').filter(Boolean)
    const base = segments.slice(0, 2).join('/')
    router.push(`/${base}/${id}`)
  }
}

</script>

<template>
  <div class="module-header w-full bg-card border-b border-border-soft  transition-colors">
    <div class="w-full h-11 px-10 flex items-center justify-between">
      <nav class="h-full flex items-center gap-10">
        <button v-for="item in items" :key="item.id" @click="select(item.id)"
                class="h-full flex items-center relative transition-all group"
                :class="modelValue === item.id ? 'text-foreground font-black' : 'text-faint hover:text-foreground '">
          <span class="text-[10px] font-black uppercase tracking-[0.3em] transition-all group-hover:translate-y-[-1px]">{{ item.label }}</span>
          
          <!-- Active Indicator -->
          <div v-if="modelValue === item.id" 
               class="absolute bottom-0 left-0 right-0 h-[2px] bg-primary animate-in zoom-in-x duration-500"></div>
        </button>
      </nav>

    </div>
  </div>
</template>
