import DatePicker from '../src/datePicker'

describe('Leap year handling', () => {
  let datePicker;
  const containerId = 'test-container';

  beforeEach(() => {
    document.body.innerHTML = `<div id="${containerId}"></div>`;
    datePicker = new DatePicker(containerId, {
      mode: 'single',
      onSelect: jest.fn(),
      blockedDays: [0, 6], // Sundays and Saturdays
      showDayNames: true
    });
    datePicker.init();
  });

  test('should render correct number of days for February in a leap year', () => {
    datePicker.currentDate = new Date(2024, 1, 1); // February 1, 2024
    datePicker.init();
    const days = datePicker.element.querySelectorAll('.datepicker-day.current-month');
    expect(days.length).toBe(29); // 29 days in February for a leap year
  });

  test('leap year adds extra day to February, even with days blocked out', () => {
    datePicker.currentDate = new Date(2024, 1, 1); // February 1, 2024
    datePicker.init();
    const days = datePicker.element.querySelectorAll('.datepicker-day.current-month');
    expect(days.length).toBe(29);
  });
});