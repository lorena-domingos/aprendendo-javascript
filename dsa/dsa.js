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

queue();

