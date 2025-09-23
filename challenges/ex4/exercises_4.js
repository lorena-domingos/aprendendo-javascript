// Palíndromo

function palindromo(palavra = "arroz") {
    let palavraSeparada = [];
    let palaravaReversa = "";

    for (p of palavra.toLowerCase()) {
        palavraSeparada.push(p);
    };

    palavraReversa = [...palavraSeparada].reverse().join("");

    // console.log(palavra);
    // console.log(palavraReversa);

    if (palavra === palavraReversa) {
        return "É um palíndromo";
    } else {
        return "Não é um palíndromo";
    };
};

palindromo();

module.exports = {
    palindromo
}