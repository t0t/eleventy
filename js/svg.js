function load() {

  // svg animacion metodo
  let metodoSVG = document.querySelector("svg#metodosvg");


  if (metodoSVG) {
    metodoSVG.style.width = window.innerWidth;
    metodoSVG.style.height = window.innerHeight;

    const svgBtns = document.querySelectorAll(".clickableItem");
    const svgTxts = document.querySelectorAll(".txt");

    // svgTxts.forEach(svgTxt => {
    //   console.log(svgTxt);
    // });

    svgBtns.forEach((svgBtn,idx) => {
      svgBtn.addEventListener("click", () => {
        ToggleActive(svgBtn,idx);
        svgTxts[idx].style.display = "block";
        console.log(svgTxts[idx]);
      });
    });

    function ToggleActive(el,index) {
      el.classList.add("txt--active");
      svgBtns.forEach((svgBtn,idx) => {
        if(idx !== index) {
          svgBtn.classList.remove("txt--active");
        }
      });
    }

  }



}

document.addEventListener("DOMContentLoaded", load, false);
