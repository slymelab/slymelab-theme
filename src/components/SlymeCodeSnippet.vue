<template>
  <div class="flex items-center justify-between rounded-[0.4rem] px-4 py-3 w-full sm:w-auto slyme-glass">
    <div class="flex items-center overflow-x-auto no-scrollbar">
      <span v-if="prefix" class="font-mono text-sm opacity-50 mr-4 select-none">
        <slot name="prefix">{{ prefix }}</slot>
      </span>
      <code class="font-mono text-sm font-semibold whitespace-nowrap">
        <slot>{{ command }}</slot>
      </code>
    </div>
    <button @click="handleCopy" class="ml-6 flex-shrink-0 transition-opacity duration-200 focus:outline-none"
      :class="copied ? 'text-green-500 opacity-100' : 'opacity-50 hover:opacity-100'"
      :title="copied ? 'Copied!' : 'Copy to clipboard'">
      <svg v-if="copied" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
      </svg>
      <svg v-else width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
        </path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  command: {
    type: String,
    default: ''
  },
  prefix: {
    type: String,
    default: '$'
  }
})

const copied = ref(false)

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(props.command)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
</script>