document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.getElementById('sidebar');

    if (menuIcon) {
        menuIcon.addEventListener('click', function () {
            sidebar.classList.toggle('active');
            toggleMenuIcon();
        });
    }

    // Função para alternar o ícone do menu
    function toggleMenuIcon() {
        const menuIconImg = document.querySelector('.menu-icon-img');
        const isSidebarActive = sidebar.classList.contains('active');

        // Alterna o ícone com base no estado da barra lateral
        if (isSidebarActive) {
            menuIconImg.src = './src/assets/close-icon.svg'; // Ícone de fechar
        } else {
            menuIconImg.src = './src/assets/menu-nav.svg'; // Ícone do menu
        }
    }

    // Fechar a barra lateral ao clicar em um link do sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            sidebar.classList.remove('active');
            toggleMenuIcon();
        });
    });
});
