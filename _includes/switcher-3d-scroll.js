// selecciono el canvas
const canvasElement = document.querySelector("model-viewer");

// selecciono elementos del switcher
const icono = document.getElementById("icono-switcher");
let innerTxtSwitch = document.getElementById("idSwitch");
const boton = document.getElementById("btn-mover");

// Escucho los eventos
boton.addEventListener("click", activarControl, true);
boton.addEventListener("touchstart", activarControl, true);

// Texto indicador de accion
innerTxtSwitch.innerText = "Habilitar mover grafico 3D";

function activarControl() {
  if (boton.checked) {
    innerTxtSwitch.innerText = "Habilitar scroll de la página";
    canvasElement.classList.add("deshabilitar");
    icono.classList.add("indicador-icono");
  } else if (!boton.checked){
    innerTxtSwitch.innerText = "Habilitar mover grafico 3D";
    canvasElement.classList.remove("deshabilitar");
    icono.classList.remove("indicador-icono");
  }
}
