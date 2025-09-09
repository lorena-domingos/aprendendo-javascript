
// Calculadora

let sumFunction = (a, b) => { return a + b; };
let multiplyFunction = (a, b) => { return a * b; };
let subtractFunction = (a, b) => { return a - b; };
let divideFunction = (a, b) => { return a / b; };

// Ímpar ou par
let evenOdd = (a) => { return a % 2 === 0 ? "Even" : "Odd"; };

// Maior de dois
let maiorDeDois = (a, b) => a > b;

// Reduntante retornar true ou false pois já retorna um valor desse tipo.

// Maior de idade

let maiorDeIdade = (a) => a >= 18

// Redundância também

// Maior nota

function maiorNota(a) {
    if (a >= 7) {
        return "Aprovado";
    } else if (a >= 5) { // Simplificação de lógica
        return "Recuperação";
    } else {
        return "Reprovado";
    };
};

// Valor descontado

function valorDescontado(valor, desconto) {
    let valorDesconto = (desconto / 100) * valor;
    let valorFinal = valor - valorDesconto;
    return valorFinal;
};

// Dobro ou triplo

let valorDobro = (a) => { return a > 0 ? a*2 : a*3; };

// Múltiplo de 5

let multiploCinco = (a) => { return a % 5 === 0 ? true : false; };

// Conversor de temperatura

function celciusParaFahrenheit(a) {
    let valorFinal = (a * 9/5) + 32;
    return valorFinal;
};

// sequencia de 10

function sequenciaDez() {
    const arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(i);
    }
    return arr; // Uso de array para testar no Jest
};

sequenciaDez();

// Level 1 Finalizado 💋

module.exports = {
    sumFunction,
    multiplyFunction,
    subtractFunction,
    divideFunction,
    evenOdd,
    maiorDeDois,
    maiorDeIdade,
    maiorNota,
    valorDescontado,
    valorDobro,
    multiploCinco,
    celciusParaFahrenheit,
    sequenciaDez
};
