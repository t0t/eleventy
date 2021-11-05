function DOMCargado() {

  let entradaTexto = "";
  let input = document.getElementById("entrada");
  let btnGenerar = document.getElementById("lanza");
  let outputWrapper = document.querySelector(".output");
  let output = document.getElementById("outputtexto");
  let fechaNacimiento = document.getElementById('fechanacimiento');
  let petalPath = document.getElementById('petalpath');

  let fechaNacimientoUsuario = 0, frecuenciaNacimiento, diasRestantesAnyo,diasAnyoTranscurridos, agnio, resultadoSuma;

  let grafica = {
    "fechanacimiento": fechaNacimientoUsuario,
    "frecuencianacimiento": frecuenciaNacimiento,
    "diasrestantesanyo": diasRestantesAnyo,
    "diasrestantesnacimiento": 0,
    "diasanyotranscurridos": diasAnyoTranscurridos,
    "resultadosuma": resultadoSuma
  }

  if (btnGenerar) {

    fechaNacimiento.addEventListener('change', (e) => {

      fechaNacimientoUsuario = e.target.value;
      frecuenciaNacimiento = inputFecha(fechaNacimientoUsuario);

      grafica.fechanacimiento = fechaNacimientoUsuario;
      grafica.frecuencianacimiento = frecuenciaNacimiento;
      grafica.diasrestantesnacimiento = parseInt(frecuenciaNacimiento - obtenerCantidadDias(agnio));

    });

    btnGenerar.addEventListener("click", () => {

      entradaTexto = input.value;
      let normaliza = entradaTexto.toLowerCase()
      const removeAccents = (str) => {
          return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      }
      var textoIntroducido = removeAccents(normaliza);
      resultadoSuma = extraeValoresLetras(textoIntroducido).reduce( (a,v) => (a += v, +a), 0);

      let fechaActual = new Date();
      diasAnyoTranscurridos = diasTranscurridos(fechaActual);
      diasRestantesAnyo = obtenerCantidadDias(agnio) - diasAnyoTranscurridos;

      grafica.diasrestantesanyo = diasRestantesAnyo;
      grafica.diasanyotranscurridos = diasAnyoTranscurridos;
      grafica.resultadosuma = resultadoSuma;

      outputWrapper.style.display = "grid";
      output.innerHTML = `
      <dl>
        <dt>Frecuencias de palabras:</dt>
          <dd>"${textoIntroducido}" = <strong>${resultadoSuma}</strong></dd>
          <dd>Frecuencia Hoy: <strong>${diasAnyoTranscurridos}</strong> - <strong>${diasRestantesAnyo}</strong></dd>
          <dd>Frecuencia nacimiento: <strong>${grafica.frecuencianacimiento}</strong><strong>${grafica.diasrestantesnacimiento}</strong></dd>
      </dl>
      `

    })
  }

<<<<<<< HEAD
  let grafica = {
    "fechanacimiento": fechaNacimientoUsuario,
    "frecuencianacimiento": frecuenciaNacimiento,
    "diasrestantesanyo": diasRestantesAnyo,
    "diasrestantesnacimiento": 100,
    "diasanyotranscurridos": diasAnyoTranscurridos,
    "resultadosuma": resultadoSuma
  }
=======

>>>>>>> main

  function inputFecha(f1) {
    var aFecha1 = f1.split('-'); // ['1975', '10', '15']
    var fFecha1 = Date.UTC(aFecha1[0],aFecha1[1]-1,aFecha1[2]);
    var fFecha2 = Date.UTC(aFecha1[0],-00,00);
    agnio = aFecha1[0];
    var dif = (fFecha1 - fFecha2) / (1000 * 60 * 60 * 24);
    return Math.floor(dif);
  }

  // dias del año transcurridos hasta hoy
  function diasTranscurridos(fechaactual) {
    let previo = new Date(fechaactual.getFullYear(), 0, 1);
    let actual = new Date(fechaactual.getTime());

    return Math.ceil((actual - previo + 1) / 86400000);
  }

  // Codigo nombre
  function extraeValoresLetras(cadenaTexto){
      const diccionario = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
        l: 12, m: 13, n: 14, ñ: 15, o: 16, p: 17, q: 18, r: 19, s: 20,
        t: 21, u: 22, v: 23, w: 24, x: 25, y: 26, z: 27
      }

      if (cadenaTexto.length == 1) {
        return diccionario[cadenaTexto] || ' ';
      }
      return cadenaTexto.split('').map(extraeValoresLetras);
  }

  function esAgnioBisiesto(agnio) {
    return agnio % 400 == 0 || (agnio % 100 != 0 && agnio % 4 == 0);
  }

  function obtenerCantidadDias(agnio) {
    return esAgnioBisiesto(agnio) ? 366 : 365;
  }

  // let path = anime.path("#thepath path");
  //   anime({
  //     targets: "#emoji",
  //     translateX: path("x"),
  //     translateY: path("y"),
  //     easing: "linear",
  //     duration: 10000,
  //     loop: true
  //   })

  let morfing = document.querySelector("#polymorph polygon");
  if (morfing) {
    anime({
      targets: [morfing],
      points: [
        { value: [
          '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
          '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']
        },
        { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
        { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
        { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
      ],
      easing: 'easeOutQuad',
      duration: 2000,
      loop: true
    });
  }

  // Grafica D3

  const DUMMY_DATA = [
    { "id": 01, "numero": 25, "lupa": 24, "color": "red"},
    { "id": 02, "numero": 75, "lupa": 13, "color": "blue"},
    { "id": 03, "numero": 55, "lupa": 4, "color": "yellow"},
    { "id": 04, "numero": 40, "lupa": 3, "color": "green"}
  ]

  DUMMY_DATA.forEach( dto => {
    dto.numero
  });

  const width = 500;
  const height = 300;

  const container = d3.select("svg#petalpath")
  .attr("width", width)
  .attr("height", height)

  const circle = container.append("circle")
    .attr("r", height/3)
    .attr("cx", width/2)
    .attr("cy", height/2)
    .attr("fill", "yellow")

  const uno = container.append("circle")
    .attr("r", height/6)
    .attr("cx", width/2.5)
    .attr("cy", height/2)
    .attr("fill", "black")

  const dos = container.append("circle")
    .attr("r", height/6)
    .attr("cx", width/2+height/6)
    .attr("cy", height/2)
    .attr("fill", "black")

  const g = container.append("g")
    .attr("transform", `translate(${width/2},${width/4})`);

  const arco = d3.arc()
    .innerRadius(98)
    .outerRadius(100)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3 / 2);

  let sz1 = 50;
  let sz2 = 20;
  let sz3 = 30;
  let pPath = `M 0,0 C -${sz2},-${sz2}, -${sz2},-${sz3} 0,-${sz1} C ${sz2},-${sz3} ${sz2},-${sz2} 0,0`;

  g.append("path")
    .attr("d", pPath)
  g.append("path")
    .attr("d", arco)




}
document.addEventListener("DOMContentLoaded", DOMCargado);


// seleccionar dato al azar

// let azarDatos = [1,2,3,"ss",9]
// function seleccionarDatoAlAzar(azarDatos) {
//   return azarDatos[Math.floor(Math.random() * azarDatos.length)]
// }
// console.log(seleccionarDatoAlAzar(azarDatos))


