function revealElement(selector) {
    ScrollReveal().reveal(selector, {
        duration: 500,
        delay: 200,
        distance: "0px",
        easing: "ease-in",
        afterReveal: (el) => {
            el.style.opacity = 1;
        },
    });
}

revealElement(".section");
revealElement(".resume");
revealElement(".about");

// Pushbar button
const pushbar = new Pushbar({
    blur: true,
    overlay: true,
});