// Parâmetro padrão

function olaNome(nome = "Lorena") {
    const frase = `Olá ${nome}`;
    return frase;
};

// Média de um array

function mediaArray(arr = [1, 2, 3, 4, 5]) {
    let resultado = 0;
    let media = 0;

    for (let i = 0; i < arr.length; i++) {
        resultado += arr[i];
        media = resultado / arr.length;
    }

    return media;
}

// mediaArray()

// Filtrar pares

// Array.from({length: 11}, (x, i) => i)

function filtrarPares(intervalo=11) {
    let randomArr = [...Array(intervalo).keys()];
    let newArr = [];
    randomArr.forEach(i => {
        if (i % 2 == 0) {
            newArr.push(i);
        }
    });
    return newArr;
}

// filtrarPares();

module.exports = {
    olaNome,
    mediaArray,
    filtrarPares
}