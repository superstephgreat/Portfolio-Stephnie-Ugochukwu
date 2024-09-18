document.querySelectorAll('a[href^="#]').forEach(anchor => {
    anchor.addEventListener('click'),function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behaviour: 'smooth'
        });
    };
});

isToggled = false;
    function toggleHeader(){
        const navLinks = document.getElementById("navLinks");
        const header = document.getElementById("header");
        
       header.classList.toggle("active");
       navLinks.classList.toggle("active");
    

    if (isToggled){
        toggleBtn.style.left = "0";
        isToggled = false;
    } else {
        toggleBtn.style.left = "calc(100% - 30px)";
        isToggled = true;
    }
    }
    
    

