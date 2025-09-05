const exercises = require('./ex/exercises');

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