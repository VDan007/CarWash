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
        navBtn.style.display = "block";
    }else{
        nav__open.classList.add("show");
        navBtn.style.display = "none";
        
    }
   
}




function scroll(e){
    
    target = e.target.innerText;

    if (target == "Tétény Autóház"){
        toggleNav(); 
    }
    
    else{
        e.preventDefault();
        let element = document.getElementById(target);
            
            element.scrollIntoView({
              block: 'start',
              behavior: 'smooth',
              
            });
           
        toggleNav();    

    }
    

}