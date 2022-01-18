const cipher = {
  // Definiendo algoritmo de codificación
  encode(offset, string) {
    //Definiendo variables
    let character = '';
    let space = '';
    let asciiValue = '';
    let finalMessage = '';

    //Bucle 'for' para recorrer todo el string
         for(let i = 0; i <= string.length; i++) {
           asciiValue = string.charCodeAt(i);
           //console.log(asciiValue);
           
           //Condicionales para definir fórmula del cifrado César
           if(asciiValue >= 65 && asciiValue <= 90) {
              character = String.fromCharCode((asciiValue - 65 + offset) % 26 + 65);
              finalMessage = finalMessage + character;
            }
            else if(asciiValue === 32) {
              space = String.fromCharCode(32);
              finalMessage = finalMessage + space;
            }
            
            //Regresar mensaje de salida
            console.log(finalMessage);
            return finalMessage;            
          }
          
/*  decode(offset, string){

  }*/
}
}

export default cipher;
