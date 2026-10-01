<script setup lang="ts">
import { computed } from 'vue';
import { appIcon } from '../../services/appIcons';

/** ui.app-icon — an app's icon by name (`APP_ICONS`): `<component :is="$c('ui.app-icon')" name="Database" />`. */
const props = withDefaults(defineProps<{ name?: string | null; size?: number | string; strokeWidth?: number | string }>(), {
  size: 16,
  strokeWidth: 1.75,
});
const icon = computed(() => appIcon(props.name));
</script>

<template>
  <component :is="icon" :size="size" :stroke-width="strokeWidth" aria-hidden="true" />
</template>
