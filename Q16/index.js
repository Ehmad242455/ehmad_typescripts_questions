"use strict";
function sumOfElements(arr, findEven) {
    let sum = 0;
    for (let num of arr) {
        if (findEven && num % 2 === 0) {
            sum += num;
        }
        else if (!findEven && num % 2 !== 0) {
            sum += num;
        }
    }
    return sum;
}
// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(sumOfElements(numbers, true)); // Sum of even numbers
console.log(sumOfElements(numbers, false)); // Sum of odd numbers
