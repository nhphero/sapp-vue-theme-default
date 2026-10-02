<script setup lang="ts">
import { computed } from 'vue';
import { 
  ChevronLeft, 
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal
} from 'lucide-vue-next';

const props = withDefaults(defineProps<{
  source: any;
  variant?: 'default' | 'minimal';
}>(), {
  variant: 'default'
});


const pages = computed(() => {
  const current = props.source.pagination.page;
  const total = props.source.pagination.totalPages;
  const delta = 2;
  const range: (number | string)[] = [];

  for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
    range.push(i);
  }

  if (current - delta > 2) range.unshift('...');
  if (current + delta < total - 1) range.push('...');

  range.unshift(1);
  if (total > 1) range.push(total);

  return range;
});
</script>

<template>
  <div class="flex items-center shrink-0 bg-inherit border-inherit" :class="[variant === 'minimal' ? 'gap-6' : 'px-6 py-2 justify-between']">
    <!-- Left Section: Status info -->
    <div v-if="variant === 'default'" class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <span class="text-xs text-muted-foreground font-semibold">Total:</span>
        <span class="text-xs font-bold text-foreground tabular-nums">{{ source.pagination.total.toLocaleString() }}</span>
      </div>
      <div class="h-4 w-px bg-border/50"></div>
      <div class="flex items-center gap-2">
        <span class="text-xs text-muted-foreground font-semibold">Showing:</span>
        <span class="text-xs font-bold text-foreground tabular-nums">
          {{ (source.pagination.page - 1) * source.pagination.pageSize + 1 }} - 
          {{ Math.min(source.pagination.page * source.pagination.pageSize, source.pagination.total) }}
        </span>
      </div>
    </div>
    
    <!-- Minimalist Status info (Inline) -->
    <div v-else class="hidden sm:flex items-center gap-1.5 text-xs font-medium text-faint tabular-nums select-none mt-0.5">
       <span>{{ (source.pagination.page - 1) * source.pagination.pageSize + 1 }}</span>
       <span class="opacity-30">-</span>
       <span>{{ Math.min(source.pagination.page * source.pagination.pageSize, source.pagination.total) }}</span>
       <span class="mx-1 text-muted-foreground/20">of</span>
       <span class="text-muted-foreground/60 font-bold">{{ source.pagination.total.toLocaleString() }}</span>
    </div>

    <!-- Right Section: Controls -->
    <div class="flex items-center gap-3">
      <!-- Pagination Controls -->
      <div class="flex items-center gap-0.5">
        <template v-if="variant === 'default'">
          <component :is="$c('ui.button')" 
            variant="ghost" size="icon"
            :disabled="source.pagination.page <= 1 || source.pagination.loading"
            @click="source.setPage(1)"
          >
            <ChevronsLeft :size="12" />
          </component>
        </template>
        
        <component :is="$c('ui.button')" 
          variant="ghost" size="icon"
          :disabled="source.pagination.page <= 1 || source.pagination.loading"
          @click="source.setPage(source.pagination.page - 1)"
        >
          <ChevronLeft :size="16" stroke-width="2.5" />
        </component>

        <!-- Minimalist Page Indicator -->
        <template v-if="variant === 'minimal'">
           <div class="flex items-center gap-2 px-3 text-xs font-mono select-none">
              <span class="text-primary font-semibold">{{ source.pagination.page }}</span>
              <span class="text-muted-foreground/20">/</span>
              <span class="text-muted-foreground/60 font-medium">{{ source.pagination.totalPages }}</span>
           </div>
        </template>

        <!-- Full Page Numbers -->
        <template v-else v-for="p in pages" :key="p">
          <div v-if="p === '...'" class="px-1 text-faint">
            <MoreHorizontal :size="12" />
          </div>
          <component :is="$c('ui.button')" 
            v-else
            :variant="p === source.pagination.page ? 'default' : 'ghost'"
            size="sm"
            :class="{ 'opacity-50 pointer-events-none': source.pagination.loading }"
            @click="source.setPage(Number(p))"
          >
            {{ p }}
          </component>
        </template>

        <component :is="$c('ui.button')" 
          variant="ghost" size="icon"
          :disabled="source.pagination.page >= source.pagination.totalPages || source.pagination.loading"
          @click="source.setPage(source.pagination.page + 1)"
        >
          <ChevronRight :size="16" stroke-width="2.5" />
        </component>

        <template v-if="variant === 'default'">
          <component :is="$c('ui.button')" 
            variant="ghost" size="icon"
            :disabled="source.pagination.page >= source.pagination.totalPages || source.pagination.loading"
            @click="source.setPage(source.pagination.totalPages)"
          >
            <ChevronsRight :size="12" />
          </component>
        </template>
      </div>

      <!-- Page Size Selector -->
      <div class="flex items-center gap-1 ml-2">
        <component :is="$c('form.select')" :modelValue="String(source.pagination.pageSize)" @update:modelValue="(v: string) => source.setPageSize(Number(v))">
          <component :is="$c('form.select-trigger')" class="control-sm">
            <component :is="$c('form.select-value')" />
          </component>
          <component :is="$c('form.select-content')">
            <component :is="$c('form.select-item')" v-for="size in [20, 50, 100, 200, 500]" :key="size" :value="String(size)">
              <span class="text-xs font-bold">{{ size }}</span>
            </component>
          </component>
        </component>
      </div>
    </div>
  </div>
</template>
