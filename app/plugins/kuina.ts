import { KButton, KCheckbox, KCircularProgress, KLoadingDots, KLoadingIndicator, KTextarea, KTextField } from '@kuina-ui/vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('KButton', KButton)
  nuxtApp.vueApp.component('KCheckbox', KCheckbox)
  nuxtApp.vueApp.component('KCircularProgress', KCircularProgress)
  nuxtApp.vueApp.component('KLoadingDots', KLoadingDots)
  nuxtApp.vueApp.component('KLoadingIndicator', KLoadingIndicator)
  nuxtApp.vueApp.component('KTextField', KTextField)
  nuxtApp.vueApp.component('KTextarea', KTextarea)
})
