document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.querySelector('.theme-btn');
    
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            themeBtn.textContent = '☀️ theme';
        } else {
            themeBtn.textContent = '🌙 theme';
        }
    });
});



// Правильные ответы
const answers = {
    'question_41': 'a',
    'question_42': 'href',
    'question_43': 'blank',
    'question_44': 'mailto',
    'question_45': 'anchor',
    'question_46': 'title',
    'question_47': 'relative',
    'question_48': 'download',
    'question_49': 'all',
    'question_50': 'broken'
};

let score = 0;

// 1. Прогресс-бар при скролле
const progress = document.createElement('div');
progress.style.cssText = 'position:fixed;top:0;left:0;width:0;height:4px;background:linear-gradient(90deg,#4CAF50,#2196F3);z-index:9999;transition:width 0.2s;';
document.body.appendChild(progress);

window.onscroll = () => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    progress.style.width = scrolled + '%';
};

// 2. Проверка ответов
document.querySelectorAll('input[type="radio"]').forEach(r => {
    r.onclick = function() {
        const q = this.name;
        
        // Убираем старую подсветку
        document.querySelectorAll(`input[name="${q}"]`).forEach(opt => {
            opt.parentElement.style.background = '';
            opt.parentElement.style.borderColor = '';
        });
        
        if (this.value === answers[q]) {
            score++;
            this.parentElement.style.background = '#d4ffd4';
            this.parentElement.style.borderColor = '#4CAF50';
        } else {
            this.parentElement.style.background = '#ffd4d4';
            this.parentElement.style.borderColor = '#f44336';
            
            // Показываем правильный
            const correct = document.querySelector(`input[name="${q}"][value="${answers[q]}"]`);
            if (correct) {
                correct.parentElement.style.background = '#d4ffd4';
                correct.parentElement.style.borderColor = '#4CAF50';
            }
        }
    };
});

// 3. Кнопка "Завершить тест"
document.getElementById('finishTest').onclick = function() {
    const percent = (score / Object.keys(answers).length * 100).toFixed(0);
    const message = `Правильных ответов: ${score}/10\nПроцент: ${percent}%\n\n${
        percent >= 90 ? 'Отлично! 🎉' :
        percent >= 70 ? 'Хорошо! 👍' :
        percent >= 50 ? 'Неплохо 👌' :
        'Попробуйте еще раз 💪'
    }`;
    alert(message);
};

// 4. Кнопка "Начать заново"
document.getElementById('restartTest').onclick = function() {
    // Сброс счетчика
    score = 0;
    
    // Сброс выбранных ответов
    document.querySelectorAll('input[type="radio"]').forEach(r => {
        r.checked = false;
        r.parentElement.style.background = '';
        r.parentElement.style.borderColor = '';
    });
    
    alert('Тест сброшен! Начинаем заново.');
};