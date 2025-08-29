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

/* Basicamente a função pega o primeiro valor e "corta" a partir dele,
o segundo valor é a quantidade de carecteres

que é basicamente o valor da letra + quantidade, pois sabemos que a
função slice funciona como função(começo, fim)

por exemplo função(2 - 1 (vai dar 1) == (posição do B), 1 (valor do começo) + 1) 



representa a letra B e 2 a quantidade logo teremos a posição da primeira letra e em seguida o número de casas a partir dele.

Logo ["B", "C"]

*/

numeroAlfabeto(2, 2);