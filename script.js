document.addEventListener("DOMContentLoaded", function () {
    const card = document.getElementById("valentineCard");

    card.addEventListener("click", function () {
        card.classList.toggle("open"); // Alternar la clase 'open' para girar la carta
    });
});
