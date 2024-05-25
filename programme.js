//Navbar_responsiv
function navbar() {
    const navabr = document.querySelector('.navbar-responsiv');
    const all_content_navbar = document.querySelectorAll('.navbar-responsiv-content');
    
    const navbarWidth = '40vw';
    const navbarWidth2 = '180vw';
    navabr.style.transition = '1s';

    if (navabr.style.marginLeft === navbarWidth) {
        navabr.style.marginLeft = navbarWidth2;
        navabr.style.borderRadius = '150px 0px 0px 150px';
    } 
    else {
        navabr.style.marginLeft = navbarWidth;
        navabr.style.borderRadius = '0px 0px 0px 0px';
    }

    all_content_navbar.forEach(element => {
        element.addEventListener('click', function() {
            navabr.style.marginLeft = navbarWidth2;
            navabr.style.borderRadius = '150px 0px 0px 150px';
        });
    });
}
// Sélectionnez l'élément
const tittle = document.getElementById('tittle-home');
function Characters_home() {
    // Prendre le contenu de l'élément de titre
    const text = tittle.innerText;
    // Diviser chaque caractère
    const chars = text.split('');
    // Placer chaque caractère dans un élément <span> séparé
    const wrappedChars = chars.map((char, index) => `<span id="mov-${index}" style="animation:move ${index * 0.4}s;">${char}</span>`);
    // Remplacer le contenu de l'élément de titre par les caractères enveloppés
    tittle.innerHTML = wrappedChars.join('');
}
Characters_home();
const tittle_2 = document.getElementById('tittle-home-2');
function Characters_2_home() {
    const text = tittle_2.innerText;
    const chars = text.split('');
    const wrappedChars = chars.map((char, index) => `<span id="mov-${index}" style="animation:move ${index * 0.4}s;">${char}</span>`);
    tittle_2.innerHTML = wrappedChars.join('');
}
Characters_2_home();
//cards-page-2
function cards_content() {
    const all_cards = document.querySelectorAll('.cards-info-page-2 h1');
    let previous_card = null;
    var taille = '25%'
    for (let i = 0; i < all_cards.length; i++) {
        all_cards[i].addEventListener('click', function () {
            const show_content = this.parentNode;
            const icon = this.querySelector('.bx-right-arrow-alt');

            if (show_content.style.height == taille) {
                this.style.color = '';
                this.style.fontWeight = '';
                this.style.height = '';
                show_content.style.height = '';
                show_content.style.alignItems = '';
                icon.style.transform = '';
                icon.style.opacity = '';
            } else {
                if (previous_card) {
                    previous_card.style.color = '';
                    previous_card.style.fontWeight = '';
                    previous_card.style.height = '';
                    previous_card.parentNode.style.height = '';
                    previous_card.parentNode.style.alignItems = '';
                    previous_card.querySelector('.bx-right-arrow-alt').style.transform = '';
                    previous_card.querySelector('.bx-right-arrow-alt').style.opacity = '';
                }
                this.style.color = 'black';
                this.style.fontWeight = '900';
                this.style.height = '7.5vh';
                show_content.style.height = taille;
                show_content.style.alignItems = 'start';
                icon.style.transform = 'rotate(90deg)';
                icon.style.opacity = '1';
                previous_card = this;
            }
        });
    }
}
cards_content();

//Scroll_Animation
const header = document.querySelectorAll('header h1');
const p_page_1 = document.querySelector('.content-page-1 p');
window.onscroll = function () {
    if (window.innerWidth <= 1450) {
        if (scrollY >= 700) {
            for (i = 0; i < header.length; i++) {
                // Move-1:
                header[i].style.color = 'black';
            }
        } else if (scrollY <= 690) {
            for (i = 0; i < header.length; i++) {
                // Move-1:
                header[i].style.color = 'white';
            }
        }
    }
};
//Cards_page_4 
function cards_content_2() {
    const all_cards_2 = document.querySelectorAll('.content-page-4-card');
    let taille_cards = null;
    var number;
    if (window.innerWidth <= 1400) {
        number = '18%'
    }
    if (window.innerWidth <= 1024) {
        number = '24%'
    }
    all_cards_2.forEach(element => {
        element.addEventListener('click', function () {
            const tittle = this.querySelector('h1');
            const icone = this.querySelector('.bx.bx-chevron-down');

            if (this.style.height === number) {
                this.style.height = "";
                tittle.style.height = '';
                tittle.style.color = '';
                icone.style.color = '';
                icone.style.transform = '';
                taille_cards = null;
            } else {
                if (taille_cards) {
                    const prev_tittle = taille_cards.querySelector('h1');
                    const prev_icone = taille_cards.querySelector('.bx.bx-chevron-down');
                    taille_cards.style.height = '';
                    prev_tittle.style.height = '';
                    prev_tittle.style.color = '';
                    prev_icone.style.color = '';
                    prev_icone.style.transform = '';
                }

                this.style.height = number;
                tittle.style.height = '5vh';
                tittle.style.color = 'black';
                icone.style.color = 'rgb(255, 55, 0)';
                icone.style.transform = 'rotate(180deg)';
                taille_cards = this;
            }
        });
    });
}
cards_content_2();
