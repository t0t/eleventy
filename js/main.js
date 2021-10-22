

let loader = document.getElementById("wrap-preloader");
let theSite = document.getElementById("theSite");

window.addEventListener("load", () =>  {
  loader.style.display = "none";
  theSite.style.display = "inherit";
  fundidoPagina();
});

let fundidoPagina = () => {
  document.querySelector("#theSite").classList.add("fade-page-on")
  console.log("Web cargada sin errores");
}

// Page Preload y fade page
document.addEventListener("DOMContentLoaded", () => {

  console.log(loader);

  // showPage();
  // document.querySelector("body").addEventListener("click", credits)
});


// let credits = () => {
//   console.log("Website desarrollada a mano y con mucho cariño por Sergio Forés")
// }



// function myFunction() {
//   myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//   preLoader.style.display = "none";
//   document.getElementById("theSite").style.display = "block";
// }
