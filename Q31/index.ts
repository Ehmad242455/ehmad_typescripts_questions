function countCharacterOccurrences(inputString: string, charToCount: string): number {
    if (charToCount.length !== 1) {
        throw new Error("The second argument must be a single character.");
    }

    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === charToCount) {
            count++;
        }
    }
    return count;
}

const inputString = "Hello World";
const charToCount = "o";
const result = countCharacterOccurrences(inputString, charToCount);
console.log(`The character "${charToCount}" appears ${result} times in the string "${inputString}".`);
