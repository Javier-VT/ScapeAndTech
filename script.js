// Menú Hamburguesa para Móviles
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            mobileMenu.classList.remove('is-active');
            navMenu.classList.remove('active');
        }
    });
});


// Animación simple de "Fade In" al hacer scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2, // Aparece cuando el 20% del elemento es visible
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Manejo de fallback para el video de fondo (opcional, por si falla en móviles)
const video = document.getElementById('myVideo');
video.addEventListener('error', function() {
    // Si el video falla, se puede poner una imagen de fondo de respaldo en el CSS
    // document.querySelector('.hero').style.backgroundImage = 'url("ruta/a/una/imagen.jpg")';
    console.log('El video de fondo no pudo cargarse o no es compatible.');
});