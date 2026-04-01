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

const sizeMap = {
  sm: 'slyme-badge-sm',
  md: 'slyme-badge-md',
  lg: 'slyme-badge-lg'
}

const typeMap = {
  default: 'slyme-badge-default',
  info: 'slyme-badge-info',
  success: 'slyme-badge-success',
  warning: 'slyme-badge-warning',
  error: 'slyme-badge-error'
}

const computedClasses = computed(() => {
  const typographyClasses = props.uppercase ? 'uppercase tracking-widest' : 'tracking-normal'

  return [
    'slyme-badge',
    typographyClasses,
    sizeMap[props.size] || sizeMap.md,
    typeMap[props.type] || typeMap.default
  ].join(' ')
})
</script>