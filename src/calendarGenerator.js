import { isLeapYear } from './utils';
import { dayNameTranslations, chineseDaysOfMonth, japaneseDaysOfMonth, koreanDaysOfMonth, thaiDaysOfMonth } from './localization';

export function generateDayNames(language) {
  const dayNames = dayNameTranslations[language];
  return `<div class="datepicker-day-names">${dayNames.map(day => `<div>${day}</div>`).join('')}</div>`;
}

export function generateCalendar(currentDate, isDateSelected, isDateInRange, options) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfLastMonth = new Date(year, month, 0).getDate();
  let daysInMonth = new Date(year, month + 1, 0).getDate();

  if (month === 1 && isLeapYear(year)) {
    daysInMonth = 29;
  }

  let firstDayIndex = firstDayOfMonth.getDay();
  let calendarHtml = '<div class="datepicker-week">';

  for (let i = firstDayIndex; i > 0; i--) {
    const day = lastDayOfLastMonth - i + 1;
    calendarHtml += generateDayCell(year, month - 1, day, false, isDateSelected, isDateInRange, options);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarHtml += generateDayCell(year, month, i, true, isDateSelected, isDateInRange, options);
  }

  let lastDayIndex = new Date(year, month, daysInMonth).getDay();
  for (let i = 1; lastDayIndex < 6; i++, lastDayIndex++) {
    calendarHtml += generateDayCell(year, month + 1, i, false, isDateSelected, isDateInRange, options);
  }
  calendarHtml += '</div>';

  return calendarHtml;
}

export function generateDayCell(year, month, day, isCurrentMonth, isDateSelected, isDateInRange, options) {
  const date = new Date(year, month, day);
  let dayDisplay = day;

  if (options.language === 'ja') {
    dayDisplay = japaneseDaysOfMonth[day];
  } else if (options.language === 'zh-CN' || options.language === 'zh-TW') {
    dayDisplay = chineseDaysOfMonth[options.language][day];
  } else if (options.language === 'ko') {
    dayDisplay = koreanDaysOfMonth[day];
  } else if (options.language === 'th') {
    dayDisplay = thaiDaysOfMonth[day];
  }

  let className = isCurrentMonth ? 'datepicker-day current-month' : 'datepicker-day';

  if (options.blockedDays.includes(date.getDay())) {
    className += ' blocked';
  } else if (isCurrentMonth && isDateSelected(date)) {
    className += ' selected';
  } else if (isCurrentMonth && isDateInRange(date)) {
    className += ' in-range';
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of today for fair comparison

  if (date.getTime() === today.getTime()) {
    className += ' today';
  }
  if (!options.selectPastDatesEnabled && date < today) {
    className += ' past-date';
  }

  return `<div tabindex="0" class="${className}" data-day="${day}" data-month="${month}"><span>${dayDisplay}</span></div>`;
}
