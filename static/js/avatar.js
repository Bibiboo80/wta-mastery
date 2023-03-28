/**
 * getAvatar
 * 
 * Diese Funktion setzt den Wert des src-Attributes des #avatarImage
 * auf die korrekte URL zur Avatar-API, so dass das Avatar-Bild angezeigt wird.
 * 
 * @param {*} name 
 */
async function getAvatar(name) {
  //const url = `https://avatars.oxro.io/avatar?name=${name}`;
  const url = 'https://avatar.oxro.io/avatar.svg?name=Eddie&background=f39c12&length=1';
  const avatarImage = document.querySelector('#avatarImage');
  avatarImage.src = url;
}

/**
 * Dieser Code muss nicht verändert werden. Er sorgt dafür, dass das
 * Test-Formular im Browser funktioniert und die Funktion getAvatar
 * ausführt.
 */
document.addEventListener('DOMContentLoaded', function () {
  const avatarForm = document.querySelector('#avatarForm');
  const avatarInput = document.querySelector('#avatarInput');

  avatarForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await getAvatar(avatarInput.value);
  });
});