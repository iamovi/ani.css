let currentTextClass = '';
let currentButtonClass = '';

function applyEffect(className) {
    const mainText = document.getElementById('main-text');
    const mainButton = document.getElementById('main-button');
    const pTag = document.querySelector('p');

    // Check if the class is for button animation
    if (className.startsWith('ani-btn') && mainButton) {
        // Check if the clicked button already has the class
        const hasClass = mainButton.classList.contains(className);

        // Remove the other button animation class
        const otherButtonClass = currentButtonClass.replace('ani-btn', '');
        mainButton.classList.remove(`ani-btn${otherButtonClass}`);

        // If the clicked button doesn't have the class, add it
        if (!hasClass) {
            mainButton.classList.add(className);
        }

        // Update the current button class
        currentButtonClass = hasClass ? '' : className.replace('ani-btn', '');
    } else if (className.startsWith('ani-txt') && mainText) {
        // Check if the clicked text already has the class
        const hasClass = mainText.classList.contains(className);

        // Remove the other text animation class
        const otherTextClass = currentTextClass.replace('ani-txt', '');
        mainText.classList.remove(`ani-txt${otherTextClass}`);

        // If the clicked text doesn't have the class, add it
        if (!hasClass) {
            mainText.classList.add(className);
        }

        // Update the current text class
        currentTextClass = hasClass ? '' : className.replace('ani-txt', '');
    }

    // Check if the class is for changing the text of the <p> tag
    if (className.startsWith('ani-btn') || className.startsWith('ani-txt')) {
        pTag.textContent = 'Looks Kool Now!';
    }
}

function toggleEffectsList(className) {
    const effectsList = document.querySelector(className);

    // Toggle the display property immediately
    effectsList.style.display = (effectsList.style.display === 'none' || effectsList.style.display === '') ? 'flex' : 'none';
}
