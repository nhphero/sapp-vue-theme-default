<script setup lang="ts">
import { inject, computed } from 'vue';
import { useUiStore } from '../store/ui';

const $s = inject<any>('$s');
const uiStore = useUiStore();
const activeDialogs = computed(() => uiStore.activeDialogs);

const resolveComponent = (comp: any) => {
  if (typeof comp === 'function') {
    return $s.$vue.defineAsyncComponent(comp);
  }
  return comp;
};

const handleClose = (dialog: any) => {
  uiStore.closeDialog(dialog.id);
};

const handleSubmit = async (dialog: any, data: any) => {
  if (dialog.onSubmit) {
    await dialog.onSubmit(data);
  }
  uiStore.closeDialog(dialog.id);
};
</script>

<template>
  <!-- 🏗️ Dialog Host Layer (ESA Standard) -->
  <div v-if="activeDialogs.length > 0" class="dialog-host-sentinel">
    <template v-for="(dialog, index) in activeDialogs" :key="dialog.id">
      <component 
        :is="$c('ui.modal')"
        :show="true" 
        :title="dialog.title"
        :description="dialog.description"
        :maxWidth="dialog.maxWidth"
        :size="dialog.size || 'md'"
        :zIndex="10000 + index"
        @close="handleClose(dialog)"
      >
        <component 
          :is="resolveComponent(dialog.component)"
          v-bind="dialog.props || {}"
          @close="handleClose(dialog)"
          @submit="(data: any) => handleSubmit(dialog, data)"
        />
      </component>
    </template>
  </div>
</template>

<style scoped>
/* Ensure the host itself doesn't block interactions or visibility */
.dialog-host-sentinel {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
