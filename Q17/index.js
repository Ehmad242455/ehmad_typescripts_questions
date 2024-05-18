"use strict";
function countScores(scores) {
    let max = scores[0];
    let min = scores[0];
    let aboveMax = 0;
    let belowMin = 0;
    for (const score of scores) {
        if (score > max) {
            max = score;
            aboveMax++;
        }
        else if (score < min) {
            min = score;
            belowMin++;
        }
    }
    return { aboveMax, belowMin };
}
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const result = countScores(scores);
console.log("Number of times score exceeded maximum score:", result.aboveMax);
console.log("Number of times score fell below minimum score:", result.belowMin);
