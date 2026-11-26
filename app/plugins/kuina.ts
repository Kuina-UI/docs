import {
  KAlert,
  KBadge,
  KButton,
  KCheckbox,
  KCircularProgress,
  KDatePicker,
  KDatePickerField,
  KDateRangePicker,
  KDateRangePickerField,
  KLoadingDots,
  KLoadingIndicator,
  KMenu,
  KRadioGroup,
  KSegmentedControl,
  KSelect,
  KSelectField,
  KSwitch,
  KTextarea,
  KTextField,
  KTextLink,
} from '@kuina-ui/vue'
import BaseUrlAvatar from '~/components/BaseUrlAvatar.vue'
import BaseUrlAvatarGroup from '~/components/BaseUrlAvatarGroup.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('KAlert', KAlert)
  nuxtApp.vueApp.component('KAvatar', BaseUrlAvatar)
  nuxtApp.vueApp.component('KAvatarGroup', BaseUrlAvatarGroup)
  nuxtApp.vueApp.component('KBadge', KBadge)
  nuxtApp.vueApp.component('KButton', KButton)
  nuxtApp.vueApp.component('KCheckbox', KCheckbox)
  nuxtApp.vueApp.component('KCircularProgress', KCircularProgress)
  nuxtApp.vueApp.component('KDatePicker', KDatePicker)
  nuxtApp.vueApp.component('KDatePickerField', KDatePickerField)
  nuxtApp.vueApp.component('KDateRangePicker', KDateRangePicker)
  nuxtApp.vueApp.component('KDateRangePickerField', KDateRangePickerField)
  nuxtApp.vueApp.component('KLoadingDots', KLoadingDots)
  nuxtApp.vueApp.component('KLoadingIndicator', KLoadingIndicator)
  nuxtApp.vueApp.component('KMenu', KMenu)
  nuxtApp.vueApp.component('KRadioGroup', KRadioGroup)
  nuxtApp.vueApp.component('KSegmentedControl', KSegmentedControl)
  nuxtApp.vueApp.component('KSelect', KSelect)
  nuxtApp.vueApp.component('KSelectField', KSelectField)
  nuxtApp.vueApp.component('KSwitch', KSwitch)
  nuxtApp.vueApp.component('KTextField', KTextField)
  nuxtApp.vueApp.component('KTextarea', KTextarea)
  nuxtApp.vueApp.component('KTextLink', KTextLink)
})
