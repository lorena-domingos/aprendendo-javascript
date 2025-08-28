const verificaPalindromo = require('./palindromo');

test('Se Arara for um palíndromo', () => {
    expect(verificaPalindromo("arara")).toBe(true);
});

test('Se Lorena não for um palíndromo', () => {
    expect(verificaPalindromo("lorena")).toBe(false);
});
