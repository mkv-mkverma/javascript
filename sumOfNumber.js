/**
 * Sum no natural number
 * input 5
 * Output 15
 * Explanation 5 + 4 + 3 + 2 + 1 + 0
 */

function sum(num) {
    let sum = 0;
    // sum += num;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

sum(2);

// Using recursion

// Recursion function is function that calls itself.  
// When writing recursion functions there must be a definite break condition, otherwise we risk creating infinite loops.
function sumRec(num) {
    // Base case
    if (num <= 1) {
        return num;
    }
    return num + sumRec(num - 1)
}

console.log(sumRec(5));