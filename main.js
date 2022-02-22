const hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function() {
    this.classList.toggle("nav-active");
});

const navSlide = () => {
    const hamburguer = document.querySelector(".hamburguer");
    const nav = document.querySelector(".nav-links");

    hamburguer.addEventListener("click", ()=>{
        nav.classList.toggle("nav-active");
    });
}

    navSlide();
