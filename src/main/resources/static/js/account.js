const accountBtn = document.getElementById("account");
const accountModal = document.getElementById("account-modal");
const closeAccountModalButton = document.getElementsByClassName("close-account")[0];

accountBtn.onclick = function () {
    accountModal.style.display = "block";
}

closeAccountModalButton.onclick = function () {
    accountModal.style.display = "none";
}
