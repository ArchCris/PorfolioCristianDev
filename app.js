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
 const texts = ["A Frontend Dev.", "An Architect."]
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

 //*SUAVIZAR SCROLL*//
 document.querySelectorAll('a[href^="#"]').forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(elem.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            offsetTop: 20
        });
    });
 });

//RESET FORM//
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}
  
//FORM VALIDATION//
const nameOk = document.querySelector("#nameOk")
const mailOk = document.querySelector("#mailOk")
const nameWrong = document.querySelector("#nameWrong")
const mailWrong = document.querySelector("#mailWrong")

const inputName = document.querySelector("#name")
const inputMail = document.querySelector("#mail")
const textarea = document.querySelector("#textarea")
const btnSubmit = document.querySelector("#btnSubmit")

const nameErrorConteiner = document.querySelector(".nameErrorConteiner")
const mailErrorConteiner = document.querySelector(".mailErrorConteiner")


let submitStatus = true

inputName.addEventListener("blur", () => {

    let errorMessage=[]
    
    if(inputName.value.length <= 6 && inputName.value != "" ){
        errorMessage.push("The name should have more than 6 characters")
        nameOk.classList.remove("visible")
        nameWrong.classList.add("visible")
        submitStatus = false
    } else {
        nameWrong.classList.remove("visible")
        nameOk.classList.add("visible")
        submitStatus = true
    }
    if(/[0-9]/.test(inputName.value) == true){
        errorMessage.push(" The name should not have numbers")
        nameOk.classList.remove("visible")
        nameWrong.classList.add("visible")
        submitStatus = false
    }
    if(inputName.value == ""){
        errorMessage.push(" Write something in the input")
        nameOk.classList.remove("visible")
        nameWrong.classList.add("visible")
        submitStatus = false
    }
    nameErrorConteiner.innerHTML = errorMessage 
})

inputMail.addEventListener("blur", () => {

    let errorMessage = []

    if(/@/.test(inputMail.value) == false && inputMail.value != ""){
        errorMessage.push(" The email address must contain @")
        mailOk.classList.remove("visible")
        mailWrong.classList.add("visible")
        submitStatus = false
    } else {
        mailWrong.classList.remove("visible")
        mailOk.classList.add("visible")
        submitStatus = true
        
    }

    if( inputMail.value == ""){
        errorMessage.push(" Write something in the input")
        mailOk.classList.remove("visible")
        mailWrong.classList.add("visible")
        submitStatus = false
    } 
    
    console.log(submitStatus)
    mailErrorConteiner.innerHTML = errorMessage 
})

textarea.addEventListener("keypress", () => {
    console.log("2")
    if (textarea.value.length >= 1){
        textarea.style.border = "solid 4px green"
    }
})

btnSubmit.addEventListener("click", (e) => {
    if (textarea.value == "") {
        textarea.style.border = "solid 4px rgb(197, 78, 78)"
    }if (inputName.value == "") {
        console.log("g")
        nameWrong.classList.add("visible")
    }if(inputMail.value == "") {
        mailWrong.classList.add("visible")
    }
    if (submitStatus == false) {
        e.preventDefault()
    }
})

//MINI CRIS EFECT//
const miniCris = document.querySelector("#miniCris")

setTimeout(() => {
    miniCris.style.opacity=100
}, 2000);



//MOUSE EFECT//
const cursor = document.querySelector(".cursor")

window.addEventListener("mousemove", cursorEffect)

function cursorEffect(e) {
    cursor.style.top=e.pageY+"px"
    cursor.style.left=e.pageX+"px"
}