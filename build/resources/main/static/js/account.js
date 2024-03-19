const accountBtn = document.getElementById("account");
const accountModal = document.getElementById("account-modal");
const closeAccountModalButton = document.getElementsByClassName("close-account")[0];

accountBtn.onclick = function () {
    accountModal.style.display = "block";
}

closeAccountModalButton.onclick = function () {
    accountModal.style.display = "none";
}

// Получаем параметры из URL
const urlParams = new URLSearchParams(window.location.search);
const firstName = urlParams.get('firstName');
const lastName = urlParams.get('lastName');
const email = urlParams.get('email');
let balance = urlParams.get('balance');
let balanceForViewBalanceModal = balance;

console.log(balance)

// Заполняем соответствующие теги <span> с полученными данными
document.getElementById("firstNameValue").textContent = firstName;
document.getElementById("lastNameValue").textContent = lastName;
document.getElementById("emailValue").textContent = email;
document.getElementById("balanceValue").textContent = balance;
document.getElementById("balance-info").textContent = balanceForViewBalanceModal;
