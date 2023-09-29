document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll(".section");

    // Function to reveal the navbar when scrolling down (unchanged)

    // Initialize ScrollReveal for sections
    ScrollReveal().reveal('.section', {
        delay: 200,
        distance: '50px',
        origin: 'bottom', // You can adjust the origin as per your preference
        interval: 100,
        duration: 1000, // Duration of the animation in milliseconds
        easing: 'ease-in-out', // Easing function for the animation
    });

    // Event listener for scrolling (unchanged)
});
