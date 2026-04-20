
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


const resetButton = document.querySelector('.button_next');
resetButton.addEventListener('click', () => {
    const labels = document.querySelectorAll('.choice-item');
    labels.forEach(label => {
        label.style.backgroundColor = '';
        label.style.color = '';
        label.classList.remove('correct', 'wrong');
        const input = label.querySelector('input[type="radio"]');
        if (input) {
            input.checked = false;  
            input.disabled = false;  
        }
    });

    alert('Тест сброшен!');
});