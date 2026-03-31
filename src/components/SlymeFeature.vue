<template>
  <div class="flex items-center gap-4">
    <div v-if="$slots.icon" class="flex-shrink-0">
      <slot name="icon"></slot>
    </div>

    <div class="flex flex-col">
      <div class="text-sm md:text-base font-semibold tracking-wide">
        <slot name="title">{{ title }}</slot>
      </div>

      <div class="text-xs md:text-sm mt-0.5 whitespace-nowrap opacity-80 font-sans">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
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