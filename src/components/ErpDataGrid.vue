<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from './table'

defineProps<{
  headers: Array<{ key: string, label: string, width?: string, align?: string }>,
  rows: Array<any>
}>()
</script>

<template>
  <div class="w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
    <Table>
      <TableHeader>
        <TableRow class="hover:bg-transparent border-b">
          <TableHead v-for="h in headers" :key="h.key" 
                    :class="[h.width || '', h.align === 'right' ? 'text-right' : h.align === 'center' ? 'text-center' : '']"
                    class="h-14 font-black uppercase tracking-[0.2em] text-[10px] text-muted-foreground/60 px-8">
            {{ h.label }}
          </TableHead>
          <TableHead class="w-[50px] px-8 h-14"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(row, idx) in rows" :key="idx" class="group transition-all duration-200">
          <TableCell v-for="h in headers" :key="h.key" 
                    :class="[h.align === 'right' ? 'text-right' : h.align === 'center' ? 'text-center' : '']"
                    class="px-8 py-6">
            <slot :name="`cell(${h.key})`" :row="row">
               <span class="text-[14px] font-medium leading-relaxed tracking-tight">{{ row[h.key] }}</span>
            </slot>
          </TableCell>
          <TableCell class="px-8 py-6 text-right">
            <slot name="actions" :row="row">
               <div class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground cursor-pointer transition-all">
                  <MoreHorizontal :size="16" />
               </div>
            </slot>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <div class="px-8 py-4 bg-muted/10 border-t border-border/50 flex justify-center">
       <span class="text-[9px] font-black text-muted-foreground/30 uppercase tracking-[0.6em]">System Registry Integrity Verified</span>
    </div>
  </div>
</template>
