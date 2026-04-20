const codeInput = document.getElementById('codeInput'); 
const runCode = document.getElementById('runCode'); 
const clearCode = document.getElementById('clearCode'); 
const resultFrame = document.getElementById('resultFrame'); 

    function renderCode() { 
      const code = codeInput.value; // получаем код из textarea
      resultFrame.srcdoc = code; // srcdoc - свойство iframe, которое позволяет вставлять HTML-код в iframe, например, <iframe srcdoc="<p>Hello, world!</p>"></iframe> будет выведено как HTML-параграф.
    }

    runCode.addEventListener('click', renderCode); 

    clearCode.addEventListener('click', () => {
      codeInput.value = '';
      resultFrame.srcdoc = ''; 
    });

    renderCode();
