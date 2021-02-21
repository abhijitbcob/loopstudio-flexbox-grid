var btnHamburger = document.getElementById("btnHamburger");
var header = document.querySelector(".header");

btnHamburger.addEventListener('click', function () {
    if (header.classList.contains("open")) {
        header.classList.remove("open");
    } else {
        header.classList.add("open");
    }
})