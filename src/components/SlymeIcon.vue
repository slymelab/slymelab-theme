<template>
  <div 
    :class="[
      'slyme-icon',
      sizeConfig.box,
      colorConfig.box
    ]"
  >
    {{ char }}
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  char: { type: String, default: 'S' },
  size: { type: String, default: 'md' },
  theme: { type: String, default: 'monochrome' }
})

const sizeMap = {
  xs: { box: 'slyme-icon-xs' },
  sm: { box: 'slyme-icon-sm' },
  md: { box: 'slyme-icon-md' },
  lg: { box: 'slyme-icon-lg' },
  xl: { box: 'slyme-icon-xl' }
}

const themeMap = {
  indigo: { box: 'slyme-icon-indigo' },
  emerald: { box: 'slyme-icon-emerald' },
  amber: { box: 'slyme-icon-amber' },
  rose: { box: 'slyme-icon-rose' },
  monochrome: { box: 'slyme-icon-monochrome' }
}

const sizeConfig = computed(() => sizeMap[props.size] || sizeMap.md)
const colorConfig = computed(() => themeMap[props.theme] || themeMap.monochrome)
</script>