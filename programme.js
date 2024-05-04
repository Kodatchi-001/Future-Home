// Sélectionnez l'élément titre-home
const tittle = document.getElementById('tittle-home');

function Characters() {
    // Prendre le contenu de l'élément de titre
    const text = tittle.innerText;
    // Diviser chaque caractère
    const chars = text.split('');
    // Placer chaque caractère dans un élément <span> séparé
    const wrappedChars = chars.map((char, index) => `<span id="mov-${index}" style="animation:move ${index * 0.4}s;">${char}</span>`);
    // Remplacer le contenu de l'élément de titre par les caractères enveloppés
    tittle.innerHTML = wrappedChars.join('');
}
Characters();

const tittle_2 = document.getElementById('tittle-home-2');
function Characters_2() {
    const text = tittle_2.innerText;
    const chars = text.split('');
    const wrappedChars = chars.map((char, index) => `<span id="mov-${index}" style="animation:move ${index * 0.4}s;">${char}</span>`);
    tittle_2.innerHTML = wrappedChars.join('');
}
Characters_2();

//cards-page-2
function cards_content() {
    const all_cards = document.querySelectorAll('.cards-info-page-2 a');
    for (i = 0; i < all_cards.length; i++) {
        all_cards[i].addEventListener('click', function () {
            var show_content = this.parentNode;
            const icon = this.querySelector('.bx-right-arrow-alt');
            if (show_content.style.height == '25%') {
                this.style.color = ''
                this.style.fontWeight = ''
                this.style.height = ''
                show_content.style.height = ''
                show_content.style.alignItems = '';
                icon.style.transform = '';
                icon.style.opacity = ''
            }
            else {
                this.style.color = 'black'
                this.style.fontWeight = '900'
                this.style.height = '7.5vh'
                show_content.style.height = '25%'
                show_content.style.alignItems = 'start';
                icon.style.transform = 'rotate(90deg)';
                icon.style.opacity = '1'
            }
        });
    }
}
cards_content()