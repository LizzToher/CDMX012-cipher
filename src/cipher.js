const cipher = {
  // Definiendo algoritmo de codificación
  encode(offset, string) {
    let endMessage = [];

    //Ciclo for para recorrer el string ingresado
    for (let i = 0; i < string.length; i++) {
      const asciiValue = Number(string.charCodeAt(i));

      //Condicional para letras mayúsculas
      if (asciiValue >= 65 && asciiValue <= 90) {
        let finalMessage = String.fromCharCode((asciiValue - 65 + offset) % 26 + 65);
        endMessage.push(finalMessage); //push para enviar el mensaje a la variable del objeto vacio
        //else if para espacios y caracteres especiales
      } else if (asciiValue >= 32 && asciiValue <=64) {
        let finalMessage = String.fromCharCode(asciiValue);
        endMessage.push(finalMessage);
        //else is para minúsculas
      } else if (asciiValue >= 97 && asciiValue <= 122) {
        let finalMessage = String.fromCharCode((asciiValue - 97 + offset) % 26 + 97);
        endMessage.push(finalMessage);
      }
    }
    return endMessage.join(''); //Return para enviar el mensaje final y join para convertir objeto a string
  },

  //Definiendo algoritmo de decodificación
  decode(offset, string) {
    let endMessage = [];

    //Ciclo for para recorrer el string ingresado
    for (let i = 0; i < string.length; i++) {
      const asciiValue = Number(string.charCodeAt(i));
      //Condicional para letras mayúsculas
      if (asciiValue >= 65 && asciiValue <= 90) {
        //Declarando variable para ajustar la formula de decodificación
        let formule = (asciiValue - 65 - offset) % 26 + 65;
        if (formule < 65) {
          formule += 26;
        }
        let finalMessage = String.fromCharCode(formule);
        endMessage.push(finalMessage);//push para enviar el mensaje a la variable del objeto vacio
        //else if para espacios y caracteres especiales
      } else if (asciiValue >= 32 && asciiValue <=64) {
        let finalMessage = String.fromCharCode(asciiValue);
        endMessage.push(finalMessage);
        //else is para minúsculas
      } else if (asciiValue >= 97 && asciiValue <= 122) {
        let formule = (asciiValue - 97 - offset) % 26 + 97;
        if (formule < 97) {
          formule += 26;
        }
        let finalMessage = String.fromCharCode(formule);
        endMessage.push(finalMessage);
      }
    }
    return endMessage.join(''); //Return para enviar el mensaje final y join para convertir objeto a string
  },
};

export default cipher;
