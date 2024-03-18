let balance = 0;
let ticketCount = 0;

function checkAge() {
    let age = prompt("Сколько вам лет?");
    if (age >= 18) {
        let money = parseFloat(prompt("Сколько вы готовы потратить?"));
        if (!isNaN(money) && money > 0) {
            balance = money;
            updateBalance();
            alert("Отлично! У вас " + balance + " руб. на счету. Удачи в лотерее!");
        } else {
            alert("Введите корректную сумму денег.");
            window.close();
        }
    } else {
        alert("Извините, этот сайт доступен только для лиц старше 18 лет.");
        window.close();
    }
}

function buyTicket(price) {
    if (balance >= price) {
        balance -= price; // Вычитаем цену билета из баланса пользователя
        updateBalance(); // Обновляем отображение баланса
        ticketCount++; // Увеличиваем счетчик купленных билетов
        updateTicketCount(); // Обновляем отображение количества билетов
        alert("Вы успешно приобрели билет!");
    } else {
        alert("У вас недостаточно средств для покупки билета.");
    }
}

function updateBalance() {
    document.getElementById("balanceDisplay").innerText = balance;
}

function updateTicketCount() {
    document.getElementById("ticketCount").innerText = ticketCount;
}

function playGame() {
    let chanceToWin = ticketCount * 5; // Шанс на выигрыш увеличивается на 5% за каждый купленный билет
    let randomNumber = Math.random() * 100; // Генерируем случайное число от 0 до 100
    if (randomNumber <= chanceToWin) {
        balance += 100; // Пополняем баланс на 100 рублей, если пользователь выиграл
        updateBalance(); // Обновляем отображение баланса
        alert("Поздравляем! Вы выиграли 100 рублей!");
    } else {
        alert("К сожалению, вы не выиграли. Попробуйте снова!");
    }
    // Обнуляем счетчик билетов после каждой игры
    ticketCount = 0;
    updateTicketCount(); // Обновляем отображение количества билетов
}

window.onload = checkAge;