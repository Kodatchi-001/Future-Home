// Sélectionnez l'élément titre-home
const tittle = document.getElementById('tittle-home');

function Characters() {
    // Prendre le contenu de l'élément de titre
    const text = tittle.innerText;
    // Diviser chaque caractère
    const chars = text.split('');
    // Placer chaque caractère dans un élément <span> séparé
    const wrappedChars = chars.map((char,index) => `<span id="mov-${index}" style="animation:move ${index * 0.4}s;">${char}</span>`);
    // Remplacer le contenu de l'élément de titre par les caractères enveloppés
    tittle.innerHTML = wrappedChars.join('');
}
Characters();

const tittle_2 = document.getElementById('tittle-home-2');
function Characters_2() {
    const text = tittle_2.innerText;
    const chars = text.split('');
    const wrappedChars = chars.map((char,index) => `<span id="mov-${index}" style="animation:move ${index * 0.4}s;">${char}</span>`);
    tittle_2.innerHTML = wrappedChars.join('');
}
Characters_2();

