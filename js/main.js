const timmy = 12412423414141;
console.log("cargado");

document.addEventListener("DOMContentLoaded", () => {
  two();
  document.querySelector("footer").addEventListener("click", one)
});

let one = () => {
  console.log("Website desarrollada a mano y con mucho cariño")
}

let two = () => {
  console.log("By Sergio Forés")
}
