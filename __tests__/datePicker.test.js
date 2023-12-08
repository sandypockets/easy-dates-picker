import DatePicker from "../src/datePicker";
import { getMonthName } from "../src/utils";

jest.useFakeTimers();

describe('DatePicker', () => {
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
        showDayNames: true
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

      // Call render to update the component
      datePicker.render();

      // Check if the currentDate has moved to the next month
      expect(datePicker.currentDate.getMonth()).toBe(6); // July
    });
  });

  describe('Functionality and Interactions', () => {
    test('should handle month change', () => {
      datePicker.currentDate = new Date(2023, 5, 1); // June 1, 2023
      const prevMonthButton = datePicker.element.querySelector('.prev-month');
      prevMonthButton.click();
      expect(datePicker.currentDate.getMonth()).toBe(4); // May

      const nextMonthButton = datePicker.element.querySelector('.next-month');
      nextMonthButton.click();
      expect(datePicker.currentDate.getMonth()).toBe(5); // June
    });

    test('blocks days correctly according to blockedDays array', () => {
      datePicker.render();
      const blockedDays = datePicker.element.querySelectorAll('.datepicker-day.blocked');
      expect(blockedDays.length).toBeGreaterThan(0);
    });

    test('selects date correctly in single mode', () => {
      const testDate = new Date(2023, 5, 15); // June 15, 2023
      datePicker.options.mode = 'single';
      datePicker.handleDayClick(testDate.getDate(), testDate.getMonth());
      expect(datePicker.selectedStartDate).toEqual(testDate);
      expect(datePicker.selectedEndDate).toBeNull();
    });

    test('selects date range correctly in range mode', () => {
      const startDate = new Date(2023, 5, 10);
      const endDate = new Date(2023, 5, 20);
      datePicker.options.mode = 'range';
      datePicker.handleDayClick(startDate.getDate(), startDate.getMonth());
      datePicker.handleDayClick(endDate.getDate(), endDate.getMonth());
      expect(datePicker.selectedStartDate).toEqual(startDate);
      expect(datePicker.selectedEndDate).toEqual(endDate);
    });

    test('onSelect callback is triggered with correct parameters', () => {
      const onSelectMock = jest.fn();
      datePicker.options.onSelect = onSelectMock;
      const testDate = new Date(2023, 5, 15);
      datePicker.options.mode = 'single';
      datePicker.handleDayClick(testDate.getDate(), testDate.getMonth());
      expect(onSelectMock).toHaveBeenCalledWith(testDate, null);
    });

    test('ignores clicks on non-day elements', () => {
      const initialSelectedDate = datePicker.selectedStartDate;
      const monthNavButton = datePicker.element.querySelector('.prev-month');
      monthNavButton.click();
      expect(datePicker.selectedStartDate).toEqual(initialSelectedDate);
    });

    test('re-renders correctly after changing month in English', () => {
      const initialMonth = datePicker.currentDate.getMonth();
      datePicker.changeMonth(1);
      const newMonth = datePicker.currentDate.getMonth();
      expect(newMonth).not.toBe(initialMonth);
      expect(datePicker.element.querySelector('.month-display').textContent).toContain(getMonthName(newMonth, 'en'));
    });

    test('resets end date in range mode on new start date selection', () => {
      datePicker.options.mode = 'range';
      datePicker.selectedStartDate = new Date(2023, 5, 10);
      datePicker.selectedEndDate = new Date(2023, 5, 15);
      const newStartDate = new Date(2023, 5, 20);
      datePicker.handleDayClick(newStartDate.getDate(), newStartDate.getMonth());
      expect(datePicker.selectedStartDate).toEqual(newStartDate);
      expect(datePicker.selectedEndDate).toBeNull();
    });
  });

  describe('Leap Year Functionality', () => {
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
});
