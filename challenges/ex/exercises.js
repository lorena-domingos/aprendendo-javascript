
// Calculadora

let sumFunction = (a, b) => { return a + b; };
let multiplyFunction = (a, b) => { return a * b; };
let subtractFunction = (a, b) => { return a - b; };
let divideFunction = (a, b) => { return a / b; };

// Ímpar ou par
let evenOdd = (a) => { return a % 2 === 0 ? "Even" : "Odd"; };

module.exports = {
    sumFunction,
    multiplyFunction,
    subtractFunction,
    divideFunction,
    evenOdd
};
