function filterByLenght(strings:string[],n: number):string[]{
    return strings.filter(str => str.length > n);
}
const words = ["Banana", "Apple", "Grapes", "Watermelon"];
const filteredWords = filterByLenght(words, 5);

console.log(filteredWords);