import en from '../languages/en.json';
import fr from '../languages/fr.json';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: { all: en },
  fr: { all: fr }
};

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources,
    supportedLngs: ['en', 'fr'],
    fallbackLng: 'en',
    ns: 'all'
  });