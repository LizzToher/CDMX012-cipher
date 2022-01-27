import cipher from './cipher.js';

//Definiendo variables
const displaceNumber = document.getElementById('offset');
const encodeBtn = document.getElementById('encode-btn');
const decodeBtn = document.getElementById('decode-btn');
const message = document.getElementById('input-text');
const outputText = document.getElementById('output-text');

//Definiendo eventos
encodeBtn.addEventListener('click', encode);
decodeBtn.addEventListener('click', decode);

//Añadiendo funcionalidad al botón de cifrar
function encode() {
  const string = message.value;
  const offset = Number(displaceNumber.value);
      
  if (offset === null || offset === 0) {
    alert('Necesitas ingresar un número.'); //Funcion para evitar que se deje el espacio vacío
    throw new TypeError('Necesitas ingresar un número.');
  } else if (string == null || string === [] || string === 0) {
    alert('Necesitas ingresar tu mensaje.');
    throw new TypeError('Necesitas ingresar tu mensaje.');
  } else {
    outputText.innerHTML = cipher.encode(offset, string); //Llamado a la función encode
  }
}

//Añadiendo funcionalidad al botón de descifrar
function decode() {
  const string = message.value;
  const offset = Number(displaceNumber.value);

  if (offset === null || offset === 0) {
    alert('Necesitas ingresar un número.'); //Funcion para evitar que se deje el espacio vacío
    throw new TypeError('Necesitas ingresar un número.');
  } else if (string == 0 || string === null || string === []) {
    alert('Necesitas ingresar tu mensaje.');
    throw new TypeError('Necesitas ingresar tu mensaje.');
  } else {
    outputText.innerHTML = cipher.decode(offset, string); //Llamado a la función decode
  }
}

console.log(cipher.encode);
