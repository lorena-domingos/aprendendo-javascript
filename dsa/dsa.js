// Stack

// LIFO (Last-In, First-Out)

function pilhaLinda(n) {
    class Stack {
        constructor() {
            this.items = [];
        }

        peek() {
            return this.items[this.items.length - 1];
        }

        push(e) {
            return this.items.push(e);
        }

        pop() {
            return this.items.pop();
        }

        print() {
            const listaArrumada = this.items.join(' - ');
            return console.log(`Itens na pilha: ${listaArrumada}`);
        }

        isEmpty() {
            return this.items.length === 0 ? true : false;
        }

        size() {
            return this.items.length;
        }
    };

    const stack = new Stack();
    
    for (let i = 1; i <= n; i++) {
        stack.push(i);
    };

    console.log(`Item removido: ${stack.pop()}`);
    stack.print(stack);
    console.log(`A pilha está vazia? ${stack.isEmpty()}`);
    console.log(`O topo da pilha é ${stack.peek()}`);
    console.log(`A quantidade de itens na pilha é ${stack.size()}`);

    return stack;
};

// pilhaLinda(5);

// Queue

// FIFO (First-in First-out)

function queue() {
    class Queue {
        constructor() {
            this.items = [];
        }

        enqueue(e) {
            return this.items.push(e);
        }

        dequeue() {
            return this.items.shift();
        }

        front() {
            return this.items[0];
        }

        isEmpty() {
            return this.items.length === 0 ? true : false;
        }

        size() {
            return this.items.length;
        }

        print() {
            const filaOrganizada = this.items.join(' => ')
            return console.log(`Fila: ${filaOrganizada}` );
        }
    }

    const queue = new Queue();

    console.log("=== FILA do SUS ===");
    queue.enqueue("Pedrinho da Motoca");
    queue.enqueue("Maria do Cebolão");
    queue.enqueue("Mario sem Armário");
    queue.print();

    console.log(`${queue.dequeue()} foi atendido.`);
    queue.print();

    return queue;
};

// queue();

// Bublle Sort

function bubbleSort() {
    let arr = [5, 3, 6, 2, 1];

    for (let pass = 0; pass < arr.length - 1; pass++) {

        for (let i = 0; i < arr.length - 1 - pass; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        };
    }
    
    
    console.log(arr);
};

// bubbleSort(); // Estudar pra entender melhor


function selectionSort() {
    let arr = [64, 25, 12, 22, 11];
    
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }

        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

    }

    console.log(arr);
}

selectionSort(); // Copiando a versão feita em C da Wikipedia