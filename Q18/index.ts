function sumOfElements(numbers: number[], isEven: boolean): number {
    let sum = 0;

    for (const num of numbers) {
        if (isEven && num % 2 === 0) {
            sum += num;
        } else if (!isEven && num % 2 !== 0) {
            sum += num;
        }
    }

    return sum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Addition  of even numbers:", sumOfElements(numbers, true));
console.log("Addition of odd numbers:", sumOfElements(numbers, false));
