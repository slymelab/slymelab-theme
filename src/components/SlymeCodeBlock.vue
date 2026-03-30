<template>
  <div class="relative slyme-glass rounded-2xl overflow-hidden shadow-sm flex flex-col">
    
    <div class="bg-gray-100/80 dark:bg-gray-800/80 px-4 py-3 border-b border-gray-200/60 dark:border-gray-700/60 flex items-center justify-between z-10">
      
      <div class="flex gap-2 w-16">
        <div class="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 dark:border-white/10"></div>
        <div class="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10 dark:border-white/10"></div>
        <div class="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10 dark:border-white/10"></div>
      </div>
      
      <span v-if="filename" class="font-mono text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold">
        {{ filename }}
      </span>
      
      <div class="w-16 flex justify-end">
        <button 
          v-if="code" 
          @click="handleCopy"
          class="text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors focus:outline-none"
          :title="copied ? 'Copied!' : 'Copy code'"
        >
          <svg v-if="copied" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="text-green-500 dark:text-green-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
          </svg>
          <svg v-else width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="p-6 overflow-x-auto bg-white/60 dark:bg-black/40 text-sm font-mono leading-relaxed relative shiki-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  filename: {
    type: String,
    default: ''
  },
  code: {
    type: String,
    default: ''
  }
})

const copied = ref(false)

const handleCopy = async () => {
  if (!props.code) return
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch (err) {
    console.error('Failed to copy code: ', err)
  }
}
</script>

<style>
.shiki-container pre {
  background-color: transparent !important;
  margin: 0;
  padding: 0;
}

html.dark .shiki-container .shiki,
html.dark .shiki-container .shiki span {
  color: var(--shiki-dark) !important;
  background-color: transparent !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}

.shiki-container pre::-webkit-scrollbar {
  height: 8px;
}
.shiki-container pre::-webkit-scrollbar-track {
  background: transparent;
}
.shiki-container pre::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 4px;
}
html.dark .shiki-container pre::-webkit-scrollbar-thumb {
  background-color: rgba(75, 85, 99, 0.5);
}
</style>
