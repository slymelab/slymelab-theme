<template>
  <div :class="computedClasses">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: (val) => ['default', 'info', 'success', 'warning', 'error'].includes(val)
  },
  uppercase: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md',
    validator: (val) => ['sm', 'md', 'lg'].includes(val)
  }
})

const computedClasses = computed(() => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md border font-mono font-bold transition-colors duration-200'
  
  const sizeMap = {
    sm: 'text-[10px] px-1 py-0.3',
    md: 'text-[11px] px-2 py-1',
    lg: 'text-[12px] px-3 py-1.5'
  }

  const typographyClasses = [
    props.uppercase ? 'uppercase tracking-widest' : 'tracking-normal',
    sizeMap[props.size]
  ].join(' ')

  const types = {
    default: 'bg-gray-200/50 dark:bg-white/10 border-gray-300/30 dark:border-white/10 text-gray-600 dark:text-gray-400',
    info: 'bg-blue-100/60 dark:bg-blue-500/10 border-blue-300/40 dark:border-blue-500/20 text-blue-700 dark:text-blue-400',
    success: 'bg-emerald-100/60 dark:bg-emerald-500/10 border-emerald-300/40 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400',
    warning: 'bg-amber-100/60 dark:bg-amber-500/10 border-amber-300/40 dark:border-amber-500/20 text-amber-700 dark:text-amber-400',
    error: 'bg-rose-100/60 dark:bg-rose-500/20 border-rose-300/40 dark:border-rose-500/40 text-rose-700 dark:text-rose-400'
  }

  return [baseClasses, typographyClasses, types[props.type]].join(' ')
})
</script>