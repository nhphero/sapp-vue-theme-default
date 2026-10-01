<script setup lang="ts">
import { inject, ref, onMounted, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { 
  User, LayoutGrid, ChevronDown, Building2, LogOut, Zap, Globe, Shield,
  Layers, Box, Cpu, Terminal, AppWindow, Database, Palette, Check, Star
} from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import { SUPERAPP_EVENTS } from '@nhphero/vue-sapp/contracts'
import LocaleFlag from '../components/LocaleFlag.vue'
import UserAvatar from '../components/avatar/UserAvatar.vue'

/**
 * 👑 Header (Antigravity v5 - High Contrast Arctic)
 * Solid white tactical bar for maximum legibility.
 */
const $superApp = inject<any>('$superApp')
const $s = $superApp
const router = useRouter()
const route = useRoute()

const $appState = ($s as any).$appState
const themeConfig = ($s as any).$themeConfig
const branding = computed(() => ($s as any).$config?.branding ?? null)
const isDark = computed(() => themeConfig?.state?.mode === 'dark' || (themeConfig?.state?.mode === 'system' && window.matchMedia?.('(prefers-color-scheme: dark)').matches))
const i18n = ($s as any).$i18n
const showLangMenu = ref(false)
const LOCALE_LABELS: Record<string, string> = { vi: 'Tiếng Việt', en: 'English', ja: '日本語', ko: '한국어', zh: '中文', fr: 'Français', de: 'Deutsch' }
const pickLocale = (l: string) => { i18n?.setLocale(l); showLangMenu.value = false }
/** Switcher tiles: the registered mini apps only. Shell pages and skills live in ⌘K and the user menu, not here. */
const tiles = computed(() =>
  apps.value.map((a: any) => ({ key: `app:${a.id}`, id: a.id, label: a.label, detail: a.detail, icon: a.icon, run: () => navigate(a.path) })),
)
// Favorites are shared with the Home page through the kernel's module state (`home.favorites`, ids `app:<id>` / `skill:<id>`).
const homeState = computed<any>(() => $superApp?.getModuleState?.('home', { favorites: [] }))
const favoriteKeys = computed<string[]>(() => homeState.value?.favorites ?? [])
const isFavorite = (key: string) => favoriteKeys.value.includes(key)
const toggleFavorite = (key: string) => homeState.value?.toggleFavorite?.(key)
/** One flat list: favourites first (in the order they were starred), then every other app.
 *  No section headers — the star on each tile already says which ones are favourites. */
const appSections = (q?: string) => {
  const s = (q || '').trim().toLowerCase()
  const hit = (a: any) => !s || `${a.label} ${a.detail || ''} ${a.id}`.toLowerCase().includes(s)
  const list = tiles.value.filter(hit)
  const rank = (a: any) => { const i = favoriteKeys.value.indexOf(a.key); return i === -1 ? Number.MAX_SAFE_INTEGER : i }
  const ordered = [...list].sort((a: any, b: any) => rank(a) - rank(b))
  return ordered.length ? [{ key: 'apps', label: '', tiles: ordered }] : []
}

const showAppsMenu = ref(false)
const setAppsMenu = (open: boolean) => { showAppsMenu.value = open }
const showUserMenu = ref(false)
const showWorkspaceMenu = ref(false)

const me = ref<any>(null)
const workspaces = ref<any[]>([])
const registeredAppsList = ref<any[]>([])

const iconMap: Record<string, any> = {
  Shield,
  Globe,
  Layers,
  LayoutGrid,
  Zap,
  Box,
  Cpu,
  Terminal,
  AppWindow,
  Database
}

const resolveIcon = (iconName?: string) => {
  if (!iconName) return LayoutGrid
  return iconMap[iconName] || LayoutGrid
}

const loadApps = () => {
  if (typeof $superApp?.getRegisteredApps === 'function') {
    registeredAppsList.value = $superApp.getRegisteredApps()
  }
}

/** Roles that open the Admin app (compared case-insensitively by the policy): legacy and Keycloak alike. */
const ADMIN_ROLES = ['superadmin', 'admin']
const canAdminister = computed(() => $superApp?.$policy?.can?.('role', ADMIN_ROLES) ?? false)

const apps = computed(() => {
  const rawList = registeredAppsList.value.length > 0
    ? registeredAppsList.value
    : [
        { id: 'workspace', name: 'Workspace Hub', url: 'http://localhost:4409', icon: 'Globe', description: 'Logic Orchestration', isEnabled: true },
        { id: 'admin', name: 'Admin Management', url: 'http://localhost:4403', icon: 'Shield', description: 'Platform Governance', isEnabled: true }
      ]

  return rawList
    .filter((a: any) => a.isEnabled !== false)
    // The Admin app is for administrators only — asked of the policy, like every other gate.
    .filter((a: any) => a.id !== 'admin' || canAdminister.value)
    .map((a: any) => ({
      id: a.id,
      label: a.name,
      path: a.id === 'admin' ? '/app/admin/apps' : `/app/${a.id}`,
      icon: resolveIcon(a.icon),
      detail: a.description || 'Micro-Frontend App'
    }))
})

/** Menu of the mounted mini app, published by `layout.mini-app` (theme) through the kernel's module state. */
const shellNav = $superApp.getModuleState('shell.nav', { moduleId: '', title: '', icon: null, items: [], active: '', navigate: null })
/** True while a mini app is mounted (`/app/<id>/…`); Shell pages (Home, Theme Studio…) show the generic switcher. */
const inApp = computed(() => route.path.startsWith('/app/'))
const currentApp = computed(() => {
  let appId = inApp.value ? $appState.current_app : null;
  if (appId === 'expose') appId = 'workspace';
  const found = appId && apps.value.find(a => a.id === appId)
  if (found) return found
  // mounted by URL only (not in the Admin registry): use what the app's layout published
  if (appId && shellNav.title) return { id: appId, label: shellNav.title, icon: shellNav.icon || LayoutGrid }
  return { id: 'default', label: i18n?.t('shell.apps') ?? 'Apps', icon: LayoutGrid }
})
const showAppNav = computed(() => inApp.value && shellNav.items.length > 0)

/**
 * Version of the mounted app, from its manifest.json (kernel `loadAppManifest`): a package app's
 * deployed version; a remote app without one (a dev server) shows "dev".
 */
const appVersion = ref('')
watch(() => [currentApp.value.id, (currentApp.value as any).version], async ([appId]) => {
  appVersion.value = ''
  if (!appId || appId === 'default' || typeof $superApp.loadAppManifest !== 'function') return
  const manifest = await $superApp.loadAppManifest(appId)
  if (currentApp.value.id !== appId) return
  appVersion.value = manifest ? String(manifest.version ?? 'dev') : ''
}, { immediate: true })

/**
 * Band sections: an item without `group` is a tab; items sharing a `group` become ONE tab that opens
 * a dropdown of its pages (first-seen order). The group tab is selected while one of its pages is.
 */
type BandSection = { group: null; item: any } | { group: string; icon?: any; items: any[] }
const bandSections = computed<BandSection[]>(() => {
  const out: BandSection[] = []
  for (const item of shellNav.items as any[]) {
    if (!item.group) { out.push({ group: null, item }); continue }
    const existing = out.find((s): s is { group: string; icon?: any; items: any[] } => s.group === item.group)
    if (existing) { existing.items.push(item); existing.icon ??= item.groupIcon }
    else out.push({ group: item.group, icon: item.groupIcon, items: [item] })
  }
  return out
})
const groupActive = (items: any[]) => items.find(i => shellNav.active === i.path) ?? null

const activeWorkspaceId = computed({
  get: () => $appState.current_workspace,
  set: (val) => { $appState.current_workspace = val }
})

const activeWorkspace = computed(() => {
  return workspaces.value.find(w => String(w.id) === String(activeWorkspaceId.value)) || workspaces.value[0]
})

watch(() => route.params.moduleId, (param) => {
  const moduleId = Array.isArray(param) ? param[0] : param
  if (moduleId && $appState.current_app !== moduleId) {
    $appState.current_app = moduleId
  }
}, { immediate: true })

const fetchMe = async () => {
  try {
    me.value = await $superApp.doAction('auth.me')
  } catch (err) {
    try { me.value = JSON.parse(localStorage.getItem('user') || 'null') } catch {}
  }
}
$superApp.on?.('auth:profile-updated', (user: any) => { me.value = { ...(me.value || {}), ...user } })

const fetchWorkspaces = async () => {
  try {
    const result = await $superApp.doAction('workspace.list')
    workspaces.value = result || []
    const exists = workspaces.value.find(w => String(w.id) === String(activeWorkspaceId.value))
    if ((!activeWorkspaceId.value || !exists) && workspaces.value.length > 0) {
      activeWorkspaceId.value = String(workspaces.value[0].id)
    }
  } catch (err) {}
}

const selectWorkspace = (id: string) => {
  const newId = String(id);
  if ($appState.current_workspace === newId) {
    showWorkspaceMenu.value = false;
    return;
  }
  $appState.current_workspace = newId;
  showWorkspaceMenu.value = false;
}

const handleLogout = async () => {
  // Lets the auth provider (SSO) drop its own tokens too — the app session only, never the IdP session.
  $superApp.emit?.(SUPERAPP_EVENTS.AUTH_LOGOUT)
  try {
     $superApp.doAction('auth.logout')
    localStorage.removeItem('accessToken')
    router.push('/login').catch(() => {
       window.location.href = '/login';
    });
  } catch (err) {
    localStorage.removeItem('accessToken');
    window.location.href = '/login';
  }
}

const navigate = (path: string) => {
  showAppsMenu.value = false
  router.push(path)
}

onMounted(() => {
  fetchMe()
  fetchWorkspaces()
  loadApps()
  if (typeof $superApp?.on === 'function') {
    $superApp.on('apps:updated', (updated: any) => {
      if (Array.isArray(updated)) {
        registeredAppsList.value = updated
      } else {
        loadApps()
      }
    })
  }
})
</script>

<template>
  <header class="w-full bg-background sticky top-0 z-[100] transition-colors duration-300">
    <div class="page-container h-(--header-h) flex items-center justify-between gap-4">
      
      <!-- 🗺️ Left Section: Branding & Navigation -->
      <div class="flex items-center gap-3 min-w-0">
        <div class="flex items-center gap-3 cursor-pointer group/logo" data-testid="brand" :title="branding?.name" @click="router.push(branding?.homePath || '/')">
          <!-- 🏷️ Brand logo from createSapp({ branding }); dark surfaces get the dark variant or a light plate -->
          <template v-if="branding?.logo">
            <img v-if="isDark && branding.logoDark" :src="branding.logoDark" :alt="branding.name" class="h-7 w-auto max-w-[200px] object-contain" />
            <span v-else class="inline-flex items-center rounded-md" :class="isDark && 'bg-white/95 px-2 py-1'">
              <img :src="branding.logo" :alt="branding.name" class="h-7 w-auto max-w-[200px] object-contain" />
            </span>
            <span v-if="branding.tagline" class="hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] text-faint border-l border-border-soft pl-3">{{ branding.tagline }}</span>
          </template>
          <template v-else>
          <div class="relative">
            <div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft">
              <span class="text-primary-foreground font-black text-xs tracking-tighter">MP</span>
            </div>
          </div>
          <div class="flex flex-col text-left">
            <span class="text-[11px] font-black uppercase tracking-[0.4em] text-foreground group-hover/logo:text-primary transition-colors leading-none mb-1">Antigravity</span>
            <span class="text-[9px] font-black uppercase tracking-[0.2em] text-faint">Core OS v5</span>
          </div>
          </template>
        </div>
      </div>
 
      <!-- 👤 Right Section: User & Actions -->
      <div class="flex items-center gap-2">
        <div class="hidden md:flex items-center gap-1 flex-nowrap shrink-0">
           <!-- 🌐 Language switcher -->
           <component :is="$c('ui.dropdown')" v-if="i18n" :modelValue="showLangMenu" @update:modelValue="showLangMenu = $event" align="right">
             <template #trigger>
               <button type="button" class="h-9 px-2 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors outline-none"
                       :title="$t('shell.language')" :aria-label="$t('shell.language')" data-testid="lang-switch">
                 <LocaleFlag :locale="i18n.locale" :size="20" />
                 <ChevronDown :size="13" class="text-faint" />
               </button>
             </template>
             <template #content>
               <div class="w-52">
                 <div class="pop-head">{{ $t('shell.language') }}</div>
                 <button v-for="l in i18n.availableLocales" :key="l" type="button" class="pop-item justify-between whitespace-nowrap"
                         :aria-selected="i18n.locale === l" @click="pickLocale(l)">
                   <span class="flex items-center gap-2.5"><LocaleFlag :locale="l" :size="22" /><span>{{ LOCALE_LABELS[l] ?? l }}</span></span>
                   <Check v-if="i18n.locale === l" :size="14" class="text-primary" />
                 </button>
               </div>
             </template>
           </component>
        </div>

        <div class="h-6 w-px bg-border-soft mx-1 hidden md:block"></div>
        
        <component :is="$c('ui.dropdown')" :modelValue="showUserMenu" @update:modelValue="showUserMenu = $event" align="right">
          <template #trigger>
            <button type="button" class="h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hover:bg-muted cursor-pointer transition-colors outline-none" data-testid="user-menu">
              <span class="hidden lg:block text-sm font-semibold text-foreground whitespace-nowrap">{{ me?.username || 'User' }}</span>
              <UserAvatar :src="me?.avatar" :name="me?.username || 'User'" :size="28" rounded="lg" />
              <ChevronDown :size="13" class="text-faint" />
            </button>
          </template>

          <template #content>
            <div class="w-60">
              <div class="flex items-center gap-3 px-2 py-2.5 mb-1 border-b border-border-soft">
                 <UserAvatar :src="me?.avatar" :name="me?.username || 'User'" :size="36" rounded="lg" />
                 <div class="min-w-0">
                   <div class="text-sm font-semibold text-foreground truncate">{{ me?.username }}</div>
                   <div class="text-xs text-faint truncate">{{ me?.email || me?.role }}</div>
                 </div>
              </div>
              <button type="button" class="pop-item" data-testid="menu-profile" @click="router.push('/account/profile'); showUserMenu = false">
                 <User :size="15" class="text-muted-foreground" /><span>{{ $t('shell.profile') }}</span>
              </button>
              <button type="button" class="pop-item" @click="router.push('/system/theme'); showUserMenu = false">
                 <Palette :size="15" class="text-muted-foreground" /><span>{{ $t('system.themeStudio', { default: 'Theme Studio' }) }}</span>
              </button>
              <div class="pop-sep"></div>
              <button type="button" class="pop-item danger" @click="handleLogout">
                 <LogOut :size="15" /><span>{{ $t('shell.logout') }}</span>
              </button>
            </div>
          </template>
        </component>
      </div>
    </div>


    <!-- 🧭 App band: which app you are in (switcher) + its pages (tabs).
         Recessed surface so it reads as nested inside the Shell row above, not as a sibling of it. -->
    <div class="app-band">
      <div class="page-container flex items-stretch gap-3">
        <div class="flex items-stretch shrink-0">
          <component :is="$c('ui.dropdown')" class="app-switch" :modelValue="showAppsMenu" @update:modelValue="setAppsMenu($event)" search :search-placeholder="$t('shell.searchApps')">
          <template #trigger>
            <!-- 📱 Apps Switcher Button -->
            <button type="button" class="app-chip flex items-center gap-2 transition-colors outline-none group/app"
                    :title="$t('shell.apps')" :aria-label="$t('shell.apps')" data-testid="apps-switch">
              <span class="w-7 h-7 rounded-md grid place-items-center shrink-0 transition-colors"
                    :class="currentApp.id === 'default' ? 'bg-muted text-muted-foreground' : 'bg-primary-soft text-primary'">
                <component :is="currentApp.icon" :size="16" />
              </span>
              <span class="text-sm font-semibold text-foreground whitespace-nowrap" data-testid="current-app">{{ currentApp.label }}</span>
              <span v-if="appVersion" class="app-version" data-testid="current-app-version" :title="appVersion">{{ appVersion }}</span>
              <ChevronDown :size="14" class="text-faint group-hover/app:text-foreground transition-colors" />
            </button>
          </template>

          <template #content="{ query }">
            <div class="w-[720px] max-w-[calc(100vw-32px)]">
              <div v-if="!appSections(query).length" class="px-3 py-6 text-sm text-faint text-center">{{ $t('common.empty') }}</div>
              <section v-for="sec in appSections(query)" :key="sec.key" class="pt-1 last:pb-3" :data-testid="`apps-section-${sec.key}`">
              <div v-if="sec.label" class="pop-head flex items-center gap-1.5">{{ sec.label }}<span class="text-faint font-normal">{{ sec.tiles.length }}</span></div>
              <div class="px-2 pb-1 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="tile in sec.tiles" :key="tile.key" role="button" tabindex="0" @click="tile.run()" @keydown.enter="tile.run()"
                     class="group relative flex items-center gap-3 rounded-lg px-2.5 py-2 text-left hover:bg-muted transition-colors min-w-0 cursor-pointer"
                     :aria-current="tile.id === currentApp.id ? 'true' : undefined">
                  <span class="w-8 h-8 rounded-lg grid place-items-center shrink-0 transition-colors group-hover:bg-primary-soft group-hover:text-primary"
                        :class="tile.id === currentApp.id ? 'bg-primary-soft text-primary' : 'bg-muted text-muted-foreground'">
                    <component :is="tile.icon" :size="16" stroke-width="1.75" />
                  </span>
                  <span class="min-w-0 flex-1">
                    <span class="block text-sm font-semibold truncate group-hover:text-primary transition-colors">{{ tile.label }}</span>
                    <span class="block text-xs text-muted-foreground truncate">{{ tile.detail }}</span>
                  </span>
                  <button type="button" class="icon-btn shrink-0 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 aria-pressed:opacity-100" style="width:28px;height:28px"
                          :aria-pressed="isFavorite(tile.key)" :aria-label="$t('shell.toggleFavorite')" data-testid="tile-star" @click.stop="toggleFavorite(tile.key)">
                    <Star :size="14" :class="isFavorite(tile.key) ? 'fill-warning text-warning' : 'text-faint'" />
                  </button>
                </div>
              </div>
              </section>
            </div>
          </template>
          </component>
        </div>

        <div v-if="showAppNav" class="app-band__sep self-center h-5 w-px shrink-0"></div>

        <nav v-if="showAppNav" class="tabs tabs--band min-w-0 overflow-x-auto no-scrollbar" role="tablist" data-testid="app-nav">
          <template v-for="section in bandSections" :key="section.group ?? section.item.path">
            <button v-if="section.group === null" type="button" class="tab inline-flex items-center gap-1.5 whitespace-nowrap" role="tab"
                    :aria-selected="shellNav.active === section.item.path" @mousedown.prevent @click="shellNav.navigate?.(section.item.path)">
              <component :is="section.item.icon" v-if="section.item.icon" :size="13" />
              {{ section.item.label }}
              <span v-if="section.item.badge !== undefined" class="badge">{{ section.item.badge }}</span>
            </button>
            <!-- A group: one tab, its pages in a popover (teleported, so the scrolling band never clips it).
                 The label adds the active page, so the band still says where you are. -->
            <component :is="$c('ui.popover')" v-else v-slot="{ close }" class="band-group" align="start">
              <component :is="$c('ui.popover-trigger')" class="band-group__trigger">
                <button type="button" class="tab inline-flex items-center gap-1.5 whitespace-nowrap" role="tab"
                        :aria-selected="!!groupActive(section.items)" aria-haspopup="menu" @mousedown.prevent
                        :data-testid="`app-nav-group-${section.group}`">
                  <component :is="section.icon" v-if="section.icon" :size="13" />
                  {{ section.group }}
                  <span v-if="groupActive(section.items)" class="band-group__current">· {{ groupActive(section.items).label }}</span>
                  <ChevronDown :size="12" />
                </button>
              </component>
              <component :is="$c('ui.popover-content')" align="start" class="p-1">
                <div class="min-w-56 flex flex-col" role="menu">
                  <button v-for="item in section.items" :key="item.path" type="button" class="pop-item whitespace-nowrap" role="menuitem"
                          :aria-selected="shellNav.active === item.path" :disabled="item.disabled" :aria-disabled="item.disabled || undefined"
                          @click="close(); shellNav.navigate?.(item.path)">
                    <component :is="item.icon" v-if="item.icon" :size="15" class="text-muted-foreground" />
                    <span class="flex-1">{{ item.label }}</span>
                    <Check v-if="shellNav.active === item.path" :size="14" class="text-primary" />
                  </button>
                </div>
              </component>
            </component>
          </template>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* The mounted app's version, a quiet pill on the same line as its name. Tinted from the chip's own
   text colour, so it reads on the light plate and on the dark band alike; long versions truncate. */
.app-version {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 500;
  line-height: 1;
  padding: calc(var(--sp-1) * .75) var(--sp-2);
  border-radius: var(--radius-sm);
  background: color-mix(in srgb, currentColor 12%, transparent);
  color: inherit;
  opacity: .75;
  max-width: 16ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ── Menu band ────────────────────────────────────────────────────────────────
   The band is built from the BRAND scale, never from `--gray-*`: `themeConfig`
   regenerates `--brand-50…950` from whatever colour the user picks in Theme
   Studio, so a neutral here would be the one bar on screen ignoring their brand.

   Two variables define the whole band; everything below derives from them, so
   switching presets is a two-line edit and nothing else has to be touched.
   `brandScale()` pins each rung's lightness, so a rung is a contrast level that
   holds for every hue:

        --brand-900  L 23%  ink        --brand-300  L 72%
        --brand-800  L 27%             --brand-200  L 84%
        --brand-700  L 32%             --brand-100  L 92%
        --brand-600  L 39%             --brand-50   L 96%

   The band and the table header are the same thing — a structural surface — so
   both read `--secondary` and neither owns a colour of its own. Tune the surface
   in `hoff/tokens.css`, once, and they stay in step. */
.app-band {
  --app-band:        var(--secondary);
  --app-band-fg:     var(--secondary-foreground);

  background: var(--app-band);
  border: 0;
  /* Light-on-dark is over-thickened by subpixel rendering — text looks fat and
     slightly blurred, which is what reads as "wrong font". Grayscale smoothing
     restores the weight the typeface was drawn at. */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* A full header-height band: the menu is the app's main navigation and needs room to breathe. */
.app-band .page-container { min-height: var(--header-h); }

.app-band__sep { background: color-mix(in srgb, var(--app-band-fg) 26%, transparent); }

/* Switcher owns the band — it names the app the tabs belong to, so it stays the
   heavier item. Its icon chip is glass rather than `--primary-soft`: a near-white
   plate reads as a hole punched in a coloured bar. */
/* The switcher always carries its own plate, so it reads as a control at rest
   instead of only revealing itself on hover. It fills the band's full height — no margin, no
   radius — so it reads as the band's leading segment rather than a button floating in it. */
.app-switch { align-self: stretch; }
.app-switch > div:first-child { height: 100%; }
.app-chip {
  height: 100%;
  padding: 0 var(--sp-3) 0 var(--sp-2);
  border: 0;
  border-inline: 1px solid color-mix(in srgb, var(--app-band-fg) 16%, transparent);
  border-radius: 0;
  background: color-mix(in srgb, var(--app-band-fg) 12%, transparent);
}
.app-chip span { color: var(--app-band-fg); }
.app-chip span:first-child {
  background: color-mix(in srgb, var(--app-band-fg) 20%, transparent);
  color: var(--app-band-fg);
}
.app-chip > svg { color: color-mix(in srgb, var(--app-band-fg) 70%, var(--app-band)); }
.app-chip:hover {
  background: color-mix(in srgb, var(--app-band-fg) 22%, transparent);
  border-color: color-mix(in srgb, var(--app-band-fg) 30%, transparent);
}
.app-chip:hover > svg { color: var(--app-band-fg); }

/* The band has no bottom border — .tabs must not draw one either. */
.tabs--band {
  border-bottom: 0;
  /* Tabs are pills centred on the band's middle line — not stretched boxes with an underline,
     whose border/rail always pulled the label off-centre. */
  align-items: center;
  gap: var(--sp-1);
  scrollbar-width: none;   /* `no-scrollbar` is not a defined utility in this theme */
}
.tabs--band::-webkit-scrollbar { display: none; }

/* One weight for every tab. Switching weight on select re-measures the text and
   shifts the whole strip sideways; colour and the rail carry the state instead.
   The resting colour is mixed toward the surface rather than made translucent, so
   it stays a solid, predictable colour at any density or backdrop. */
.tabs--band .tab {
  /* A fixed-height pill: the label is centred inside it by flexbox, the pill is centred on the band. */
  height: calc(var(--touch) * 0.8);
  padding-top: 0;
  padding-bottom: 0;
  /* Wider than the in-card `.tab`: uppercase labels side by side need air between them. */
  padding-left: var(--sp-4);
  padding-right: var(--sp-4);
  margin-bottom: 0;
  border-radius: var(--radius);
  /* Uppercase sets optically larger than lowercase at the same size, so --text-xs
     here reads about like --text-sm did before; weight goes up to 700 to keep the
     stroke from thinning out at the smaller size. */
  /* A step below the app switcher (--text-sm): the switcher names the app, the tabs are its pages. */
  font-size: calc(var(--text-xs) * 0.92);
  font-weight: 700;
  /* Uppercase also throws away the word-shape cue, so it needs real tracking to
     stay legible — `--tracking-wide` is the token this theme already uses for
     uppercase labels (table headers, section titles). */
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  /* 92%, not 100%: the active tab still has to win, and it does so on pure
     `--app-band-fg` plus the rail. Below ~88% the band's own hue starts tinting
     the letters and they read as dulled rather than as a quieter state. */
  color: color-mix(in srgb, var(--app-band-fg) 92%, var(--app-band));
  border: 0;
  transition: background-color var(--dur) var(--ease), color var(--dur) var(--ease);
}
/* Optical centring of an uppercase label: caps have no descenders, yet the line box keeps room for
   them below, so geometrically-centred caps look high. The pill has a fixed height and centres its
   content, so a top padding moves the label down by half of it — 0.3em ≈ the missing descender share.
   In `em`, so it follows the font size set in Theme Studio. */
.tabs--band .tab { padding-top: 0.3em; }
.tabs--band .tab:hover {
  color: var(--app-band-fg);
  background: color-mix(in srgb, var(--app-band-fg) 12%, transparent);
}
/* Focus lands on the same plate as hover, with a ring in the band's own ink so it
   never borrows a colour from a surface it isn't sitting on. */
.tabs--band .tab:focus-visible {
  outline: 2px solid var(--app-band-fg);
  outline-offset: -3px;
  background: color-mix(in srgb, var(--app-band-fg) 12%, transparent);
}
/* A group tab sits inside the popover's two wrappers (inline-block by default). Make them flex boxes
   centred like the band, so the group pill lines up exactly with the plain pills next to it. */
.band-group, .band-group__trigger { display: flex; align-items: center; }
/* Tabs never take focus from a mouse click (`@mousedown.prevent`), so no box is left behind after
   navigating; keyboard focus still gets the ring below. */

/* A listed-but-unavailable page (e.g. not migrated yet): visible, not clickable. */
.pop-item[aria-disabled="true"] { opacity: .45; cursor: not-allowed; pointer-events: none; }

/* The active page's name after a group label reads quieter than the group itself. */
.band-group__current { font-weight: 600; text-transform: none; letter-spacing: normal; opacity: .85; }

.tabs--band .tab[aria-selected="true"] {
  color: var(--app-band-fg);
  /* The selected page is a light plate of the band's own ink — one step above hover. */
  background: color-mix(in srgb, var(--app-band-fg) 20%, transparent);
}
</style>
