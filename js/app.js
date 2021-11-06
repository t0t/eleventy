
function DOMCargado() {

  let entradaTexto = "";
  let input = document.getElementById("entrada");
  let btnGenerar = document.getElementById("lanza");
  let output = document.querySelector(".output");
  let fechaNacimiento = document.getElementById('fechanacimiento');
  let graficaWrapper = document.getElementById('grafica');

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

      output.classList.toggle("resultado")
      output.innerHTML = `
        <h2>${resultadoSuma}</h2>
        <h2>${diasAnyoTranscurridos}-${diasRestantesAnyo}</h2>
        <h2>${grafica.frecuencianacimiento}${grafica.diasrestantesnacimiento}</h2>

      `
    })
  }

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
      a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, ñ: 15, o: 16, p: 17, q: 18, r: 19, s: 20, t: 21, u: 22, v: 23, w: 24, x: 25, y: 26, z: 27
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


  // Grafica D3

  const datos = [
    {
      id: 00,
      angle: 0,
      x: -60,
      y: 0,
      lupa: 3,
      color: 'black',
      nombre: "0"
    }, {
      id: 01,
      angle: 0,
      x: 35,
      y: 0,
      lupa: 24,
      color: '#2BC4A9',
      nombre: "1"
    }, {
      id: 02,
      angle: 0,
      x: 15,
      y: 50,
      lupa: 13,
      color: '#FF6874',
      nombre: "2"
    }, {
      id: 03,
      angle: 0,
      x: 15,
      y: -45,
      lupa: 4,
      color: '#9F9FFF',
      nombre: "3"
    }, {
      id: 04,
      angle: 0,
      x: 0,
      y: 0,
      lupa: 3,
      color: '#FFFF9F',
      nombre: "4"
    }, {
      id: 05,
      angle: 0,
      x: -17,
      y: 50,
      lupa: 3,
      color: 'grey',
      nombre: "5"
    }, {
      id: 06,
      angle: 0,
      x: -17,
      y: -45,
      lupa: 3,
      color: 'grey',
      nombre: "6"
    }, {
      id: 07,
      angle: 0,
      x: -38,
      y: 0,
      lupa: 3,
      color: 'grey',
      nombre: "7"
    }, {
      id: 08,
      angle: 0,
      x: -50,
      y: 50,
      lupa: 3,
      color: 'grey',
      nombre: "8"
    }, {
      id: 09,
      angle: 0,
      x: -50,
      y: -45,
      lupa: 3,
      color: 'grey',
      nombre: "9"
    }
  ]

  // let sz1 = 50;
  // let sz2 = 20;
  // let sz3 = 30;
  // let pPath = `M 0,0 C -${sz2},-${sz2}, -${sz2},-${sz3} 0,-${sz1} C ${sz2},-${sz3} ${sz2},-${sz2} 0,0`;

  let width = window.innerWidth;
  let height = window.innerHeight / 2;

  const radio = height / 2;

  const container = d3.select("#grafica")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

  const g = container.append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

  // Escala svg y g en window
  d3.select(window).on("resize", (e)=> {
    let iw = e.target.innerWidth;
    let ih = e.target.innerHeight;
    container.attr("width", iw).attr("height", ih / 2);
    g.attr("transform", `translate(${iw / 2},${ih / 4})`);
  })

  const circuloGrande = g.append("circle")
    .attr("r", radio / 1.5)
    .attr("cx", radio / 2 - radio / 2)
    .attr("stroke", datos[0].color)
    .attr("strokeWidth", "1px")
    .attr("fill", "none");

  const circuloGrande2 = g.append("circle")
    .attr("r", radio / 1.5)
    .attr("cx", radio / 1.5)
    .attr("stroke", datos[0].color)
    .attr("strokeWidth", "1px")
    .attr("fill", "none");

  const circuloGrande3 = g.append("circle")
    .attr("r", radio / 1.5)
    .attr("cx", -(radio / 1.5))
    .attr("stroke", datos[0].color)
    .attr("strokeWidth", "1px")
    .attr("fill", "none")
    .on('mouseover', (e) => { e.target.style.fill = datos[0].color })
    .on('mouseout', (e) => { e.target.style.fill = datos[1].color })

    // https://bl.ocks.org/mbostock/3151228

  let numeros = g
    .selectAll("text")
    .data(datos)
    .enter()
    .append("text")
    .attr("x", d => d.x * Math.PI)
    .attr("y", d => d.y)
    .attr("transform", d => {
      return `translate(${d.x}, ${d.y})`
    })
    .text(d => d.nombre)
    .attr("fill", d => d.color);

  numeros
    .selectAll("circle")
    .append("circle")
    .enter()

  const arco = d3.arc()
    .innerRadius(129)
    .outerRadius(131)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3 / 2);

  const arco2 = d3.arc()
    .innerRadius(129)
    .outerRadius(135)
    .startAngle(Math.PI * 2)
    .endAngle(10);

  g
    .append("path")
    .attr("d", arco);

  g
    .append("path")
    .attr("d", arco2)
    .attr("transform", `rotate(360) translate(-${radio*1.345} 0)`);

  const uno = g.append("circle")
    .attr("r", radio/3)
    .attr("cx", radio/3)
    .attr("stroke", datos[0].color)
    .attr("strokeWidth", "1px")
    .attr("fill", "none")

  const dos = g.append("circle")
    .attr("r", radio/3)
    .attr("cx", radio/3 - radio/1.5)
    .attr("stroke", datos[0].color)
    .attr("fill", "none")
    .attr("strokeWidth", "1px")

  const tres = g.append("circle")
    .attr("r", radio/3)
    .attr("cx", 0)
    .attr("stroke", datos[0].color)
    .attr("fill", "none")
    .attr("strokeWidth", "1px")

  const cuatro = g.append("circle")
    .attr("r", radio/3)
    .attr("cx", radio - radio/3)
    .attr("stroke", datos[0].color)
    .attr("fill", "none")
    .attr("strokeWidth", "1px")

  // g.append("path")
  //   .attr("d", pPath)


}
document.addEventListener("DOMContentLoaded", DOMCargado);

// seleccionar dato al azar

// let azarDatos = [1,2,3,"ss",9]
// function seleccionarDatoAlAzar(azarDatos) {
//   return azarDatos[Math.floor(Math.random() * azarDatos.length)]
// }
// console.log(seleccionarDatoAlAzar(azarDatos))
