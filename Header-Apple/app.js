const search = document.querySelector(".fa-search");
const lista = document.getElementById("lista_header");
const text_area = document.querySelector(".text_area");
const header = document.querySelector("#header");
const hamburger = document.querySelector(".fa-hamburger");

search.addEventListener("click", function () {
  lista.classList.toggle("hidden");
  text_area.classList.toggle("hidden");
});

if (window.innerWidth > 800) {
  hamburger.style.display = "none";
} else if (window.innerWidth > 800) {
  hamburger.style.display = "block";
}

if (window.innerWidth < 800) {
  hamburger.addEventListener("click", function () {
    lista.classList.toggle("hidden");
  });
}
