const exercises = require('../exercises');

test('A soma de 4 + 5 é 9', () => {
    expect(exercises.sumFunction(4, 5)).toBe(9);
});

test('A multiplicação de 4 * 5 é 20', () => {
    expect(exercises.multiplyFunction(4, 5)).toBe(20);
});

test('A subtração de 4 - 5 é -1', () => {
    expect(exercises.subtractFunction(4, 5)).toBe(-1);
});

test('A divisão de 20 / 4 é 5', () => {
    expect(exercises.divideFunction(20, 4)).toBe(5);
});

test('5 é ímpar.', () => {
    expect(exercises.evenOdd(5)).toBe("Odd");
});

test('4 é par.', () => {
    expect(exercises.evenOdd(4)).toBe("Even");
});

test('4 é maior que 2.', () => {
    expect(exercises.maiorDeDois(4, 2)).toBe(true);
});

// test('2 é maior que 4.', () => {
//     expect(exercises.maiorDeDois(2, 4)).toBe(true);
// });

test('João tem 18 ou mais?', () => {
    expect(exercises.maiorDeIdade(18)).toBe(true);
});

test('Nota é 9', () => {
    expect(exercises.maiorNota(9)).toBe("Aprovado");
});

test('O desconto de 15% de 200 é 170', () => {
    expect(exercises.valorDescontado(200, 15)).toBe(170);
});

test('O dobro de 5 é 10.', () => {
    expect(exercises.valorDobro(5)).toBe(10);
});

test('O triplo de -5 é -15.', () => {
    expect(exercises.valorDobro(-5)).toBe(-15);
});

// test('É múltiplo de 5?', () => {
//     expect(exercises.multiploCinco(16)).toBe(true);
// });

test('100 graus Celcius em Fahrenheit é 212 F.', () => {
    expect(exercises.celciusParaFahrenheit(100)).toBe(212);
});

test('Sequência de 10', () => {
    expect(exercises.sequenciaDez()).toEqual([1,2,3,4,5,6,7,8,9,10]);
});