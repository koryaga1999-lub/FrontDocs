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

                    const regDate = users[userEmail]?.registeredAt
                    const formattedDate = regDate ? new Date(regDate).toLocaleDateString() : 'не указана';

                    modalProfile.innerHTML = `
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <h2>Профиль</h2>
                            <p><strong>Почта:</strong> ${userEmail}</p>
                            <div class="passwordDiv">
                            <p id="passwordID"><strong>Пароль:</strong> ${userPassword}</p>
                            <button id="unlockBtn">Скрыть</button>
                            <br>
                            <p><strong>Дата регистрации:</strong> ${formattedDate}</p>
                            <p><strong>Последний вход:</strong> ${new Date().toLocaleDateString()}</p>
                            <br>
                            <button id="exitBtn" class="exitBtn">Выйти</button>
                        </div>
                    `;
                    
                    document.body.appendChild(modalProfile);

                    // СКРЫТЬ ПАРОЛЬ И ЗАМЕНИТЬ НА ЗВЕЗДОЧКИ ПРИ НАЖАТИИ НА КНОПКУ
                    const unlockBtn = modalProfile.querySelector('#unlockBtn');
                    let isPasswordVisible = false;

                    unlockBtn.addEventListener('click', () => {
                        const passwordElement = modalProfile.querySelector('#passwordID');
                        
                        if (!isPasswordVisible) {
                                passwordID.innerHTML = `<strong>Пароль:</strong> ${userPassword}` 
                                isPasswordVisible = true;
                                unlockBtn.textContent = 'Скрыть';
                            } else {
                                passwordElement.innerHTML = `<strong>Пароль:</strong> <span class="password">**********</span>`;
                                isPasswordVisible = false;
                                unlockBtn.textContent = 'Показать';
                            }
                        });
                            
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