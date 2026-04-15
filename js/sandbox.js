const codeInput = document.getElementById('codeInput'); // добавил переменную codeInput - это текстовое поле в котором будет написан код от пользователя
const runCode = document.getElementById('runCode'); // добавил переменную runCode - это кнопка запуска кода
const clearCode = document.getElementById('clearCode'); // добавил переменную clearCode - это кнопка очистки кода
const resultFrame = document.getElementById('resultFrame'); // добавил переменную resultFrame - это iframe в котором будет отображаться результат от пользователя

    function renderCode() { // добавил функцию renderCode - которая будет отображать код от пользователя в iframe
      const code = codeInput.value; // code.value отвечает за весь контент в textarea, value - свойство которое получает всё содержимое textarea
      resultFrame.srcdoc = code; // srcdoc - это свойство, которое позволяет задать содержимое iframe, например srcdoc = '<h1>Привет!</h1>';
    }

    runCode.addEventListener('click', renderCode); // создал обработчик события для кнопки запуска кода, теперь при нажатии на кнопку runCode будет вызываться функция renderCode

    clearCode.addEventListener('click', () => { // заменил document.getElementById('clearCode').addEventListener на clearCode.addEventListener
      codeInput.value = '';
      resultFrame.srcdoc = ''; // srcdoc - это свойство, которое позволяет задать содержимое iframe, например srcdoc = '<h1>Привет!</h1>';
    });

    renderCode(); // добавил вызов renderCode