function load() {
  // svg animacion metodo
  const metodoSVG = document.querySelector("svg#metodosvg");
  const svgBtns = document.querySelectorAll(".clickableItem");
  const svgTxts = document.querySelectorAll(".txt");

  if (metodoSVG) {

  //   var onresize = function() {
  //     metodoSVG.style.width = window.innerWidth;
  //     // metodoSVG.style.height = window.innerHeight;
  //     // width = document.body.clientWidth;
  //     // height = document.body.clientHeight;
  //  }
  //  window.addEventListener("resize", onresize);


    svgBtns.forEach((svgBtn, idx) => {
      svgBtn.addEventListener("click", () => {
        ToggleActive(svgBtn, idx);
      });
    });

    function ToggleActive(el, index) {
      el.classList.add("txt--active");
      svgTxts[index].style.display = "block";
      svgBtns.forEach((svgBtn, idx) => {
        if (idx !== index) {
          svgTxts[idx].style.display = "none";
          svgBtn.classList.remove("txt--active");
        }
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", load, false);
