const btnTop = document.querySelector(".go-top")

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        btnTop.classList.add("active");
    }   else {
        btnTop.classList.remove("active");
    }
})

const supChat = document.querySelector(".support-chat-window")

addEventListener("click", () => {
    if(document.querySelector(".support-chat-window")){
        supChat.classList.add("open")
    }
})






// function open(chat) {
//     display = document.getElementById("box").style.display;
//     if(display == "none") {
//         document.getElementById("box").style.display = "block";
//     } else {
//         document.getElementById("box").style.display = "none";
//     }
// }