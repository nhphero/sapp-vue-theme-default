<script setup lang="ts">
import { computed } from 'vue';

/** Typography — token-based text styles (hoff scale: 12 / 13.5 / 15 / 18 / 21.5 / 26 / 31). */
interface Props {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'label' | 'mono' | 'code';
  color?: 'default' | 'muted' | 'faint' | 'primary' | 'success' | 'warning' | 'error' | 'danger' | 'white';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'black';
  as?: string;
  truncate?: boolean;
}

const props = withDefaults(defineProps<Props>(), { variant: 'body', color: 'default', as: 'span', truncate: false });

const VARIANT: Record<NonNullable<Props['variant']>, string> = {
  h1: 'text-3xl font-bold tracking-tight',
  h2: 'text-2xl font-bold tracking-tight',
  h3: 'text-lg font-semibold',
  h4: 'text-base font-semibold',
  body: 'text-sm',
  small: 'text-xs',
  label: 'text-xs font-semibold uppercase tracking-wide',
  mono: 'font-mono text-xs',
  code: 'font-mono text-xs bg-muted px-1.5 py-0.5 rounded-sm border border-border-soft',
};
const COLOR: Record<NonNullable<Props['color']>, string> = {
  default: 'text-foreground', muted: 'text-muted-foreground', faint: 'text-faint', primary: 'text-primary',
  success: 'text-success', warning: 'text-warning', error: 'text-danger', danger: 'text-danger', white: 'text-primary-foreground',
};
const WEIGHT: Record<NonNullable<Props['weight']>, string> = {
  normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold', black: 'font-bold',
};

const classes = computed(() => [
  VARIANT[props.variant], COLOR[props.color], props.weight ? WEIGHT[props.weight] : '', props.truncate ? 'truncate block' : '',
].filter(Boolean).join(' '));
</script>

<template>
  <component :is="as" :class="classes">
    <slot />
  </component>
</template>
