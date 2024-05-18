"use strict";
function sortArray(numbers) {
    return numbers.sort((a, b) => a - b);
}
const unsortedArray = [34, 7, 23, 32, 5, 62];
const sortedArray = sortArray(unsortedArray);
console.log("Sorted Array:", sortedArray);
