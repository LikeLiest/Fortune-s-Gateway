document.addEventListener('DOMContentLoaded', function () {
    const headerTitle = document.querySelector('.header-title h1');
    headerTitle.addEventListener('click', function () {
        location.reload();
    });
});