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