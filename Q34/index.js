"use strict";
function logArrayInReverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}
const sampleArray = [1, 2, 3, 4, 5];
logArrayInReverse(sampleArray);
