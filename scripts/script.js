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
    const signinbtnn = document.querySelector("#signinbtn");


    toggleButton.addEventListener("click", function () {
        body.classList.toggle("light");
        header.classList.toggle("light");
        nav.classList.toggle("light");
        aside.classList.toggle("light");
        content.classList.toggle("light");
        footer.classList.toggle("light");
        navbtn.classList.toggle("light");
        themeToggle.classList.toggle("light");
        signinbtnn.classList.toggle("light");

        

        // image toggles
        const currentSrc = blackLogo.getAttribute("src");
        const newSrc = currentSrc.includes("plain_logo.png") ? "/images/plain_logo_white.png" : "/images/plain_logo.png";
        blackLogo.setAttribute("src", newSrc);

        const currentSrcW = whiteLogo.getAttribute("src");
        const newSrcW = currentSrcW.includes("plain_logo.png") ? "/images/plain_logo_white.png" : "/images/plain_logo.png";
        whiteLogo.setAttribute("src", newSrcW);

        toggleButton.innerText = body.classList.contains("light") ? 'Dark' : 'Light';

        
    });
});
