document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.section', {
        delay: 200,
        distance: '50px',
        origin: 'bottom', // You can adjust the origin as per your preference
        interval: 100,
        duration: 1000, // Duration of the animation in milliseconds
        easing: 'ease-in-out', // Easing function for the animation
    });
});

const pushbar = new Pushbar({
    blur: true,
    overlay: true,
});
