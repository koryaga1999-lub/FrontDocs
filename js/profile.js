const profileBtn = document.getElementById('profile_link');

            if (profileBtn) {
                profileBtn.addEventListener('click', (e) => {
                    e.preventDefault();

                    if (document.getElementById('profile-modal')) {
                        return;
                    }
                    
                    // имейл хранится в куке
                    const userEmail = localStorage.getItem('userEmail');                
                    
                    const users = JSON.parse(localStorage.getItem('users')) || {}
                    const userPassword = users[userEmail]?.password || 'не указан'
                    // СОЗДАЕМ МОДАЛЬНОЕ ОКНО
                    const modalProfile = document.createElement('div');
                    modalProfile.classList.add('modalProfile');
                    modalProfile.id = 'profile-modal';

                    modalProfile.innerHTML = `
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <h2>Профиль</h2>
                            <p><strong>Почта:</strong> ${userEmail}</p>
                            <p><strong>Пароль:</strong> ${userPassword}</p>
                            <button id="exitBtn" class="exitBtn">Выйти</button>
                        </div>
                    `;
                    
                    document.body.appendChild(modalProfile);

                    // ЗАКРЫТИЕ ПО КРЕСТИКУ
                    const closeBtn = modalProfile.querySelector('.close');
                    closeBtn.onclick = function() {
                        modalProfile.remove();
                    }

                    // ЗАКРЫТИЕ ПО КНОПКЕ "ВЫЙТИ"
                    const exitBtn = modalProfile.querySelector('#exitBtn');
                    exitBtn.onclick = function() {
                        Cookies.remove('name', { path: '/' });
                        modalProfile.remove();
                        alert('Вы вышли из профиля');
                        window.location.href = '../index.html';
                    }

                    // ЗАКРЫТИЕ ПО КЛИКУ НА ФОН
                    modalProfile.onclick = function(event) {
                        if (event.target === modalProfile) {
                            modalProfile.remove();
                        }
                    }
                });
            }