// Fatorial Recursivo

function fatorialRecursivo(n) {
    if (n === 0) {
        return 1;
    }

    return n * fatorialRecursivo(n - 1);
};

// Fibonacci

function fibonacciRecursivo(n) {
    if (n === 1) {
        return 0;
    };

    if (n === 2) {
        return 1;
    };
    
    return fibonacciRecursivo(n - 1) + fibonacciRecursivo (n - 2);
};

console.log(fibonacciRecursivo(2))

// fibo iterativo

function fibo(n) {
    let arr = [0, 1];

    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    };

    return arr[n - 1];
};

console.log(fibo(2));

// Ocorrência de valores

function ocorrenciaValor() {
    let arr = [1, 1, 2, 3, 3, 3];
    let newArr = {};
    
    for (let i = 0; i < arr.length; i++) {
        if (!((arr[i] in newArr))) {
            newArr[arr[i]] = 1;
        } else {
            newArr[arr[i]] += 1;
        };
    };

    console.log(newArr);
    return newArr;
};

// ocorrenciaValor();

// Achatando um Array

function achatarArray(arr = [1, [2, [3, 4]], 5]) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            newArr.push(arr[i]);
        } else if (Array.isArray(arr[i])) {
            newArr.push(...achatarArray(arr[i]))
        };
    };

    return newArr;

    // for (let i = 0; i < arr.length; i++) {
    //     if (typeof arr[i] === 'number') {
    //         newArr.push(arr[i]);
    //     } else if (Array.isArray(arr[i])) {
    //         for (let j = 0; j < arr[i].length; j++) {
    //             if (typeof arr[i][j] === 'number') {
    //                 newArr.push(arr[i][j]);
    //             } else if (Array.isArray(arr[i][j])) {
    //                 for (let k = 0; k < arr[i][j].length; k++) {
    //                     newArr.push(arr[i][j][k]);
    //                 }
    //             }
    //         }
    //     }
    // }

    
    
    // console.log(arr.flat(Infinity));
};

// console.log(achatarArray());

// busca binária

// Esse código parece magia negra

function buscaBinaria(n) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let inicio = 0;
    let fim = arr.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2); // valor 5

        if (arr[meio] === n) { // se o meio for 5, retorna 5
            return meio;
        } else if (arr[meio] < n) { // se n for menor que 5, inicio adiciona o valor do meio + 1 e procura na metade superior?
            inicio = meio + 1; // 5, 9
        } else {
            fim = meio - 1; // procura na metade inferior? 0, 3
        }
    }

    return -1;

    // if (n >= 5) {
    //     for (let i = 0; i < arr.slice(4, 9).length; i++) {
    //         if (arr.includes(n)) {
    //             resultado = arr.indexOf(n);
    //         }
    //     }
    // } else if (n <= 5) {
    //     for (let i = 0; i < arr.slice(0, 4).length; i++) {
    //         if(arr.includes(n)) {
    //             resultado = arr.indexOf(n);
    //         }
    //     }
    // }

    // console.log(resultado);

};

// console.log(buscaBinaria(5));

// Anagrama

function anagrama() {
    let a = "amor";
    let b = "roma";

    let arr = a.split('').sort().join('');
    let segundoArr = b.split('').sort().join('');

    if (arr === segundoArr) {
        return true;
    } else {
        return false;
    }
};

// console.log(anagrama());

// parênteses

function parenteses() {
    const texto = "((())";
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "(") {
            contador += 1;
        } else if (texto[i] === ")") {
            contador -= 1;
        }

        if (contador < 0) {
        return false;
        }
    }

    return contador === 0;
};

// console.log(parenteses());

module.exports = {
    fatorialRecursivo,
    fibonacciRecursivo
};