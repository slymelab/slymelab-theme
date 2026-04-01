<template>
  <div 
    :class="[
      'inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border font-mono text-xs font-bold transition-all duration-300',
      statusConfig.container
    ]"
  >
    <span class="relative flex h-2 w-2">
      <span 
        v-if="animate"
        :class="[
          'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
          statusConfig.dot
        ]"
      ></span>
      <span 
        :class="[
          'relative inline-flex rounded-full h-2 w-2',
          statusConfig.dot
        ]"
      ></span>
    </span>

    <span :class="statusConfig.text">
      <slot>{{ statusConfig.label }}</slot>
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'success'
  },
  animate: {
    type: Boolean,
    default: true
  }
})

const statusMap = {
  success: {
    label: 'Systems Operational',
    container: 'bg-emerald-500/5 border-emerald-500/30 dark:border-emerald-500/10',
    dot: 'bg-emerald-500',
    text: 'text-emerald-600 dark:text-emerald-400'
  },
  info: {
    label: 'System Processing',
    container: 'bg-blue-500/5 border-blue-500/20 dark:border-blue-500/10',
    dot: 'bg-blue-500',
    text: 'text-blue-600 dark:text-blue-400'
  },
  warning: {
    label: 'Under Maintenance',
    container: 'bg-amber-500/5 border-amber-500/20 dark:border-amber-500/10',
    dot: 'bg-amber-500',
    text: 'text-amber-600 dark:text-amber-400'
  },
  error: {
    label: 'Connection Interrupted',
    container: 'bg-rose-500/8 border-rose-500/25 dark:border-rose-500/30',
    dot: 'bg-rose-500',
    text: 'text-rose-600 dark:text-rose-400'
  }
}

const statusConfig = computed(() => statusMap[props.type] || statusMap.success)
</script>