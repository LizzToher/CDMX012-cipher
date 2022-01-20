const cipher = {
  
  // Definiendo algoritmo de codificación
  encode(offset, string) {
  
    let endMessage = [];

    for (let i = 0; i < string.length; i++) {
      //console.log(i)
      let asciiValue = Number(string.charCodeAt(i));
      //console.log(asciiValue);
      
      //Condicionales para definir fórmula del cifrado César
      if (asciiValue >= 65 && asciiValue <= 90) {
        let finalMessage = String.fromCharCode((asciiValue - 65 + offset) % 26 + 65);
        //console.log(finalMessage);
        endMessage.push(finalMessage);
      }
      else if (asciiValue === 32) {
        let finalMessage = String.fromCharCode(32);
        //console.log(finalMessage);
        endMessage.push(finalMessage);
      }
    }
    return endMessage.join('');
  }
  
}

export default cipher;
