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


const pushbar = new Pushbar({
    blur: true,
    overlay: true,
});

var element = document.querySelectorAll('.slimScroll');
var instance = new slimScroll(element, {
    'wrapperClass': 'scroll-wrapper unselectable mac',
    'scrollBarContainerClass': 'scrollBarContainer',
    'scrollBarContainerSpecialClass': 'animate',
    'scrollBarClass': 'scroll'
});