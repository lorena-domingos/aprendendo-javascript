const verificaPalindromo = require('./palindromo');
// const fizzBuzz = require('./fizzbuzz');
const InverterNumero = require('./reverterNumero');

test('Se Arara for um palíndromo', () => {
    expect(verificaPalindromo("arara")).toBe(true);
});

test('Se Lorena não for um palíndromo', () => {
    expect(verificaPalindromo("lorena")).toBe(false);
});

// test("Se for divisível por 3, Te", () => {
//     expect(fizzBuzz(3)).toBe(console.log("Te"))
// });

// test("Se for divisível por 5, Amo", () => {
//     expect(fizzBuzz(5)).toBe(console.log("Amo"))
// });

// test("Se for divisível por 3 e 5, TeAmo", () => {
//     expect(fizzBuzz(15)).toBe(console.log("TeAmo"))
// });

test("O número 19 invertido é 91", () => {
    expect(InverterNumero(19)).toBe(91)
});

test("O número 123 invertido é 321", () => {
    expect(InverterNumero(123)).toBe(321)
});

test("O número 580 invertido é 85", () => {
    expect(InverterNumero(580)).toBe(85)
});
