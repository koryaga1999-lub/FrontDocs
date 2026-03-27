// каптча

const formCaptcha = document.getElementById('form_captcha');
const input = formCaptcha.querySelector('[name="captcha"]');

formCaptcha.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = input.value.trim();

    if (value === '') {
        alert('Введите код!');
    } else if (value === 'qGphJD') {
        alert('Вы успешно вошли!');
        window.location.href = '../head.html';
    } else {
        alert('Неверный код!');
    }
})  