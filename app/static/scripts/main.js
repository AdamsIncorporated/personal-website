document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.section', {
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        interval: 100,
        duration: 1000,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 1,
    });
});

const pushbar = new Pushbar({
    blur: true,
    overlay: true,
});
