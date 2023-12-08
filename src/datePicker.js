import './styles/datepicker.css';
import { attachEventListeners } from './eventHandlers';
import { generateCalendarContainer } from './generateCalendarContainer';
import currentDates from './currentDates';
import { inputPlaceholderTranslations } from './localization';
import { getPageLanguage } from './utils';

export default function DatePicker(elementId, options) {
  this.element = document.getElementById(elementId);
  this.currentDate = new Date();
  this.currentDate.setDate(1);
  this.selectedStartDate = null;
  this.selectedEndDate = null;
  this.options = {
    mode: options?.mode ?? 'single',
    onSelect: options?.onSelect ?? null,
    blockedDays: options?.blockedDays ?? [],
    showDayNames: options?.showDayNames ?? true,
    textInputEnabled: options?.textInputEnabled ?? false,
    darkMode: options?.darkMode ?? false,
    usePageLanguage: options?.usePageLanguage ?? false,
    usePageLanguageFallback: options?.usePageLanguageFallback ?? 'en',
    language: options?.usePageLanguage ? getPageLanguage(options?.usePageLanguageFallback) : options?.language ?? 'en',
    textInputPlaceholder:
      options?.textInputPlaceholder ??
      inputPlaceholderTranslations[options?.usePageLanguage ? getPageLanguage() : options?.language ?? 'en'],
  };
  this.init = function () {
    if (this.options.darkMode) this.element.classList.add('dark');
    this.render();
    attachEventListeners(this.element, this.changeMonth.bind(this), this.handleDayClick.bind(this));
  };

  this.render = function () {
    this.element.innerHTML = '';

    const input = document.createElement('input');
    input.value = this.options.textInputPlaceholder;
    input.type = 'text';
    input.className = 'datepicker-input';
    input.readOnly = true;

    if (this.selectedStartDate) {
      if (this.options.mode === 'single') {
        input.value = this.selectedStartDate.toDateString();
      } else if (this.options.mode === 'range') {
        let inputValue = this.selectedStartDate.toDateString();
        if (this.selectedEndDate) {
          inputValue += ` - ${this.selectedEndDate.toDateString()}`;
        }
        input.value = inputValue;
      }
    }
    this.element.appendChild(input);

    const calendarContainer = generateCalendarContainer(
      this.currentDate,
      this.isDateSelected.bind(this),
      this.isDateInRange.bind(this),
      this.options
    );
    this.element.appendChild(calendarContainer);

    if (this.options.textInputEnabled) {
      input.addEventListener('click', () => {
        calendarContainer.style.display = 'block';
      });

      document.addEventListener('click', event => {
        if (!this.element.contains(event.target)) {
          calendarContainer.style.display = 'none';
        }
      });
    }

    attachEventListeners(this.element, this.changeMonth.bind(this), this.handleDayClick.bind(this));
  };

  this.isDateSelected = function (date) {
    return (
      (this.selectedStartDate && this.selectedStartDate.toDateString() === date.toDateString()) ||
      (this.selectedEndDate && this.selectedEndDate.toDateString() === date.toDateString())
    );
  };

  this.isDateInRange = function (date) {
    return this.selectedStartDate && this.selectedEndDate && date > this.selectedStartDate && date < this.selectedEndDate;
  };

  this.handleDayClick = function (day, month) {
    let year = this.currentDate.getFullYear();

    if (month === -1) {
      month = 11;
      year--;
    } else if (month === 12) {
      month = 0;
      year++;
    }

    const clickedDate = new Date(year, month, day);

    if (this.options.mode === 'single') {
      this.selectedStartDate = clickedDate;
      this.selectedEndDate = null;
      this.element.querySelector('.datepicker-input').value = clickedDate.toDateString();
      this.triggerSelectCallback();
      this.render();
      this.element.querySelector('.datepicker-calendar-container').style.display = 'none';
    } else if (this.options.mode === 'range') {
      if (!this.selectedStartDate || this.selectedEndDate) {
        this.selectedStartDate = clickedDate;
        this.selectedEndDate = null;
        this.render();
        // Keep the calendar open and do not update the input yet
        this.element.querySelector('.datepicker-calendar-container').style.display = 'block';
      } else if (this.selectedStartDate && !this.selectedEndDate) {
        if (clickedDate > this.selectedStartDate) {
          this.selectedEndDate = clickedDate;
          // Update the input only when both dates are selected
          this.element.querySelector('.datepicker-input').value = `${this.selectedStartDate.toDateString()} ${
            this.selectedEndDate.toDateString() !== undefined ? '- ' + this.selectedEndDate.toDateString() : ''
          }`;
          this.triggerSelectCallback();
          this.render();
          // Close the calendar after selecting the end date
          this.element.querySelector('.datepicker-calendar-container').style.display = 'none';
        } else {
          // If the clicked date is before the start date, reset the start date
          this.selectedStartDate = clickedDate;
          this.render();
          // Keep the calendar open to select the end date
          this.element.querySelector('.datepicker-calendar-container').style.display = 'block';
        }
      }
    }
  };

  this.changeMonth = function (offset) {
    const { currentYear, currentMonth, currentDay } = currentDates(this.currentDate);
    const newDate = new Date(currentYear, currentMonth + offset, 1);
    const lastDayOfNewMonth = new Date(currentYear, newDate.getMonth() + 1, 0).getDate();
    newDate.setDate(Math.min(currentDay, lastDayOfNewMonth));

    this.currentDate = newDate;
    this.render();
    this.element.querySelector('.datepicker-calendar-container').style.display = 'block';
  };

  this.triggerSelectCallback = function () {
    if (this.options.onSelect) {
      this.options.onSelect(this.selectedStartDate, this.selectedEndDate);
    }
  };
}
