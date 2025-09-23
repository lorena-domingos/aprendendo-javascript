const exercisesFour = require('../exercises_4');

test('Arara é um palíndromo.', () => {
    expect(exercisesFour.palindromo("arara")).toBe('É um palíndromo');
});

test('Banana não é um palíndromo.', () => {
    expect(exercisesFour.palindromo("banana")).toBe('Não é um palíndromo');
});