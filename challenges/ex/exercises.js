
// Calculadora

let sumFunction = (a, b) => { return a + b; };
let multiplyFunction = (a, b) => { return a * b; };
let subtractFunction = (a, b) => { return a - b; };
let divideFunction = (a, b) => { return a / b; };

// Ímpar ou par
let evenOdd = (a) => { return a % 2 === 0 ? "Even" : "Odd"; };

// Maior de dois
let maiorDeDois = (a, b) => { return a > b === true ? true : false; }

// Maior de idade

let maiorDeIdade = (a) => { return a >= 18 === true ? true : false; }

// Maior nota

function maiorNota(a) {
    if (a >= 7) {
        return "Aprovado";
    } else if (a <= 6 && a >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    };
};

// Valor descontado

function valorDescontado(valor, desconto) {
    valorDesconto = (desconto / 100) * valor;
    valorFinal = valor - valorDesconto;
    return valorFinal;
};

module.exports = {
    sumFunction,
    multiplyFunction,
    subtractFunction,
    divideFunction,
    evenOdd,
    maiorDeDois,
    maiorDeIdade,
    maiorNota,
    valorDescontado
};
