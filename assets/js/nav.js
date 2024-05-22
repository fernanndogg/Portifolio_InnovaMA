lucide.createIcons();

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.a_header');

    links.forEach(link => {
        link.addEventListener('click', function() {
            
            links.forEach(l => l.classList.remove('active'));

            link.classList.add('active');
        });
    });
});