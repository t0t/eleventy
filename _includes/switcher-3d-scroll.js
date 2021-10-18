const canvasElement = document.querySelector("model-viewer");

// Anula interferencia con scroll html
const icono = document.getElementById("icono-switcher");
// icono.addEventListener("click", activarControl, true);

// /selecciono el label
let innerTxtSwitch = document.getElementById("idSwitch");

const boton = document.getElementById("btn-mover");
boton.addEventListener("click", activarControl, true);
// canvasElement.classList.add("deshabilitar");

// Mobil
boton.addEventListener("touchstart", activarControl, true);

console.log(innerTxtSwitch);
innerTxtSwitch.innerText = "Clica aquí para mover el modelo 3D";

function activarControl() {
  if (boton.checked) {
    innerTxtSwitch.innerText = "Ahora puedes mover el modelo 3D";
    canvasElement.classList.add("deshabilitar");
    icono.classList.add("indicador-icono");
  } else if (!boton.checked){
    innerTxtSwitch.innerText = "Clica aquí para mover el modelo 3D";
    canvasElement.classList.remove("deshabilitar");
    icono.classList.remove("indicador-icono");
  }
}
