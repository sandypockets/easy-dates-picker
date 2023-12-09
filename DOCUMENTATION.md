## Getting started
The Date Picker is as quick to set up as it is lightweight. Follow the directions and example below to learn how to integrate `easy-dates-picker` in your project.

### Package manager

```bash
npm install easy-dates-picker
```

Then import the library into your code.

```js
import DatePicker from 'easy-dates-picker';
```

### JS Deliver
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easy-dates-picker/dist/datepicker.css">
<script src="https://cdn.jsdelivr.net/npm/easy-dates-picker/dist/datepicker.bundle.js"></script>
```

### Set up
When creating a new Date Picker, the picker accepts two arguments:
1. An element ID
2. An `options` object

The element ID should correspond to an empty div in your project. This is where the Date Picker will mount.

#### Options
The `options` object is used to pass additional arguments to the picker on initialization. Below is an example of an `options` object that will be initialized with the picker.

```javascript
const options = {
  mode: 'single', // 'single' or 'range'
  onSelect: yourDatePickerCallback, // Callback triggered a date or date range is selected
  blockedDays: [0, 6], // Array of week day indexes that won't be selectable. Example blocks Sat and Sun (0=sunday, 1=monday, etc)
  showDayNames: true, // Display the day name at the top of the calendar
  textInputEnabled: true, // Display an input field with the selected date. The calendar becomes visible when clicking the input
  darkMode: false, // Use light or dark colour scheme
  language: 'en', // language ISO code, defaults to en -> ignored if usePageLanguage is true
  usePageLanguage: true, // Looks for a lang attribute on the page, and if the language is supported, uses it
  usePageLanguageFallback: 'en' // If usePageLanguage is true, and the page language is not supported, use this language
};
```

Of these options, only `onSelect` is required. For other options not provided, they fallback to these defaults:

```javascript
const options = {
  mode: 'single',
  onSelect: yourDatePickerCallback, // Required, there is no fallback
  blockedDays: [],
  showDayNames: true,
  textInputEnabled: false,
  darkMode: false,
  language: 'en',
  usePageLanguage: false,
  usePageLanguageFallback: 'en'
};
```

#### `onSelect` callback
The `options` object requires that you provide a callback function. The callback will run when the user picks a new date. The callback has access to `startDate` and (if using a range) `endDate`.

Below is an example of a callback to log the `startDate` and `endDate` to the console when they change.

```javascript
function yourCustomCallbackFunction(startDate, endDate) {
  console.log('Start date selected:', startDate.toDateString());
  console.log('End date selected:', endDate.toDateString());
}
```

And the callback function is passed to the `onSelect` property in the `options`.

```javascript
const options = {
  mode: 'single',
  onSelect: yourCustomCallbackFunction, // Callback triggered a date or date range is selected
};
```

Then use your element ID from the earlier steps with your new `options` object to initialize the Date Picker.

```javascript
const datePicker = new DatePicker('your-element-id', options);
datePicker.init();
```

#### Example implementation with JS Deliver

<details>
<summary>Click to view example code</summary>

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Easy Dates Picker Demo</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easy-dates-picker/dist/datepicker.css">
    </head>
    <body>
        <!--  Date Picker mounted here  -->
        <div id="easy-dates-picker"></div>
        <script src="https://cdn.jsdelivr.net/npm/easy-dates-picker/dist/datepicker.bundle.js"></script>
        <!--  Initialize Date Picker in script -->
        <script>
          document.addEventListener('DOMContentLoaded', function () {
            
            function datePickerCallback(startDate, endDate) {
              if (endDate) {
                console.log(
                  'Date Range Selected:',
                  startDate.toDateString(),
                  'to',
                  endDate.toDateString()
                );
              } else {
                console.log('Date Selected:', startDate.toDateString());
              }
            }

            const options = {
              mode: 'single', // 'single' or 'range', defaults to 'single'
              onSelect: datePickerCallback, // Callback for whenever a date or date range is selected - Required
              blockedDays: [0, 6], // Prevent Saturday and Sunday from being selected
              showDayNames: true,
              textInputEnabled: true, // Show input field, calendar displays on click
              darkMode: false,
              language: 'en', // language ISO code, defaults to en -> ignored if usePageLanguage is true
              usePageLanguage: true, // Looks for a lang attribute on the page, and if the language is supported, uses it
              usePageLanguageFallback: 'en' // If usePageLanguage is true, and the page language is not supported, use this language
            };
        
            const datePicker = new DatePicker('easy-dates-picker', options);
            datePicker.init();
          });
        </script>
    </body>
</html>
```
</details>

## Localization
The `easy-dates-picker` is equipped with robust localization capabilities, supporting a wide range of languages to accommodate global audiences. This feature ensures that users experience the Date Picker in their preferred language, with appropriate formats for dates, month names, day names, and interface labels.

### Supported Languages
The Date Picker supports the following languages, each represented by its respective ISO language code.

<details>
<summary>View all supported languages</summary>

- Bulgarian (`bg-BG`)
- Czech (`cs`)
- Danish (`da`)
- German (`de`)
- Greek (`el`)
- English (`en`)
- Spanish (`es`)
- Finnish (`fi`)
- French (`fr`)
- Croatian (`hr-HR`)
- Hungarian (`hu`)
- Indonesian (`id`)
- Italian (`it`)
- Japanese (`ja`)
- Korean (`ko`)
- Lithuanian (`lt-LT`)
- Dutch (`nl`)
- Norwegian Bokmål (`nb`)
- Polish (`pl`)
- Brazilian Portuguese (`pt-BR`)
- European Portuguese (`pt-PT`)
- Romanian (`ro-RO`)
- Russian (`ru`)
- Slovak (`sk-SK`)
- Slovenian (`sl-SL`)
- Swedish (`sv`)
- Thai (`th`)
- Turkish (`tr`)
- Vietnamese (`vi`)
- Chinese (Simplified) (`zh-CN`)
- Chinese (Traditional) (`zh-TW`)


</details>

### Implementing Localization
There are various ways to localize the Date Picker. 

#### Single language
If you only need one language, then you can set the `language` option in your `options` object to your desired language's ISO code.

```javascript
const options = {
  language: 'es', // set to Spanish
};
```

#### Automatic localization
If you want the Date Picker to adapt to the language of the page it's mounted on, then you can set the `usePageLanguage` option in your options object to `true`. You do not need to set a `language`, since the page language will be detected to match the UI. However it is recommended that you use the `usePageLanguageFallback` to set a fallback language in case the page language is not supported, or was set incorrectly. 

```javascript
const options = {
  usePageLanguage: true,
  usePageLanguageFallback: 'en' // Fallback to English
};
```