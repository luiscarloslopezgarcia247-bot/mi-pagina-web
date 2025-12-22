document.addEventListener('DOMContentLoaded', function() {
    // Alert de bienvenida
    alert('¡Bienvenido a la página de historia! Explora las secciones para aprender más.');

    // Scroll suave para enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
