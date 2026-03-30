<template>
  <a :href="href" :target="isExternalLink ? '_blank' : undefined"
    :rel="isExternalLink ? 'noopener noreferrer' : undefined" :class="[
      'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[0.4rem] font-mono text-sm transition-all duration-200 cursor-pointer w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900',
      variant === 'solid' ? solidClasses : outlineClasses
    ]">
    <slot></slot>
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: '#'
  },
  variant: {
    type: String,
    default: 'solid',
    validator: (value) => ['solid', 'outline'].includes(value)
  },
  external: {
    type: Boolean,
    default: undefined
  }
})

const isExternalLink = computed(() => {
  if (props.external !== undefined) {
    return props.external
  }
  return props.href ? /^(https?:\/\/|\/\/|mailto:|tel:)/i.test(props.href) : false
})

const solidClasses = `
  bg-black text-white border border-transparent 
  hover:bg-gray-800 
  dark:bg-white dark:text-black dark:hover:bg-gray-200
  focus:ring-black dark:focus:ring-white
`

const outlineClasses = `
  bg-transparent border border-black text-black 
  hover:bg-black hover:text-white 
  dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black
  focus:ring-black dark:focus:ring-white
`
</script>