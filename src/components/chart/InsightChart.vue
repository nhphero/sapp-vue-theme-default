<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { Chart, type ChartConfiguration, type ChartType } from 'chart.js/auto';

/**
 * 📊 InsightChart (`display.chart`) — Chart.js wrapper that only speaks in theme tokens, so charts follow
 * brand colour, dark mode and font changes. Kinds: bar · stacked · line · area · donut · pie · scatter.
 *
 * Data: either `series` (one dataset of {label, value}) or `labels` + `datasets` (several).
 * `target` draws a dashed reference line on bar/line charts.
 */
export interface ChartSeriesPoint { label: string; value: number }
export interface ChartDataset { name: string; data: number[]; kind?: 'bar' | 'line'; color?: string; dashed?: boolean }

const props = withDefaults(defineProps<{
  kind?: 'bar' | 'stacked' | 'line' | 'area' | 'donut' | 'pie' | 'scatter';
  series?: ChartSeriesPoint[];
  labels?: string[];
  datasets?: ChartDataset[];
  target?: number;
  /** Height in px (the card keeps a stable size). */
  height?: number;
  legend?: boolean;
  /** Axis/tooltip number formatter. */
  format?: (v: number) => string;
  /** Colour cycle as CSS var names or colours. */
  palette?: string[];
}>(), { kind: 'bar', height: 160, legend: true });

const canvas = ref<HTMLCanvasElement | null>(null);
let chart: Chart | null = null;
let observer: MutationObserver | null = null;

const cssVar = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
const resolve = (c: string) => (c.startsWith('--') ? cssVar(c) : c);
const PALETTE = ['--primary', '--info', '--success', '--warning', '--danger', '--brand-300', '--faint'];
const fmt = (v: number) => (props.format ? props.format(v) : Math.abs(v) >= 1e6 ? `${(v / 1e6).toFixed(1)}M` : Math.abs(v) >= 1e3 ? `${(v / 1e3).toFixed(1)}K` : `${v}`);

const build = (): ChartConfiguration => {
  const palette = (props.palette ?? PALETTE).map(resolve);
  const text = cssVar('--muted-foreground'), grid = cssVar('--border-soft'), font = cssVar('--font-sans') || 'system-ui';
  const labels = props.labels ?? props.series?.map(s => s.label) ?? [];
  const isRadial = props.kind === 'donut' || props.kind === 'pie';
  const baseType: ChartType = isRadial ? (props.kind === 'donut' ? 'doughnut' : 'pie') : props.kind === 'scatter' ? 'scatter' : props.kind === 'line' || props.kind === 'area' ? 'line' : 'bar';

  const datasets: any[] = props.datasets
    ? props.datasets.map((d, i) => {
        const color = d.color ? resolve(d.color) : palette[i % palette.length];
        const kind = d.kind ?? (props.kind === 'line' || props.kind === 'area' ? 'line' : 'bar');
        return {
          type: baseType === 'bar' || baseType === 'line' ? kind : undefined,
          label: d.name, data: d.data,
          backgroundColor: kind === 'line' ? color : color, borderColor: color, borderWidth: kind === 'line' ? 2 : 0,
          borderRadius: 3, maxBarThickness: 36, tension: 0.3, pointRadius: kind === 'line' ? 3 : 0, pointBackgroundColor: cssVar('--card'), pointBorderWidth: 2,
          fill: props.kind === 'area' && kind === 'line' ? { target: 'origin', above: color + '22' } : false,
          borderDash: d.dashed ? [4, 4] : undefined,
          order: kind === 'line' ? 0 : 1,
        };
      })
    : [{
        label: '', data: (props.series ?? []).map(s => s.value),
        backgroundColor: isRadial ? (props.series ?? []).map((_, i) => palette[i % palette.length]) : props.kind === 'area' ? palette[0] + '33' : palette[0],
        borderColor: isRadial ? cssVar('--card') : palette[0], borderWidth: isRadial ? 2 : props.kind === 'line' || props.kind === 'area' ? 2 : 0,
        borderRadius: 3, maxBarThickness: 36, tension: 0.3, pointRadius: 3, pointBackgroundColor: cssVar('--card'), pointBorderWidth: 2, fill: props.kind === 'area' ? 'origin' : false,
      }];

  if (props.target !== undefined && !isRadial && props.kind !== 'scatter') {
    datasets.push({ type: 'line', label: 'Target', data: labels.map(() => props.target), borderColor: cssVar('--foreground'), borderDash: [6, 4], borderWidth: 1.5, pointRadius: 0, fill: false, order: -1 });
  }

  const stacked = props.kind === 'stacked';
  return {
    type: baseType,
    data: { labels, datasets },
    options: {
      responsive: true, maintainAspectRatio: false, animation: { duration: 250 },
      plugins: {
        legend: { display: props.legend && (isRadial || datasets.length > 1), position: isRadial ? 'right' : 'bottom', labels: { color: text, boxWidth: 10, boxHeight: 10, usePointStyle: true, pointStyle: 'rectRounded', font: { family: font, size: 11 }, filter: (item: any) => !!item.text } },
        tooltip: { backgroundColor: cssVar('--foreground'), titleColor: cssVar('--background'), bodyColor: cssVar('--background'), padding: 8, cornerRadius: 6, callbacks: { label: (c: any) => ` ${c.dataset.label ? c.dataset.label + ': ' : ''}${fmt(c.parsed.y ?? c.parsed)}` } },
      },
      scales: isRadial ? {} : {
        x: { stacked, grid: { display: false }, border: { color: grid }, ticks: { color: text, font: { family: font, size: 11 }, maxRotation: 0, autoSkip: true } },
        y: { stacked, beginAtZero: true, grid: { color: grid }, border: { display: false }, ticks: { color: text, font: { family: font, size: 11 }, callback: (v: any) => fmt(Number(v)), maxTicksLimit: 5 } },
      },
      cutout: props.kind === 'donut' ? '68%' : undefined,
    } as any,
  };
};

const render = () => {
  if (!canvas.value) return;
  chart?.destroy();
  chart = new Chart(canvas.value, build());
};

onMounted(() => {
  render();
  // theme tokens change (dark mode, brand colour, font) → repaint with the new values
  observer = new MutationObserver(render);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'style'] });
});
watch(() => [props.kind, props.series, props.labels, props.datasets, props.target], render, { deep: true });
onBeforeUnmount(() => { observer?.disconnect(); chart?.destroy(); chart = null; });
</script>

<template>
  <div class="relative w-full" :style="{ height: height + 'px' }">
    <canvas ref="canvas" role="img"></canvas>
  </div>
</template>
