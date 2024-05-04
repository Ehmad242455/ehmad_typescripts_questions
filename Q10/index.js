function countPositiveNumbers(arr) {
    let count = 0;
    for (let num of arr) {
        if (num > 0) {
            count++;
        }
    }
    return count;
}
// Example usage:
const numbers = [-1, 2, 0, 5, 3, 10];
console.log(countPositiveNumbers(numbers)); // Output: 3
export {};
