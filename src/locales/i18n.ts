import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '@locales/en'
import th from '@locales/th'

export const defaultNS = 'base'
export const resources = {
  en,
  th,
}

i18next.use(initReactI18next).init({
  lng: 'en',
  defaultNS,
  resources,
})
