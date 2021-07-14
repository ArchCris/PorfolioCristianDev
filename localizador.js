//LOCALIZADOR DE POSICION//

const homeScreen = document.querySelector(".homeScreen").clientHeight
const skillsScreen = document.querySelector(".skillsScreen").clientHeight
const workScreen = document.querySelector(".workScreen").clientHeight
const contactScreen = document.querySelector(".contactScreen").clientHeight

const m1 = document.querySelector(".m1")
const m2 = document.querySelector(".m2")
const m3 = document.querySelector(".m3")
const m4 = document.querySelector(".m4")
const counter = document.querySelector(".counter")


const lineA = homeScreen
const lineB = homeScreen + skillsScreen
const lineC = homeScreen + skillsScreen + workScreen


window.addEventListener("scroll", () => {
    let position = window.pageYOffset + (window.innerHeight/2)
    if (position >= 0 && position < lineA) {
        m1.classList.add("active")
        m2.classList.remove("active")
        m3.classList.remove("active")
        m4.classList.remove("active")
        counter.textContent = "1"
        miniCris.style.opacity=100
    } else if (position >= homeScreen && position < lineB) {
        m1.classList.remove("active")
        m2.classList.add("active")
        m3.classList.remove("active")
        m4.classList.remove("active")
        miniCris.style.opacity=0
        counter.textContent = "2"
    } else if (position >= lineB && position < lineC) {
        m1.classList.remove("active")
        m2.classList.remove("active")
        m3.classList.add("active")
        m4.classList.remove("active")
        counter.textContent = "3"
    } else if (position >= lineC) {
        m1.classList.remove("active")
        m2.classList.remove("active")
        m3.classList.remove("active")
        m4.classList.add("active")
        counter.textContent = "4"
    }
})



