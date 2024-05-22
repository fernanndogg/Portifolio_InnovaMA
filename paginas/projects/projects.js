lucide.createIcons();

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.a_header');

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove a classe 'active' de todos os links
            links.forEach(l => l.classList.remove('active'));

            // Adiciona a classe 'active' ao item clicado
            link.classList.add('active');
        });
    });
});
