"use strict";
function formatNames(names) {
    if (names.length === 0) {
        return "";
    }
    else if (names.length === 1) {
        return names[0];
    }
    else if (names.length === 2) {
        return `${names[0]} and ${names[1]}`;
    }
    else {
        const allButLastTwo = names.slice(0, -2);
        const lastTwo = names.slice(-2);
        return `${allButLastTwo.join(", ")}, ${lastTwo[0]} and ${lastTwo[1]}`;
    }
}
console.log(formatNames(["Alice", "Bob", "Charlie", "David"]));
console.log(formatNames(["Alice", "Bob"]));
console.log(formatNames(["Alice"]));
console.log(formatNames([]));
