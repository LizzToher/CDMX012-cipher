import cipher from './cipher.js';

//Definiendo variables
let displaceNumber = document.getElementById('offset');
let encodeBtn = document.getElementById('encode-btn');
let decodeBtn = document.getElementById('decode-btn');
let string = document.getElementById('input-text');
let outputText = document.getElementById('output-text');

//Definiendo eventos
encodeBtn.addEventListener('click', encode);
decodeBtn.addEventListener('click', decode);

//Añadiendo funcionalidad al botón de cifrar
function encode() {  
   let encodedText = string.value;
   let offset = displaceNumber.value;

   if(offset == '') {
      alert('Necesitas ingresar un número.');
   }
   else if(encodedText == '') {
      alert('Necesitas ingresar tu mensaje.');
   }
   else {
      outputText.innerHTML = encodedText;
   }
}

//Añadiendo funcionalidad al botón de descifrar
function decode() {  
    let encodedText = string.value;
    let offset = displaceNumber.value;

    if(offset == '') {
      alert('Necesitas ingresar un número.');
   }
   else if(encodedText == '') {
      alert('Necesitas ingresar tu mensaje.');
   }
   else {
    outputText.innerHTML = encodedText;
   }
 }

console.log(cipher);
