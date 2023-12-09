import DatePicker from '../src/datePicker';

jest.useFakeTimers();

const containerId = 'test-container';
let datePicker;

describe('Localization', () => {
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

describe('Localization for Bulgarian (bg-BG)', () => {
  let datePicker;

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

  test('displays day names correctly in Bulgarian', () => {
    datePicker.options.language = 'bg-BG';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Нд'); // Sunday in Bulgarian
    expect(dayNames).toContain('Пн'); // Monday in Bulgarian
  });

  test('displays month names correctly in Bulgarian', () => {
    datePicker.options.language = 'bg-BG';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Януари 2023');
  });
});

describe('Localization for Czech (cs)', () => {
  let datePicker;

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

  test('displays day names correctly in Czech', () => {
    datePicker.options.language = 'cs';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Ne'); // Sunday in Czech
    expect(dayNames).toContain('Po'); // Monday in Czech
  });

  test('displays month names correctly in Czech', () => {
    datePicker.options.language = 'cs';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Leden 2023');
  });
});

describe('Localization for Danish (da)', () => {
  let datePicker;

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

  test('displays day names correctly in Danish', () => {
    datePicker.options.language = 'da';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Søn'); // Sunday in Danish
    expect(dayNames).toContain('Man'); // Monday in Danish
  });

  test('displays month names correctly in Danish', () => {
    datePicker.options.language = 'da';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Januar 2023');
  });
});

describe('Localization for Greek (el)', () => {
  let datePicker;

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

  test('displays day names correctly in Greek', () => {
    datePicker.options.language = 'el';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Κυρ'); // Sunday in Greek
    expect(dayNames).toContain('Δευ'); // Monday in Greek
  });

  test('displays month names correctly in Greek', () => {
    datePicker.options.language = 'el';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Ιανουάριος 2023');
  });
});

describe('Localization for Finnish (fi)', () => {
  let datePicker;

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

  test('displays day names correctly in Finnish', () => {
    datePicker.options.language = 'fi';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Su'); // Sunday in Finnish
    expect(dayNames).toContain('Ma'); // Monday in Finnish
  });

  test('displays month names correctly in Finnish', () => {
    datePicker.options.language = 'fi';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Tammikuu 2023');
  });
});

describe('Localization for Croatian (hr-HR)', () => {
  let datePicker;

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

  test('displays day names correctly in Croatian', () => {
    datePicker.options.language = 'hr-HR';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Ned'); // Sunday in Croatian
    expect(dayNames).toContain('Pon'); // Monday in Croatian
  });

  test('displays month names correctly in Croatian', () => {
    datePicker.options.language = 'hr-HR';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Siječanj 2023');
  });
});

describe('Localization for Hungarian (hu)', () => {
  let datePicker;

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

  test('displays day names correctly in Hungarian', () => {
    datePicker.options.language = 'hu';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('V'); // Sunday in Hungarian
    expect(dayNames).toContain('H'); // Monday in Hungarian
  });

  test('displays month names correctly in Hungarian', () => {
    datePicker.options.language = 'hu';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Január 2023');
  });
});

describe('Localization for Indonesian (id)', () => {
  let datePicker;

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

  test('displays day names correctly in Indonesian', () => {
    datePicker.options.language = 'id';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Min'); // Sunday in Indonesian
    expect(dayNames).toContain('Sen'); // Monday in Indonesian
  });

  test('displays month names correctly in Indonesian', () => {
    datePicker.options.language = 'id';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Januari 2023');
  });
});

describe('Localization for Korean (ko)', () => {
  let datePicker;

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

  test('displays day names correctly in Korean', () => {
    datePicker.options.language = 'ko';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('일'); // Sunday in Korean
    expect(dayNames).toContain('월'); // Monday in Korean
  });

  test('displays month names correctly in Korean', () => {
    datePicker.options.language = 'ko';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('1월 2023');
  });
});

describe('Localization for Lithuanian (lt-LT)', () => {
  let datePicker;

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

  test('displays day names correctly in Lithuanian', () => {
    datePicker.options.language = 'lt-LT';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Sek'); // Sunday in Lithuanian
    expect(dayNames).toContain('Pir'); // Monday in Lithuanian
  });

  test('displays month names correctly in Lithuanian', () => {
    datePicker.options.language = 'lt-LT';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Sausis 2023');
  });
});

describe('Localization for Norwegian Bokmål (nb)', () => {
  let datePicker;

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

  test('displays day names correctly in Norwegian Bokmål', () => {
    datePicker.options.language = 'nb';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Søn'); // Sunday in Norwegian Bokmål
    expect(dayNames).toContain('Man'); // Monday in Norwegian Bokmål
  });

  test('displays month names correctly in Norwegian Bokmål', () => {
    datePicker.options.language = 'nb';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Januar 2023');
  });
});

describe('Localization for Polish (pl)', () => {
  let datePicker;

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

  test('displays day names correctly in Polish', () => {
    datePicker.options.language = 'pl';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('N'); // Sunday in Polish
    expect(dayNames).toContain('Pn'); // Monday in Polish
  });

  test('displays month names correctly in Polish', () => {
    datePicker.options.language = 'pl';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Styczeń 2023');
  });
});

describe('Localization for Brazilian Portuguese (pt-BR)', () => {
  let datePicker;

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

  test('displays day names correctly in Brazilian Portuguese', () => {
    datePicker.options.language = 'pt-BR';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Dom'); // Sunday in Brazilian Portuguese
    expect(dayNames).toContain('Seg'); // Monday in Brazilian Portuguese
  });

  test('displays month names correctly in Brazilian Portuguese', () => {
    datePicker.options.language = 'pt-BR';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Janeiro 2023');
  });
});

describe('Localization for European Portuguese (pt-PT)', () => {
  let datePicker;

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

  test('displays day names correctly in European Portuguese', () => {
    datePicker.options.language = 'pt-PT';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Dom'); // Sunday in European Portuguese
    expect(dayNames).toContain('Seg'); // Monday in European Portuguese
  });

  test('displays month names correctly in European Portuguese', () => {
    datePicker.options.language = 'pt-PT';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Janeiro 2023');
  });
});

describe('Localization for Romanian (ro-RO)', () => {
  let datePicker;

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

  test('displays day names correctly in Romanian', () => {
    datePicker.options.language = 'ro-RO';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Dum'); // Sunday in Romanian
    expect(dayNames).toContain('Lun'); // Monday in Romanian
  });

  test('displays month names correctly in Romanian', () => {
    datePicker.options.language = 'ro-RO';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Ianuarie 2023');
  });
});

describe('Localization for Slovak (sk-SK)', () => {
  let datePicker;

  beforeEach(() => {
    document.body.innerHTML = `<div id="${containerId}"></div>`;

    datePicker = new DatePicker(containerId, {
      mode: 'single',
      onSelect: jest.fn(),
      blockedDays: [0, 6],
      showDayNames: true,
    });
    datePicker.init();
  });

  test('displays day names correctly in Slovak', () => {
    datePicker.options.language = 'sk-SK';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Ne'); // Sunday in Slovak
    expect(dayNames).toContain('Po'); // Monday in Slovak
  });

  test('displays month names correctly in Slovak', () => {
    datePicker.options.language = 'sk-SK';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();

    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Január 2023');
  });
});

describe('Localization for Slovenian (sl-SL)', () => {
  let datePicker;

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

  test('displays day names correctly in Slovenian', () => {
    datePicker.options.language = 'sl-SL';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Ned'); // Sunday in Slovenian
    expect(dayNames).toContain('Pon'); // Monday in Slovenian
  });

  test('displays month names correctly in Slovenian', () => {
    datePicker.options.language = 'sl-SL';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Januar 2023');
  });
});

describe('Localization for Swedish (sv)', () => {
  let datePicker;

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

  test('displays day names correctly in Swedish', () => {
    datePicker.options.language = 'sv';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Sön'); // Sunday in Swedish
    expect(dayNames).toContain('Mån'); // Monday in Swedish
  });

  test('displays month names correctly in Swedish', () => {
    datePicker.options.language = 'sv';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Januari 2023');
  });
});

describe('Localization for Thai (th)', () => {
  let datePicker;

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

  test('displays day names correctly in Thai', () => {
    datePicker.options.language = 'th';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('อา.'); // Sunday in Thai
    expect(dayNames).toContain('จ.'); // Monday in Thai
  });

  test('displays month names correctly in Thai', () => {
    datePicker.options.language = 'th';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('มกราคม 2023');
  });
});

describe('Localization for Turkish (tr)', () => {
  let datePicker;

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

  test('displays day names correctly in Turkish', () => {
    datePicker.options.language = 'tr';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('Paz'); // Sunday in Turkish
    expect(dayNames).toContain('Pzt'); // Monday in Turkish
  });

  test('displays month names correctly in Turkish', () => {
    datePicker.options.language = 'tr';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Ocak 2023');
  });
});

describe('Localization for Vietnamese (vi)', () => {
  let datePicker;

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

  test('displays day names correctly in Vietnamese', () => {
    datePicker.options.language = 'vi';
    datePicker.init();
    const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
    expect(dayNames).toContain('CN'); // Sunday in Vietnamese
    expect(dayNames).toContain('T2'); // Monday in Vietnamese
  });

  test('displays month names correctly in Vietnamese', () => {
    datePicker.options.language = 'vi';
    datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
    datePicker.init();
    const monthDisplay = datePicker.element.querySelector('.month-display').textContent;
    expect(monthDisplay).toContain('Tháng Một 2023');
  });
});

describe('Localization with Page Language', () => {
  let datePicker;

  beforeEach(() => {
    document.body.innerHTML = `<div id="${containerId}"></div>`;
  });

  const setHtmlLangAttribute = lang => {
    document.documentElement.lang = lang;
  };

  const testPageLanguageSetting = (lang, expectedDayName, expectedMonthName) => {
    test(`adapts to page language ${lang}`, () => {
      setHtmlLangAttribute(lang);
      datePicker = new DatePicker(containerId, {
        mode: 'single',
        onSelect: jest.fn(),
        usePageLanguage: true,
      });
      datePicker.init();
      datePicker.currentDate = new Date(2023, 0, 1); // January 1, 2023
      datePicker.render();

      const dayNames = datePicker.element.querySelector('.datepicker-day-names').textContent;
      const monthDisplay = datePicker.element.querySelector('.month-display').textContent;

      expect(dayNames).toContain(expectedDayName);
      expect(monthDisplay).toContain(expectedMonthName);
    });
  };

  testPageLanguageSetting('en', 'Sun', 'January 2023');
  testPageLanguageSetting('fr', 'Dim', 'Janvier 2023');
  testPageLanguageSetting('es', 'Dom', 'Enero 2023');
  testPageLanguageSetting('de', 'So', 'Januar 2023');
  testPageLanguageSetting('it', 'Dom', 'Gennaio 2023');
  testPageLanguageSetting('nl', 'Zo', 'Januari 2023');
  testPageLanguageSetting('pt', 'Dom', 'Janeiro 2023');
  testPageLanguageSetting('ja', '日', '一月 2023');
  testPageLanguageSetting('zh-CN', '日', '一月 2023');
  testPageLanguageSetting('zh-TW', '日', '一月 2023');
  testPageLanguageSetting('ru', 'Вс', 'Январь 2023');
  testPageLanguageSetting('bg-BG', 'Нд', 'Януари 2023');
  testPageLanguageSetting('cs', 'Ne', 'Leden 2023');
  testPageLanguageSetting('da', 'Søn', 'Januar 2023');
  testPageLanguageSetting('el', 'Κυρ', 'Ιανουάριος 2023');
  testPageLanguageSetting('fi', 'Su', 'Tammikuu 2023');
  testPageLanguageSetting('hr-HR', 'Ned', 'Siječanj 2023');
  testPageLanguageSetting('hu', 'V', 'Január 2023');
  testPageLanguageSetting('id', 'Min', 'Januari 2023');
  testPageLanguageSetting('ko', '일', '1월 2023');
  testPageLanguageSetting('lt-LT', 'Sek', 'Sausis 2023');
  testPageLanguageSetting('nb', 'Søn', 'Januar 2023');
  testPageLanguageSetting('pl', 'N', 'Styczeń 2023');
  testPageLanguageSetting('pt-BR', 'Dom', 'Janeiro 2023');
  testPageLanguageSetting('pt-PT', 'Dom', 'Janeiro 2023');
  testPageLanguageSetting('ro-RO', 'Dum', 'Ianuarie 2023');
  testPageLanguageSetting('sk-SK', 'Ne', 'Január 2023');
  testPageLanguageSetting('sl-SL', 'Ned', 'Januar 2023');
  testPageLanguageSetting('sv', 'Sön', 'Januari 2023');
  testPageLanguageSetting('th', 'อา.', 'มกราคม 2023');
  testPageLanguageSetting('tr', 'Paz', 'Ocak 2023');
  testPageLanguageSetting('vi', 'CN', 'Tháng Một 2023');

  afterEach(() => {
    setHtmlLangAttribute('en');
  });
});
