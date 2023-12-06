import './styles/datepicker.css';

export default function DatePicker(elementId, options) {
  this.element = document.getElementById(elementId);
  this.currentDate = new Date();
  this.currentDate.setDate(1);
  this.selectedStartDate = null;
  this.selectedEndDate = null;
  this.options = {
    mode: options.mode ?? 'single',
    onSelect: options.onSelect ?? null,
    blockedDays: options.blockedDays ?? [],
  };

  this.init = function () {
    this.render();
    this.attachEventListeners();
  };

  this.render = function () {
    const oldElement = this.element.querySelector('.datepicker-days');
    if (oldElement) {
      oldElement.removeEventListener('click', this.dayClickListener);
    }

    this.element.innerHTML = `
      <div class="datepicker-header">
        <button class="prev-month">&lt;</button>
        <span class="month-display">${this.getMonthName(
          this.currentDate.getMonth()
        )} ${this.currentDate.getFullYear()}</span>
        <button class="next-month">&gt;</button>
      </div>
      <div class="datepicker-days">
        ${this.generateCalendar()}
      </div>
    `;

    this.attachEventListeners();
  };

  this.generateCalendar = function () {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const daysInMonth =
      month === 1 ? (this.isLeapYear(year) ? 29 : 28) : new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();
    let calendarHtml = '';

    for (let i = 0; i < firstDayIndex; i++) {
      calendarHtml += `<div class="empty-day"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
      let className = 'datepicker-day';
      const date = new Date(year, month, day);
      const dayOfWeek = date.getDay();

      // Check if the day of week is in the blockedDays array
      if (this.options.blockedDays.includes(dayOfWeek)) {
        className += ' blocked';
      } else if (this.isDateSelected(date)) {
        className += ' selected';
      } else if (this.isDateInRange(date)) {
        className += ' in-range';
      }

      calendarHtml += `<div class="${className}" data-day="${day}">${day}</div>`;
    }

    return calendarHtml;
  };

  this.isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  this.isDateSelected = function (date) {
    return (
      (this.selectedStartDate && this.selectedStartDate.toDateString() === date.toDateString()) ||
      (this.selectedEndDate && this.selectedEndDate.toDateString() === date.toDateString())
    );
  };

  this.isDateInRange = function (date) {
    return (
      this.selectedStartDate &&
      this.selectedEndDate &&
      date > this.selectedStartDate &&
      date < this.selectedEndDate
    );
  };

  this.attachEventListeners = function () {
    this.element.querySelector('.prev-month').addEventListener('click', () => this.changeMonth(-1));
    this.element.querySelector('.next-month').addEventListener('click', () => this.changeMonth(1));

    this.dayClickListener = event => {
      if (
        event.target.classList.contains('datepicker-day') &&
        !event.target.classList.contains('blocked')
      ) {
        const day = parseInt(event.target.getAttribute('data-day'), 10);
        this.handleDayClick(day);
      }
    };

    this.element.querySelector('.datepicker-days').addEventListener('click', this.dayClickListener);
  };

  this.handleDayClick = function (day) {
    const date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);

    if (this.options.mode === 'single') {
      this.selectedStartDate = date;
      this.selectedEndDate = null;
    } else {
      if (!this.selectedStartDate) {
        this.selectedStartDate = date;
      } else if (!this.selectedEndDate) {
        this.selectedEndDate = date;
        if (this.selectedStartDate > this.selectedEndDate) {
          [this.selectedStartDate, this.selectedEndDate] = [
            this.selectedEndDate,
            this.selectedStartDate,
          ];
        }
      } else {
        this.selectedStartDate = date;
        this.selectedEndDate = null;
      }
    }

    this.triggerSelectCallback();
    this.render();
  };

  this.changeMonth = function (offset) {
    this.currentDate.setMonth(this.currentDate.getMonth() + offset);
    this.currentDate.setDate(1); // Reset to the first day of the month
    this.render();
  };

  this.triggerSelectCallback = function () {
    if (this.options.onSelect) {
      if (this.options.mode === 'range' && this.selectedStartDate && this.selectedEndDate) {
        this.options.onSelect(this.selectedStartDate, this.selectedEndDate);
      } else if (this.options.mode === 'single' && this.selectedStartDate) {
        this.options.onSelect(this.selectedStartDate);
      }
    }
  };

  this.getMonthName = function (monthIndex) {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthNames[monthIndex];
  };
}
