export function attachEventListeners(element, changeMonth, handleDayClick) {
  const prevMonthButton = element.querySelector('.prev-month');
  const nextMonthButton = element.querySelector('.next-month');
  const calendarContainer = element.querySelector('.datepicker-calendar-container');
  const daysContainer = element.querySelector('.datepicker-days');
  const input = element.querySelector('.datepicker-input');

  // Remove any existing event listeners to prevent duplication
  prevMonthButton.removeEventListener('click', prevMonthButton.listener);
  nextMonthButton.removeEventListener('click', nextMonthButton.listener);
  daysContainer.removeEventListener('click', daysContainer.listener);
  daysContainer.removeEventListener('keydown', daysContainer.listener);
  input.removeEventListener('keydown', input.listener);
  document.removeEventListener('click', document.listener);

  // Define new listeners
  prevMonthButton.listener = event => {
    event.stopPropagation();
    changeMonth(-1);
  };
  nextMonthButton.listener = event => {
    event.stopPropagation();
    changeMonth(1);
  };
  daysContainer.listener = event => {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')) {
      const target = event.target.closest('.datepicker-day');
      if (target && !target.classList.contains('blocked')) {
        const day = parseInt(target.getAttribute('data-day'), 10);
        const month = parseInt(target.getAttribute('data-month'), 10);
        handleDayClick(day, month);
      }
    }
  };
  input.listener = event => {
    if (event.key === 'Enter') {
      const calendarContainer = element.querySelector('.datepicker-calendar-container');
      calendarContainer.style.display = calendarContainer.style.display === 'block' ? 'none' : 'block';
    }
  };
  document.listener = event => {
    if (!calendarContainer.contains(event.target) && !element.querySelector('.datepicker-input').contains(event.target)) {
      calendarContainer.style.display = 'none';
    }
  };

  // Attach new listeners
  prevMonthButton.addEventListener('click', prevMonthButton.listener);
  nextMonthButton.addEventListener('click', nextMonthButton.listener);
  daysContainer.addEventListener('click', daysContainer.listener);
  daysContainer.addEventListener('keydown', daysContainer.listener);
  input.addEventListener('keydown', input.listener);
  document.addEventListener('click', document.listener);
}
