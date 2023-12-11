# easy-dates-picker
`easy-dates-picker` is a super lightweight, zero-dependency, localized, customizable date picker library, written in vanilla JavaScript. 

![npm bundle size](https://img.shields.io/bundlephobia/minzip/easy-dates-picker)
![npm bundle size](https://img.shields.io/bundlephobia/min/easy-dates-picker)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/sanypockets/easy-dates-picker/ci)
![GitHub issues](https://img.shields.io/github/issues/sandypockets/easy-dates-picker)
![GitHub pull requests](https://img.shields.io/github/issues-pr/sandypockets/easy-dates-picker)
![npm](https://img.shields.io/npm/dt/easy-dates-picker)
![npm](https://img.shields.io/npm/dw/easy-dates-picker)
![NPM](https://img.shields.io/npm/l/easy-dates-picker)

- Zero external dependencies
- Single or range date selection
- Localized - Over 30 languages included
- Optionally detect and display the parent page language
- Accessible, fully keyboard navigable
- Cross-browser compatible
- Light and dark mode
- Easy to style beyond the defaults
- Lightning fast set up

![examples](https://github.com/sandypockets/easy-dates-picker/blob/main/docs/examples.jpg?raw=true)

## Getting started
The `easy-dates-picker` is as quick to set up as it is lightweight. For detailed documentation, please view the [docs](https://github.com/sandypockets/easy-dates-picker/blob/main/DOCUMENTATION.md) in the repo.

Note: if you use the date picker with a library or framework that uses a virtual DOM (like React), then you might need to make some further modifications.

### Install with a package manager
```bash
npm install easy-dates-picker
```

```js
import DatePicker from 'easy-dates-picker';
```

### Install with JS Deliver
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easy-dates-picker/dist/datepicker.css">
<script src="https://cdn.jsdelivr.net/npm/easy-dates-picker/dist/datepicker.bundle.js"></script>
```

### Example implementation with JS Deliver

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Easy Dates Picker Demo</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easy-dates-picker/dist/datepicker.css">
    </head>
    <body>
        <div id="easy-dates-picker"></div>
        <script src="https://cdn.jsdelivr.net/npm/easy-dates-picker/dist/datepicker.bundle.js"></script>
        <script>
          document.addEventListener('DOMContentLoaded', function () {
            
            function datePickerCallback(startDate) {
              console.log('Date Selected:', startDate.toDateString());
            }

            const options = {
              mode: 'single',
              onSelect: datePickerCallback,
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

For more information, view the [contributing docs](https://github.com/sandypockets/easy-dates-picker/blob/main/CONTRIBUTING.md) in the repo.

## License
MIT. See [LICENSE.md](https://github.com/sandypockets/easy-dates-picker/blob/main/LICENSE.md)