const btnTop = document.querySelector(".go-top");

window.addEventListener("scroll", () => {
    if(window.scrollY > 500){
        btnTop.classList.add("active");
    }   else {
        btnTop.classList.remove("active");
    }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({top: 0})
    return;
})

const supChat = document.querySelector(".support-chat-icon");
const openChat = document.querySelector(".support-chat-window");
const closeChat = document.querySelector(".close-icon");

supChat.addEventListener("click", () => {
    console.log(123);
    openChat.classList.add("open")
});



closeChat.addEventListener("click", () => {
    console.log(444444);
    openChat.classList.remove("open")
})
