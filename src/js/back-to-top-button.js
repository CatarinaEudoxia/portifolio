const backButton = document.getElementById('back-to-top-button');

backButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
