import DefaultTheme from 'vitepress/theme'
import ResourceTypeCard from './components/ResourceTypeCard.vue'
import RecipeDisplay from './components/RecipeDisplay.vue'
import InfoBox from './components/InfoBox.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ResourceTypeCard', ResourceTypeCard)
    app.component('RecipeDisplay', RecipeDisplay)
    app.component('InfoBox', InfoBox)
  }
}
