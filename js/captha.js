// каптча

const formCaptcha = document.getElementById('form_captcha');
const input = formCaptcha.querySelector('[name="captcha"]'); 
const captchaImg = document.querySelector('.img_captcha'); 

const captchaImages = [ // массив с картинками
  './capthaImg/decorative_card_001.png',
  './capthaImg/decorative_card_002.png',
  './capthaImg/decorative_card_003.png',
  './capthaImg/decorative_card_004.png',
  './capthaImg/decorative_card_005.png',
  './capthaImg/decorative_card_006.png',
  './capthaImg/decorative_card_007.png',
  './capthaImg/decorative_card_008.png',
  './capthaImg/decorative_card_009.png',
  './capthaImg/decorative_card_010.png',
  './capthaImg/decorative_card_011.png',
  './capthaImg/decorative_card_012.png',
  './capthaImg/decorative_card_013.png',
  './capthaImg/decorative_card_014.png',
  './capthaImg/decorative_card_015.png',
  './capthaImg/decorative_card_016.png',
  './capthaImg/decorative_card_017.png',
  './capthaImg/decorative_card_018.png',
  './capthaImg/decorative_card_019.png',
  './capthaImg/decorative_card_020.png',
  './capthaImg/decorative_card_021.png',
  './capthaImg/decorative_card_022.png',
  './capthaImg/decorative_card_023.png',
  './capthaImg/decorative_card_024.png',
  './capthaImg/decorative_card_025.png',
  './capthaImg/decorative_card_026.png',
  './capthaImg/decorative_card_027.png',
  './capthaImg/decorative_card_028.png',
  './capthaImg/decorative_card_029.png',
  './capthaImg/decorative_card_030.png',
  './capthaImg/decorative_card_031.png',
  './capthaImg/decorative_card_032.png',
  './capthaImg/decorative_card_033.png',
  './capthaImg/decorative_card_034.png',
  './capthaImg/decorative_card_035.png',
  './capthaImg/decorative_card_036.png',
  './capthaImg/decorative_card_037.png',
  './capthaImg/decorative_card_038.png',
  './capthaImg/decorative_card_039.png',
  './capthaImg/decorative_card_040.png',
  './capthaImg/decorative_card_041.png',
  './capthaImg/decorative_card_042.png',
  './capthaImg/decorative_card_043.png',
  './capthaImg/decorative_card_044.png',
  './capthaImg/decorative_card_045.png',
  './capthaImg/decorative_card_046.png',
  './capthaImg/decorative_card_047.png',
  './capthaImg/decorative_card_048.png',
  './capthaImg/decorative_card_049.png',
  './capthaImg/decorative_card_050.png'
];

const captchaAnswers = [ // массив с ответами
  'm7Rk9V',
  'Q8vN3x',
  't6Kp4Z',
  'L4mR8q',
  'b7Tn5Y',
  'H2wQ9c',
  'r8Mk3P',
  'X5dV7a',
  'n3Jt8R',
  'C9pL4e',
  'y6Fh2N',
  'K7uD5m',
  'g4Sx9B',
  'P8cW3t',
  'v2Nq7H',
  'A5mZ8k',
  'd9Rj4U',
  'T3bY6p',
  'q7Ew2L',
  'M4nK9x',
  's8Pz5D',
  'J2hV7r',
  'u5Cq3N',
  'R9mT4b',
  'x6Lw8F',
  'B3pK7y',
  'e8Nd2Q',
  'W5rH9m',
  'k4Yt6C',
  'Z7qP3u',
  'm2D8vR',
  'F9xL5n',
  't6Bq4J',
  'N3wK8p',
  'h7M2yV',
  'Q5cR9d',
  'p8Tn4X',
  'Y2mL7k',
  'c6Vq3W',
  'D9rH5t',
  'w4P8bN',
  'U7kM2q',
  'l5Xc9R',
  'S3nY6v',
  'a8Qp4K',
  'V2tD7m',
  'j9Wk5H',
  'E4rL8c',
  'o7N3xP',
  'G5mQ2u'
]; 
let currentAnswer = ''; // Глобальная переменная для хранения текущего ответа

function loadRandomCaptcha() {
    const randomIndex = Math.floor(Math.random() * captchaImages.length); // Получаем случайный индекс
    captchaImg.src = captchaImages[randomIndex];      // Меняем картинку, .src - ссылка на картинку = captchaImages[randomIndex] - случайный индекс из массива изображений
    currentAnswer = captchaAnswers[randomIndex];      // Сохраняем ответ в глобальную переменную
}

loadRandomCaptcha();

formCaptcha.addEventListener('submit', (event) => { // event - событие которое происходит при отправке формы
    event.preventDefault(); // отменяем стандартное поведение формы, то есть - ev
    
    const value = input.value.trim(); // trim() - удаляет пробелы в начале и конце строки

    if (value === '') { 
        alert("Введите код!");
    } else if (value === currentAnswer) {
        alert("Вы успешно вошли!");
        window.location.href = './pages/head.html';
    } else {
        alert("Неверный код!");
        loadRandomCaptcha(); 
        input.value = '';
    }
});