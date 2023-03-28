/**
 * doRequest
 * 
 * Führt einen Request an die Agify API aus, liest das Alter aus der Antwort
 * und setzt den Wert des agifyOutput Feldes auf dieses.
 * 
 * @param {*} name
 */
async function doRequest(name) {
    const url = `https://api.agify.io?name=${name}`;
    const response = await fetch(url);
    const data = await response.json();
    const age = data.age;
    const agifyOutput = document.querySelector('#agifyOutput');
    agifyOutput.value = age;
}

/**
 * Dieser Code muss nicht verändert werden. Er sorgt dafür, dass das
 * Test-Formular im Browser funktioniert und die Funktion doRequest
 * ausführt.
 */
document.addEventListener('DOMContentLoaded', function () {
  const agifyForm = document.querySelector('#agifyForm');
  const agifyInput = document.querySelector('#agifyInput');

  agifyForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await doRequest(agifyInput.value);
  });
});