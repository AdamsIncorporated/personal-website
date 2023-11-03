function Loader() {
    this.init = function () {
        this.revealElements();
        this.initPushbar();
    };

    this.revealElement = function (selector) {
        ScrollReveal().reveal(selector, {
            duration: 500,
            delay: 200,
            distance: "0px",
            easing: "ease-in",
            afterReveal: (el) => {
                el.style.opacity = 1;
            },
        });
    };

    this.revealElements = function () {
        this.revealElement(".section");
        this.revealElement(".resume");
        this.revealElement(".about");
    };

    this.initPushbar = function () {
        const pushbar = new Pushbar({
            blur: true,
            overlay: true,
        });
    };

    this.copyCodeToClipboard = function (button) {
        const container = button.parentNode;
        const originalBorderColor = getComputedStyle(container).borderColor;

        // Change the border color to green
        container.style.borderColor = '#54aa18';

        // Add a CSS transition for a smooth change
        container.style.transition = 'border-color 1s ease';

        // Set a timeout to return the border color to the original color after 1 second
        setTimeout(() => {
            container.style.borderColor = originalBorderColor;
        }, 500); // Change the timeout to 1000 milliseconds (1 second)

        const codeBlock = container.querySelector('pre');
        const textArea = document.createElement('textarea');
        textArea.value = codeBlock.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // You can now access the button element that triggered the function
        console.log('Button clicked:', button);
    };
}

// Create a loader object
const loader = new Loader();

// Run the loader when the document is loaded
document.addEventListener("DOMContentLoaded", function () {
    loader.init();
});
