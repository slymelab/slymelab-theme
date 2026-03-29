<template>
  <a
    :href="href"
    class="inline-flex items-center justify-center bg-black text-white px-6 py-3.5 rounded-[0.4rem] font-mono text-sm hover:bg-gray-800 transition-colors gap-2 cursor-pointer">
    <slot></slot>
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true
  }
})
</script>
