function verificaPalindromo (texto) {
    textoSeparado = texto.split("");
    textoAoContrario = textoSeparado.toReversed();

    if (textoSeparado.join("") === textoAoContrario.join("")) {
        return true;
    } else {
        return false;
    }
};

module.exports = verificaPalindromo;

verificaPalindromo("arara");