const canvasElement = document.querySelector("model-viewer");
// const canvasElement = document.getElementById("webgl-canvas");
console.log(canvasElement);

// Anula interferencia con scroll html
const boton = document.getElementById("btn-mover");
boton.addEventListener("click", activarControl, true);

// Mobil
// boton.addEventListener("touchstart", activarControl, true);
// canvasElement.domElement.classList.add("deshabilitar");


function activarControl() {
  if (boton.checked == true) {
    // controls.enabled = true;
    canvasElement.classList.add("deshabilitar");
    console.log(canvasElement);
  } else {
    // controls.enabled = false;
    canvasElement.classList.remove("deshabilitar");
  }
}
