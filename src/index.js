import cipher from './cipher.js';

//Definiendo variables
let displaceNumber = document.getElementById('offset');
let encodeBtn = document.getElementById('encode-btn');
let decodeBtn = document.getElementById('decode-btn');
let message = document.getElementById('input-text');
let outputText = document.getElementById('output-text');

//Definiendo eventos
encodeBtn.addEventListener('click', toEncode);
decodeBtn.addEventListener('click', decode);

//Añadiendo funcionalidad al botón de cifrar
function toEncode() {  
   let string = message.value;
   let offset = displaceNumber.value;

   if(offset == '') {
      alert('Necesitas ingresar un número.');
   }
   else if(string == '') {
      alert('Necesitas ingresar tu mensaje.');
   }
   else {
      outputText.innerHTML = cipher.encode(offset, string);
   }
}

   
//Añadiendo funcionalidad al botón de descifrar
function decode() {  
    let string = message.value;
    let offset = displaceNumber.value;

    if(offset == '') {
      alert('Necesitas ingresar un número.');
   }
   else if(string == '') {
      alert('Necesitas ingresar tu mensaje.');
   }
   else {
      outputText.innerHTML = string;
   }
 }

console.log(cipher.encode);
