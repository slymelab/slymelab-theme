import DefaultTheme from 'vitepress/theme'
import SlymeLayout from './components/SlymeLayout.vue'
import SlymeCard from './components/SlymeCard.vue'
import SlymeButtonLink from './components/SlymeButtonLink.vue'
import SlymeDescription from './components/SlymeDescription.vue'
import SlymeCodeSnippet from './components/SlymeCodeSnippet.vue'
import SlymeCodeBlock from './components/SlymeCodeBlock.vue'
import SlymeFeature from './components/SlymeFeature.vue'
import SlymeBadge from './components/SlymeBadge.vue'
import SlymeStatus from './components/SlymeStatus.vue'

export default {
  extends: DefaultTheme,
  Layout: SlymeLayout,
}

export {
  SlymeCard,
  SlymeButtonLink,
  SlymeLayout,
  SlymeDescription,
  SlymeCodeSnippet,
  SlymeCodeBlock,
  SlymeFeature,
  SlymeBadge,
  SlymeStatus,
}
