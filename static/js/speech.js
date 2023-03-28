/**
 * speak
 *
 * Diese Funktion übernimmt einen Text und verwendet die Web Speech API,
 * um den Text laut vorzulesen.
 *
 * @param {*} text
 */

async function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'de-DE';
        utterance.rate = 1.5;
        speechSynthesis.speak(utterance);
    } else {
        console.error('Web Speech API wird nicht unterstützt');
    }
}


/**
 * Dieser Code muss nicht verändert werden. Er sorgt dafür, dass das
 * Test-Formular im Browser funktioniert und die Funktion speak
 * ausführt.
 */
document.addEventListener('DOMContentLoaded', function () {
    const speechForm = document.querySelector('#speechForm');
    const speedInput = document.querySelector('#speechInput');

    speechForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        await speak(speedInput.value);
    });
});