document.getElementById("account-modal").style.display = "block"; // Показываем модальное окно

document.querySelector('.close-account').addEventListener('click', function () {
    document.getElementById("account-modal").style.display = "none"; // Скрываем модальное окно при клике на крестик
});

document.getElementById("userDataForm").addEventListener("submit", function(event) {
    // event.preventDefault(); // Предотвращаем стандартное поведение формы (отправку)

    // Получаем данные из формы
    const formData = new FormData(event.target);
    const userData = {};
    formData.forEach(function(value, key){
        userData[key] = value;
    });

    // Обновляем содержимое элементов модального окна
    document.getElementById('firstNameValue').innerText = userData.firstName;
    document.getElementById('lastNameValue').innerText = userData.lastName;
    document.getElementById('emailValue').innerText = userData.email;
    document.getElementById('balanceValue').innerText = userData.balance;

    // Показываем модальное окно
    document.getElementById("account-modal").style.display = "block";
});