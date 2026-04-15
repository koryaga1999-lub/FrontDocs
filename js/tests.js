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
// Находим все .choice-item
// Находим все .choice-item
document.addEventListener('DOMContentLoaded', () => {
    const labels = document.querySelectorAll('.choice-item');
    console.log('Найдено элементов:', labels.length);

    labels.forEach(label => {
        const input = label.querySelector('input[type="radio"]');
        
        if (!input) {
            console.warn('Нет input в:', label);
            return;
        }

        label.addEventListener('click', () => {
            const name = input.name;
            const group = document.querySelectorAll(`input[name="${name}"]`);

            const wasAnswered = Array.from(group).some(radio => {
                const item = radio.closest('.choice-item');
                return item?.classList.contains('correct') || item?.classList.contains('wrong');
            });

            if (wasAnswered) return;

            group.forEach(radio => {
                const item = radio.closest('.choice-item');
                if (item) {
                    item.style.backgroundColor = '';
                    item.style.color = '';
                    item.classList.remove('correct', 'wrong');
                }
            });

            setTimeout(() => {
                group.forEach(radio => {
                    const item = radio.closest('.choice-item');
                    if (radio.checked && item) {
                        const isCorrect = radio.hasAttribute('data-correct') || item.hasAttribute('data-correct');
                        item.style.backgroundColor = isCorrect ? 'green' : 'red';
                        item.style.color = 'white';
                        item.classList.add(isCorrect ? 'correct' : 'wrong');

                        group.forEach(r => r.disabled = true);
                    }
                });
            }, 0);
        });
    });
});

// Кнопка "Сбросить тест"
const resetButton = document.querySelector('.button_next');

resetButton.addEventListener('click', () => {
    // Находим все .choice-item
    const labels = document.querySelectorAll('.choice-item');

    labels.forEach(label => {
        // Сбрасываем стили
        label.style.backgroundColor = '';
        label.style.color = '';

        // Убираем классы
        label.classList.remove('correct', 'wrong');

        // Находим радиокнопку
        const input = label.querySelector('input[type="radio"]');
        if (input) {
            input.checked = false;   // снимаем галочку
            input.disabled = false;  // разблокируем
        }
    });

    alert('Тест сброшен!');
});