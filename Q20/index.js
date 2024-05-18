"use strict";
function findSmallestNumber(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty!!!");
    }
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}
const numbers = [10, 5, 20, 3, 8, 15];
console.log("Smallest number:", findSmallestNumber(numbers));
