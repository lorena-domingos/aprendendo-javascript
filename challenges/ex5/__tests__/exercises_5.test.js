const exercisesFive = require('../exercises_5');

test('O fatorial de 5 é 120', () => {
    expect(exercisesFive.fatorialRecursivo(5)).toBe(120);
});

test('O quinto número da sequência de Fibonacci é 3', () => {
    expect(exercisesFive.fibonacciRecursivo(5)).toBe(3);
});