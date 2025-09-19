// Parâmetro padrão

function olaNome(nome = "Lorena") {
    const frase = `Olá ${nome}`;
    return frase;
};

// Média de um array

function mediaArray(arr = [1, 2, 3, 4, 5]) {
    let resultado = 0;
    let media = 0;

    for (let i = 0; i < arr.length; i++) {
        resultado += arr[i];
        media = resultado / arr.length;
    }

    return media;
}

// mediaArray()

// Filtrar pares

// Array.from({length: 11}, (x, i) => i)

function filtrarPares(intervalo=11) {
    let randomArr = [...Array(intervalo).keys()];
    let newArr = [];
    randomArr.forEach(i => {
        if (i % 2 == 0) {
            newArr.push(i);
        }
    });
    return newArr;
}

// filtrarPares();

// Maior ou menor

function maiorOuMenor() {
    const arr = [1, 2, 3, 4, 5, 6, 7];

    const valorMaximo = Math.max(...arr);
    const valorMinimo = Math.min(...arr);

    const resultado = {maior: valorMaximo, menor: valorMinimo};

    return resultado;
};

// maiorOuMenor();

// Contar letras

function contarLetras() {
    const palavra = "banana";
    let obj = {};

    for (let i = 0; i < palavra.length; i++) {
        if (!(palavra[i] in obj)) {
            obj[palavra[i]] = 1;
        } else {
            obj[palavra[i]] += 1;
        };
    };

    return obj;
};

// contarLetras();

// Reverter array 

function reverterArray() {
    const arr = [1, 2, 3, 4, 5];
    let arr2 = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i]);
    };

    return arr2;
};

// reverterArray();

// Somar Array

function retornarSoma() {
    const obj = {valor: [1, 2, 3, 4, 5]};
    let resultado = 0;

    for (let i = obj.valor.length; i > 0; i--) {
        resultado = obj.valor.reduce((ac, cv) => ac + cv, 0)
    };

    return resultado;

};

// retornarSoma();

// Retornar array sem repetição

function arrSemRepeticao() {
    const arr = [1, 1, 1, 2, 4, 5, 5, 6];
    let arr2 = [];

    for (let i = 0; arr.length - 1 >= i; i++) {
        if (!(arr2.includes(arr[i]))) {
            arr2.push(arr[i]);
        };
    };

    // const map1 = arr.map((x) => x === x) 

    return arr2;
};

// arrSemRepeticao();

// Produto acumulado

function produtoAcumulado() {
    const arr = [1, 2, 3, 4, 5, 6]; // Resultado deve ser 21
    let arr2 = [];
    let resultado = 0;

    arr2 = arr;
    for (let i = 0; i <= arr.length; i++) {
        resultado = arr.reduce((ac, cv) => ac + cv, 0);
    };

    arr2[arr2.length - 1] = resultado;

    return arr2;
};

// produtoAcumulado();

// Letras maiúsculas

function letraMaiuscula() {
    const arrString = ['arroz', 'batata', 'pão', 'python', 'estrogénio'];
    const map1 = arrString.map((x) => x.toUpperCase());
    
    return map1;
};

// letraMaiuscula();

module.exports = {
    olaNome,
    mediaArray,
    filtrarPares,
    maiorOuMenor,
    contarLetras,
    reverterArray,
    retornarSoma,
    arrSemRepeticao,
    produtoAcumulado,
    letraMaiuscula
};