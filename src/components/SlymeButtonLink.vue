<template>
  <a :href="href" :target="isExternalLink ? '_blank' : undefined"
    :rel="isExternalLink ? 'noopener noreferrer' : undefined" :class="[
      'slyme-button-link',
      variant === 'solid' ? 'slyme-button-link-solid' : 'slyme-button-link-outline'
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
</script>