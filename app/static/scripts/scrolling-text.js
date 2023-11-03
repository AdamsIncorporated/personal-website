document.addEventListener("DOMContentLoaded", function () {
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
});