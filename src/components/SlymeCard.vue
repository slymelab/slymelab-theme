<template>
  <div class="slyme-glass slyme-glass-hover group relative flex flex-col h-full p-8 rounded-[1.5rem] overflow-hidden">
    <a v-if="href" :href="href" :target="isExternalLink ? '_blank' : undefined"
      :rel="isExternalLink ? 'noopener noreferrer' : undefined" class="absolute inset-0 z-10 focus:outline-none"></a>
    <div class="absolute -top-24 -right-24 w-48 h-48 rounded-full pointer-events-none"></div>
    <div
      class="relative flex flex-col h-full [&_a]:relative [&_a]:z-20 [&_button]:relative [&_button]:z-20 [&_[role='button']]:relative [&_[role='button']]:z-20">
      <div class="flex justify-between items-start mb-8">
        <div
          class="font-mono text-[10px] tracking-wider uppercase bg-gray-200/50 dark:bg-white/10 px-2 py-1 rounded-md border border-gray-300/30 dark:border-white/10 font-semibold text-gray-800 dark:text-gray-200 w-fit">
          <slot name="badge">PRODUCT</slot>
        </div>
        <div class="transition-colors duration-300">
          <slot name="icon">
            <svg v-if="isExternalLink" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </slot>
        </div>
      </div>
      <div class="flex-grow">
        <h3 class="font-mono text-2xl font-semibold tracking-tight mb-3">
          <slot name="title">Product Name</slot>
        </h3>
        <p class="font-sans text-sm leading-relaxed">
          <slot name="description">Describe what this product does and how it brings value to the user.</slot>
        </p>
      </div>
      <div
        class="mt-10 relative w-fit font-mono text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
        <slot name="action">Learn More -></slot>
        <span v-if="showUnderline"
          class="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: undefined
  },
  showUnderline: {
    type: Boolean,
    default: true
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
</script>
