const exercisesThree = require('../exercises_3');

test('Olá Amélia?', () => {
    expect(exercisesThree.olaNome("Amélia")).toBe("Olá Amélia");
});

test('A média de um array que a soma é 45 dá 7.5', () => {
    expect(exercisesThree.mediaArray([5, 6, 7, 8, 9, 10])).toBe(7.5);
});

test('Os pares dentro de um intervalo de 20 são:', () => {
    expect(exercisesThree.filtrarPares(21)).toEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
});

test('O maior valor é 7 e o menor é 1', () => {
    expect(exercisesThree.maiorOuMenor()).toEqual({maior: 7, menor: 1});
});

test('A contagem de letras na palavra banana é: { b: 1, a: 3, n: 2 }', () => {
    expect(exercisesThree.contarLetras()).toEqual({ b: 1, a: 3, n: 2 });
});