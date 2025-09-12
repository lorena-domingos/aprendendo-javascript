const exercisesDois = require('../exercises_2');

test('O múltiplo de 2 é 4', () => {
    expect(exercisesDois.teste(2)).toBe(4);
});

test('Triângulo Equilátero', () => {
    expect(exercisesDois.tipoDeTriangulo(2, 2, 2)).toBe("Equilátero");
});

test('Triângulo Escaleno', () => {
    expect(exercisesDois.tipoDeTriangulo(4, 2, 1)).toBe("Escaleno");
});

test('Triângulo Isósceles', () => {
    expect(exercisesDois.tipoDeTriangulo(6, 5, 5)).toBe("Isósceles");
});

test('Triângulo Vazio', () => {
    expect(exercisesDois.tipoDeTriangulo(0, 4, 1)).toBe("Valores inválidos");
});

test('Realizando operações matemáticas.', () => {
    expect(exercisesDois.calculadoraComOperador(10, "/", 5)).toBe(2);
});

test('Receber dia da semana.', () => {
    expect(exercisesDois.receberNomeDoDia(2)).toBe("Terça");
});

test('Nota Conceitual', () => {
    expect(exercisesDois.notaConceito(8)).toBe("B");
});

test('Maior valor de 3', () => {
    expect(exercisesDois.maiorValor(2, 4, 9)).toBe(9);
});

test("O fatorial de 5 é 120", () => {
    expect(exercisesDois.fatorial(5)).toBe(120);
});

test("10 é número primo", () => {
    expect(exercisesDois.numeroPrimo(10)).toBe("Não é primo");
});