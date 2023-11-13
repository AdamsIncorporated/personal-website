function Loader() {
    this.init = function () {
        this.revealElements();
        this.initPushbar();
        this.initializeScrollingText();
        this.displayFlashes();
        this.displayPixelImageCaptions();
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

    this.initializeScrollingText = function () {
        let textElements = document.querySelectorAll('.scrolling-text');

        textElements.forEach(element => {
            element.style.visibility = 'visible';

            let text = element.textContent;
            element.textContent = '';

            let index = 0;
            let cursor = document.createElement('span');
            cursor.className = 'cursor';

            function typeCharacter() {
                if (index < text.length) {
                    const character = document.createElement('span');
                    character.textContent = text.charAt(index);

                    // Add the temporary class for a split second
                    character.classList.add('scrolling-text-temporary-shadow');

                    setTimeout(() => {
                        // Remove the class after a delay (e.g., 100 milliseconds)
                        character.classList.remove('scrolling-text-temporary-shadow');
                    }, 100); // Adjust the delay as needed

                    // Remove the previously added cursor
                    if (index > 0) {
                        element.removeChild(cursor);
                    }

                    element.appendChild(character);
                    element.appendChild(cursor);

                    index++;
                }
            }

            setInterval(typeCharacter, 20);
        });
    }

    this.displayFlashes = function () {
        var flahes = document.querySelector('.flashes');

        if (flahes) {
            flahes.classList.add('show');
            setTimeout(function () {
                flahes.classList.remove('show');
            }, 5000);
        };
    };

    this.displayPixelImageCaptions = function () {
        // Get all elements with the class 'pixel-overlay'
        const pixelImages = document.querySelectorAll('.pixel-overlay');

        // Define a function to handle the mouseover event
        function handleMouseover() {
            // Find the common parent ('pixel-container' in this case)
            const parentContainer = this.closest('.pixel-container');

            // If the parent is found, find the child with the class 'pixel-caption'
            const captionBlock = parentContainer ? parentContainer.querySelector('.pixel-caption') : null;

            // Check if captionBlock is not null and is an HTMLElement
            if (captionBlock instanceof HTMLElement) {
                const isInitiallyHidden = getComputedStyle(captionBlock).visibility === 'hidden';

                // If found and initially hidden, display it
                if (isInitiallyHidden) {
                    const loader = new Loader();
                    loader.revealElement(captionBlock);
                }
            }
        }

        // Attach the handleMouseover function to each pixelImage
        pixelImages.forEach(pixelImage => {
            pixelImage.addEventListener('mouseover', handleMouseover);
        });
    };
}

// Create a loader object
const loader = new Loader();

// Run the loader when the document is loaded
document.addEventListener("DOMContentLoaded", function () {
    loader.init();
});