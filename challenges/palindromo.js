function verificaPalindromo (texto) {
    let textoSeparado = texto.split("");
    let textoAoContrario = textoSeparado.toReversed();

    if (textoSeparado.join("") === textoAoContrario.join("")) {
        return true;
    } else {
        return false;
    }
};

module.exports = verificaPalindromo;

verificaPalindromo("arara");