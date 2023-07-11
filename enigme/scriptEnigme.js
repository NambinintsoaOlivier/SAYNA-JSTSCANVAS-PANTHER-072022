const elements = document.querySelectorAll('.element');
const elements1 = document.querySelectorAll('.element1');


window.addEventListener('load', function() {
    var barre = document.getElementById('barre');
    barre.classList.add('animation');
});
window.addEventListener('scroll', function() {
    var barre = document.getElementById('barre');
    barre.style.position = 'fixed';
})
window.addEventListener('load', () => {
    const triggerBottom = window.innerHeight * 0.8;
    elements1.forEach(element1 => {
        const elementTop = element1.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            element1.classList.add('show');
        }
    })
})
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.8;
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            element.classList.add('show');
        }
    })
})


// quiz
let firstEnvoyer = document.querySelector('.envoyer');
let nbQuestion = document.querySelector('.nbquestion');
let suivant = document.querySelector('.suivant');
let correct = document.querySelector('.correct');
let incorrect = document.querySelector('.incorrect');
let affirmation = document.querySelector('.affirmation');
let phrase = document.querySelector('.phrase');
let textW = document.querySelector('.text-wakanda');
let doc = document.querySelector('.doc');
let questionCount = 1;
score = 0;
// liste des questions et choix
const quizArray = [{
        id: "0",
        affirmation: "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage.L’ alphabet a été décalé,trouve la clé de chiffrement qui te permettrait de retrouver les lettres etretranscris la phrase: ",
        phrase: "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt aioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
        reponse: "good1",
        doc: "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ?",
        correct: "Saphir",
    },
    {
        id: "1",
        affirmation: "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
        phrase: "01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010",
        reponse: "",
        doc: "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1",
        correct: "Psychiatre",
    },
    {
        id: "2",
        question: "",
        correct: "",
    }

];

firstEnvoyer.addEventListener("click", () => {
    var reponse1 = document.getElementById('reponse').value;
    if (reponse1 != "") {
        if (reponse1 != "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS") {
            correct.classList.add('none');
            incorrect.classList.remove('none');
            popup();
        } else {
            score++;
            incorrect.classList.add('none');
            correct.classList.remove('none');
            popup();
        }
    }
})



function popup() {
    const all = document.getElementById('active-pop');
    document.getElementById('myForm').addEventListener("submit", function(event) {
        event.preventDefault();
    })
    let popup = document.getElementById('popup2');
    popup.classList.remove('none');
    all.classList.add('blur');
    all.style.position = "fixed";

}


// suivant
suivant.addEventListener('click', displayNext = () => {
    var reponse1 = document.getElementById('reponse').value;
    let popup = document.getElementById('popup2');
    const all = document.getElementById('active-pop');
    all.classList.remove('blur');
    all.style.position = "relative";
    popup.classList.add('none');
    questionCount += 1;
    if (questionCount == 2) {
        const element = quizArray[0];
        affirmation.innerHTML = element.affirmation;
        phrase.classList.remove('none');
        textW.classList.add('none');
        phrase.innerHTML = element.phrase + `<br><br><p class="citation ">Alors, as tu la réponse ?</p><br>`;
        doc.innerHTML = "Le savais tu ?" + `<br><br>` + element.doc;
        document.getElementById('reponse').value = "";
        firstEnvoyer.classList.remove('envoyer');
        firstEnvoyer.classList.add('valider1');
        document.querySelector('.valider1').addEventListener('click', () => {
            var reponse1 = document.getElementById('reponse').value;
            if (reponse1 != "") {
                if (reponse1 != "La puce et le bulldozer ont rencontré un obstacle. Il semble que ce soit juste une grosse branche mais il faudrait la déplacer pour pouvoir continuer la construction en toute sécurité. Je vais m'en occuper et demander au reste de l'équipe de bien vérifier qu'il n'y a pas d'autres obstacles sur notre chemin") {
                    correct.classList.add('none');
                    incorrect.classList.remove('none');
                    popup();
                } else {
                    score++;
                    incorrect.classList.add('none');
                    correct.classList.remove('none');
                    popup();
                }
            }
        });
    }
    if (questionCount == 3) {
        const element = quizArray[1];
        affirmation.innerHTML = element.affirmation;
        phrase.classList.remove('none');
        textW.classList.add('none');
        phrase.innerHTML = element.phrase + `<br><br><p class="citation ">Alors, as tu la réponse ?</p><br>`;
        doc.innerHTML = "Le savais tu ?" + `<br><br>` + element.doc;
        document.getElementById('reponse').value = "";
        firstEnvoyer.classList.remove('valider1');
        firstEnvoyer.classList.add('valider2');
        document.querySelector('.valider2').addEventListener('click', () => {
            var reponse1 = document.getElementById('reponse').value;
            if (reponse1 != "") {
                if (reponse1 != "LE ROI LION") {
                    correct.classList.add('none');
                    incorrect.classList.remove('none');
                    popup();
                } else {
                    score++;
                    incorrect.classList.add('none');
                    correct.classList.remove('none');
                    popup();
                }
            }
        });
        if (questionCount == 4) {

        }
    }

    nbQuestion.innerHTML = questionCount;
    if (questionCount == quizArray.length + 1) {
        document.getElementById('reponse').value = "";
        document.querySelector(".endGame").classList.remove('none');
        timerDisplay();
    } else {
        quizDisplay();
    }

});
let countdown;
let count = 60;
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        document.getElementById('countdown').innerHTML = "00:00:" + `${count}`;
        if (count == 0) {
            clearInterval(countdown);
            document.querySelector(".endGame").classList.add('none');
            location.reload();
        }
    }, 1000);
};

let reessayer = document.querySelector('.reessayer');
reessayer.addEventListener('click', () => {
    document.querySelector(".popup2").classList.add('none');
    document.getElementById('reponse').value = "";
    const all = document.getElementById('active-pop');
    all.classList.remove('blur');
    all.style.position = "relative";
})