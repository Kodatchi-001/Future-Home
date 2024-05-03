// Sélectionnez l'élément titre
const tittle = document.getElementById('tittle-home');

function wrapCharacters() {
    // Prendre le contenu de l'élément de titre
    const text = tittle.innerText;
    // Diviser chaque caractère
    const chars = text.split('');
    // Placer chaque caractère dans un élément <span> séparé
    const wrappedChars = chars.map((char,index) => `<span id="mov-${index}" style="animation:move ${index * 0.4}s;">${char}</span>`);
    // Remplacer le contenu de l'élément de titre par les caractères enveloppés
    tittle.innerHTML = wrappedChars.join('');
}
wrapCharacters();

const tittle_2 = document.getElementById('tittle-home-2');
function wrapCharacters_2() {
    const text = tittle_2.innerText;
    const chars = text.split('');
    const wrappedChars = chars.map((char,index) => `<span id="mov-${index}" style="animation:move ${index * 0.4}s;">${char}</span>`);
    tittle_2.innerHTML = wrappedChars.join('');
}
wrapCharacters_2();
