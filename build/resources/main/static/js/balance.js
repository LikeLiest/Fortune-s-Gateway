const viewBalanceBtn = document.getElementById("add-money");
const balanceModal = document.getElementById("modal");
const closeBalanceModalButton = document.getElementsByClassName("close")[0];

viewBalanceBtn.onclick = function () {
    balanceModal.style.display = "block";
}

closeBalanceModalButton.onclick = function () {
    balanceModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === balanceModal) {
        balanceModal.style.display = "none";
    } else if (event.target === accountModal) {
        accountModal.style.display = "none";
    }
}

document.getElementById('deposit').addEventListener('click', () => {
    let amount = parseInt(prompt('Введите сумму для пополнения баланса:'));

    amount = parseInt(amount);

    if (!isNaN(amount) && amount > 0) {
        balance = parseInt(balance) + amount;
        document.getElementById("balance-info").textContent = balance;
    } else {
        alert('Введите корректную сумму для пополнения баланса.');
    }
});

document.getElementById('withdraw').addEventListener('click', () => {
    const amount = parseInt(prompt('Введите сумму которую вы хотите вывести: '));

    if (!isNaN(amount) && amount > 0) {
        balance = parseInt(balance) - amount;
        document.getElementById("balance-info").textContent = balance;
    } else {
        alert('Введите корректную сумму для пополнения баланса.');
    }
});