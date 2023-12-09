import { monthNameTranslations } from './localization';

export function getMonthName(monthIndex, language) {
  return monthNameTranslations[language][monthIndex];
}

export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function getPageLanguage(fallbackLang) {
  const supportedLanguages = [
    'en',
    'fr',
    'es',
    'de',
    'it',
    'nl',
    'pt',
    'ja',
    'zh-CN',
    'zh-TW',
    'ru',
    'bg-BG',
    'cs',
    'da',
    'el',
    'fi',
    'hr-HR',
    'hu',
    'id',
    'ko',
    'lt-LT',
    'nb',
    'pl',
    'pt-BR',
    'pt-PT',
    'ro-RO',
    'sk-SK',
    'sl-SL',
    'sv',
    'th',
    'tr',
    'vi',
  ];
  const documentPageLang = document.documentElement.lang;
  // Check if the page language is supported, if not, default to English
  return supportedLanguages.includes(documentPageLang) ? documentPageLang : fallbackLang;
}
