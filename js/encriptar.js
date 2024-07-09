const btn_encriptar = document.getElementById("btn_encriptar");
const btn_desencriptar = document.getElementById("btn_desencriptar");
const btn_copiar = document.getElementById("btn_copiar");
const btn_limpiar = document.getElementById("btn_limpiar");
const filtro = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;


//Funcion verificar.
function verificar(){
    let texto_nuevo = document.getElementById("texto_encriptar").value;
    if(texto_nuevo.match(filtro) != null){
        limpiar();
        foco();
        //Alerta de error.
        alert("Solo se permiten letras minusculas y sin acentos");
    }
}

//funcion encriptar.
function encriptar(){
    let texto_nuevo = document.getElementById("texto_encriptar").value.trimStart();
    texto_nuevo;    
    texto_nuevo = texto_nuevo
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    texto_nuevo;

    document.getElementById("texto_desencriptar").value = texto_nuevo;
    document.getElementById("texto_desencriptar").style.color = "#000000";
    document.getElementById("texto_desencriptar").style.textAlign = "left";
    document.getElementById("texto_desencriptar").style.height = "auto";
    ocultarImagen();
}

//Funcion desencriptar.
function desencriptar(){
    let texto_nuevo = document.getElementById("texto_encriptar").value;
    texto_nuevo;
    texto_nuevo = texto_nuevo
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        texto_nuevo;

    document.getElementById("texto_desencriptar").value = texto_nuevo;
    document.getElementById("texto_desencriptar").style.color = "#000000";
    document.getElementById("texto_desencriptar").style.textAlign = "left";
    document.getElementById("texto_desencriptar").style.height = "auto";
    ocultarImagen();
}

//Funcion copiar.
function copiar(){
    let texto_vacio = "";
    let texto_des = document.getElementById("texto_desencriptar").value;
    document.getElementById("texto_encriptar").placeholder = "Ingrese el texto aquí";

    let text_copi = document.getElementById("texto_desencriptar");
    text_copi.select();
    document.execCommand("copy");

    if(texto_vacio !== texto_des){
        limpiar();
        foco();
        alert("Texto copiado");
        ocultarImagen();
    }else{
        //Alerta de error.
        alert("No hay texto para copiar");
    }
}

//Funcion ocultar imagen.
function ocultarImagen() {
    let texto_vacio = "";
    let text_area = document.getElementById("texto_desencriptar").value;
    let cubierta = document.getElementById("cubierta");
    let btn_copiar = document.getElementById("btn_copiar");
    let contenedor_copiar = document.querySelector('.contenedor-copiar');
    let mensaje_cubierta = document.getElementById("mensaje_cubierta");
    let contenedorParrafo = document.querySelector('.contenedor-parrafo');

    if (texto_vacio !== text_area) {
        cubierta.style.display = "none";
        mensaje_cubierta.style.display = "none";
        btn_copiar.style.display = "flex";
        contenedor_copiar.style.display = "flex";
        contenedor_copiar.style.justifyContent = "center";

        let textarea = document.getElementById("texto_desencriptar");
        textarea.style.height = "auto"; 
        let scrollHeightPx = textarea.scrollHeight;
        let viewportHeightPx = window.innerHeight;
        let scrollHeightVh = (scrollHeightPx / viewportHeightPx) * 100;
        textarea.style.height = (scrollHeightVh - 2) + 'vh';
    } else {
        cubierta.style.display = "";
        mensaje_cubierta.style.display = "";
        btn_copiar.style.display = "none";
        document.getElementById("texto_desencriptar").style.height = "";
    }
}

//funcion limpiar.
function limpiar(){
    document.getElementById("texto_encriptar").value = "";
    document.getElementById("texto_desencriptar").value = "";
    document.getElementById("texto_desencriptar").style.textAlign = "center";
}

//Funcion focus.
function foco(){
    const textoEncriptarElement = document.getElementById("texto_encriptar");
    if (textoEncriptarElement) {
        textoEncriptarElement.focus();
    } else {
        console.error("Elemento 'texto_encriptar' no encontrado");
    }
}

//Funcion focus
function borrar(){
    document.getElementById("texto_encriptar").placeholder = "Ingrese el texto aqui";
    document.getElementById("texto_desencriptar").placeholder = "Ingresa el texto que desees encriptar o desencriptar.";
    document.getElementById("texto_desencriptar").style.color = "#495057";
    limpiar();
    foco();
    ocultarImagen();
}

foco();
btn_encriptar.addEventListener("click", verificar);
btn_encriptar.addEventListener("click", encriptar);

btn_desencriptar.addEventListener("click", verificar);
btn_desencriptar.addEventListener("click", desencriptar);

btn_copiar.addEventListener("click", copiar);
btn_limpiar.addEventListener("click", borrar);

document.addEventListener("DOMContentLoaded", function() {
    ocultarImagen();
});