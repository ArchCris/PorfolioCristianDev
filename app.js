/*SPLASH SCREEN*/ 
const splashScreen = document.querySelector(".splashScreen")
const barraIzqSup = document.querySelector(".barraIzqSup")
const barraDerecha = document.querySelector(".barraDerecha")

window.onload = () => {
    setTimeout(() => {
        splashScreen.classList.add("fade")
    }, 1500)
    setTimeout(() => {
        barraIzqSup.style.transform = "translateX(0%)"
        barraDerecha.style.transform = "translateX(0%)"
    }, 2000)
}

 //TYPING EFFECT//
 const texts = ["A Frontend Developer.", "An architect."]
 let count = 0;
 let index = 0;
 let currentText = "";
 let letter = "";

 (function type() {
     if (count === texts.length) {
         count = 0;
     }
     currentText = texts[count]
     letter = currentText.slice(0, ++index)
     document.querySelector(".typing").textContent = letter
     if (letter.length === currentText.length) {
         count++;
         index = 0;
     }
     setTimeout(type, 300);
 }());

 //SUAVIZAR SCROLL//
 document.querySelectorAll('a[href^="#"]').forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(elem.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            offsetTop: 20
        });
    });
});

