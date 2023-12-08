import DatePicker from "../src/datePicker";

jest.useFakeTimers();

describe('Localization', () => {
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

  test('displays day names correctly in French', () => {
    datePicker.options.language = 'fr';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Dim'); // Sunday in French
    expect(dayNames).toContain('Lun'); // Monday in French
  });

  test('displays month names correctly in French', () => {
    datePicker.options.language = 'fr';
    datePicker.currentDate = new Date(2023, 11, 1); // December 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Décembre 2023');
  });

  test('displays day names correctly in Spanish', () => {
    datePicker.options.language = 'es';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Dom'); // Sunday in Spanish
    expect(dayNames).toContain('Lun'); // Monday in Spanish
  });

  test('displays month names correctly in Spanish', () => {
    datePicker.options.language = 'es';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Enero 2023');
  });

  test('displays day names correctly in German', () => {
    datePicker.options.language = 'de';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('So'); // Sunday in German
    expect(dayNames).toContain('Mo'); // Monday in German
  });

  test('displays month names correctly in German', () => {
    datePicker.options.language = 'de';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Januar 2023');
  });

  // Italian
  test('displays day names correctly in Italian', () => {
    datePicker.options.language = 'it';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Dom'); // Sunday in Italian
    expect(dayNames).toContain('Lun'); // Monday in Italian
  });

  test('displays month names correctly in Italian', () => {
    datePicker.options.language = 'it';
    datePicker.currentDate = new Date(2023, 2, 1); // March 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Marzo 2023');
  });

  // Russian
  test('displays day names correctly in Russian', () => {
    datePicker.options.language = 'ru';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Вс'); // Sunday in Russian
    expect(dayNames).toContain('Пн'); // Monday in Russian
  });

  test('displays month names correctly in Russian', () => {
    datePicker.options.language = 'ru';
    datePicker.currentDate = new Date(2023, 4, 1); // May 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Май 2023');
  });

  test('displays day names correctly in Dutch', () => {
    datePicker.options.language = 'nl';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Zo'); // Sunday in Dutch
    expect(dayNames).toContain('Ma'); // Monday in Dutch
  });

  test('displays month names correctly in Dutch', () => {
    datePicker.options.language = 'nl';
    datePicker.currentDate = new Date(2023, 3, 1); // April 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('April 2023');
  });

  // Portuguese
  test('displays day names correctly in Portuguese', () => {
    datePicker.options.language = 'pt';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Dom'); // Sunday in Portuguese
    expect(dayNames).toContain('Seg'); // Monday in Portuguese
  });

  test('displays month names correctly in Portuguese', () => {
    datePicker.options.language = 'pt';
    datePicker.currentDate = new Date(2023, 1, 1); // February 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Fevereiro 2023');
  });

  // Japanese
  test('displays day names correctly in Japanese', () => {
    datePicker.options.language = 'ja';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('日'); // Sunday in Japanese
    expect(dayNames).toContain('月'); // Monday in Japanese
  });

  test('displays month names correctly in Japanese', () => {
    datePicker.options.language = 'ja';
    datePicker.currentDate = new Date(2023, 5, 1); // June 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('六月 2023'); // June 2023 in Japanese
  });

  // Simplified Chinese
  test('displays day names correctly in Simplified Chinese', () => {
    datePicker.options.language = 'zh-CN';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('日'); // Sunday in Chinese
    expect(dayNames).toContain('一'); // Monday in Chinese
  });

  test('displays month names correctly in Simplified Chinese', () => {
    datePicker.options.language = 'zh-CN';
    datePicker.currentDate = new Date(2023, 7, 1); // August 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('八月 2023');
  });

  // Traidiional Chinese
  test('displays day names correctly in Simplified Chinese', () => {
    datePicker.options.language = 'zh-TW';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('日'); // Sunday in Chinese
    expect(dayNames).toContain('一'); // Monday in Chinese
  });

  test('displays month names correctly in Simplified Chinese', () => {
    datePicker.options.language = 'zh-TW';
    datePicker.currentDate = new Date(2023, 7, 1); // August 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('八月 2023');
  });

});
