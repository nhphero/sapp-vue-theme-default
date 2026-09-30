import { useUiStore } from '../store/ui';
import { MessageService, DialogService } from '@nhphero/vue-sapp/contracts';
/** One feedback service: toasts for "it happened", modals for "answer this". */
export declare function createMessageService(uiStore: ReturnType<typeof useUiStore>): MessageService;
export declare function createDialogService(uiStore: ReturnType<typeof useUiStore>): DialogService;
//# sourceMappingURL=ui.d.ts.map