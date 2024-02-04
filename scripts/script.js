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
    const elementsToToggle = [
        document.querySelector("body"),
        document.querySelector("header"),
        document.querySelector("nav"),
        document.querySelector("aside"),
        document.querySelector("content"),
        document.querySelector("footer"),
        document.querySelector("#collapseBtn"),
        document.querySelector("#themeToggle"),
        document.querySelector("#signinbtn"),
        document.querySelector("#signUpbtn"),
        document.querySelector("#headerTitle"),
        ...document.querySelectorAll('.btn')
    ];

    const blackLogo = document.querySelector(".blackLogo");
    const whiteLogo = document.querySelector(".whiteLogo");

    const toggleButton = document.getElementById("themeToggle");

    toggleButton.addEventListener("click", function () {
        elementsToToggle.forEach(el => el.classList.toggle("light"));

        // image toggles
        toggleImageSrc(blackLogo);
        toggleImageSrc(whiteLogo);

        toggleButton.innerText = document.body.classList.contains("light") ? '☀️' : '🌑';
    });

    function toggleImageSrc(imageElement) {
        const currentSrc = imageElement.getAttribute("src");
        const newSrc = currentSrc.includes("plain_logo.png") ? "/images/plain_logo_white.png" : "/images/plain_logo.png";
        imageElement.setAttribute("src", newSrc);
    }
});
