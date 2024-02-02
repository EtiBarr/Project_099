document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button and aside
    var toggleButton = document.getElementById('toggleButton');
    var aside = document.querySelector('aside');

    // Add a click event listener to the button
    toggleButton.addEventListener('click', function () {
        // Toggle the 'collapsed' class on the aside element
        aside.classList.toggle('collapsed');
    });
});