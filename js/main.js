
// LOADER con fundido
let loader = document.getElementById("wrap-preloader");
let theSite = document.getElementById("theSite");
let noOverflow = document.querySelector("body");

// Cuando carge todo, DOM, recursos, etc
window.addEventListener("load", () =>  {
  // oculta el loader
  loader.style.display = "none"; //poner en none/grid
  // Muestra la pagina
  theSite.style.display = "inherit";
  // y pon su opacidad a 1
  noOverflow.style.overflow = "visible";
  fundidoPagina();
});

let fundidoPagina = () => {
  document.querySelector("#theSite").classList.add("fade-page-on")
}

// Muestra Creditos
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("body").addEventListener("click", credits)
});

let credits = () => {
  console.log("Website desarrollada a mano y con mucho cariño por Sergio Forés")
}
