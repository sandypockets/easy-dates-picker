import './styles/datepicker.css';

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
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfLastMonth = new Date(year, month, 0).getDate();
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    // Adjust for leap year if February
    if (month === 1 && isLeapYear) {
      daysInMonth = 29;
    }

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
    const prevMonthButton = this.element.querySelector('.prev-month');
    const nextMonthButton = this.element.querySelector('.next-month');

    // Remove existing listeners if any
    prevMonthButton.removeEventListener('click', this.prevMonthClickListener);
    nextMonthButton.removeEventListener('click', this.nextMonthClickListener);

    // Create new listeners
    this.prevMonthClickListener = () => this.changeMonth(-1);
    this.nextMonthClickListener = () => this.changeMonth(1);

    // Attach new listeners
    prevMonthButton.addEventListener('click', this.prevMonthClickListener);
    nextMonthButton.addEventListener('click', this.nextMonthClickListener);

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
    let year = this.currentDate.getFullYear();

    console.log('Clicked day:', day, 'Clicked month:', month, 'Current year:', year);

    // Adjust the year and month for days from the previous or next month
    if (month === -1) {
      month = 11; // December of the previous year
      year--;
    } else if (month === 12) {
      month = 0; // January of the next year
      year++;
    }

    // Create a new date object for the clicked day
    const clickedDate = new Date(year, month, day);

    // Update currentDate to the clicked date
    this.currentDate = clickedDate;

    if (this.options.mode === 'single') {
      this.selectedStartDate = clickedDate;
      this.selectedEndDate = null;
    } else if (this.options.mode === 'range') {
      if (!this.selectedStartDate || this.selectedEndDate) {
        this.selectedStartDate = clickedDate;
        this.selectedEndDate = null;
      } else if (clickedDate < this.selectedStartDate) {
        this.selectedEndDate = this.selectedStartDate;
        this.selectedStartDate = clickedDate;
      } else if (clickedDate >= this.selectedStartDate) {
        this.selectedEndDate = clickedDate;
      }
    }
    this.triggerSelectCallback();
    this.render();
  };

  this.changeMonth = function (offset) {
    console.log('Changing month. Current month:', this.currentDate.getMonth(), 'Offset:', offset);

    const currentYear = this.currentDate.getFullYear();
    const currentMonth = this.currentDate.getMonth();
    const currentDay = this.currentDate.getDate();

    const newDate = new Date(currentYear, currentMonth + offset, 1);
    const lastDayOfNewMonth = new Date(currentYear, newDate.getMonth() + 1, 0).getDate();
    newDate.setDate(Math.min(currentDay, lastDayOfNewMonth));

    this.currentDate = newDate;

    console.log('New month after change:', this.currentDate.getMonth());

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
