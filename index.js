const hamburgerEl = document.querySelector("[data-hamburger]")
const navbar = document.querySelector(".nav__wrapper")
let animDropdown;

// Function for scaling animation so to not write it twice in event listener
function scaleAnim(target, value){
    let ease;
    if(value == 1){
        ease = "easeOutQuad";
    }
    else{
        ease = "easeInQuad";
    }

    anime({
        targets: target,
        scale: value,
        duration: 500,
        transformOrigin: '90% 0px 0px',
        easing: ease
    })
}

// Still needed for listening clicks and setting the correct value for data- attribute
hamburgerEl.addEventListener("click", () => {
    let test = hamburgerEl.getAttribute("data-hamburger");
    
    if(test == "true"){
        hamburgerEl.setAttribute("data-hamburger", "false") 
        scaleAnim(navbar, 0)
    }
    else{
        hamburgerEl.setAttribute("data-hamburger", "true")
        scaleAnim(navbar, 1)
    }
})