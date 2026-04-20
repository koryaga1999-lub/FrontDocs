const codeInput = document.getElementById('codeInput'); 
const runCode = document.getElementById('runCode'); 
const clearCode = document.getElementById('clearCode'); 
const resultFrame = document.getElementById('resultFrame'); 

    function renderCode() { 
      const code = codeInput.value; 
      resultFrame.srcdoc = code; 
    }

    runCode.addEventListener('click', renderCode); 

    clearCode.addEventListener('click', () => { z
      codeInput.value = '';
      resultFrame.srcdoc = ''; 
    });

    renderCode();
