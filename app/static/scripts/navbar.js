document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    // Function to reveal the navbar when scrolling down
    function revealNavbar() {
        if (window.scrollY > 100) { // Adjust this value for when to reveal the navbar
            navbar.style.top = "0";
        } else {
            navbar.style.top = "-70px";
        }
    }

    // Initialize ScrollReveal
    ScrollReveal().reveal('.nav-item', {
        delay: 200,
        distance: '50px',
        origin: 'top',
        interval: 100
    });

    // Event listener for scrolling
    window.addEventListener("scroll", revealNavbar);
});
