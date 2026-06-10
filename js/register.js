        // Регистрация и авторизация пользователя с помощью localStorage и cookie 
document.addEventListener('DOMContentLoaded', () => {
        const email = document.getElementById('email123');
        const password = document.getElementById('password123');
        const form = document.getElementById('form123');
        const sendBtn = document.getElementById('sendBtn');
        const registBtn = document.getElementById('registBtn');
        const resetPasBtn = document.getElementById('resetPassword')

        if (!email || !password || !form || !sendBtn || !registBtn) {
            return;
        }

        let modalDiv = null; // модальное окно 
        const savedName = Cookies.get('name');

        // открытие формы регистрации (модальное окно)

        function openFormRegist() {
            const modalDiv = document.createElement('div');
            modalDiv.classList.add('modal');
            modalDiv.id = 'regist-modal';
            modalDiv.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                        <form id="registForm">
                            <h1>Регистрация</h1>
                            <label>Введите почту</label>
                            <input id="regEmail" type="email" name="email" placeholder="Введите почту">
                            <label>Введите пароль</label>
                            <input id="regPassword" type="password" name="password" placeholder="Введите пароль">
                            <button id="submitRegistBtn" class="registBtn" type="submit">Зарегистрироваться</button>
                        </form>
                </div>`;
                document.body.appendChild(modalDiv);
                
                const closeBtn = modalDiv.querySelector('.close');
                
                closeBtn.onclick = function() {
                    modalDiv.remove();
                }

                const submitRegistBtn = modalDiv.querySelector('#submitRegistBtn');
                submitRegistBtn.onclick = function() { // 
                    const regEmail = modalDiv.querySelector('#regEmail').value;
                    const regPassword = modalDiv.querySelector('#regPassword').value;

                    if (!regEmail || !regPassword) {
                        alert('Заполните все поля!');
                        return;
                    }

                    let users = JSON.parse(localStorage.getItem('users')) || {};

                    if (users[regEmail]) {
                        alert('Пользователь с такой почтой уже существует!');
                    } else {
                        users[regEmail] = {
                            password: regPassword, // пароль
                            registeredAt: new Date().toISOString() // время регистрации
                        }
                        localStorage.setItem('users', JSON.stringify(users));
                        alert('Пользователь успешно зарегистрирован!');
                        modalDiv.remove();
                    }
                }

                return modalDiv;
            }

            function getModal() {
                if (!modalDiv) {
                    modalDiv = openFormRegist();
                } 
                return modalDiv;
            }

            function loginUser(emailValue, passwordValue) {
                let users = JSON.parse(localStorage.getItem('users')) || {};

                localStorage.setItem('userEmail', emailValue);

                if (users[emailValue] && users[emailValue].password === passwordValue) {
                    Cookies.set('name', emailValue, {
                        expires: 7, 
                        path: '/'
                    }) 
                    alert ('Добро пожаловать, ' + emailValue);
                    window.location.href = './pages/head.html';
                    form.style.display = 'none';
                    return true;
                } else {
                    alert('Неверный логин или пароль!');
                    return false;
                }
            }

            if (savedName) {
                alert('Добро пожаловать, ' + savedName);
                window.location.href = './pages/head.html';
                form.style.display = 'none';
            }

            sendBtn.onclick = function(e) {
                e.preventDefault();

                let emailValue = email.value.trim();
                let passwordValue = password.value.trim();

                if (emailValue === '' || passwordValue === '') {
                    alert('Заполните все поля!');
                    return;
                }

                loginUser(emailValue, passwordValue);
            }

            registBtn.onclick = function(e) {
                e.preventDefault();
                getModal();
            }

            window.onclick = function(e) {
                if (modalDiv && e.target === modalDiv) {
                    modalDiv.remove();
                    modalDiv = null;
                }
            }
        });

        resetPasBtn.addEventListener('click')