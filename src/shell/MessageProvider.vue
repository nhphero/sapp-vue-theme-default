<script setup lang="ts">
import { ref, watch, inject, computed } from 'vue';
import { Info, CheckCircle2, AlertTriangle, Zap, HelpCircle, MessageSquare } from 'lucide-vue-next';

const uiStore = inject<any>('ui-store');
const activeMessage = computed(() => uiStore?.activeMessage || null);
const promptValue = ref('');
 
watch(activeMessage, (val) => {
  if (val?.type === 'prompt') {
    promptValue.value = val.defaultValue || '';
  }
});

const icons = {
  info: { icon: Info, color: 'text-info', bg: 'bg-info-soft' },
  success: { icon: CheckCircle2, color: 'text-success', bg: 'bg-success-soft' },
  warning: { icon: AlertTriangle, color: 'text-warning', bg: 'bg-warning-soft' },
  error: { icon: Zap, color: 'text-danger', bg: 'bg-danger-soft' },
  confirm: { icon: HelpCircle, color: 'text-primary', bg: 'bg-primary-soft' },
  prompt: { icon: MessageSquare, color: 'text-primary', bg: 'bg-primary-soft' }
};

const close = () => {
  uiStore?.closeMessage();
};

const handleConfirm = async () => {
  if (activeMessage.value?.type === 'prompt' && !promptValue.value?.trim()) {
    return;
  }
  if (activeMessage.value?.onConfirm) {
    if (activeMessage.value.type === 'prompt') {
      await activeMessage.value.onConfirm(promptValue.value);
    } else {
      await activeMessage.value.onConfirm();
    }
  }
  close();
};

const handleCancel = () => {
  if (activeMessage.value?.onCancel) {
    activeMessage.value.onCancel();
  }
  close();
};

const config = computed(() => {
  if (!activeMessage.value) return null;
  return icons[activeMessage.value.type as keyof typeof icons] || icons.info;
});
</script>

<template>
  <component 
    :is="$c('ui.modal')"
    :key="activeMessage?.title || 'none'"
    :show="!!activeMessage" 
    @close="close"
    maxWidth="max-w-md"
    :zIndex="99999"
  >
    <template #header>
      <div v-if="activeMessage" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" :class="config?.bg">
          <component :is="config?.icon" :size="20" stroke-width="2" :class="config?.color" />
        </div>
        <h3 class="modal-title !m-0">{{ activeMessage.title }}</h3>
      </div>
    </template>

    <div v-if="activeMessage" class="py-2">
      <p class="text-sm text-muted-foreground leading-relaxed mb-2">
        {{ activeMessage.description }}
      </p>

      <!-- 📝 PROMPT INPUT FIELD -->
      <div v-if="activeMessage.type === 'prompt'" class="mt-4">
        <component
          v-if="activeMessage.inputType === 'textarea'"
          :is="$c('form.textarea')"
          v-model="promptValue"
          :placeholder="activeMessage.placeholder"
          rows="4"
          class="resize-none"
        />
        <component
          v-else
          :is="$c('form.input')"
          v-model="promptValue"
          :placeholder="activeMessage.placeholder"
          @keyup.enter="!promptValue?.trim() ? null : handleConfirm()"
        />
      </div>
    </div>

    <template #footer>
      <div class="flex items-center justify-end gap-2 w-full">
        <component 
          v-if="activeMessage?.type === 'confirm' || activeMessage?.type === 'prompt'"
          :is="$c('ui.button')"
          variant="default"
          @click="handleCancel"
        >
          {{ activeMessage.cancelText || $t('common.cancel') }}
        </component>
        <component 
          :is="$c('ui.button')"
          :variant="activeMessage?.type === 'error' ? 'danger' : 'primary'"
          @click="handleConfirm"
          :disabled="activeMessage?.type === 'prompt' && !promptValue?.trim()"
        >
          {{ activeMessage?.type === 'prompt' ? $t('common.submit') : (activeMessage?.confirmText || $t('common.understood')) }}
        </component>
      </div>
    </template>
  </component>
</template>
