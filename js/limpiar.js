var botonLimpiar = document.querySelector("#limpiar");
botonLimpiar.onclick = limpiar;

function limpiar() {
let refresh =  document.querySelector("#limpiar");

   document.querySelector(".area").value = '';
   document.querySelector("#resultado-final").value = '';

   refresh.addEventListener('click', _ => {
      location.reload();
   });
}