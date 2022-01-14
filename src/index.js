//import cipher from './cipher.js';

//const displaceNumber = document.querySelector('.number');
const encodeBtn = document.getElementById('encode-btn');
const decodeBtn = document.getElementById('decode-btn');
let inputText = document.getElementById('input-text');
let outputText = document.getElementById('output-text');

encodeBtn.addEventListener('click', encode);
decodeBtn.addEventListener('click', decode);

function encode() {  
   let encodedText = inputText.value;
   outputText.innerHTML = encodedText;
}

function decode() {  
    let encodedText = inputText.value;
    outputText.innerHTML = encodedText;
 }
/*
console.log(cipher);
*/