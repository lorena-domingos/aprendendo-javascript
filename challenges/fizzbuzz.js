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
}

module.exports = fizzBuzz;

fizzBuzz(15);