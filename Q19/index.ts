function findElementIndex<T>(array: T[], element: T): number{
    return array.indexOf(element);
}
const arr = [1,2,3,4,5];
console.log(findElementIndex(arr, 3));
console.log(findElementIndex(arr, 6));
