<template>
  <div 
    :class="[
      'slyme-status',
      statusConfig.container
    ]"
  >
    <span class="relative flex h-2 w-2">
      <span 
        v-if="animate"
        :class="[
          'slyme-status-dot-ping',
          statusConfig.dot
        ]"
      ></span>
      <span 
        :class="[
          'slyme-status-dot-base',
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
    container: 'slyme-status-container-success',
    dot: 'slyme-status-dot-success',
    text: 'slyme-status-text-success'
  },
  info: {
    label: 'System Processing',
    container: 'slyme-status-container-info',
    dot: 'slyme-status-dot-info',
    text: 'slyme-status-text-info'
  },
  warning: {
    label: 'Under Maintenance',
    container: 'slyme-status-container-warning',
    dot: 'slyme-status-dot-warning',
    text: 'slyme-status-text-warning'
  },
  error: {
    label: 'Connection Interrupted',
    container: 'slyme-status-container-error',
    dot: 'slyme-status-dot-error',
    text: 'slyme-status-text-error'
  }
}

const statusConfig = computed(() => statusMap[props.type] || statusMap.success)
</script>