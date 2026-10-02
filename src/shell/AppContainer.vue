<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, onActivated, onDeactivated, inject, provide, shallowRef, markRaw } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { CSS_SCOPE_KEY } from '../composables/cssScope'

/**
 * 🛰️ AppContainer (ESA v5 - Micro-Frontend Gateway)
 * Dynamically resolves and mounts module entry points via the SuperApp bridge.
 * Standardizes the"Bridge Resolution" pattern across all apps.
 */
const route = useRoute()
const router = useRouter()
const $superApp = inject<any>('$superApp')

const isLoaded = ref(false)
const error = ref<string | null>(null)
const EntryComponent = shallowRef<any>(null)

const currentActiveModuleId = ref<string | null>(null)

/**
 * The mini app's CSS scope (mfeScopedCssPlugin): its viewport is `data-mfe="<key>"`, its teleported
 * surfaces `data-portal="<key>"` — every app's utilities stay on that app.
 */
const cssScope = ref('')
provide(CSS_SCOPE_KEY, cssScope)
const setCssScope = (key: string) => {
  cssScope.value = key
  if ($superApp?.state) $superApp.state.activeCssScope = key
}
onBeforeUnmount(() => setCssScope(''))

const loadModule = async () => {
  const param = route.params.moduleId
  if (!param || (Array.isArray(param) && param.length === 0)) {
    error.value = 'Invalid Module Path'
    return
  }

  const segments = Array.isArray(param) ? param : param.split('/').filter(Boolean)
  // /app/<slug>/… — the slug is the route (changeable), everything else is keyed by the app's id.
  const baseModuleId = $superApp.findAppByRoute?.(segments[0])?.id ?? segments[0]
  const subPath = segments.slice(1).join('/')

  // Named by its id (a link older than a slug change): move to the current route.
  const slugNow = typeof $superApp.appPath === 'function' ? $superApp.appPath(baseModuleId).split('/')[2] : segments[0]
  if (slugNow && segments[0] !== slugNow) {
    router.replace({ path: $superApp.appPath(baseModuleId, subPath), query: route.query, hash: route.hash })
    return
  }

  // 🛡️ RBAC: Guard sensitive modules from unauthorized mounting (the admin app: by its code)
  if (baseModuleId === 'admin' || $superApp.getApp?.(baseModuleId)?.code === 'admin') {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!['ADMIN', 'SUPERADMIN'].includes(user.role)) {
      console.error('🛡️ [Security] Unauthorized attempt to mount ADMIN module by role:', user.role);
      error.value = 'Security Breach: Your current role does not have permission to access the Administration module.';
      return;
    }
  }

  // 🛡️ INTELLIGENT MOUNTING: If we are in the same module, just notify sub-path change
  if (currentActiveModuleId.value === baseModuleId && isLoaded.value) {
    try {
      $superApp.runPathAction(baseModuleId, subPath)
      return
    } catch (err) {
      console.warn('Path action failed, attempting full reload...', err)
    }
  }

  isLoaded.value = false
  error.value = null
  EntryComponent.value = null
  currentActiveModuleId.value = baseModuleId
  
  try {
    // 🛰️ Delegate loading to the SuperApp Kernel
    await $superApp.resolveModule(baseModuleId)
    
    // 🚀 Retrieve the module's declared entry component
    const component = $superApp.getModuleEntry(baseModuleId)
    if (!component) throw new Error(`Module [${baseModuleId}] loaded but registered no entry component (expected"${baseModuleId}.main" via registerModuleEntry / createMiniApp).`)
    setCssScope($superApp.getModuleCssScope?.(baseModuleId) ?? baseModuleId)
    EntryComponent.value = markRaw(component)
    
    // 📡 Notify the module about the current sub-path
    $superApp.runPathAction(baseModuleId, subPath)
    
    isLoaded.value = true
    void $superApp.$hook?.emit?.('app.mount', { appId: baseModuleId, moduleId: baseModuleId })
  } catch (err: any) {
    console.error('❌ Failed to mount module:', err)
    error.value = `Module [${baseModuleId}] failed to respond: ${err.message}`
    currentActiveModuleId.value = null
  }
}

/**
 * Kept alive by the Shell's route cache (one container per app): while hidden it ignores route
 * changes — they belong to another app or page — and on its return it takes its app's CSS scope back
 * and catches up with the sub-path it is shown at.
 */
const active = ref(true)
let activatedOnce = false
/** The app this container shows: the first path segment it was mounted at (the Shell keys containers by it). */
const firstSegment = () => {
  const param = route.params.moduleId
  return (Array.isArray(param) ? param[0] : String(param ?? '').split('/')[0]) ?? ''
}
const ownSegment = firstSegment()
onActivated(() => {
  active.value = true
  if (!activatedOnce) { activatedOnce = true; return }   // the first activation is the mount
  if (currentActiveModuleId.value) setCssScope($superApp.getModuleCssScope?.(currentActiveModuleId.value) ?? currentActiveModuleId.value)
  loadModule()
})
onDeactivated(() => { active.value = false })

onMounted(() => {
  loadModule()
})

watch(() => route.params.moduleId, () => {
  // Another page, or another app (its own container takes it) — not this one's business.
  if (!active.value || route.name !== 'AppGateway' || firstSegment() !== ownSegment) return
  loadModule()
})
</script>

<template>
  <div class="app-container w-full h-full flex-1 flex flex-col min-h-0 overflow-hidden bg-muted transition-colors">
    
    <!-- 🏗️ Standardized Module Frame Wrapper -->
    <template v-if="$c('ModulePageLayout')">
      <component :is="$c('ModulePageLayout')" class="flex-1 w-full h-full min-h-0">
        <div id="module-viewport" :data-mfe="cssScope || undefined" class="flex-1 w-full h-full flex flex-col overflow-hidden min-h-0">
          <!-- 🛠️ External Module mounts here via SuperApp Dynamic Resolution -->
          <component :is="EntryComponent" v-if="EntryComponent" class="flex-1 w-full h-full min-h-0 flex flex-col" />
        </div>
      </component>
    </template>

    <!-- ⚠️ Emergency Error HUD -->
    <div v-if="error" 
         class="absolute inset-0 flex items-center justify-center p-10 bg-white/80 backdrop-blur-md z-50">
      <div class="max-w-md p-8 bg-card border border-red-500/20 rounded-2xl shadow-2xl flex flex-col items-center text-center">
        <div class="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
          <span class="text-red-500 font-black text-2xl">!</span>
        </div>
        <h2 class="text-[14px] font-black uppercase tracking-[0.2em] text-red-500 mb-2">Bridge Access Denied</h2>
        <p class="text-[12px] font-medium text-faint leading-relaxed mb-6">{{ error }}</p>
        <button @click="loadModule" class="px-6 py-2 bg-primary text-primary-foreground  text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
          Retry Connection
        </button>
      </div>
    </div>

    <!-- ⏳ Standardized Connection HUD -->
    <div v-if="!isLoaded && !error" 
         class="absolute inset-0 flex items-center justify-center bg-muted z-50">
      <div class="flex flex-col items-center gap-6">
        <div class="w-12 h-12 border-4 border-slate-950/10 border-t-slate-950  rounded-full animate-spin"></div>
        <span class="text-[10px] font-black uppercase tracking-[0.3em] text-faint animate-pulse italic">Establishing Bridge...</span>
      </div>
    </div>

  </div>
</template>

<style scoped>
.app-container {
  height: 100%;
  flex: 1 1 0%;
  min-height: 0;
}
</style>
