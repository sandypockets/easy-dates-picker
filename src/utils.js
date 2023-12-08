import { monthNameTranslations } from './localization';

export function getMonthName(monthIndex, language) {
  return monthNameTranslations[language][monthIndex];
}

export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function getPageLanguage(fallbackLang) {
  const supportedLanguages = ['en', 'fr', 'es', 'de', 'it', 'nl', 'pt', 'ja', 'zh-CN', 'zh-TW', 'ru'];
  const documentPageLang = document.documentElement.lang;
  // Check if the page language is supported, if not, default to English
  return supportedLanguages.includes(documentPageLang) ? documentPageLang : fallbackLang;
}
