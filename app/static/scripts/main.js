// Section scroll
ScrollReveal().reveal(".section", {
    duration: 500,
    delay: 200,
    origin: "bottom",
    distance: "50px",
    easing: "ease-in",
    afterReveal: (el) => {
        el.style.opacity = 1;
    },
});

// Pushbar button
const pushbar = new Pushbar({
    blur: true,
    overlay: true,
});


$(".nano").nanoScroller();