function count0currencies<T>(array:T[],element : T){
    return array.reduce((count, currentElement) => {
        return currentElement === element ? count + 1: count;
    } , 0);
}

const numbers = [1,2,3,2,4,2,5];

const count = count0currencies(numbers , 2);

console.log(count);