function load() {

  // svg animacion metodo
  let metodoSVG = document.querySelector("#metodosvg");


  if (metodoSVG) {
    metodoSVG.width = window.innerWidth;
    metodoSVG.height = window.outerHeight;

    let elementoCero = document.querySelector("svg#metodosvg circle#cero");
    let elementoUno = document.querySelector("svg#metodosvg circle#uno");
    let elementoDos = document.querySelector("svg#metodosvg circle#dos");
    let elementoTres = document.querySelector("svg#metodosvg circle#tres");
    let elementoCuatro = document.querySelector("svg#metodosvg circle#cuatro");

    elementoCero.addEventListener("click", accionCero);
    elementoUno.addEventListener("click", accionUno);
    elementoDos.addEventListener("click", accionDos);
    elementoTres.addEventListener("click", accionTres);
    elementoCuatro.addEventListener("click", accionCuatro);
  }



  function accionCero(e) {
    let txtCero = document.getElementById("txt0");
    txtCero.classList.toggle("txt--active");
  }

  function accionUno(e) {
    let txtUno = document.getElementById("txt1");
    txtUno.classList.toggle("txt--active");
  }

  function accionDos(e) {
    let txtDos = document.getElementById("txt2");
    txtDos.classList.toggle("txt--active");
  }

  function accionTres(e) {
    let txtTres = document.getElementById("txt3");
    txtTres.classList.toggle("txt--active");
  }

  function accionCuatro(e) {
    let txtCuatro = document.getElementById("txt4");
    txtCuatro.classList.toggle("txt--active");
  }



}

document.addEventListener("DOMContentLoaded", load, false);
