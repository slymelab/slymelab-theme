import DefaultTheme from 'vitepress/theme'
import SlymeLayout from './components/SlymeLayout.vue'
import SlymeCard from './components/SlymeCard.vue'
import SlymeButtonLink from './components/SlymeButtonLink.vue'

export default {
  extends: DefaultTheme,
  Layout: SlymeLayout,
}

export { SlymeCard, SlymeButtonLink, SlymeLayout }
