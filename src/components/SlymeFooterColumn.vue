<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <h4 class="font-mono font-bold text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500">
      {{ title }}
    </h4>
    <ul class="flex flex-col gap-3 font-mono text-sm text-gray-600 dark:text-gray-400">
      <slot></slot>
    </ul>
  </div>
</template>