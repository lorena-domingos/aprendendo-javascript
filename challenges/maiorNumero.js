function maiorNumero(value1, value2, value3, value4, value5) {
    let valuesList = [];
    let maxValue = -Infinity;
    valuesList.push(value1, value2, value3, value4, value5);

    maxValue = Math.max(...valuesList)

    // valuesList.forEach(value => {
    //     if (value > maxValue) {
    //         maxValue = value;
    //     }
    // });

    return console.log(`Here's the list ${valuesList} and the max value is ${maxValue}`);
}

maiorNumero(544, 226, 444, 26, 506);