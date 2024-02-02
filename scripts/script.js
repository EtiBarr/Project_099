document.addEventListener('DOMContentLoaded', function () {

    var toggleButton = document.getElementById('toggleButton');
    var aside = document.querySelector('aside');
    var content = document.querySelector('content');

    toggleButton.addEventListener('click', function () {

        aside.classList.toggle('collapsed');
        content.classList.toggle('collapsed');

    });
});