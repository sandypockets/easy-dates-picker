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
    showDayNames: options.showDayNames ?? true,
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
      ${this.options.showDayNames ? this.generateDayNames() : ''}
      <div class="datepicker-days">
        ${this.generateCalendar()}
      </div>
    `;

    this.attachEventListeners();
  };

  this.generateDayNames = function () {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return `<div class="datepicker-day-names">${dayNames
      .map(day => `<div>${day}</div>`)
      .join('')}</div>`;
  };

  this.generateCalendar = function () {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfLastMonth = new Date(year, month, 0).getDate();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let firstDayIndex = firstDayOfMonth.getDay();

    let calendarHtml = '<div class="datepicker-week">';

    // days of last month
    for (let i = firstDayIndex; i > 0; i--) {
      const day = lastDayOfLastMonth - i + 1;
      calendarHtml += this.generateDayCell(year, month - 1, day, false);
    }
    // days of current month
    for (let i = 1; i <= daysInMonth; i++) {
      calendarHtml += this.generateDayCell(year, month, i);
    }
    // days of next month
    let lastDayIndex = new Date(year, month, daysInMonth).getDay();
    for (let i = 1; lastDayIndex < 6; i++, lastDayIndex++) {
      calendarHtml += this.generateDayCell(year, month + 1, i, false);
    }
    calendarHtml += '</div>'; // close the last week

    return calendarHtml;
  };

  this.generateDayCell = function (year, month, day, isCurrentMonth = true) {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();
    let className = isCurrentMonth ? 'datepicker-day current-month' : 'datepicker-day';

    if (this.options.blockedDays.includes(dayOfWeek)) {
      className += ' blocked';
    } else if (isCurrentMonth && this.isDateSelected(date)) {
      className += ' selected';
    } else if (isCurrentMonth && this.isDateInRange(date)) {
      className += ' in-range';
    }

    return `<div class="${className}" data-day="${day}" data-month="${month}"><span>${day}</span></div>`;
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
      const target = event.target.closest('.datepicker-day');
      if (target && !target.classList.contains('blocked')) {
        const day = parseInt(target.getAttribute('data-day'), 10);
        const month = parseInt(target.getAttribute('data-month'), 10);
        this.handleDayClick(day, month);
      }
    };

    this.element.querySelector('.datepicker-days').addEventListener('click', this.dayClickListener);
  };

  this.handleDayClick = function (day, month) {
    const year = this.currentDate.getFullYear();
    const date = new Date(year, month, day);

    if (month !== this.currentDate.getMonth()) {
      this.currentDate.setMonth(month);
      this.currentDate.setFullYear(year);
    }

    if (this.options.mode === 'single') {
      this.selectedStartDate = date;
      this.selectedEndDate = null;
    }

    if (this.options.mode === 'range') {
      if (!this.selectedStartDate || this.selectedEndDate) {
        this.selectedStartDate = date;
        this.selectedEndDate = null;
      } else if (date < this.selectedStartDate) {
        this.selectedEndDate = this.selectedStartDate;
        this.selectedStartDate = date;
      } else if (date > this.selectedStartDate) {
        this.selectedEndDate = date;
      }
    }

    this.triggerSelectCallback();
    this.render();
  };

  this.changeMonth = function (offset) {
    this.currentDate.setMonth(this.currentDate.getMonth() + offset);
    this.render();
  };

  this.triggerSelectCallback = function () {
    if (this.options.onSelect) {
      this.options.onSelect(this.selectedStartDate, this.selectedEndDate);
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
