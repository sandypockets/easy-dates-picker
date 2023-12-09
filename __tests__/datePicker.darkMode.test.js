import DatePicker from '../src/datePicker';

describe('Dark/light mode UI', () => {
  let datePicker;
  const containerId = 'test-container';

  beforeEach(() => {
    document.body.innerHTML = `<div id="${containerId}"></div>`;
  });

  test('adds dark class to the outermost parent when darkMode is true', () => {
    datePicker = new DatePicker(containerId, {
      mode: 'single',
      onSelect: jest.fn(),
      darkMode: true,
    });
    datePicker.init();

    const containerElement = document.getElementById(containerId);
    expect(containerElement.classList.contains('dark')).toBeTruthy();
  });

  test('does not add dark class to the outermost parent when darkMode is false', () => {
    datePicker = new DatePicker(containerId, {
      mode: 'single',
      onSelect: jest.fn(),
      darkMode: false,
    });
    datePicker.init();

    const containerElement = document.getElementById(containerId);
    expect(containerElement.classList.contains('dark')).toBeFalsy();
  });
});
