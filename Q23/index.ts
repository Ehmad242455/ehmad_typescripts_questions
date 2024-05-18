function findDuplicates<T>(array: T[]): T[] {
    const elementCount: { [key: string]: number } = {};
    const duplicates: T[] = [];

    array.forEach(item => {
        const itemString = JSON.stringify(item);
        if (elementCount[itemString]) {
            elementCount[itemString]++;
        } else {
            elementCount[itemString] = 1;
        }
    });

    for (const itemString in elementCount) {
        if (elementCount[itemString] > 1) {
            duplicates.push(JSON.parse(itemString));
        }
    }

    console.log('Duplicates:', duplicates);
    return duplicates;
}

const array = [1, 2, 3, 2, 4, 5, 6, 1, 7, 8, 5];
const duplicateElements = findDuplicates(array);

