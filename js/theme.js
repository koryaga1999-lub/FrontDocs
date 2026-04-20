document.addEventListener('DOMContentLoaded', () => { // ждём загрузки страницы
  const btn = document.querySelector('.theme-btn'); // кнопка
  if (!btn) return; // если нет кнопки, то выходим

  // применяем сохранённую тему
  const saved = localStorage.getItem('theme'); // сохранённая тема
  const isDark = saved === 'dark'; // темная ли она?
  document.body.classList.toggle('dark-theme', isDark); // добавляем класс

  // иконка
  btn.textContent = isDark ? '☀️' : '🌙'; // меняем иконку

  btn.addEventListener('click', (e) => { // по клику
    e.preventDefault(); // отменяем действие по умолчанию

    const nowDark = document.body.classList.toggle('dark-theme'); // меняем класс
    localStorage.setItem('theme', nowDark ? 'dark' : 'light'); // сохраняем
    btn.textContent = nowDark ? '☀️' : '🌙'; // меняем иконку
  }); 
}); 
