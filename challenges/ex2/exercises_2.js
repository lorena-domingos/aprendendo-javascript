const teste = (a) => a * 2;

// Tipo de triângulo
function tipoDeTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Valores inválidos";
    }

    if (a === b && b === c) {
        return "Equilátero";
    } else if (a != b && b != c && c != a) {
        return "Escaleno";
    } else if (a === b || b === c || c === a) {
        return "Isósceles";
    }
};

// Calculadora que recebe operador como string
function calculadoraComOperador(valor1, operador, valor2) {
    if (valor1 <= 0 && valor2 <= 0 && operador === "") {
        return "Operação inválida";
    }

    if (operador === "+") {
        return valor1 + valor2;
    } else if (operador === "-") {
        return valor1 - valor2;
    } else if (operador === "*") {
        return valor1 * valor2
    } else if (operador === "/") {
        return valor1 / valor2
    }
};

// Dado um valor de 1 a 7, dizer o nome do dia da semana. Aparentemente ao usar return ele cessa o programa e por isso usar break pode ser redundante.
function receberNomeDoDia(valor) {
    switch(valor) {
        case 1:
            return "Segunda";
        case 2:
            return "Terça";
        case 3:
            return "Quarta";
        case 4:
            return "Quinta";
        case 5:
            return "Sexta";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Digite um valor válido!"
    }
};

/* Recebi o mesmo desafio de antes, a pegadinha foi
na ordem de verificação dos valores. Então apenas um
copia e cola
*/
function fizzBuzz(value) {
    let counter = 1
    for (value; counter <= value; counter++) {
        if (counter % 3 == 0 && counter % 5 == 0) {
            console.log("TeAmo");
        }
        else if (counter % 3 == 0) {
            console.log("Te");
        }
        else if (counter % 5 == 0) {
            console.log("Amo");
        } else {
            console.log(counter);
        }
    }
};

// 4/10

module.exports = {
    teste,
    tipoDeTriangulo,
    calculadoraComOperador,
    receberNomeDoDia
}