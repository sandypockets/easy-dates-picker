import { monthNameTranslations } from './localization';

export function getMonthName(monthIndex, language) {
  return monthNameTranslations[language][monthIndex];
}

export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
