# easy-dates-picker
`easy-dates-picker` is a super lightweight, zero-dependency, customizable date picker library, written in vanilla JavaScript.

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
            };
        
            const datePicker = new DatePicker('easy-dates-picker', datePickerOptions);
        
            datePicker.init();
          });
        </script>
    </body>
</html>
```

