<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { inject, computed } from 'vue'
import { LayoutDashboard, Database, Settings, FileText, ChevronRight, Globe, Share2 } from 'lucide-vue-next'
import type { ISuperApp } from '@nhphero/vue-sapp/contracts'

/**
 * 🏢 Sidebar (ESA v5 - Shell Reconstruction)
 * Global Vertical Navigation.
 * Contains the main app switcher and system settings access.
 */
const router = useRouter()
const route = useRoute()
const superApp = inject('$superApp') as ISuperApp

const staticNavItems = [
  { id: 'admin', label: 'Admin Management', icon: Database, path: '/app/admin/integrations', moduleId: 'admin' },
  { id: 'workspace', label: 'Workspace Management', icon: Globe, path: '/app/workspace', moduleId: 'workspace' },
  { id: 'settings', label: 'System Settings', icon: Settings, path: '/settings' }
]

// 👤 Resolve User Identity & Roles
const user = JSON.parse(localStorage.getItem('user') || '{}')
const isAtLeastAdmin = computed(() => ['ADMIN', 'SUPERADMIN'].includes(user.role))

// 🛰️ Filter items based on dynamic module status & role
const navItems = computed(() => {
  return staticNavItems.filter(item => {
    // 🛡️ RBAC: Admin Management restricted to privileged roles
    if (item.id === 'admin' && !isAtLeastAdmin.value) return false;
    
    if (!item.moduleId) return true; // Always show static items
    return superApp.isModuleActive(item.moduleId);
  });
})

const navigate = (path: string) => {
  router.push(path)
}

const isActive = (path: string) => {
  return route.path.startsWith(path)
}
</script>

<template>
  <aside class="w-[280px] h-full flex flex-col border-r border-border-soft bg-muted  transition-colors duration-500">
    
    <!-- 🏢 Sidebar Header -->
    <div class="h-14 px-6 flex items-center gap-3 border-b border-border-soft">
      <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span class="text-primary-foreground font-extrabold text-xs">CN</span>
      </div>
      <div class="flex flex-col">
        <span class="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Admin Console</span>
        <span class="text-[8px] font-bold text-faint uppercase tracking-widest">v2.4.0 (Enterprise)</span>
      </div>
    </div>

    <!-- 🗺️ Main Navigation -->
    <nav class="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto custom-scrollbar">
      <button v-for="item in navItems" :key="item.id" @click="navigate(item.id)"
              class="group w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300"
              :class="isActive(item.path) ? 'bg-primary shadow-lg shadow-primary/20 ' : 'hover:bg-sunken '">
        
        <div class="flex items-center gap-3">
          <component :is="item.icon" :size="18" 
                     :class="isActive(item.path) ? 'text-primary-foreground ' : 'text-faint group-hover:text-foreground '" />
          <span class="text-[12px] font-bold tracking-tight"
                :class="isActive(item.path) ? 'text-primary-foreground ' : 'text-faint group-hover:text-muted-foreground '">
            {{ item.label }}
          </span>
        </div>

        <ChevronRight v-if="isActive(item.path)" :size="14" class="text-white/50" />
      </button>
    </nav>

    <!-- 👤 Bottom Identity Section -->
    <div class="p-4 border-t border-border-soft bg-white/30">
      <div class="flex items-center gap-3 p-3 rounded-2xl bg-card border border-border-soft  shadow-sm">
        <div class="w-10 h-10 rounded-xl bg-muted flex items-center justify-center font-black text-faint text-sm">PN</div>
        <div class="flex flex-col">
          <span class="text-[11px] font-black uppercase text-foreground">Phuong.NH</span>
          <span class="text-[9px] font-bold text-faint uppercase tracking-tighter">System Architect</span>
        </div>
      </div>
    </div>

  </aside>
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
