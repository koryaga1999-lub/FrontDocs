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