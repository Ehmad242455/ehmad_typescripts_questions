"use strict";
for (let y = 1; y <= 50; y++) {
    if (y % 3 == 0) {
        console.log("Fizz", y);
    }
    else if (y % 5 == 0) {
        console.log("Buzz", y);
    }
    else {
        console.log("Simple numbers.");
    }
}
