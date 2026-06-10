// const asd = document.getElementById('asd')
// asd.addEventListener('click', () => {
//     // asd.style.color = 'red'
// })
// asd()


// const label = document.getElementById('was')
// label.addEventListener("click", () => {
//    label.style.backgroundColor = 'aqua'
//    asd.style.color = 'white'
//  })

// label()

// Функция изменяющая цвет фона и  текста при клике
// Находим все элементы с классом .choice-item
// Находим все элементы с классом .choice-item
const labels = document.querySelectorAll('.choice-item');
labels.forEach(label => {
    label.addEventListener('click', () => {
        labels.forEach(el => {
            el.style.backgroundColor = '';
            el.style.color = '';
            el.classList.remove('correct', 'wrong');
        });
        if (label.hasAttribute('data-correct')) {
            label.style.backgroundColor = 'green';
            label.style.color = 'white';
            label.classList.add('correct');
        } else {
            label.style.backgroundColor = 'red';
            label.style.color = 'white';
            label.classList.add('wrong');
        }
    });
});

