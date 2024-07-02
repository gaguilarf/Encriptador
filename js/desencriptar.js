var botonDesencriptar = document.querySelector(".btn-desEncriptar");
var muneco = document.querySelector(".contenedor-muneco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector("#resultado-final");

botonDesencriptar.onclick = desEncriptar;

function desEncriptar() {
  ocultarSeccionDos();
  var area = recuperarInf();
  resultado.textContent = desEncriptarTexto(area);
}

function recuperarInf() {
  var inf = document.querySelector('.area');//recuperar text area
  return inf.value.toLowerCase();
}

function ocultarSeccionDos() {
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function desEncriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal ="";

  for (var indice = 0; indice < texto.length; indice++){
    if (texto[indice] == "a") {
      textoFinal = textoFinal + "a"
      indice = indice + 1;
    }
    else if (texto[indice] == "e") {
      textoFinal = textoFinal + "e"
      indice = indice + 4;
    }
    else if (texto[indice] == "i") {
      textoFinal = textoFinal + "i"
      indice = indice + 3;
    }
    else if (texto[indice] == "o") {
      textoFinal = textoFinal + "o"
      indice = indice + 3;
    }
    else if (texto[indice] == "u") {
      textoFinal = textoFinal + "u"
      indice = indice + 3;
    }
    else {
      textoFinal = textoFinal + texto[indice];
    }
  }
  return textoFinal;
}

