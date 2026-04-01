<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="target"
    :class="[
      'slyme-link',
      sizeConfig,
      colorConfig.text,
      { 'underline underline-offset-4 decoration-2': underline },
      underline ? colorConfig.decoration : ''
    ]"
  >
    <slot name="prefix"></slot>

    <span>
      <slot></slot>
    </span>

    <span 
      v-if="withArrow" 
      class="ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
    >
      -&gt;
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: { type: String, default: null },
  target: { type: String, default: null },
  theme: { type: String, default: 'monochrome' },
  size: { type: String, default: 'md' },
  underline: { type: Boolean, default: false },
  withArrow: { type: Boolean, default: false }
})

const sizeMap = {
  sm: 'slyme-link-sm',
  md: 'slyme-link-md',
  lg: 'slyme-link-lg'
}

const themeMap = {
  indigo: { text: 'slyme-link-text-indigo', decoration: 'slyme-link-decoration-indigo' },
  emerald: { text: 'slyme-link-text-emerald', decoration: 'slyme-link-decoration-emerald' },
  amber: { text: 'slyme-link-text-amber', decoration: 'slyme-link-decoration-amber' },
  rose: { text: 'slyme-link-text-rose', decoration: 'slyme-link-decoration-rose' },
  monochrome: { text: 'slyme-link-text-monochrome', decoration: 'slyme-link-decoration-monochrome' },
  muted: { text: 'slyme-link-text-muted', decoration: 'slyme-link-decoration-muted' }
}

const sizeConfig = computed(() => sizeMap[props.size] || sizeMap.md)
const colorConfig = computed(() => themeMap[props.theme] || themeMap.monochrome)
</script>