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
innerTxtSwitch.innerText = "ACTIVAR controles 3D";

function activarControl() {
  if (boton.checked) {
    innerTxtSwitch.innerText = "Controles 3D ACTIVOS";
    canvasElement.classList.add("deshabilitar");
    icono.classList.add("indicador-icono");
  } else if (!boton.checked){
    innerTxtSwitch.innerText = "ACTIVAR controles 3D";
    canvasElement.classList.remove("deshabilitar");
    icono.classList.remove("indicador-icono");
  }
}
