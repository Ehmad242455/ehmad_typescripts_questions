// 12. Create a script that logs the second to last element of 
// an array named fruits.

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

let secondToLast = fruits[fruits.length -2];

let thirdToLast = fruits[fruits.length -3];

console.log('\nFruits array :\n',fruits);

console.log('\nSecond to last index fruite :',secondToLast)

console.log('\nThird to last index fruite :',thirdToLast)

// 13. Develop a function that takes an array of numbers and
//     returns a new array with each number squared.

let  array: number[] = [1,2,3,4,5,6,7,8,9]
function square(array:any[]){

       return array.map(number=>number*number)  
}
console.log('\nNumber array:\n',array)
let square1 =square(array);
console.log('\nSquare of number array\n',square1)