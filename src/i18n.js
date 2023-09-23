//Import components
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

export default i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: localStorage.getItem('i18nextLng') || 'ro',
    debug: true,
    detection: {
      order: ['localstorage'],
      cache: ['localstorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  })
