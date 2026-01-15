const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            mobileMenu.classList.remove('is-active');
            navMenu.classList.remove('active');
        }
    });
});


const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
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

const video = document.getElementById('myVideo');
video.addEventListener('error', function() {
    console.log('El video de fondo no pudo cargarse o no es compatible.');
});