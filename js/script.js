document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.theme-btn');
  if (!btn) return;

  // применяем сохранённую тему
  const saved = localStorage.getItem('theme');
  const isDark = saved === 'dark';
  document.body.classList.toggle('dark-theme', isDark);

  // иконка
  btn.textContent = isDark ? '☀️' : '🌙';

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const nowDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    btn.textContent = nowDark ? '☀️' : '🌙';
  });
});
