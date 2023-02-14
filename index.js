const nav__open = document.querySelector(".nav__open");
const navBtn = document.querySelector(".svg__nav");
navBtn.addEventListener("click",toggleNav);
const navCloseBtn = document.querySelector(".navCloseBtn");
navCloseBtn.addEventListener("click",toggleNav);
const navLinks = document.querySelectorAll(".navLink");
navLinks.forEach(link => link.addEventListener("click",scroll) );

function toggleNav(e){
    
    if(nav__open.classList.contains("show")){
        nav__open.classList.remove("show");
    }else{
        nav__open.classList.add("show");
    }
   
}




function scroll(e){
    e.preventDefault();
    console.log("clicked");
    target = e.target.innerText;
    

    let element = document.getElementById(target);
        
        element.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
          
        });
       // window.scrollBy(0, -10);
    toggleNav();    
}