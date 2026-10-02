<script setup lang="ts">
/**
 * 🗺️ ModulePageLayout (ESA v5 - Full Feature)
 * Supports Sidebar, Header, Content, and Footer Action Bar.
 */
const props = defineProps({
  sidebarWidth: { type: Number, default: 320 }
});
</script>

<template>
  <div class="module-page-layout w-full h-full flex-1 flex min-h-0 overflow-hidden bg-muted transition-colors duration-500">
    <!-- ⬅️ Sidebar Slot (Optional) -->
    <aside
      v-if="$slots.sidebar"
      class="shrink-0 bg-card flex flex-col h-full z-10 overflow-hidden transition-[width] duration-200 ease-out"
      :class="props.sidebarWidth > 0 ? 'border-r border-border-soft ' : 'border-r-0'"
      :style="{ width: `${Math.max(0, props.sidebarWidth)}px` }"
    >
      <slot name="sidebar"></slot>
    </aside>

    <!-- 🏗️ Main content -->
    <div class="flex-1 flex flex-col min-w-0 h-full relative overflow-hidden">
      <!-- 🗺️ Header Slot -->
      <header v-if="$slots.header" class="shrink-0 z-10 border-b border-border-soft bg-white/80  backdrop-blur-md">
        <slot name="header"></slot>
      </header>

      <!-- 📄 Default Content (Scrollable) -->
      <main class="flex-1 min-h-0 w-full h-full relative overflow-hidden flex flex-col">
        <slot></slot>
      </main>

      <!-- 🛠️ Footer Actions Slot (Administrative Bar) -->
      <footer v-if="$slots['footer-actions']" class="shrink-0 px-8 py-4 border-t border-border-soft bg-card  z-10">
        <slot name="footer-actions"></slot>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.module-page-layout {
  height: 100%;
  flex: 1 1 0%;
  min-height: 0;
}
</style>
