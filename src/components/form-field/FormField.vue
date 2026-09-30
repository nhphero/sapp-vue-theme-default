<script setup lang="ts">
/**
 * One labelled form row: label · control · error or hint.
 *
 * It lives here because the CSS it renders against is the theme's — `.field`, `.field label`,
 * `.field .hint`, `.field .error`, `.field.invalid` are all in `hoff/core.css`. A component
 * that hand-writes that markup inside an app is half of a contract whose other half is here,
 * and the two drift: the app writes `class="help"`, the theme styles `.hint`, and the help
 * text silently loses its styling.
 *
 * The control itself stays in the caller's slot, so this never guesses what kind of input it
 * wraps — an `<input>`, a `form.select`, a row of buttons.
 */
withDefaults(defineProps<{
  label: string;
  /** Validation message; its presence is what marks the field invalid. */
  error?: string;
  /** Shown only while there is no error — an error replaces it rather than stacking. */
  hint?: string;
  /** Span both columns of a two-column form grid. */
  wide?: boolean;
}>(), {
  error: '',
  hint: '',
  wide: false,
});
</script>

<template>
  <div class="field" :class="[{ invalid: !!error }, wide && 'sm:col-span-2']">
    <label>{{ label }}</label>
    <slot />
    <span v-if="error" class="error">{{ error }}</span>
    <span v-else-if="hint" class="hint">{{ hint }}</span>
  </div>
</template>
