var botonCopiar = document.getElementById('btn-copiar');
botonCopiar.onclick = copiarPortaPapeles;

function copiarPortaPapeles() {
  var texto = document.getElementById('resultado-final');
  texto.select(); //texto seleccionado
    try {
      var successful = document.execCommand('copy');  // Copiando
      if(successful) texto.innerHTML = 'Copiado!';
        else texto.innerHTML = 'no copiado!';
    } catch (err) { 
      texto.innerHTML = 'Browser no soportado!';
  }
}
