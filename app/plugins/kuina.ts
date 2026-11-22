import { KButton, KCircularProgress, KLoadingDots, KLoadingIndicator } from '@kuina-ui/vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('KButton', KButton)
  nuxtApp.vueApp.component('KCircularProgress', KCircularProgress)
  nuxtApp.vueApp.component('KLoadingDots', KLoadingDots)
  nuxtApp.vueApp.component('KLoadingIndicator', KLoadingIndicator)
})
