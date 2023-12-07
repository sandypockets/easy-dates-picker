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
    textInputEnabled: options?.textInputEnabled ?? false,
    textInputPlaceholder: options?.textInputPlaceholder ?? 'Choose a date',
  };
  this.init = function () {
    this.render();
    this.attachEventListeners();
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

    const calendarContainer = document.createElement('div');
    calendarContainer.className = 'datepicker-calendar-container';
    calendarContainer.style.display = this.options.textInputEnabled ? 'none' : 'block';
    calendarContainer.innerHTML = `
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

    if (month === 1 && isLeapYear) {
      daysInMonth = 29;
    }

    let firstDayIndex = firstDayOfMonth.getDay();
    let calendarHtml = '<div class="datepicker-week">';

    for (let i = firstDayIndex; i > 0; i--) {
      const day = lastDayOfLastMonth - i + 1;
      calendarHtml += this.generateDayCell(year, month - 1, day, false);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      calendarHtml += this.generateDayCell(year, month, i);
    }

    let lastDayIndex = new Date(year, month, daysInMonth).getDay();
    for (let i = 1; lastDayIndex < 6; i++, lastDayIndex++) {
      calendarHtml += this.generateDayCell(year, month + 1, i, false);
    }
    calendarHtml += '</div>';

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
    const calendarContainer = this.element.querySelector('.datepicker-calendar-container');

    prevMonthButton.removeEventListener('click', this.prevMonthClickListener);
    nextMonthButton.removeEventListener('click', this.nextMonthClickListener);

    this.prevMonthClickListener = event => {
      event.stopPropagation();
      this.changeMonth(-1);
    };
    this.nextMonthClickListener = event => {
      event.stopPropagation();
      this.changeMonth(1);
    };

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

    const daysContainer = this.element.querySelector('.datepicker-days');
    daysContainer.addEventListener('click', this.dayClickListener);

    document.addEventListener('click', event => {
      if (
        !calendarContainer.contains(event.target) &&
        !this.element.querySelector('.datepicker-input').contains(event.target)
      ) {
        calendarContainer.style.display = 'none';
      }
    });
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
          this.element.querySelector('.datepicker-input').value =
            `${this.selectedStartDate.toDateString()} ${
              this.selectedEndDate.toDateString() !== undefined
                ? '- ' + this.selectedEndDate.toDateString()
                : ''
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
    const currentYear = this.currentDate.getFullYear();
    const currentMonth = this.currentDate.getMonth();
    const currentDay = this.currentDate.getDate();

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
