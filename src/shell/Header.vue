<script setup lang="ts">
import { appIcon } from '../services/appIcons'
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
/** Header presets on a dark surface (tokens.css `--header-on-dark`): the logo needs its dark variant or a light plate there too. */
const DARK_HEADERS = ['brand', 'gradient', 'dark']
const headerDark = computed(() => isDark.value || DARK_HEADERS.includes(themeConfig?.state?.header))
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
/** One list, one app per row, by priority: favourites first, then the most recently used
 *  (last use per app, sapp:app-last-used), then by name. */
const appSections = (q?: string) => {
  const s = (q || '').trim().toLowerCase()
  const hit = (a: any) => !s || `${a.label} ${a.detail || ''} ${a.id}`.toLowerCase().includes(s)
  const list = tiles.value.filter(hit)
  const ordered = [...list].sort((a: any, b: any) => {
    const fav = Number(isFavorite(b.key)) - Number(isFavorite(a.key))
    if (fav !== 0) return fav
    const used = (lastUsed.value[b.id] ?? 0) - (lastUsed.value[a.id] ?? 0)
    if (used !== 0) return used
    return String(a.label).localeCompare(String(b.label))
  })
  return ordered.length ? [{ key: 'apps', label: '', tiles: ordered }] : []
}

/**
 * When each app was last opened (`appId → epoch ms`), kept per browser in localStorage
 * (`sapp:app-last-used`) — it orders the switcher and shows "used …" on each row. Every access is
 * guarded (private mode, blocked storage: the times only last for the page). The older
 * `sapp:recent-apps` list (most recent first) is read once into it.
 */
const LAST_USED_KEY = 'sapp:app-last-used'
const OLD_RECENT_KEY = 'sapp:recent-apps'
const readLastUsed = (): Record<string, number> => {
  try {
    const value = JSON.parse(localStorage.getItem(LAST_USED_KEY) || 'null')
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return Object.fromEntries(Object.entries(value).filter(([, t]) => typeof t === 'number')) as Record<string, number>
    }
    const old = JSON.parse(localStorage.getItem(OLD_RECENT_KEY) || '[]')
    const now = Date.now()
    return Array.isArray(old) ? Object.fromEntries(old.filter((id: unknown) => typeof id === 'string').map((id: string, i: number) => [id, now - i * 1000])) : {}
  } catch {
    return {}
  }
}
const lastUsed = ref<Record<string, number>>(readLastUsed())
const rememberApp = (appId: string) => {
  lastUsed.value = { ...lastUsed.value, [appId]: Date.now() }
  try {
    localStorage.setItem(LAST_USED_KEY, JSON.stringify(lastUsed.value))
    localStorage.removeItem(OLD_RECENT_KEY)
  } catch {
    // storage unavailable — the order just lasts for this page
  }
}
/** "used 5 minutes ago" for a row; '' when never opened in this browser. */
const usedLabel = (appId: string): string => {
  const at = lastUsed.value[appId]
  if (!at) return ''
  return ($s as any).$f?.formatRelative?.(new Date(at).toISOString()) ?? new Date(at).toLocaleString()
}

const showAppsMenu = ref(false)
const setAppsMenu = (open: boolean) => { showAppsMenu.value = open }
const showUserMenu = ref(false)
const showWorkspaceMenu = ref(false)

const me = ref<any>(null)
const workspaces = ref<any[]>([])
const registeredAppsList = ref<any[]>([])

/** An app's icon by name — the shared set (services/appIcons.ts), the same `form.icon-picker` offers. */
const resolveIcon = (iconName?: string) => appIcon(iconName)

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
    .filter((a: any) => (a.code ?? a.id) !== 'admin' || canAdminister.value)
    .map((a: any) => ({
      id: a.id,
      label: a.name,
      // Routes follow the slug (changeable); the id stays the key.
      path: typeof $superApp.appPath === 'function' ? $superApp.appPath(a.id, (a.code ?? a.id) === 'admin' ? 'apps' : '') : `/app/${a.slug || a.id}`,
      icon: resolveIcon(a.icon),
      detail: a.description || 'Micro-Frontend App'
    }))
})

/**
 * Controls at the right end of the app band, published by the Shell theme through the kernel's module
 * state `shell.band` (`end`: components, rendered in order) — e.g. the navigation history toggle.
 */
const shellBand = $superApp.getModuleState('shell.band', { end: [] as any[] })
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

watch(() => currentApp.value.id, (appId) => {
  if (appId && appId !== 'default') rememberApp(appId)
}, { immediate: true })

/**
 * Version of the mounted app, from its manifest.json (kernel `loadAppManifest`): a package app's
 * deployed version — "stable" when the app follows its package's stable alias (the real version in
 * the tooltip); a remote app without one (a dev server) shows "dev".
 */
/** An app's version label + tooltip from its manifest (cached by the kernel); null when it has none. */
const describeVersion = async (appId: string): Promise<{ label: string; title: string } | null> => {
  if (!appId || appId === 'default' || typeof $superApp.loadAppManifest !== 'function') return null
  const manifest = await $superApp.loadAppManifest(appId)
  if (!manifest) return null
  const version = String(manifest.version ?? 'dev')
  const record = $superApp.getRegisteredApps?.().find((a: any) => a.id === appId)
  return record?.channel === 'stable' ? { label: 'stable', title: `stable · ${version}` } : { label: version, title: version }
}

const appVersion = ref('')
const appVersionTitle = ref('')
watch(() => [currentApp.value.id, (currentApp.value as any).version], async ([appId]) => {
  appVersion.value = ''
  appVersionTitle.value = ''
  const described = await describeVersion(appId)
  if (currentApp.value.id !== appId || !described) return
  appVersion.value = described.label
  appVersionTitle.value = described.title
}, { immediate: true })

/**
 * Versions shown after each app's name in the switcher — loaded when the menu first opens (one
 * manifest per app, cached by the kernel), again when an app's version changes.
 */
const tileVersions = ref<Record<string, { label: string; title: string }>>({})
const loadTileVersions = () => {
  for (const app of rawApps()) {
    const key = `${app.id}@${app.version ?? ''}`
    if (versionKeys.has(key)) continue
    versionKeys.add(key)
    describeVersion(app.id).then(described => {
      if (described) tileVersions.value = { ...tileVersions.value, [app.id]: described }
    })
  }
}
const versionKeys = new Set<string>()
const rawApps = (): any[] => (typeof $superApp?.getRegisteredApps === 'function' ? $superApp.getRegisteredApps() : [])
watch(showAppsMenu, open => { if (open) loadTileVersions() })

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
  // The route names the app by slug (or by id, for links older than a slug change); state keeps the id.
  const key = Array.isArray(param) ? param[0] : param
  const moduleId = key ? ($superApp.findAppByRoute?.(key)?.id ?? key) : key
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
  <!-- One block: the brand row and the app band share the header surface; the menu's active item is colour. -->
  <header class="shell-header w-full sticky top-0 z-[100] transition-colors duration-300">
    <div class="page-container shell-header__row flex items-center justify-between gap-4">
      
      <!-- 🗺️ Left Section: Branding & Navigation -->
      <div class="flex items-center gap-3 min-w-0">
        <div class="flex items-center gap-3 cursor-pointer group/logo" data-testid="brand" :title="branding?.name" @click="router.push(branding?.homePath || '/')">
          <!-- 🏷️ Brand logo from createSapp({ branding }); dark surfaces get the dark variant or a light plate -->
          <template v-if="branding?.logo">
            <img v-if="headerDark && branding.logoDark" :src="branding.logoDark" :alt="branding.name" class="h-7 w-auto max-w-[200px] object-contain" />
            <span v-else class="inline-flex items-center rounded-md" :class="headerDark && 'bg-white/95 px-2 py-1'">
              <img :src="branding.logo" :alt="branding.name" class="h-7 w-auto max-w-[200px] object-contain" />
            </span>
            <span v-if="branding.tagline" class="hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em] hdr-faint border-l hdr-line pl-3">{{ branding.tagline }}</span>
          </template>
          <template v-else>
          <div class="relative">
            <div class="w-9 h-9 bg-primary rounded-xl flex items-center justify-center relative z-10 transition-transform group-hover/logo:scale-110 shadow-xl border border-border-soft">
              <span class="text-primary-foreground font-black text-xs tracking-tighter">MP</span>
            </div>
          </div>
          <div class="flex flex-col text-left">
            <span class="text-[11px] font-black uppercase tracking-[0.4em] hdr-ink transition-colors leading-none mb-1">Antigravity</span>
            <span class="text-[9px] font-black uppercase tracking-[0.2em] hdr-faint">Core OS v5</span>
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
               <button type="button" class="h-9 px-2 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 hdr-btn transition-colors outline-none"
                       :title="$t('shell.language')" :aria-label="$t('shell.language')" data-testid="lang-switch">
                 <LocaleFlag :locale="i18n.locale" :size="20" />
                 <ChevronDown :size="13" class="hdr-faint" />
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

        <div class="h-6 w-px hdr-sep mx-1 hidden md:block"></div>
        
        <component :is="$c('ui.dropdown')" :modelValue="showUserMenu" @update:modelValue="showUserMenu = $event" align="right">
          <template #trigger>
            <button type="button" class="h-9 flex items-center gap-2 pl-2.5 pr-1.5 rounded-lg hdr-btn cursor-pointer transition-colors outline-none" data-testid="user-menu">
              <span class="hidden lg:block text-sm font-semibold hdr-ink whitespace-nowrap">{{ me?.username || 'User' }}</span>
              <UserAvatar :src="me?.avatar" :name="me?.username || 'User'" :size="28" rounded="lg" />
              <ChevronDown :size="13" class="hdr-faint" />
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
              <span v-if="appVersion" class="app-version" data-testid="current-app-version" :title="appVersionTitle">{{ appVersion }}</span>
              <ChevronDown :size="14" class="text-faint group-hover/app:text-foreground transition-colors" />
            </button>
          </template>

          <template #content="{ query }">
            <!-- One column, one app per row: favourites, then most recently used (sapp:app-last-used), then by name. -->
            <div class="apps-menu">
              <div class="apps-menu__all">
              <div v-if="!appSections(query).length" class="px-3 py-6 text-sm text-faint text-center">{{ $t('common.empty') }}</div>
              <section v-for="sec in appSections(query)" :key="sec.key" class="pt-1 last:pb-3" :data-testid="`apps-section-${sec.key}`">
              <div v-if="sec.label" class="pop-head flex items-center gap-1.5">{{ sec.label }}<span class="text-faint font-normal">{{ sec.tiles.length }}</span></div>
              <div class="apps-list">
                <div v-for="tile in sec.tiles" :key="tile.key" role="button" tabindex="0" class="apps-item group"
                     :aria-current="tile.id === currentApp.id ? 'true' : undefined" @click="tile.run()" @keydown.enter="tile.run()">
                  <span class="apps-item__icon"><component :is="tile.icon" :size="16" stroke-width="1.75" /></span>
                  <span class="apps-item__text">
                    <span class="apps-item__name">
                      <span class="truncate">{{ tile.label }}</span>
                      <span v-if="tileVersions[tile.id]" class="tile-version" :title="tileVersions[tile.id].title" data-testid="tile-version">{{ tileVersions[tile.id].label }}</span>
                    </span>
                    <span v-if="tile.detail" class="apps-item__detail">{{ tile.detail }}</span>
                  </span>
                  <span v-if="usedLabel(tile.id)" class="apps-item__used" :title="new Date(lastUsed[tile.id]).toLocaleString()" data-testid="tile-last-used">{{ usedLabel(tile.id) }}</span>
                  <button type="button" class="icon-btn apps-item__star"
                          :aria-pressed="isFavorite(tile.key)" :aria-label="$t('shell.toggleFavorite')" data-testid="tile-star" @click.stop="toggleFavorite(tile.key)">
                    <Star :size="14" :class="isFavorite(tile.key) ? 'fill-warning text-warning' : 'text-faint'" />
                  </button>
                </div>
              </div>
              </section>
              </div>
            </div>
          </template>
          </component>
        </div>

        <div v-if="showAppNav" class="app-band__sep shrink-0"></div>

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

        <div v-if="shellBand.end?.length" class="app-band__end" data-testid="app-band-end">
          <component :is="item" v-for="(item, i) in shellBand.end" :key="i" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* The menu: one column, one app per row — favourites, then most recently used. Widths in tokens (scale with Theme Studio). */
.apps-menu { width: calc(var(--sp-8) * 7.5); max-width: calc(100vw - var(--sp-6)); padding-top: var(--sp-1); }
.apps-menu__all { min-width: 0; }
.apps-list { display: flex; flex-direction: column; gap: 2px; padding: 0 var(--sp-2) var(--sp-1); }
.apps-item {
  position: relative; display: flex; align-items: center; gap: var(--sp-3); width: 100%; min-width: 0;
  padding: var(--sp-2); border: 0; border-radius: var(--radius); background: transparent;
  color: var(--foreground); text-align: left; cursor: pointer;
  transition: background-color var(--dur, .15s) ease, color var(--dur, .15s) ease;
}
.apps-item:hover, .apps-item:focus-visible { background: var(--muted); }
.apps-item__icon {
  flex: none; width: calc(var(--touch) * 0.73); height: calc(var(--touch) * 0.73); border-radius: var(--radius);
  display: grid; place-items: center; background: var(--muted); color: var(--muted-foreground);
  transition: background-color var(--dur, .15s) ease, color var(--dur, .15s) ease;
}
.apps-item:hover .apps-item__icon, .apps-item[aria-current="true"] .apps-item__icon { background: var(--primary-soft); color: var(--primary); }
.apps-item__text { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.apps-item__name { display: flex; align-items: center; gap: var(--sp-2); min-width: 0; font-size: var(--text-sm); font-weight: 600; }
.apps-item:hover .apps-item__name { color: var(--primary); }
.apps-item__detail { font-size: var(--text-xs); color: var(--muted-foreground); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.apps-item__used { flex: none; font-size: var(--text-xs); color: var(--faint); white-space: nowrap; }
.apps-item__star { flex: none; width: calc(var(--touch) * 0.64); height: calc(var(--touch) * 0.64); opacity: 0; }
.apps-item:hover .apps-item__star, .apps-item__star:focus-visible, .apps-item__star[aria-pressed="true"] { opacity: 1; }



/* The mounted app's version, a quiet pill on the same line as its name. Tinted from the chip's own
   text colour, so it reads on the light plate and on the dark band alike; long versions truncate. */
.tile-version {
  flex: none;
  max-width: 14ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 500;
  line-height: 1;
  padding: calc(var(--sp-1) * .5) var(--sp-1);
  border-radius: var(--radius-sm);
  background: var(--muted);
  color: var(--muted-foreground);
}
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
.app-band__end { margin-left: auto; display: flex; align-items: center; gap: var(--sp-1); padding-left: var(--sp-3); flex: none; }
/* Two thin rows on one surface: the brand row (logo, language, user) and the app band (switcher +
   the app's pages). Heights scale with the header token, so Theme Studio's size / density carry. */
.shell-header {
  --header-row-h:  calc(var(--header-h) * 0.85);
  --header-band-h: calc(var(--header-h) * 0.77);
  /* Surface and ink from the header preset (tokens.css `--header-*`, Theme Studio → Header). A Shell
     theme that paints one surface behind the header and a bar under it sets `--shell-header-bg: transparent`. */
  background: var(--shell-header-bg, var(--header-bg));
  color: var(--header-fg);
  /* No lines: one soft shadow below. A Shell theme that adds a bar under the header (navigation
     history) moves the shadow below that bar instead: `--shell-header-shadow: none`. */
  box-shadow: var(--shell-header-shadow, var(--header-shadow));
}
.shell-header__row { height: var(--header-row-h); }
/* Brand row: its own classes, not the semantic utilities — the dropdowns open inside the header and
   must keep the page's colours. */
.hdr-ink { color: var(--header-fg); }
.hdr-faint { color: var(--header-faint); }
.hdr-line { border-color: var(--header-border); }
.hdr-sep { background: var(--header-border); }
.hdr-btn { color: var(--header-muted-fg); }
.hdr-btn:hover { color: var(--header-fg); background: var(--header-hover-bg); }

.app-band {
  /* The band sits on the header's surface: controls on it (shell.band) read these. */
  --app-band:    var(--header-bg);
  --app-band-fg: var(--header-fg);
  background: transparent;
  border: 0;
}
.app-band .page-container { height: var(--header-band-h); }
/* Between the app's name and its pages. */
.app-band__sep { align-self: center; height: 45%; width: 1px; background: var(--header-border); }

/* The switcher names the app: plain text on the band (no plate), its icon in the brand's soft colour.
   It fills the band's height so the whole strip is clickable. */
.app-switch { align-self: stretch; }
.app-switch > div:first-child { height: 100%; }
.app-chip {
  height: 100%;
  padding: 0 var(--sp-2) 0 0;
  border: 0;
  border-radius: 0;
  background: transparent;
}
.app-chip span { color: var(--header-fg); }
.app-chip span:first-child { width: var(--sp-6); height: var(--sp-6); background: var(--header-active-bg); color: var(--header-active-fg); }
.app-chip .app-version { color: var(--header-muted-fg); background: var(--header-hover-bg); border-color: transparent; }
.app-chip > svg { color: var(--header-muted-fg); }
.app-chip:hover > svg { color: var(--header-fg); }

/* The app's pages: sentence-case labels, full band height; the page on screen is the accent colour
   with a 2px underline on the band's bottom edge (tokens.css `--header-accent`). */
.tabs--band {
  border-bottom: 0;
  align-self: stretch;
  align-items: stretch;
  gap: var(--sp-1);
  scrollbar-width: none;   /* `no-scrollbar` is not a defined utility in this theme */
}
.tabs--band::-webkit-scrollbar { display: none; }
.tabs--band .tab {
  height: 100%;
  padding: 0 var(--sp-3);
  margin-bottom: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  font-size: var(--text-sm);
  /* One weight for every state: a weight change re-measures the label and shifts the strip. */
  font-weight: 500;
  color: var(--header-muted-fg);
  transition: color var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
}
.tabs--band .tab:hover { color: var(--header-fg); }
.tabs--band .tab:focus { outline: none; }
.tabs--band .tab:focus-visible { outline: 2px solid var(--header-accent); outline-offset: -4px; border-radius: var(--radius); background: transparent; }
.tabs--band .tab[aria-selected="true"] { color: var(--header-accent); box-shadow: inset 0 -2px 0 var(--header-accent); }
/* A group tab sits inside the popover's two wrappers: stretch them so its underline lines up too. */
.band-group, .band-group__trigger { display: flex; align-items: stretch; }
/* Tabs never take focus from a mouse click (`@mousedown.prevent`), so no box is left behind after
   navigating; keyboard focus still gets the ring above. */

/* A listed-but-unavailable page (e.g. not migrated yet): visible, not clickable. */
.pop-item[aria-disabled="true"] { opacity: .45; cursor: not-allowed; pointer-events: none; }

/* The active page's name after a group label reads quieter than the group itself. */
.band-group__current { font-weight: 500; opacity: .8; }
</style>
