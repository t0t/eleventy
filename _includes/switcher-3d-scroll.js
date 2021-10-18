const canvasElement = document.querySelector("model-viewer");

// Anula interferencia con scroll html
const boton = document.getElementById("btn-mover");
boton.addEventListener("click", activarControl, true);
// canvasElement.classList.add("deshabilitar");

// Mobil
boton.addEventListener("touchstart", activarControl, true);

function activarControl() {
  if (boton.checked == true) {
    canvasElement.classList.add("deshabilitar");
    console.log(canvasElement);
  } else {
    canvasElement.classList.remove("deshabilitar");
  }
}
