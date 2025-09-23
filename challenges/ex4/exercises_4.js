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

// palindromo();

// Maior palavra

function maiorPalavra() {
    const palavra = "Eu gosto de JS";
    let palavraSeparada = palavra.split(" ");

    let palavraMaior = palavraSeparada.reduce((ac, cv) => {
        return ac.length > cv.length ? ac : cv;
    });

    return palavraMaior;
};

// contagem de palavras

function contarPalavras() {
    const texto = "Eu gosto de JS";
    let arrTexto = texto.split(" ");
    let quantidade = [...arrTexto].length;

    return quantidade;
}

// contarPalavras();

// palavras curtas

function palavrasCurtas(n) {
    let palavras = "BA, RJ, Ame, Lore, Japão";
    let lista = palavras.split(', ');

    let filtroPalavras = lista.filter(p => p.length === n);

    return filtroPalavras;
}

// palavrasCurtas(2);

module.exports = {
    palindromo,
    maiorPalavra,
    contarPalavras,
    palavrasCurtas
}