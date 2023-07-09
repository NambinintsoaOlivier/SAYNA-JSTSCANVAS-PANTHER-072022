// les variables et constantes
var vide = "";
const elements = document.querySelectorAll('.element');
const elements1 = document.querySelectorAll('.element1');


// affichage après une scroll
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.8;
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            element.classList.add('show');
        }
    })
})

// animation d'entrée du header
window.addEventListener('load', () => {
    const triggerBottom = window.innerHeight * 0.8;
    elements1.forEach(element1 => {
        const elementTop = element1.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            element1.classList.add('show');
        }
    })
})

// bouton voir plus
function scrollToSection(divId) {
    var section = document.getElementById(divId);
    section.scrollIntoView({
        behavior: 'smooth'
    });
}

// animation et fixation du barre de reseaux sociaux
window.addEventListener('load', function() {
    var barre = document.getElementById('barre');
    barre.classList.add('animation');
})
window.addEventListener('scroll', function() {
    var barre = document.getElementById('barre');
    barre.style.position = 'fixed';
})

// scrolling de barre des photos
window.addEventListener('load', function() {
    var conteneur = document.querySelector('.barre');
    var suivant = document.getElementById('suivant');
    var killmonger = document.querySelector(".Killmonger");
    var okoye = document.querySelector(".okoye");
    var shuri = document.querySelector(".shuri");
    var nakia = document.querySelector(".nakia");
    var ramonda = document.querySelector(".ramonda");
    var kabi = document.querySelector(".kabi");
    var baku = document.querySelector(".baku");
    var nbclick = 0;

    suivant.addEventListener('click', function() {
        conteneur.scrollBy({
            left: 551,
            behavior: 'smooth',
        });
        nbclick++;
        switch (nbclick) {
            case 1:
                killmonger.classList.add('contenu-principal');
                break;
            case 2:
                okoye.classList.add('contenu-principal');
                break;
            case 3:
                shuri.classList.add('contenu-principal');
                break;
            case 4:
                nakia.classList.add('contenu-principal');
                break;
            case 5:
                ramonda.classList.add('contenu-principal');
                break;
            case 6:
                kabi.classList.add('contenu-principal');
                break;
            case 7:
                baku.classList.add('contenu-principal');
                break;
            case 8:
                break;
            default:
                killmonger.classList.remove('contenu-principal');
                okoye.classList.remove('contenu-principal');
                shuri.classList.remove('contenu-principal');
                nakia.classList.remove('contenu-principal');
                ramonda.classList.remove('contenu-principal');
                kabi.classList.remove('contenu-principal');
                kabi.classList.remove('contenu-principal');
                baku.classList.remove('contenu-principal');
                nbclick = 0;
                conteneur.scrollBy({
                    left: -5000,
                    behavior: 'smooth',
                });
        }
    });
});


// zoom image
var image = document.getElementById("Challa");

image.addEventListener("mouseover", function() {
    this.classList.add("zoomed");
});
image.addEventListener("mouseout", function() {
    this.classList.remove("zoomed");
});