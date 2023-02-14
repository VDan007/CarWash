const nav__open = document.querySelector(".nav__open");
const navBtn = document.querySelector(".svg__nav");
navBtn.addEventListener("click",toggleNav);
const navCloseBtn = document.querySelector(".navCloseBtn");
navCloseBtn.addEventListener("click",toggleNav);

function toggleNav(){
    if(nav__open.classList.contains("show")){
        nav__open.classList.remove("show");
    }else{
        nav__open.classList.add("show");
    }
}