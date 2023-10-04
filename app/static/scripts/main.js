ScrollReveal().reveal(".section", {
    duration: 1000,
    delay: 200,
    origin: "bottom",
    distance: "50px",
    easing: "ease-in",
    afterReveal: (el) => {
        el.style.opacity = 1;
    },
});


const pushbar = new Pushbar({
    blur: true,
    overlay: true,
});
