import { defineStore } from 'pinia';
import { ref, watchEffect } from 'vue';
import { ToastOptions, ToastType, MessageOptions, DialogOptions } from '@nhphero/vue-sapp/contracts';

export const useUiStore = defineStore('ui', () => {
  // --- 🔔 TOASTS ---
  const toasts = ref<(ToastOptions & { id: string | number })[]>([]);
  let toastIdCounter = 0;
  const timers = new Map<string | number, any>();

  const showToast = (options: ToastOptions) => {
    const id = options.id || ++toastIdCounter;
    const toast = { ...options, id, type: options.type || 'info' };
    
    // 🛡️ Clear existing timer if replacing
    if (timers.has(id)) {
      clearTimeout(timers.get(id));
      timers.delete(id);
    }

    // Check if toast with same ID exists
    const existingIndex = toasts.value.findIndex(t => t.id === id);
    if (existingIndex !== -1) {
      toasts.value[existingIndex] = toast;
    } else {
      toasts.value.push(toast);
    }
    
    const timer = setTimeout(() => {
      removeToast(id);
    }, options.duration || 5000);

    timers.set(id, timer);
  };

  const removeToast = (id: string | number) => {
    toasts.value = toasts.value.filter(t => t.id !== id);
    if (timers.has(id)) {
      clearTimeout(timers.get(id));
      timers.delete(id);
    }
  };

  // --- 💬 MESSAGES ---
  const activeMessage = ref<MessageOptions | null>(null);
 
  const showMessage = (options: MessageOptions) => {
    console.log("💬 [uiStore] showMessage:", options.title);
    activeMessage.value = options;
  };

  const closeMessage = () => {
    console.log("💬 [uiStore] closeMessage");
    activeMessage.value = null;
  };

  // --- 🏗️ DIALOGS ---
  const activeDialogs = ref<(DialogOptions & { id: string })[]>([]);
  let dialogIdCounter = 0;

  const openDialog = (options: DialogOptions): string => {
    console.log("🏗️ [uiStore] openDialog:", options.title);
    const id = options.id || `dialog-${++dialogIdCounter}`;
    activeDialogs.value.push({ ...options, id });
    return id;
  };

  const closeDialog = (id: string) => {
    const dialog = activeDialogs.value.find(d => d.id === id);
    if (dialog?.onClose) dialog.onClose();
    activeDialogs.value = activeDialogs.value.filter(d => d.id !== id);
  };

  const closeAllDialogs = () => {
    activeDialogs.value.forEach(d => d.onClose?.());
    activeDialogs.value = [];
  };

  return {
    toasts,
    showToast,
    removeToast,
    activeMessage,
    showMessage,
    closeMessage,
    activeDialogs,
    openDialog,
    closeDialog,
    closeAllDialogs
  };
});
