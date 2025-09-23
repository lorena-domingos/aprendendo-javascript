const exercisesFour = require('../exercises_4');

test('Arara é um palíndromo.', () => {
    expect(exercisesFour.palindromo("arara")).toBe('É um palíndromo');
});

test('Banana não é um palíndromo.', () => {
    expect(exercisesFour.palindromo("banana")).toBe('Não é um palíndromo');
});

test('A palavra maior é gosto.', () => {
    expect(exercisesFour.maiorPalavra()).toBe('gosto');
});

test('A quantidade de palavras é 4', () => {
    expect(exercisesFour.contarPalavras()).toBe(4);
});

test('Palavras com 2 caracteres são BA e RJ', () => {
    expect(exercisesFour.palavrasCurtas(2)).toEqual(['BA', 'RJ']);
});