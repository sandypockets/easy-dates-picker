import DatePicker from '../src/datePicker';

jest.useFakeTimers();
let datePicker;
const containerId = 'test-container';

describe('DatePicker', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="${containerId}"></div>`;
    datePicker = new DatePicker(containerId, {
      mode: 'single',
      onSelect: jest.fn(),
      blockedDays: [0, 6], // Sundays and Saturdays
      showDayNames: true,
    });
    datePicker.init();
  });

  describe('Initialization and Rendering', () => {
    test('should render date picker correctly', () => {
      const datePickerElement = document.getElementById(containerId);
      expect(datePickerElement).not.toBeNull();
      expect(datePickerElement.querySelector('.datepicker-header')).not.toBeNull();
      expect(datePickerElement.querySelector('.datepicker-days')).not.toBeNull();
    });

    test('initializes with default options when no options are provided', () => {
      const datePickerWithDefaults = new DatePicker(containerId);
      datePickerWithDefaults.init();
      expect(datePickerWithDefaults.options).toMatchObject({
        mode: 'single',
        onSelect: null,
        blockedDays: [],
        showDayNames: true,
      });
    });

    test('renders day names when showDayNames is true', () => {
      const dayNames = datePicker.element.querySelector('.datepicker-day-names');
      expect(dayNames).not.toBeNull();
      expect(dayNames.children.length).toBe(7); // 7 days in a week
    });

    test('does not render day names when showDayNames is false', () => {
      datePicker.options.showDayNames = false;
      datePicker.render();
      const dayNames = datePicker.element.querySelector('.datepicker-day-names');
      expect(dayNames).toBeNull();
    });

    test('displays correct month names in header', () => {
      datePicker.currentDate = new Date(2023, 6, 1); // July 1, 2023
      datePicker.render();
      const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
      expect(monthDisplay).toContain('July 2023');
    });

    test('renders and handles days from adjacent months correctly', () => {
      // Directly set currentDate to a day in the next month
      datePicker.currentDate = new Date(2023, 6, 1); // July 1, 2023
      datePicker.render();
      // Check if the currentDate has moved to the next month
      expect(datePicker.currentDate.getMonth()).toBe(6); // July
    });
  });

  describe('Corner Style', () => {
    test('applies round style by default', () => {
      datePicker = new DatePicker(containerId, {});
      datePicker.init();
      expect(document.getElementById(containerId).classList.contains('round')).toBe(true);
    });

    test('applies round style when specified', () => {
      datePicker = new DatePicker(containerId, { cornerStyle: 'round' });
      datePicker.init();
      expect(document.getElementById(containerId).classList.contains('round')).toBe(true);
    });

    test('applies square style when specified', () => {
      datePicker = new DatePicker(containerId, { cornerStyle: 'square' });
      datePicker.init();
      expect(document.getElementById(containerId).classList.contains('square')).toBe(true);
    });

    test('does not apply round style when square is specified', () => {
      datePicker = new DatePicker(containerId, { cornerStyle: 'square' });
      datePicker.init();
      expect(document.getElementById(containerId).classList.contains('round')).toBe(false);
    });

    test('does not apply square style when round is specified', () => {
      datePicker = new DatePicker(containerId, { cornerStyle: 'round' });
      datePicker.init();
      expect(document.getElementById(containerId).classList.contains('square')).toBe(false);
    });
  });
});
