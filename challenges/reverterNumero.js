function InverterNumero(value) {
    let valueToString = String(value);
    let valueToList = valueToString.split("");
    let reverseList = valueToList.map(valueToList => valueToList.replaceAll("0", "")).reverse();
    let valueJoined = reverseList.join("");
    valueJoined = Number(valueJoined);

    return valueJoined;
};

module.exports = InverterNumero;

InverterNumero(19)

/*
-- SOLUÇÃO DO GEMINI

function inverteNumero(numero) {
  // Converte pra string, divide, inverte e junta de uma vez
  const stringInvertida = String(numero).split('').reverse().join('');
  
  // Converte a string final de volta para número e retorna
  const numeroInvertido = Number(stringInvertida);
  
  return numeroInvertido;
}

// Para testar:
console.log(inverteNumero(580)); // Saída: 85
console.log(inverteNumero(123)); // Saída: 321

Ao invés de apenas converter a string para numéro, fiz um for pra trocar todos os 0 que aparecem.

*/