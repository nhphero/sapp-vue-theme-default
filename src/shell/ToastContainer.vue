<script setup lang="ts">
import { inject, computed } from 'vue';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-vue-next';

/** Toasts — hoff `.alert` tones on a card surface, top-right, dismissible. */
const uiStore = inject<any>('ui-store');
const toasts = computed(() => uiStore?.toasts || []);

const ICONS = { success: CheckCircle2, error: AlertCircle, info: Info, warning: AlertTriangle };
const TONE = { success: 'success', error: 'danger', info: 'info', warning: 'warning' };

const remove = (id: number) => uiStore?.removeToast(id);
</script>

<template>
  <div class="fixed top-4 right-4 z-[99999] flex flex-col gap-2 w-full max-w-[380px] pointer-events-none" aria-live="polite">
    <TransitionGroup name="toast">
      <div v-for="toast in toasts" :key="toast.id"
           class="alert pointer-events-auto shadow-lg items-center"
           :class="TONE[toast.type as keyof typeof TONE] || 'info'" role="status">
        <component :is="ICONS[toast.type as keyof typeof ICONS] || Info" :size="16" stroke-width="2" aria-hidden="true" />
        <span class="body text-sm font-medium truncate">{{ toast.message }}</span>
        <button type="button" class="icon-btn -my-2 -mr-2" style="width:28px;height:28px" aria-label="Đóng" @click="remove(toast.id)">
          <X :size="14" />
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-enter-active, .toast-leave-active { transition: all var(--dur) var(--ease); }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateX(12px); }
.toast-leave-active { position: absolute; width: 100%; }
</style>
