<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../utils'

/**
 * ui.skeleton — loading placeholder on the hoff `.skeleton` shimmer.
 *   <Skeleton />                          one text line
 *   <Skeleton :lines="3" />               paragraph (last line shorter)
 *   <Skeleton variant="circle" :size="40" />
 *   <Skeleton variant="rect" height="160px" />
 *   <Skeleton variant="table" :rows="6" :cols="5" />   table-shaped block (use inside .table-wrap or alone)
 *   <Skeleton variant="card" />           title + 3 lines + button row
 * Honors prefers-reduced-motion (shimmer off). `aria-busy` is set so screen readers skip it.
 */
const props = withDefaults(defineProps<{
  variant?: 'text' | 'circle' | 'rect' | 'table' | 'card'
  /** text: number of lines */
  lines?: number
  /** circle: diameter in px */
  size?: number
  width?: string
  height?: string
  /** table: rows × cols */
  rows?: number
  cols?: number
  class?: string
}>(), { variant: 'text', lines: 1, size: 36, rows: 5, cols: 4 })

const lineWidths = computed(() => Array.from({ length: props.lines }, (_, i) => (props.lines > 1 && i === props.lines - 1 ? '60%' : '100%')))
// deterministic column widths so the table skeleton does not jitter between renders
const colWidths = computed(() => Array.from({ length: props.cols }, (_, i) => ['45%', '80%', '60%', '35%', '50%', '70%'][i % 6]))
</script>

<template>
  <!-- text -->
  <div v-if="variant === 'text'" :class="cn('flex flex-col gap-2', props.class)" :style="{ width }" aria-busy="true" aria-hidden="true">
    <span v-for="(w, i) in lineWidths" :key="i" class="skeleton block" :style="{ width: w, height: height || '0.9em' }" />
  </div>

  <!-- circle (avatar) -->
  <span v-else-if="variant === 'circle'" :class="cn('skeleton inline-block rounded-full shrink-0', props.class)"
        :style="{ width: `${size}px`, height: `${size}px` }" aria-busy="true" aria-hidden="true" />

  <!-- rect (image, chart, button) -->
  <span v-else-if="variant === 'rect'" :class="cn('skeleton block', props.class)"
        :style="{ width: width || '100%', height: height || '120px' }" aria-busy="true" aria-hidden="true" />

  <!-- table -->
  <div v-else-if="variant === 'table'" :class="cn('table-wrap', props.class)" aria-busy="true" aria-hidden="true">
    <table>
      <thead>
        <tr><th v-for="c in cols" :key="c"><span class="skeleton block h-3" :style="{ width: colWidths[c - 1] }" /></th></tr>
      </thead>
      <tbody>
        <tr v-for="r in rows" :key="r">
          <td v-for="c in cols" :key="c"><span class="skeleton block h-3.5" :style="{ width: colWidths[(c + r) % cols] }" /></td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- card -->
  <div v-else :class="cn('card flex flex-col gap-3', props.class)" aria-busy="true" aria-hidden="true">
    <span class="skeleton block h-4 w-1/3" />
    <span class="skeleton block h-3 w-full" />
    <span class="skeleton block h-3 w-full" />
    <span class="skeleton block h-3 w-2/3" />
    <div class="flex gap-2 mt-2"><span class="skeleton block h-8 w-24" /><span class="skeleton block h-8 w-20" /></div>
  </div>
</template>
