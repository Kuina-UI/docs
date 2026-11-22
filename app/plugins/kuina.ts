import { KButton } from '@kuina-ui/vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('KButton', KButton)
})
