<script setup lang="ts">
import { computed, inject, markRaw, ref, watch, onBeforeUnmount } from 'vue'
import { ChevronDown, LayoutGrid } from 'lucide-vue-next'

/**
 * layout.mini-app — standard frame for a mini app.
 *
 *  variant="sidebar" (default)              variant="tabs"
 *  ┌──────────┬──────────────────────┐      ┌──────────────────────────────┐
 *  │ app icon │ Page title   actions │      │ App title            actions │
 *  │ app name │                      │      │ tab · tab · tab              │
 *  │ nav item │ content              │      │ content                      │
 *  │ nav item │                      │      │                              │
 *  └──────────┴──────────────────────┘      └──────────────────────────────┘
 *
 * Mini apps only pass data (title, nav items, active path) and listen to `navigate`;
 * every visual decision stays in the theme so all apps look alike.
 */
export interface MiniNavItem {
  label: string; path: string; icon?: any; badge?: string | number
  /** Section this item sits under (items sharing a label are grouped, in first-seen order): a collapsible sidebar
   *  section, or a dropdown tab in the Shell header band. Ignored by the in-app tabs variant. */
  group?: string
  /** Icon of the item's group (the first item of a group that sets it wins). */
  groupIcon?: any
  /** Listed but not navigable — a screen that is not available yet. */
  disabled?: boolean
}

const props = withDefaults(defineProps<{
  /** App name (sidebar head, or page title in the tabs variant). */
  title?: string
  subtitle?: string
  /** Lucide component, or an icon name resolved through the `ui.icon.<name>` registry. */
  icon?: any
  nav?: MiniNavItem[]
  /** Sub-path of the active nav item (compare with `router.pathOf(route)`). */
  active?: string
  /** Title of the current page (sidebar variant). Defaults to the active nav label. */
  pageTitle?: string
  pageSubtitle?: string
  /** `shell` (default): menu is shown in the Shell header under the app switcher; `sidebar` / `tabs` render it inside the app. */
  variant?: 'shell' | 'sidebar' | 'tabs'
  /** Content sits in `.page-container` (aligned with the Shell header); set false for full-bleed. */
  contained?: boolean
}>(), { nav: () => [], variant: 'shell', contained: true })

const emit = defineEmits<{ (e: 'navigate', path: string): void }>()

const $s = inject<any>('$superApp', null)
const iconComp = computed(() =>
  typeof props.icon === 'string' ? ($s?.getComponent?.(`ui.icon.${props.icon.toLowerCase()}`) || LayoutGrid) : props.icon || LayoutGrid,
)
const wrap = computed(() => (props.contained ? 'page-container' : 'w-full px-6'))
/**
 * The nav item for the current page, by hierarchy: an item is active on its own path AND on any
 * path below it (`sale-galleries/SG01` lights up `sale-galleries`). The longest matching path wins,
 * so a nested nav item beats its parent; the root item (`''`) only matches the root itself.
 */
const norm = (p?: string) => (p ?? '').split('/').filter(Boolean).join('/')
const activeNavPath = computed(() => {
  const current = norm(props.active)
  let best: string | null = null
  for (const item of props.nav) {
    const path = norm(item.path)
    const hit = path === current || (path !== '' && current.startsWith(`${path}/`))
    if (hit && (best === null || path.length > best.length)) best = path
  }
  return best
})
const isActive = (p: string) => activeNavPath.value !== null && norm(p) === activeNavPath.value
const go = (p: string) => { if (!props.nav.find(n => n.path === p)?.disabled) emit('navigate', p) }
const activeItem = computed(() => props.nav.find(n => isActive(n.path)))

/** Sidebar sections: ungrouped items stand alone, items sharing a `group` sit under one collapsible header. */
type NavSection = { group: null; item: MiniNavItem } | { group: string; items: MiniNavItem[] }
const sections = computed<NavSection[]>(() => {
  const out: NavSection[] = []
  for (const item of props.nav) {
    if (!item.group) { out.push({ group: null, item }); continue }
    const existing = out.find((s): s is { group: string; items: MiniNavItem[] } => s.group === item.group)
    if (existing) existing.items.push(item)
    else out.push({ group: item.group, items: [item] })
  }
  return out
})
/** Collapsed groups — a group holding the active page is always shown open. */
const collapsed = ref<Set<string>>(new Set())
const isOpen = (group: string, items: MiniNavItem[]) => !collapsed.value.has(group) || items.some(i => isActive(i.path))
const toggleGroup = (group: string) => {
  const next = new Set(collapsed.value)
  if (next.has(group)) next.delete(group)
  else next.add(group)
  collapsed.value = next
}
const heading = computed(() => (props.variant === 'tabs' ? props.title : props.pageTitle ?? activeItem.value?.label ?? props.title))
const subheading = computed(() => (props.variant === 'tabs' ? props.subtitle : props.pageSubtitle))
/**
 * In the `shell` variant the menu lives in the Shell header, so the active tab already names the
 * page — repeating it as an <h1> two rows below is noise and flattens the hierarchy. Show the
 * heading only when the page asks for a different one (`pageTitle`) or there is no tab for it.
 */
const showHeading = computed(() => {
  if (!heading.value || props.pageTitle === '') return false
  if (props.variant === 'shell' && props.pageTitle == null) return heading.value !== activeItem.value?.label
  return true
})

// variant "shell": publish the menu to the Shell header (kernel module state `shell.nav`), clear it on unmount
const shellNav = $s?.getModuleState?.('shell.nav', { moduleId: '', title: '', icon: null, items: [], active: '', navigate: null })
const publish = () => {
  if (!shellNav) return
  if (props.variant !== 'shell') { if (shellNav.items.length) Object.assign(shellNav, { title: '', icon: null, items: [], active: '', navigate: null }); return }
  shellNav.title = props.title ?? ''
  shellNav.icon = markRaw(iconComp.value)
  shellNav.items = props.nav.map(n => ({
    label: n.label, path: n.path, badge: n.badge, group: n.group, disabled: n.disabled,
    icon: n.icon ? markRaw(n.icon) : undefined, groupIcon: n.groupIcon ? markRaw(n.groupIcon) : undefined,
  }))
  // The header band compares by equality, so it gets the resolved nav path, not the raw page path.
  shellNav.active = activeNavPath.value ?? ''
  shellNav.navigate = go
}
watch(() => [props.nav, props.active, props.variant, props.title, props.icon], publish, { immediate: true, deep: true })
onBeforeUnmount(() => { if (shellNav && props.variant === 'shell') Object.assign(shellNav, { title: '', icon: null, items: [], active: '', navigate: null }) })
</script>

<template>
  <!-- root takes the Shell's fall-through classes (AppContainer passes `flex flex-col`); the row lives inside.
       Sidebar + content share `.page-container`, so the sidebar starts under the Shell logo and content ends under the user menu. -->
  <div class="mini-layout flex flex-col h-full min-h-0 bg-background" :data-variant="variant">
    <div :class="wrap" class="flex flex-1 min-h-0 gap-8">
      <!-- sidebar: app identity + navigation -->
      <aside v-if="variant === 'sidebar'" class="w-[220px] shrink-0 py-6 pr-6 border-r border-border-soft flex flex-col min-h-0 overflow-auto">
        <div class="flex items-center gap-3 px-2 mb-4">
          <span class="w-9 h-9 rounded-lg bg-primary-soft text-primary grid place-items-center shrink-0">
            <component :is="iconComp" :size="18" />
          </span>
          <div class="min-w-0">
            <div class="text-sm font-semibold leading-tight truncate">{{ title }}</div>
            <div v-if="subtitle" class="text-xs text-faint truncate">{{ subtitle }}</div>
          </div>
        </div>
        <nav class="flex flex-col gap-0.5">
          <template v-for="section in sections" :key="section.group ?? section.item.path">
            <button v-if="section.group === null" type="button" class="nav-item w-full text-left"
                    :aria-current="isActive(section.item.path) ? 'page' : undefined" @click="go(section.item.path)">
              <component :is="section.item.icon" v-if="section.item.icon" :size="16" />
              <span class="truncate">{{ section.item.label }}</span>
              <span v-if="section.item.badge !== undefined" class="badge ml-auto">{{ section.item.badge }}</span>
            </button>
            <div v-else class="mini-nav-group">
              <button type="button" class="mini-nav-group__head" :aria-expanded="isOpen(section.group, section.items)"
                      @click="toggleGroup(section.group)">
                <span class="truncate">{{ section.group }}</span>
                <ChevronDown :size="14" class="mini-nav-group__chevron" />
              </button>
              <div v-show="isOpen(section.group, section.items)" class="flex flex-col gap-0.5">
                <button v-for="item in section.items" :key="item.path" type="button" class="nav-item w-full text-left"
                        :aria-current="isActive(item.path) ? 'page' : undefined" @click="go(item.path)">
                  <component :is="item.icon" v-if="item.icon" :size="16" />
                  <span class="truncate">{{ item.label }}</span>
                  <span v-if="item.badge !== undefined" class="badge ml-auto">{{ item.badge }}</span>
                </button>
              </div>
            </div>
          </template>
        </nav>
        <div v-if="$slots.footer" class="mt-auto pt-4"><slot name="footer" /></div>
      </aside>

      <!-- content column -->
      <main class="flex-1 min-w-0 min-h-0 overflow-auto py-6 flex flex-col">
        <div v-if="showHeading || $slots.actions" class="flex items-start justify-between gap-4 mb-5">
          <div class="min-w-0">
            <h1 v-if="showHeading" class="text-xl font-semibold leading-tight truncate">{{ heading }}</h1>
            <p v-if="showHeading && subheading" class="text-sm text-muted-foreground mt-0.5">{{ subheading }}</p>
          </div>
          <div v-if="$slots.actions" class="flex items-center gap-2 shrink-0"><slot name="actions" /></div>
        </div>

        <nav v-if="variant === 'tabs' && nav.length" class="tabs mb-5" role="tablist">
          <button v-for="item in nav" :key="item.path" type="button" class="tab inline-flex items-center gap-1.5" role="tab"
                  :aria-selected="isActive(item.path)" @click="go(item.path)">
            <component :is="item.icon" v-if="item.icon" :size="14" />
            {{ item.label }}
            <span v-if="item.badge !== undefined" class="badge">{{ item.badge }}</span>
          </button>
        </nav>

        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* A sidebar section: an uppercase label that folds its items, like the Shell's own menu groups. */
.mini-nav-group { display: flex; flex-direction: column; gap: 2px; margin-top: var(--sp-3); }
.mini-nav-group__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-2);
  width: 100%;
  padding: var(--sp-1) var(--sp-2);
  border: 0;
  background: transparent;
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--faint);
  cursor: pointer;
}
.mini-nav-group__head:hover { color: var(--foreground); }
.mini-nav-group__chevron { flex: none; transition: transform var(--dur) var(--ease); }
.mini-nav-group__head[aria-expanded="false"] .mini-nav-group__chevron { transform: rotate(-90deg); }
</style>
