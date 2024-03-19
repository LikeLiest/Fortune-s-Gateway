const priceElements = document.getElementsByClassName("price");
const buyButtons = document.querySelectorAll('.ticket button');

for (let i = 0; i < priceElements.length; i++) {
    const priceText = priceElements[i].textContent;

    const priceMatch = priceText.match(/\d+/);

    if (priceMatch) {
        let price = parseFloat(priceMatch[0]);
        console.log("Стоимость билета: " + price + " руб.");
    } else {
        console.log("Страница билета имеет неправильный формат, стоимость не найдена.");
    }
}

buyButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        let ticket = button.parentElement;

        let priceElement = ticket.querySelector('.price');

        let priceText = priceElement.textContent;

        let priceMatch = priceText.match(/\d+/);

        if (priceMatch) {
            let price = parseFloat(priceMatch[0]);

            if (balance >= price) {
                balance -= price;

                let randomNumber = Math.floor(Math.random() * 100) + 1;
                let chance = parseFloat(ticket.getAttribute('data-chance'));
                console.log('Шанс на победу был: '+ chance)

                if (randomNumber <= chance) {
                    balance += (chance * price) / 3;
                    document.getElementById("balanceValue").textContent = parseInt(balance);
                    document.getElementById("balance-info").textContent = parseInt(balance);
                    alert("Поздравляем, вы выиграли! Новый баланс: " + parseInt(balance));
                } else {
                    document.getElementById("balanceValue").textContent = parseInt(balance);
                    document.getElementById("balance-info").textContent = parseInt(balance);
                    alert("К сожалению, вы проиграли. Новый баланс: " + parseInt(balance));
                }
            } else {
                alert("У вас недостаточно средств для покупки билета.");
            }
        } else {
            alert("Страница билета имеет неправильный формат, стоимость не найдена.");
        }
    });
});