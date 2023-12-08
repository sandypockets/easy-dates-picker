export function attachEventListeners(element, changeMonth, handleDayClick) {
  const prevMonthButton = element.querySelector('.prev-month');
  const nextMonthButton = element.querySelector('.next-month');
  const calendarContainer = element.querySelector('.datepicker-calendar-container');
  const daysContainer = element.querySelector('.datepicker-days');

  // Remove any existing event listeners to prevent duplication
  prevMonthButton.removeEventListener('click', prevMonthButton.listener);
  nextMonthButton.removeEventListener('click', nextMonthButton.listener);
  daysContainer.removeEventListener('click', daysContainer.listener);
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
    const target = event.target.closest('.datepicker-day');
    if (target && !target.classList.contains('blocked')) {
      const day = parseInt(target.getAttribute('data-day'), 10);
      const month = parseInt(target.getAttribute('data-month'), 10);
      handleDayClick(day, month);
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
  document.addEventListener('click', document.listener);
}
