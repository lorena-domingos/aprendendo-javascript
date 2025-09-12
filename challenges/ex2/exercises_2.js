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

// Nota Conceito

function notaConceito(nota) {
    if (nota >= 9) {
        return "A";
    } else if (nota >= 7) {
        return "B";
    } else if (nota >= 5) {
        return "C";
    } else {
        return "D";
    }
};

// Maior de três números

function maiorValor(a, b, c) {
    let listaValores = [];
    listaValores.push(a, b, c)
    return Math.max(...listaValores);
};

// Tabuada

function tabuada(a) {
    let receberTabuada = [];
    let counter = 10;
    for (let i = 1; i <= counter; i++) {
        let calculo = a * i
        let resultado = `${a} * ${i} = ${calculo}`;
        receberTabuada.push(resultado);
    }

    console.log(receberTabuada);
};

/* if (!["+","-","*","/"].includes(operador)) {
    return "Operação inválida";
} */

// tabuada(2);

// Ano bissexto

function anoBissexto(ano) {
    let anoString = String(ano);
    let listaAno = Array.from(anoString);

    let valor1 = (listaAno[2] + listaAno[3]);


    if (listaAno[2] == "0" && listaAno[3] == "0") {
        if (ano % 400 === 0) {
            console.log("Ano Bissexto");
        } else {
            console.log("Não é um ano bissexto.");
        }
    } else {
        if (valor1 % 4 === 0) {
            console.log("Ano Bissexto");
        }
    }

    // console.log(listaAno);
};

// anoBissexto(1900);

// Compliquei usando manipulação de String :C

/* Seria o ideal: function anoBissexto(ano) {
    if (ano % 400 === 0) return true;
    if (ano % 100 === 0) return false;
    return ano % 4 === 0;
} */


// console.log(Math.sqrt(31).toFixed(1));

function numeroPrimo(a) {
    let divisor = Math.floor(Math.sqrt(a));
    let primoMsg = "É primo";
    for (divisor; 2 <= divisor; divisor--) {
        resultado = a % divisor;
        if (resultado === 0) {
            primoMsg = "Não é primo";
            break;
        }
    };

    return primoMsg;

}

// numeroPrimo(10);

// 9/10

// Fatorial

function fatorial(valor) {
    let acumulador = 1;
    while (valor > 1) {
        acumulador *= valor;
        console.log(acumulador);
        valor--;
    }

    return acumulador;
};

// fatorial(10);

// Nível 2 finalizado


module.exports = {
    teste,
    tipoDeTriangulo,
    calculadoraComOperador,
    receberNomeDoDia,
    notaConceito,
    maiorValor,
    fatorial,
    numeroPrimo
}