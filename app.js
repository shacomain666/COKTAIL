const btnTop = document.querySelector(".go-top")

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        btnTop.classList.add("active");
    }   else {
        btnTop.classList.remove("active");
    }
})