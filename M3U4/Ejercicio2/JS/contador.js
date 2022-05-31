function contadorTexto(){
let text =document.form_main.text.value;
document.getElementById('caracteres').innerText = text.length;
document.getElementById('palabras').innerText = text.split(/\s+/).length;
document.getElementById('lineas').innerText = text.split(/\n/).length;
}