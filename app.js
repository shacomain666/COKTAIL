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
    openChat.classList.add("open")
});



closeChat.addEventListener("click", () => {
    openChat.classList.remove("open")
})











const arrLeft = document.querySelector(".arr-left");
const arrRight = document.querySelector(".arr-right");
const cardsScroll = document.querySelector(".cards-scroll");

arrLeft.addEventListener("click", () => {
    console.log('left');
});



arrRight.addEventListener("click", () => {
    console.log('right');
})
