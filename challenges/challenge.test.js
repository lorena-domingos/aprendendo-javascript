const verificaPalindromo = require('./palindromo');
const fizzBuzz = require('./fizzbuzz');

test('Se Arara for um palíndromo', () => {
    expect(verificaPalindromo("arara")).toBe(true);
});

test('Se Lorena não for um palíndromo', () => {
    expect(verificaPalindromo("lorena")).toBe(false);
});

test("Se for divisível por 3, Te", () => {
    expect(fizzBuzz(3)).toBe(console.log("Te"))
});

test("Se for divisível por 5, Amo", () => {
    expect(fizzBuzz(5)).toBe(console.log("Amo"))
});

test("Se for divisível por 3 e 5, TeAmo", () => {
    expect(fizzBuzz(15)).toBe(console.log("TeAmo"))
});
