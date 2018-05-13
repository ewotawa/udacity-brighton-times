var el = document.getElementById("hamburger");

el.addEventListener("click", function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
});