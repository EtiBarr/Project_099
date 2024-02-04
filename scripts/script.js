document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('collapseBtn');
    var aside = document.querySelector('aside');
    var content = document.querySelector('content');

    toggleButton.addEventListener('click', function () {
        var isCollapsed = aside.classList.toggle('collapsed');
        content.classList.toggle('collapsed');

        toggleButton.innerText = isCollapsed ? '➕' : '➖';
    });
});


//color toggle function
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("themeToggle");
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const aside = document.querySelector("aside");
    const content = document.querySelector("content");
    const footer = document.querySelector("footer");
    const blackLogo = document.querySelector(".blackLogo");
    const whiteLogo = document.querySelector(".whiteLogo");
    const navbtn = document.querySelector("#collapseBtn");
    const themeToggle = document.querySelector("#themeToggle");
    const signinbtn = document.querySelector("#signinbtn");
    const signupbtn = document.querySelector("#signUpbtn");
    const headerTitle = document.querySelector("#headerTitle");
    const btn = document.querySelectorAll('.btn');


    toggleButton.addEventListener("click", function () {
        body.classList.toggle("light");
        header.classList.toggle("light");
        nav.classList.toggle("light");
        aside.classList.toggle("light");
        content.classList.toggle("light");
        footer.classList.toggle("light");
        navbtn.classList.toggle("light");
        themeToggle.classList.toggle("light");
        signinbtn.classList.toggle("light");
        signupbtn.classList.toggle("light");
        selectors.classList.toggle("light");
        headerTitle.classList.toggle("light");
        btn.forEach(el => {
            el.classList.toggle('light');
          })

        // image toggles
        const currentSrc = blackLogo.getAttribute("src");
        const newSrc = currentSrc.includes("plain_logo.png") ? "/images/plain_logo_white.png" : "/images/plain_logo.png";
        blackLogo.setAttribute("src", newSrc);

        const currentSrcW = whiteLogo.getAttribute("src");
        const newSrcW = currentSrcW.includes("plain_logo.png") ? "/images/plain_logo_white.png" : "/images/plain_logo.png";
        whiteLogo.setAttribute("src", newSrcW);

        toggleButton.innerText = body.classList.contains("light") ? '☀️' : '🌑';

        
    });
});


/* pottential to make the code more elegant

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const toggleButton = document.getElementById("themeToggle");
    const blackLogo = document.querySelector(".blackLogo");
    const whiteLogo = document.querySelector(".whiteLogo");

    const elementsToToggle = [body, document.querySelector("header"), document.querySelector("nav"), 
                              document.querySelector("aside"), document.querySelector("content"),
                              document.querySelector("footer"), document.querySelector("#collapseBtn"),
                              document.querySelector("#themeToggle"), document.querySelector("#signinbtn"),
                              document.querySelector("#signUpbtn"), document.querySelector("#selectors")];

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("light");

        // Toggle classes for other elements
        elementsToToggle.forEach(element => element.classList.toggle("light"));

        // Update image sources based on the theme
        toggleImageSource(blackLogo);
        toggleImageSource(whiteLogo);

        // Update button text based on the theme
        toggleButton.innerText = body.classList.contains("light") ? 'Dark' : 'Light';
    });

    function toggleImageSource(imageElement) {
        const currentSrc = body.classList.contains("light") ? imageElement.dataset.dark : imageElement.dataset.light;
        imageElement.setAttribute("src", currentSrc);
    }
});






     //addition of hover after toggle
        if(body.classList.contains("light")){
         
            navbtn.addEventListener("mouseover", () => {
                navbtn.style.backgroundColor = 'cyan';
            });

            navbtn.addEventListener("mouseout", () => {
                navbtn.style.backgroundColor = 'magenta';
            });
            themeToggle.addEventListener("mouseover", () => {
                themeToggle.style.backgroundColor = 'cyan';
            });

            themeToggle.addEventListener("mouseout", () => {
                themeToggle.style.backgroundColor = 'magenta';
            });
       
        }else {
            // Reset hover styles for dark mode
            navbtn.addEventListener("mouseover", () => {
                navbtn.style.backgroundColor = ''; // Reset to default
            });
    
            navbtn.addEventListener("mouseout", () => {
                navbtn.style.backgroundColor = ''; // Reset to default
            });
    
            themeToggle.addEventListener("mouseover", () => {
                themeToggle.style.backgroundColor = ''; // Reset to default
            });
    
            themeToggle.addEventListener("mouseout", () => {
                themeToggle.style.backgroundColor = ''; // Reset to default
            });
        }
        
*/