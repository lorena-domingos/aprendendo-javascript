// Stack

// LIFO (Last-In, First-Out) DS

function pilhaAlg(n) {
    let stack = [];

    for (let i = 1; i <= n; i++) {
        stack.push(i);
    };

    let novoNumero = stack[stack.length - 1];
    // let numeroDaSorte = stack.pop(); //

    console.log(stack.indexOf(2));

    console.log(novoNumero);
    // console.log(numeroDaSorte);
    console.log(stack);
};

// pilhaAlg(5);

// Queue

// FIFO (First-in First-out)

function queue() {
    let list = [];

    list.push("Arroz");
    list.push("Batata");
    list.push("Cenoura");
    list.shift();

    console.log(list);
};

queue();

