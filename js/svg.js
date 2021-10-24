let puntero =document.getElementsByClassName("puntero");
console.log(puntero);


let metodoSVG = document.querySelector("svg#metodo");

if (metodoSVG) {
  metodoSVG.width = window.innerWidth;
  metodoSVG.height = window.outerHeight;
}
