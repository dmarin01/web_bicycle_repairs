const hamburger = document.querySelector(".hamburger-button");
const nav = document.querySelector(".nav");


const toogleMenu = event => {

    event.preventDefault()

    if (event.type === "click" || event.key === "enter") {
        nav.classList.toggle("nav-active");
        hamburger.classList.toggle("hamburger-button--active");
    }
}

hamburger.addEventListener("click", toogleMenu);
hamburger.addEventListener("keypress", toogleMenu);
