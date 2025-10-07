function calcularDiagonal() {
    const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let listaUm = [];
    let listaDois = [];

    for (let i = 0; i < 3; i++) {
        listaUm.push(arr[i][i]);
        listaDois.push(arr[i][2 - i]); 
        // for (let j = 2; j > 0; j--) {
        //     listaDois.push(arr[i][j]);
        // }
    };

    // for (let j = 2; j > -1; j--) {
    //     listaDois.push(arr[j][j]);
    // }

    let diferenca = listaUm.reduce((ac, cv) => ac + cv, 0) - listaDois.reduce((ac, cv) => ac + cv, 0);

    console.log(diferenca);
    console.log(listaUm);
    console.log(listaDois);
};

calcularDiagonal();