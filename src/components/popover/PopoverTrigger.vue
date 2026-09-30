<script setup lang="ts">
import { inject } from 'vue';

const { toggle } = inject<any>('popover');
</script>

<template>
  <div @click.stop="toggle" class="cursor-pointer">
    <slot />
  </div>
</template>
