"use strict";
function swapElements(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Index out of bounds");
    }
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
const numbers = [1, 2, 3, 4, 5];
swapElements(numbers, 1, 3);
console.log(numbers);
const words = ["apple", "banana", "cherry"];
swapElements(words, 0, 2);
console.log(words);
