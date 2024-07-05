document.addEventListener('DOMContentLoaded', function () {
    var backButton = document.getElementById('back-to-top-button');
    var aboutMeSection = document.getElementById('about-me');

    function checkScrollPosition() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Mostra o botão quando o usuário rolar abaixo do início da seção "Sobre Mim"
        if (scrollPosition > aboutMeSection.offsetTop - 100) {
            backButton.style.display = 'block';
        } else {
            backButton.style.display = 'none';
        }
    }

    // Rola suavemente para o topo da página
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Adiciona evento de clique ao botão "Voltar ao topo"
    backButton.addEventListener('click', scrollToTop);

    // Verifica a posição do scroll ao carregar a página e ao rolar
    checkScrollPosition();
    window.addEventListener('scroll', checkScrollPosition);
});
