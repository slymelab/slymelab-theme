<template>
  <div :class="[
    'slyme-glass relative overflow-hidden transition-all duration-300 flex flex-col h-full w-full',
    currentSize.container,
    hoverEffect ? 'slyme-glass-hover' : '',
    href ? 'group cursor-pointer' : ''
  ]">
    <a v-if="href" :href="href" :target="target" :rel="rel" class="absolute inset-0 z-10 focus:outline-none"
      aria-label="Card link"></a>
    <div :class="[
      'relative z-0 flex flex-col md:flex-row h-full [&_a]:relative [&_a]:z-20 [&_button]:relative [&_button]:z-20 [&_[role=\'button\']]:relative [&_[role=\'button\']]:z-20',
      currentSize.layout
    ]">
      <div :class="['flex flex-col flex-grow', $slots.aside ? 'md:w-1/2 lg:w-[45%]' : 'w-full']">

        <div v-if="$slots.header" :class="['flex justify-between items-start w-full', currentSize.header]">
          <slot name="header"></slot>
        </div>

        <h3 v-if="$slots.title"
          :class="['font-mono font-semibold text-gray-900 dark:text-gray-100', currentSize.title]">
          <slot name="title"></slot>
        </h3>

        <div :class="['flex-grow font-sans leading-relaxed text-gray-600 dark:text-gray-400', currentSize.desc]">
          <slot></slot>
        </div>

        <div v-if="$slots.footer" :class="['w-fit', currentSize.footer]">
          <slot name="footer"></slot>
        </div>
      </div>

      <div v-if="$slots.aside"
        class="flex flex-col w-full md:w-1/2 lg:w-[55%] flex-shrink-0 relative z-20 pointer-events-auto">
        <slot name="aside"></slot>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: { type: String, default: undefined },
  target: { type: String, default: undefined },
  rel: { type: String, default: undefined },
  hoverEffect: { type: Boolean, default: true },
  size: {
    type: String,
    default: 'md',
    validator: (val) => ['md', 'lg'].includes(val)
  }
})

const sizes = {
  md: {
    container: 'p-8 rounded-[1.5rem]',
    layout: 'gap-8 md:gap-10',
    header: 'mb-6',
    title: 'text-2xl md:text-3xl tracking-tight mb-4',
    desc: 'text-sm',
    footer: 'mt-10'
  },
  lg: {
    container: 'p-10 lg:p-16 rounded-[2rem]',
    layout: 'gap-10 lg:gap-16',
    header: 'mb-6 lg:mb-8',
    title: 'text-3xl md:text-4xl tracking-tighter mb-6',
    desc: 'text-base',
    footer: 'mt-8 lg:mt-12'
  }
}

const currentSize = computed(() => sizes[props.size])

const target = computed(() => {
  if (props.target) return props.target
  if (props.href && /^(https?:\/\/|\/\/)/i.test(props.href)) return '_blank'
  return undefined
})

const rel = computed(() => {
  if (props.rel) return props.rel
  if (target.value === '_blank') return 'noopener noreferrer'
  return undefined
})
</script>