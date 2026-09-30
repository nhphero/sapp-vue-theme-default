<script setup lang="ts">
/**
 * 🗺️ DualSidebarLayout (ESA v5 - Shared Theme Component)
 * Flexible two-column sidebar layout for complex module navigation.
 * 
 * Slots:
 * - header: Top module navigation area
 * - rail: Slim icon sidebar (Column 1)
 * - sidebar: Detailed resource sidebar (Column 2)
 * - default: Main application content
 */
</script>

<template>
  <div class="dual-sidebar-layout w-full h-full flex-1 flex flex-col min-h-0 overflow-hidden bg-muted transition-colors duration-500">
    <!-- 🗺️ Header Slot -->
    <div v-if="$slots.header" class="shrink-0 z-20 border-b border-border/50 bg-card shadow-sm relative">
      <slot name="header"></slot>
    </div>

    <!-- 🏗️ Body Container -->
    <div class="flex-1 flex min-h-0 w-full h-full overflow-hidden relative">
      <!-- 🚀 COLUMN 1: RAIL (Icon Area) -->
      <aside v-if="$slots.rail" class="flex flex-col h-full shrink-0 z-10 transition-all duration-300 overflow-hidden bg-transparent">
        <slot name="rail"></slot>
      </aside>

      <!-- 📂 COLUMN 2: SIDEBAR (Resource Area) -->
      <aside v-if="$slots.sidebar" class="flex flex-col h-full shrink-0 transition-all duration-300 overflow-hidden bg-transparent">
        <slot name="sidebar"></slot>
      </aside>

      <!-- 🏢 MAIN CONTENT -->
      <main class="flex-1 min-h-0 w-full h-full overflow-hidden flex flex-col relative bg-transparent">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<style scoped>
.dual-sidebar-layout {
  height: 100%;
  flex: 1 1 0%;
  min-height: 0;
}

/* Hide scrollbar for layout elements but keep functionality */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.2);
  border-radius: 9999px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(148, 163, 184, 0.4);
}
</style>
