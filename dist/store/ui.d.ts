import { ToastOptions, ToastType, MessageOptions, DialogOptions } from '@nhphero/vue-sapp/contracts';
export declare const useUiStore: import("pinia").StoreDefinition<"ui", Pick<{
    toasts: import("vue").Ref<{
        id: string | number;
        message: string;
        type?: ToastType | undefined;
        duration?: number | undefined;
    }[], (ToastOptions & {
        id: string | number;
    })[] | {
        id: string | number;
        message: string;
        type?: ToastType | undefined;
        duration?: number | undefined;
    }[]>;
    showToast: (options: ToastOptions) => void;
    removeToast: (id: string | number) => void;
    activeMessage: import("vue").Ref<{
        title: string;
        description?: string | undefined;
        message?: string | undefined;
        type?: "info" | "success" | "warning" | "error" | "confirm" | "prompt" | undefined;
        confirmText?: string | undefined;
        cancelText?: string | undefined;
        placeholder?: string | undefined;
        defaultValue?: string | undefined;
        onConfirm?: ((value?: any) => void | Promise<void>) | undefined;
        onCancel?: (() => void) | undefined;
    } | null, MessageOptions | {
        title: string;
        description?: string | undefined;
        message?: string | undefined;
        type?: "info" | "success" | "warning" | "error" | "confirm" | "prompt" | undefined;
        confirmText?: string | undefined;
        cancelText?: string | undefined;
        placeholder?: string | undefined;
        defaultValue?: string | undefined;
        onConfirm?: ((value?: any) => void | Promise<void>) | undefined;
        onCancel?: (() => void) | undefined;
    } | null>;
    showMessage: (options: MessageOptions) => void;
    closeMessage: () => void;
    activeDialogs: import("vue").Ref<{
        id: string;
        component: any;
        props?: Record<string, any> | undefined;
        title?: string | undefined;
        description?: string | undefined;
        maxWidth?: string | undefined;
        size?: "sm" | "md" | "lg" | "xl" | "full" | undefined;
        onClose?: (() => void) | undefined;
        onSubmit?: ((data: any) => void | Promise<void>) | undefined;
    }[], (DialogOptions & {
        id: string;
    })[] | {
        id: string;
        component: any;
        props?: Record<string, any> | undefined;
        title?: string | undefined;
        description?: string | undefined;
        maxWidth?: string | undefined;
        size?: "sm" | "md" | "lg" | "xl" | "full" | undefined;
        onClose?: (() => void) | undefined;
        onSubmit?: ((data: any) => void | Promise<void>) | undefined;
    }[]>;
    openDialog: (options: DialogOptions) => string;
    closeDialog: (id: string) => void;
    closeAllDialogs: () => void;
}, "toasts" | "activeMessage" | "activeDialogs">, Pick<{
    toasts: import("vue").Ref<{
        id: string | number;
        message: string;
        type?: ToastType | undefined;
        duration?: number | undefined;
    }[], (ToastOptions & {
        id: string | number;
    })[] | {
        id: string | number;
        message: string;
        type?: ToastType | undefined;
        duration?: number | undefined;
    }[]>;
    showToast: (options: ToastOptions) => void;
    removeToast: (id: string | number) => void;
    activeMessage: import("vue").Ref<{
        title: string;
        description?: string | undefined;
        message?: string | undefined;
        type?: "info" | "success" | "warning" | "error" | "confirm" | "prompt" | undefined;
        confirmText?: string | undefined;
        cancelText?: string | undefined;
        placeholder?: string | undefined;
        defaultValue?: string | undefined;
        onConfirm?: ((value?: any) => void | Promise<void>) | undefined;
        onCancel?: (() => void) | undefined;
    } | null, MessageOptions | {
        title: string;
        description?: string | undefined;
        message?: string | undefined;
        type?: "info" | "success" | "warning" | "error" | "confirm" | "prompt" | undefined;
        confirmText?: string | undefined;
        cancelText?: string | undefined;
        placeholder?: string | undefined;
        defaultValue?: string | undefined;
        onConfirm?: ((value?: any) => void | Promise<void>) | undefined;
        onCancel?: (() => void) | undefined;
    } | null>;
    showMessage: (options: MessageOptions) => void;
    closeMessage: () => void;
    activeDialogs: import("vue").Ref<{
        id: string;
        component: any;
        props?: Record<string, any> | undefined;
        title?: string | undefined;
        description?: string | undefined;
        maxWidth?: string | undefined;
        size?: "sm" | "md" | "lg" | "xl" | "full" | undefined;
        onClose?: (() => void) | undefined;
        onSubmit?: ((data: any) => void | Promise<void>) | undefined;
    }[], (DialogOptions & {
        id: string;
    })[] | {
        id: string;
        component: any;
        props?: Record<string, any> | undefined;
        title?: string | undefined;
        description?: string | undefined;
        maxWidth?: string | undefined;
        size?: "sm" | "md" | "lg" | "xl" | "full" | undefined;
        onClose?: (() => void) | undefined;
        onSubmit?: ((data: any) => void | Promise<void>) | undefined;
    }[]>;
    openDialog: (options: DialogOptions) => string;
    closeDialog: (id: string) => void;
    closeAllDialogs: () => void;
}, never>, Pick<{
    toasts: import("vue").Ref<{
        id: string | number;
        message: string;
        type?: ToastType | undefined;
        duration?: number | undefined;
    }[], (ToastOptions & {
        id: string | number;
    })[] | {
        id: string | number;
        message: string;
        type?: ToastType | undefined;
        duration?: number | undefined;
    }[]>;
    showToast: (options: ToastOptions) => void;
    removeToast: (id: string | number) => void;
    activeMessage: import("vue").Ref<{
        title: string;
        description?: string | undefined;
        message?: string | undefined;
        type?: "info" | "success" | "warning" | "error" | "confirm" | "prompt" | undefined;
        confirmText?: string | undefined;
        cancelText?: string | undefined;
        placeholder?: string | undefined;
        defaultValue?: string | undefined;
        onConfirm?: ((value?: any) => void | Promise<void>) | undefined;
        onCancel?: (() => void) | undefined;
    } | null, MessageOptions | {
        title: string;
        description?: string | undefined;
        message?: string | undefined;
        type?: "info" | "success" | "warning" | "error" | "confirm" | "prompt" | undefined;
        confirmText?: string | undefined;
        cancelText?: string | undefined;
        placeholder?: string | undefined;
        defaultValue?: string | undefined;
        onConfirm?: ((value?: any) => void | Promise<void>) | undefined;
        onCancel?: (() => void) | undefined;
    } | null>;
    showMessage: (options: MessageOptions) => void;
    closeMessage: () => void;
    activeDialogs: import("vue").Ref<{
        id: string;
        component: any;
        props?: Record<string, any> | undefined;
        title?: string | undefined;
        description?: string | undefined;
        maxWidth?: string | undefined;
        size?: "sm" | "md" | "lg" | "xl" | "full" | undefined;
        onClose?: (() => void) | undefined;
        onSubmit?: ((data: any) => void | Promise<void>) | undefined;
    }[], (DialogOptions & {
        id: string;
    })[] | {
        id: string;
        component: any;
        props?: Record<string, any> | undefined;
        title?: string | undefined;
        description?: string | undefined;
        maxWidth?: string | undefined;
        size?: "sm" | "md" | "lg" | "xl" | "full" | undefined;
        onClose?: (() => void) | undefined;
        onSubmit?: ((data: any) => void | Promise<void>) | undefined;
    }[]>;
    openDialog: (options: DialogOptions) => string;
    closeDialog: (id: string) => void;
    closeAllDialogs: () => void;
}, "showToast" | "removeToast" | "showMessage" | "closeMessage" | "openDialog" | "closeDialog" | "closeAllDialogs">>;
//# sourceMappingURL=ui.d.ts.map