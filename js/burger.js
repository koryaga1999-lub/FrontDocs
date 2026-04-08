// Бургер-меню
const burgerBtn = document.querySelector('.burger-btn');
const navList = document.querySelector('.nav-list');
const body = document.body;

burgerBtn?.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navList.classList.toggle('active');
    
    if (navList.classList.contains('active')) {
        body.classList.add('menu-open');
    } else {
        body.classList.remove('menu-open');
    }
});

// Закрытие меню при клике на ссылку (удобно на мобильных)
navList?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn?.classList.remove('active');
        navList.classList.remove('active');
        body.classList.remove('menu-open');
    });
});