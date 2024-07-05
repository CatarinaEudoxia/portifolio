document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.menu-icon');
    var sidebar = document.getElementById('sidebar');

    if (menuIcon) {
        menuIcon.addEventListener('click', function () {
            sidebar.classList.toggle('active');
        });
    }

    // Fechar a barra lateral ao clicar em um link do sidebar
    var sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            sidebar.classList.remove('active');
        });
    });

    // Fechar a barra lateral ao clicar fora dela (opcional)
    document.addEventListener('click', function (event) {
        var isClickInside = sidebar.contains(event.target);
        var isMenuIcon = event.target.closest('.menu-icon');

        if (!isClickInside && !isMenuIcon) {
            sidebar.classList.remove('active');
        }
    });
});
