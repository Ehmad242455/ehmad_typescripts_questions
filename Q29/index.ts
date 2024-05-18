function minMaxAverage(numbers: number[]): { min: number, max: number, average: number } {
    if (numbers.length === 0) {
        throw new Error("The array must contain at least one number");
    }

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    return {
        min: min,
        max: max,
        average: average
    };
}

const nums = [1, 2, 3, 4, 5];
const result = minMaxAverage(nums);
console.log(result);
