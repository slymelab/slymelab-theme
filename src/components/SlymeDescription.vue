<template>
  <div class="flex flex-col border-l-2 pl-6 py-2 transition-colors duration-200 
           border-gray-300 dark:border-gray-700 
           hover:border-black dark:hover:border-white/80">
    <div class="font-mono text-lg font-semibold mb-2">
      <slot name="title">{{ title }}</slot>
    </div>
    <p class="font-sans text-sm leading-relaxed">
      <slot name="description">{{ description }}</slot>
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>