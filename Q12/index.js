function squareNumber(numbers) {
    return numbers.map(num => num * num);
}
const numbers = [5, 6, 9, 12, 2];
const squaredNumber = squareNumber(numbers);
console.log(squaredNumber);
export {};
