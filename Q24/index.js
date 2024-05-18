"use strict";
function incrementAll(numbers) {
    return numbers.map(number => number + 1);
}
const integers = [1, 2, 3, 4, 5];
const incrementedIntegers = incrementAll(integers);
console.log(incrementedIntegers);
