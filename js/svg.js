let puntero =document.getElementsByClassName("puntero");
console.log(puntero);

// svg animacion metodo
let metodoSVG = document.querySelector("svg#metodo");
if (metodoSVG) {
  metodoSVG.width = window.innerWidth;
  metodoSVG.height = window.outerHeight;
}

let coversvg = document.getElementById("coversvg");
// coversvg.width = "100%"
