document.addEventListener('DOMContentLoaded', function () {
    const footerTitle = document.querySelector('.footer h1');
    footerTitle.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
