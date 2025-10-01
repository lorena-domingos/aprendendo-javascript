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
    
    return fibonacciRecursivo(n - 1) + fibonacciRecursivo (n -2);
};

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

console.log(achatarArray());

module.exports = {
    fatorialRecursivo,
    fibonacciRecursivo
};