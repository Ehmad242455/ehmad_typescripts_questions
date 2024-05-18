"use strict";
function calculateProduct(numbers) {
    if (numbers.length === 0) {
        return 1;
    }
    return numbers.reduce((product, num) => product * num, 1);
}
const numbers = [2, 3, 4];
const product = calculateProduct(numbers);
console.log(product);
