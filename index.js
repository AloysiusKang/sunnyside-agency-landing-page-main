const hamburgerEl = document.querySelector("[data-hamburger]")
const navbar = document.querySelector(".nav__wrapper")
let animDropdown;

hamburgerEl.addEventListener("click", () => {
    let test = hamburgerEl.getAttribute("data-hamburger");
    
    if(test == "true"){
        hamburgerEl.setAttribute("data-hamburger", "false") 
        animDropdown = anime({
            targets: navbar,
            scale: 0,
            duration: 500,
            transformOrigin: '90% 0px 0px',
            easing: 'easeInQuad'
        })
        animDropdown.play;
    }
    else{
        hamburgerEl.setAttribute("data-hamburger", "true")
        animDropdown = anime({
            targets: navbar,
            scale: 1,
            duration: 500,
            transformOrigin: '90% 0px 0px',
            easing: 'easeOutQuad'
        })
        animDropdown.play;
    }
})