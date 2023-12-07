# easy-dates-picker
`easy-dates-picker` is a super lightweight, zero-dependency, customizable date picker library, written in vanilla JavaScript. 

![npm](https://img.shields.io/npm/dt/easy-dates-picker)
![npm](https://img.shields.io/npm/dw/easy-dates-picker)
![GitHub issues](https://img.shields.io/github/issues/sandypockets/easy-dates-picker)
![GitHub pull requests](https://img.shields.io/github/issues-pr/sandypockets/easy-dates-picker)
![NPM](https://img.shields.io/npm/l/easy-dates-picker)

Is this the right library for me?

- [x] Your project does not use a virtual DOM.
- [x] You need a date picker with zero external dependencies.
- [x] You're looking for a library that offers both single and range date selection.
- [x] Customization is key for your project, and you require a date picker that can be easily styled and configured.
- [x] Accessibility and cross-browser compatibility are important for your project.
- [x] You need a date picker that's fast to set up.


## Usage
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

Example implementation with JS Deliver

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Test DatePicker</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easy-dates-picker/dist/datepicker.css">
    </head>
    <body>
        <div id="easy-dates-picker"></div>
        <script src="https://cdn.jsdelivr.net/npm/easy-dates-picker/dist/datepicker.bundle.js"></script>
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
        
            const datePickerOptions = {
              mode: 'range', // 'range' or 'single'
              onSelect: datePickerCallback,
              blockedDays: [0,6]
            };
        
            const datePicker = new DatePicker('easy-dates-picker', datePickerOptions);
        
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