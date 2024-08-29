if (typeof document !== 'undefined') {
  console.log(document.title);
const display = document.getElementById('display');

      function appendtoDisplay(value) {
        display.value += value;
      }

      function calculate() {
        try {
        display.value = eval(display.value);
        } catch {
          display.value = 'Error';
        }
      }

      function clearDisplay() {
        display.value = '';
      }
    }