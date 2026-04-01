<template>
  <footer class="relative mt-20 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
    <div class="max-w-[1440px] mx-auto px-10 py-16">
      <div class="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">
        <div class="flex flex-col gap-6 max-w-md">
          <slot name="brand"></slot>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
          <slot name="columns"></slot>
        </div>
      </div>
      <div
        class="mt-16 pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="font-mono text-xs text-gray-500">
          <slot name="bottom-left"></slot>
        </div>
        <div class="font-mono text-xs text-gray-400">
          <slot name="bottom-right"></slot>
        </div>
      </div>
    </div>
  </footer>
</template>
