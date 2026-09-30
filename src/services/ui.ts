import { useUiStore } from '../store/ui';
import { MessageService, ToastOptions, ToastType, MessageOptions, DialogService, DialogOptions } from '@nhphero/vue-sapp/contracts';

/** One feedback service: toasts for "it happened", modals for "answer this". */
export function createMessageService(uiStore: ReturnType<typeof useUiStore>): MessageService {
  const notify = (type: ToastType) => (title: string, description?: string, options: Partial<ToastOptions> = {}) =>
    uiStore.showToast({ id: options.id || title, message: description ? `${title}: ${description}` : title, type, ...options });

  return {
    success: notify('success'),
    error: notify('error'),
    info: notify('info'),
    warning: notify('warning'),
    toast: (options: ToastOptions) => uiStore.showToast(options),

    alert: (options: MessageOptions) => uiStore.showMessage(options),
    confirm: (options: MessageOptions) => {
      return new Promise((resolve) => {
        uiStore.showMessage({
          ...options,
          type: 'confirm',
          onConfirm: () => {
            if (options.onConfirm) options.onConfirm();
            resolve(true);
          },
          onCancel: () => {
            if (options.onCancel) options.onCancel();
            resolve(false);
          }
        });
      });
    },
    prompt: (options: MessageOptions) => {
      return new Promise((resolve) => {
        uiStore.showMessage({
          ...options,
          type: 'prompt',
          onConfirm: (value) => {
            if (options.onConfirm) options.onConfirm(value);
            resolve(value);
          },
          onCancel: () => {
            if (options.onCancel) options.onCancel();
            resolve(null);
          }
        });
      });
    },
  };
}

export function createDialogService(uiStore: ReturnType<typeof useUiStore>): DialogService {
  return {
    open: (options: DialogOptions) => uiStore.openDialog(options),
    close: (id: string) => uiStore.closeDialog(id),
    closeAll: () => uiStore.closeAllDialogs(),
  };
}
