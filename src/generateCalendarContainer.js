import { getMonthName } from './utils';
import { generateDayNames, generateCalendar } from './calendarGenerator';
import { ariaLabels } from './localization';

export function generateCalendarContainer(currentDate, isDateSelected, isDateInRange, options) {
  const container = document.createElement('div');
  container.className = `datepicker-calendar-container ${options?.language}`;
  container.style.display = options.textInputEnabled ? 'none' : 'block';
  container.innerHTML = `
    <div class="datepicker-header">
      <button aria-label="${ariaLabels[options.language]['prevMonth']}" class="prev-month">&lt;</button>
      <span class="month-display">${getMonthName(currentDate.getMonth(), options.language)} ${currentDate.getFullYear()}</span>
      <button aria-label="${ariaLabels[options.language]['nextMonth']}" class="next-month">&gt;</button>
    </div>
    ${options.showDayNames ? generateDayNames(options.language) : ''}
    <div class="datepicker-days">
      ${generateCalendar(currentDate, isDateSelected, isDateInRange, options)}
    </div>
  `;
  return container;
}
