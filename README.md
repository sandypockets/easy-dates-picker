# easy-dates-picker
`easy-dates-picker` is a super lightweight, zero-dependency, customizable date picker library, written in vanilla JavaScript. 

![npm](https://img.shields.io/npm/dt/easy-dates-picker)
![npm](https://img.shields.io/npm/dw/easy-dates-picker)
![GitHub issues](https://img.shields.io/github/issues/sandypockets/easy-dates-picker)
![GitHub pull requests](https://img.shields.io/github/issues-pr/sandypockets/easy-dates-picker)
![NPM](https://img.shields.io/npm/l/easy-dates-picker)

Is this the right library for me?

- You need a date picker with zero external dependencies.
- You need both single and/or range date selection.
- You need a localized date picker with 10 languages included.
- You need a date picker that can automatically detect and display the correct language.
- Accessibility and cross-browser compatibility are important for your project.
- You need a date picker that can be easily styled beyond the defaults.
- Your project does not use a virtual DOM.
- You need a date picker that's lightning fast to set up.

## Getting started
Our Date Picker is as quick to set up as it is lightweight. Follow the directions and example below to learn how to integrate `easy-dates-picker` in your project. 

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
  blockedDays: [], // An array of week day indexes that won't be selectable (0=sunday, 1=monday, etc)
  showDayNames: true, // Display the day name at the top of the calendar
  textInputEnabled: true, // Display an input field with the selected date. The calendar becomes visible when clicking the input
  darkMode: false, // Use light or dark colour scheme
  language: 'en', // language ISO code, defaults to en -> ignored if usePageLanguage is true
  usePageLanguage: true, // Looks for a lang attribute on the page, and if the language is supported, uses it
  usePageLanguageFallback: 'en' // If usePageLanguage is true, and the page language is not supported, use this language
};
```

Of these options, only `onSelect` is required. The others will fallback to defaults if not provided. 

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

## How to Contribute
Contributions are welcome! If you have a feature request, bug report, or a suggestion, please open an issue in the GitHub repository.

To contribute code:

1. Fork the repository.
2. Create a new branch for each feature or improvement.
3. Send a pull request from each feature branch to the main branch.
4. Please adhere to the existing code style and conventions.

The project uses Prettier to manage code style. Before committing your code, please be sure to format your code by running `npm run prettier`

## License
MIT. See [LICENSE.md](./LICENSE.md)