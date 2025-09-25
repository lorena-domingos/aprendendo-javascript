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

test('[1, 2, 3] + [4, 5, 5] = [1, 2, 3, 4, 5, 5]', () => {
    expect(exercisesFour.concatenarArray()).toEqual([1, 2, 3, 4, 5, 5]);
});

test('Os valores iguais são arroz e naruto', () => {
    expect(exercisesFour.intersecaoArray()).toEqual(['arroz', 'naruto']);
});

test('Remover vogais', () => {
    expect(exercisesFour.removerVogais()).toBe(" 4 d mnh  c st  dscbrnd cm sr rgx n JS");
});

test('Retornar apenas nomes', () => {
    expect(exercisesFour.arrayObjetos()).toEqual(['Ana', 'João']);
});

test('Ordernar objetos', () => {
    expect(exercisesFour.ordernarObjetos()).toEqual([ { nome: 'João', idade: 32 }, { nome: 'Ana', idade: 40 } ]);
});

test('Retornar letras iniciais', () => {
    expect(exercisesFour.letraInicial()).toEqual(["JP", "M"]);
});