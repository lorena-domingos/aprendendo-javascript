function numeroAlfabeto(numero, quantidade) {
  const alfabeto = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'
  ];

  
  if ((numero - 1) + quantidade <= 26) {
    let segundoValor = ((numero - 1) + quantidade)
    let novoArr = alfabeto.slice(numero - 1, segundoValor)
    return console.log(novoArr)
  } else {
    return console.log("O valor excede o alfabeto.")
  }

}

numeroAlfabeto(25, 2);