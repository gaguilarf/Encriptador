var botonEncriptar = document.querySelector(".btn-encriptar");
var muneco = document.querySelector(".contenedor-muneco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector("#resultado-final");

botonEncriptar.onclick = encriptar;

function encriptar() {
  ocultarSeccionDos();
  var area = recuperarTextoArea();
  resultado.textContent = encriptarTexto(area);  
}

function recuperarTextoArea() {
  var area = document.querySelector(".area");
  return area.value;
}

function ocultarSeccionDos() {
  muneco.classList.add("ocultar");
  h3.classList.add("ocultar");
  parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var indice = 0; indice < texto.length; indice++){
    if (texto[indice] == "a") {
        textoFinal = textoFinal + "ai"
    }
    else if(texto[indice] == "á") {
        textoFinal = textoFinal + "ai"
    }
    else if (texto[indice] == "e") {
        textoFinal = textoFinal + "enter"
    }
    else if (texto[indice] == "é") {
        textoFinal = textoFinal + "enter"
    }
    else if (texto[indice] == "i") {
        textoFinal = textoFinal + "imes"
    }
    else if (texto[indice] == "í") {
        textoFinal = textoFinal + "imes"
    }
    else if (texto[indice] == "o") {
        textoFinal = textoFinal + "ober"
    }
    else if (texto[indice] == "ó") {
        textoFinal = textoFinal + "ober"
    }
    else if (texto[indice] == "u") {
        textoFinal = textoFinal + "ufat"
    }
    else if (texto[indice] == "ú") {
        textoFinal = textoFinal + "ufat"
    }
    else {
        textoFinal = textoFinal + texto[indice];
    } 
  }
  return textoFinal.toLowerCase();  
}
