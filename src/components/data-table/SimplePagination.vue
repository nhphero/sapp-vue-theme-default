<script setup lang="ts">
import { inject } from 'vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

/** Simple pagination — hoff `.pagination` with page jump + page size. */
const props = defineProps<{ source: any }>();

const $superApp = inject<any>('$superApp');
const { ref, watch } = $superApp.$vue;

const pageInput = ref(props.source.pagination.page);
watch(() => props.source.pagination.page, (v: number) => { pageInput.value = v; });

const jumpToPage = () => {
  const p = Number(pageInput.value);
  if (p >= 1 && p <= props.source.pagination.totalPages) props.source.setPage(p);
  else pageInput.value = props.source.pagination.page;
};
</script>

<template>
  <div class="pagination justify-between px-4 py-2 shrink-0 bg-card border-t border-border-soft">
    <div class="flex items-center gap-2">
      <span class="text-sm text-muted-foreground">{{ $t('common.page') }}</span>
      <button type="button" class="btn icon sm" aria-label="Trang trước"
        :disabled="source.pagination.page <= 1 || source.pagination.loading"
        @click="source.setPage(source.pagination.page - 1)">
        <ChevronLeft :size="14" />
      </button>
      <div class="input sm flex items-center gap-1 w-auto px-2">
        <input type="number" v-model="pageInput" @keydown.enter="jumpToPage" @blur="jumpToPage"
          class="w-8 bg-transparent border-0 outline-none text-center text-sm font-semibold text-primary tabular-nums p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
        <span class="text-sm text-faint">/</span>
        <span class="text-sm font-semibold tabular-nums">{{ source.pagination.totalPages }}</span>
      </div>
      <button type="button" class="btn icon sm" aria-label="Trang sau"
        :disabled="source.pagination.page >= source.pagination.totalPages || source.pagination.loading"
        @click="source.setPage(source.pagination.page + 1)">
        <ChevronRight :size="14" />
      </button>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm text-muted-foreground">{{ $t('common.perPage') }}</span>
      <component :is="$c('form.select')" :modelValue="String(source.pagination.pageSize)" @update:modelValue="(v: string) => source.setPageSize(Number(v))">
        <component :is="$c('form.select-trigger')" class="control-sm">
          <component :is="$c('form.select-value')" />
        </component>
        <component :is="$c('form.select-content')">
          <component :is="$c('form.select-item')" v-for="size in [20, 50, 100, 200, 500]" :key="size" :value="String(size)">
            {{ size }}
          </component>
        </component>
      </component>
      <!-- View controls that belong with the page size (the grid puts its column picker here). -->
      <slot name="end" />
    </div>
  </div>
</template>
