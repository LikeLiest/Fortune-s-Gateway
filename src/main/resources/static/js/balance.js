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