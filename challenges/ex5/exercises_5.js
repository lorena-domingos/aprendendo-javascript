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

module.exports = {
    fatorialRecursivo,
    fibonacciRecursivo
};