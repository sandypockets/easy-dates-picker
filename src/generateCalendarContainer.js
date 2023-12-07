import { getMonthName } from './utils';
import { generateDayNames, generateCalendar } from './calendarGenerator';

export function generateCalendarContainer(currentDate, isDateSelected, isDateInRange, options) {
  const container = document.createElement('div');
  container.className = 'datepicker-calendar-container';
  container.style.display = options.textInputEnabled ? 'none' : 'block';
  container.innerHTML = `
    <div class="datepicker-header">
      <button class="prev-month">&lt;</button>
      <span class="month-display">${getMonthName(
        currentDate.getMonth()
      )} ${currentDate.getFullYear()}</span>
      <button class="next-month">&gt;</button>
    </div>
    ${options.showDayNames ? generateDayNames() : ''}
    <div class="datepicker-days">
      ${generateCalendar(currentDate, isDateSelected, isDateInRange, options)}
    </div>
  `;
  return container;
}
