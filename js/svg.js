function load() {

  // svg animacion metodo
  let metodoSVG = document.querySelector("svg#metodosvg");


  if (metodoSVG) {
    metodoSVG.style.width = window.innerWidth;
    metodoSVG.style.height = window.innerHeight;
    console.log(metodoSVG.width);

    const svgBtns = document.querySelectorAll(".clickableItem");

    svgBtns.forEach((svgBtn,idx) => {
      svgBtn.addEventListener("click", () => {
        ToggleActive(svgBtn,idx);
      });
    });

    function ToggleActive(el,index) {
      el.classList.toggle("txt--active");
      svgBtns.forEach((svgBtn,idx) => {
        if(idx !== index) {
          svgBtn.classList.remove("txt--active");
        }
      });
    }

    console.log(svgBtns);
  }



}

document.addEventListener("DOMContentLoaded", load, false);
