export function attachEventListeners(element, changeMonth, handleDayClick) {
  const prevMonthButton = element.querySelector('.prev-month');
  const nextMonthButton = element.querySelector('.next-month');
  const calendarContainer = element.querySelector('.datepicker-calendar-container');
  const daysContainer = element.querySelector('.datepicker-days');

  prevMonthButton.removeEventListener('click', prevMonthButton.listener);
  nextMonthButton.removeEventListener('click', nextMonthButton.listener);
  daysContainer.removeEventListener('click', daysContainer.listener);
  daysContainer.removeEventListener('keydown', daysContainer.listener);
  document.removeEventListener('click', document.listener);

  function createMonthChangeListener(offset, buttonClass) {
    return event => {
      event.stopPropagation();
      const activeElement = document.activeElement;
      changeMonth(offset);
      requestAnimationFrame(() => {
        if (activeElement && activeElement.className.includes(buttonClass)) {
          element.querySelector(`.${buttonClass}`).focus();
        }
      });
    };
  }

  prevMonthButton.listener = createMonthChangeListener(-1, 'prev-month');
  nextMonthButton.listener = createMonthChangeListener(1, 'next-month');

  prevMonthButton.addEventListener('click', prevMonthButton.listener);
  nextMonthButton.addEventListener('click', nextMonthButton.listener);
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
  document.listener = event => {
    if (!calendarContainer.contains(event.target) && !element.querySelector('.datepicker-input').contains(event.target)) {
      calendarContainer.style.display = 'none';
    }
  };

  prevMonthButton.addEventListener('click', prevMonthButton.listener);
  nextMonthButton.addEventListener('click', nextMonthButton.listener);
  daysContainer.addEventListener('click', daysContainer.listener);
  daysContainer.addEventListener('keydown', daysContainer.listener);
  document.addEventListener('click', document.listener);
}
