// Palíndromo

function palindromo(palavra = "arroz") {
    let palavraSeparada = [];
    let palavraReversa = "";

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
};

// contarPalavras();

// palavras curtas

function palavrasCurtas(n) {
    let palavras = "BA, RJ, Ame, Lore, Japão";
    let lista = palavras.split(', ');

    let filtroPalavras = lista.filter(p => p.length === n);

    return filtroPalavras;
};

// palavrasCurtas(2);

// Concatenar 2 arrays? [1, 2 3] + [4] = [1, 2, 3, 4] ?
// Possível com concat também ou dois for de forma bem manual

function concatenarArray() {
    const arr = [1, 2, 3];
    const arr2 = [4, 5, 5];

    let arrayJunto = [...arr, ...arr2]; // Spread 

    return arrayJunto;
};

// concatenarArray();

// Interseção de arrays

function intersecaoArray() {
    const a = ["arroz", "batata", "naruto"];
    const b = ["arroz", "sasuke", "naruto"];

    let filtro = a.filter(p => b.includes(p));

    // console.log(filtro);
    return filtro;
};

// intersecaoArray();

// Remover vogais

function removerVogais() {
    const frase = "É 4 da manhã e cá estou eu descobrindo como usar regex no JS";
    const regex = /[aeiouáéíóúãõ]/gi;

    return frase.replace(regex, "");

    // console.log(frase.replace(regex, ""));
};

// removerVogais();

// Array de objetos

function arrayObjetos() {
    const arr1 = [ { nome: "Ana", idade: 25 }, { nome: "João", idade: 32 } ];
    let novoArray = arr1.map(n => n.nome);

    return novoArray;
    // console.log(novoArray);
};

// arrayObjetos();

// ordernar objetos de um array

function ordernarObjetos() {
    let arr = [ { nome: "Ana", idade: 40 }, { nome: "João", idade: 32 } ];
    let novoArr = [...arr].sort((a, b) => a.idade - b.idade);

    return novoArr;
};

// ordernarObjetos();

// Pegar somente letra inicial e transoformar em maiúscula

function letraInicial() {
    const nomes = ["João Pedro", "Maria"];
    let iniciais = nomes.map(n => {
    return n.split(" ")
        .map(p => p[0].toUpperCase())
        .join("")
    });

    // console.log(nomes);
    // console.log(iniciais);    

    return iniciais;
};

// letraInicial();

 
module.exports = {
    palindromo,
    maiorPalavra,
    contarPalavras,
    palavrasCurtas,
    concatenarArray,
    intersecaoArray,
    removerVogais,
    arrayObjetos,
    ordernarObjetos,
    letraInicial
}