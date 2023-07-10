const elements = document.querySelectorAll('.element');
const elements1 = document.querySelectorAll('.element1');

// animation et fixation du barre de reseaux sociaux
window.addEventListener('load', function() {
    var barre = document.getElementById('barre');
    barre.classList.add('animation');
});
window.addEventListener('scroll', function() {
    var barre = document.getElementById('barre');
    barre.style.position = 'fixed';
});


// affichage après une scroll
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.8;
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            element.classList.add('show');
        }
    })
});

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