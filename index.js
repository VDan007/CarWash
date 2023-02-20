const nav__open = document.querySelector(".nav__open");
const navBtn = document.querySelector(".svg__nav");
navBtn.addEventListener("click",toggleNav);
const navCloseBtn = document.querySelector(".navCloseBtn");
navCloseBtn.addEventListener("click",toggleNav);
const navLinks = document.querySelectorAll(".navLink");
navLinks.forEach(link => link.addEventListener("click",scroll) );



function toggleNav(){

    if(nav__open.classList.contains("show")){
        nav__open.classList.remove("show");
        nav__open.removeEventListener("mouseleave",closewWithMouseAway);  
    }else{
        nav__open.classList.add("show");
        nav__open.addEventListener("mouseleave",closewWithMouseAway);   
    }
}


function closewWithMouseAway(e){
        toggleNav();   
}

function scroll(e){
    target = e.target.innerText;

    if(target == "Tétény Autóház"){
        if(window.innerWidth < 950 ){
            toggleNav();    
        } 
    }else{
        e.preventDefault();
        let element = document.getElementById(target);
            
            element.scrollIntoView({
              block: 'start',
              behavior: 'smooth',
              });

        if(window.innerWidth < 950 ){
            toggleNav();    
        }   
    }
}