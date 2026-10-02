<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject, computed } from 'vue'
import { Search, Command, Layout, Settings, FileText, Zap, ChevronRight } from 'lucide-vue-next'

/**
 * 🛰️ ErpCommandPalette (ESA v5 - Shell Reconstruction)
 * Global Command Launcher (CMD+K).
 * Allows users to jump to any module or trigger system actions.
 */
const $superApp = inject<any>('$superApp')
const isOpen = ref(false)
const searchQuery = ref('')

const toggle = () => {
  isOpen.value = !isOpen.value
}

const user = JSON.parse(localStorage.getItem('user') || '{}')
const isAtLeastAdmin = ['ADMIN', 'SUPERADMIN'].includes(user.role)

const commands = computed(() => {
  const list = [
    { id: 'action.clear-cache', label: 'Clear System Cache', icon: Zap, category: 'Actions' },
  ]
  
  if (isAtLeastAdmin) {
    list.unshift({ id: 'm.admin', label: 'Go to Admin Management', icon: Layout, category: 'Navigation' })
    list.push({ id: 'action.settings', label: 'Open System Settings', icon: Settings, category: 'Settings' })
  }
  
  return list
})

const handleKeydown = (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    toggle()
  }
  if (e.key === 'Escape' && isOpen.value) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  $superApp.registerCommand({
    id: 'core.toggle-palette',
    name: 'Toggle Command Palette',
    category: 'System',
    handler: toggle
  })
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

const execute = (cmd: any) => {
  console.log('🚀 Executing:', cmd.id)
  isOpen.value = false
  // Implementation of command execution via SuperApp bus
}
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" 
         class="fixed inset-0 z-[999] flex items-start justify-center pt-[15vh] px-4">
      
      <!-- 🌫️ Backdrop -->
      <div class="absolute inset-0 bg-slate-950/40 backdrop-blur-sm animate-in fade-in duration-300" 
           @click="isOpen = false"></div>

      <!-- 🎮 Palette Box -->
      <div class="relative w-full max-w-2xl bg-card border border-border-soft  rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-200">
        
        <!-- 🔍 Search Bar -->
        <div class="h-14 px-5 flex items-center gap-4 border-b border-border-soft">
          <Search :size="18" class="text-faint" />
          <input v-model="searchQuery" 
                 placeholder="Type a command or search hub..."
                 class="flex-1 bg-transparent border-none outline-none text-foreground text-[14px] font-medium"
                 autofocus />
          <kbd class="px-2 py-1 bg-muted rounded border border-border-soft  text-[9px] font-black tracking-widest uppercase">Esc</kbd>
        </div>

        <!-- 📜 Result List -->
        <div class="max-h-[60vh] overflow-y-auto p-2 flex flex-col gap-1 custom-scrollbar">
          <div v-for="cmd in commands" :key="cmd.id"
               @click="execute(cmd)"
               class="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-muted cursor-pointer transition-all group">
            
            <div class="flex items-center gap-4">
              <div class="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-faint group-hover:text-foreground  transition-all">
                <component :is="cmd.icon" :size="16" />
              </div>
              <div class="flex flex-col">
                <span class="text-[13px] font-bold text-foreground leading-none">{{ cmd.label }}</span>
                <span class="text-[10px] font-bold text-faint uppercase tracking-widest mt-1">{{ cmd.category }}</span>
              </div>
            </div>

            <ChevronRight v-if="false" :size="14" class="text-faint" />
          </div>
        </div>

        <!-- 🏁 Footer Status -->
        <div class="px-5 py-3 bg-muted border-t border-border-soft  flex items-center gap-4">
          <div class="flex items-center gap-1.5 grayscale opacity-50">
             <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span class="text-[9px] font-black uppercase tracking-tighter">System Kernel v2.4.0 (Synchronized)</span>
          </div>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* 🎨 Premium Smooth Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.1);
  border-radius: 9999px;
}
</style>
