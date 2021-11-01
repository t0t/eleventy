let entradaTexto = "";
let input = document.getElementById("entrada");
let btnGenerar = document.getElementById("lanza");
let output = document.getElementById("outputtexto");
let outputFecha = document.getElementById("outputfecha");
let fechaNacimiento = document.getElementById('fechanacimiento');
let graficaGenerada = document.getElementById('graficagenerada');

let fechaNacimientoUsuario, frecuenciaNacimiento, diasRestantesAnyo,diasAnyoTranscurridos, resultadoSuma;

let grafica = {
  "fechanacimiento": fechaNacimientoUsuario,
  "frecuencianacimiento": frecuenciaNacimiento,
  "diasrestantesanyo": diasRestantesAnyo,
  "diasanyotranscurridos": diasAnyoTranscurridos,
  "resultadosuma": resultadoSuma
}


if (fechaNacimiento) {

  fechaNacimiento.addEventListener('change', (e) => {

    fechaNacimientoUsuario = e.target.value;
    frecuenciaNacimiento = obtenerDiasHastaNacimiento(fechaNacimientoUsuario);

    grafica.fechanacimiento = fechaNacimientoUsuario;
    grafica.frecuencianacimiento = frecuenciaNacimiento;

    outputFecha.innerHTML = `
      <p>La Fecha de nacimiento ${fechaNacimientoUsuario} tiene la impronta de la frecuencia <strong>${frecuenciaNacimiento}-${365 - frecuenciaNacimiento}</strong></p>
    `;
  });
}

if (btnGenerar) {

  btnGenerar.addEventListener("click", () => {

    entradaTexto = input.value;
    let normaliza = entradaTexto.toLowerCase()
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    var textoIntroducido = removeAccents(normaliza);
    resultadoSuma = extraeValoresLetras(textoIntroducido).reduce( (a,v) => (a += v, +a), 0);

    let fechaActual = new Date();
    diasAnyoTranscurridos = obtenerDiasTranscurridos(fechaActual);
    diasRestantesAnyo = 365 - diasAnyoTranscurridos;

    grafica.diasrestantesanyo = diasRestantesAnyo;
    grafica.diasanyotranscurridos = diasAnyoTranscurridos;
    grafica.resultadosuma = resultadoSuma;

    output.innerHTML = `
    <p>El código de <strong>"${textoIntroducido}"</strong> es <strong>${resultadoSuma}</strong></p>
    <p>La frecuencia de hoy: <strong>${diasAnyoTranscurridos}</strong></p>
    <p>Dias restantes del año en curso: <strong>${diasRestantesAnyo}</strong></p>
    `
    graficaGenerada.setAttribute("d",`M${diasRestantesAnyo},100 L${diasAnyoTranscurridos},${resultadoSuma} A30,50 0 0,1 100,100

    `);

  })
}

function obtenerDiasHastaNacimiento(f1) {
  var aFecha1 = f1.split('-'); // ['1975', '10', '15']
  var fFecha1 = Date.UTC(aFecha1[0],aFecha1[1]-1,aFecha1[2]);
  var fFecha2 = Date.UTC(aFecha1[0],-00,00);
  var dif = (fFecha1 - fFecha2) / (1000 * 60 * 60 * 24);
  return Math.floor(dif);
}

// dias del año transcurridos hasta hoy
function obtenerDiasTranscurridos(fechaactual) {
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




// seleccionar dato al azar

// let azarDatos = [1,2,3,"ss",9]
// function seleccionarDatoAlAzar(azarDatos) {
//   return azarDatos[Math.floor(Math.random() * azarDatos.length)]
// }
// console.log(seleccionarDatoAlAzar(azarDatos))


