/**
 * Math Algorithms
 * @see https://youtu.be/Eivk4lyC00E?si=7kcgjSqh9mgP7NYH
 */

/**
 * NOTE: Don't completely rely on this trick
 * 
 * 1. loop - O(n)
 * 2. nested loops - O(n^2)
 * 3. input size reduces by half every iteration - O(logn)
 */


/**
 * @function fibonacci
 * 
 * Time Complexity: O(n) - linear
 * 
 * @description Generate a Fibonacci sequence up to nth number
 * @param {number} n - The number of terms in the sequence
 * @returns {number[]} The Fibonacci sequence
 */
const fibonacci = (n) => {
    let sequence = [0,1]; // 1
    for(i=2; i<n; i++) {
      sequence.push(sequence[i-1] + sequence[i-2]) // n-2
    }
    return sequence // 1
}

const n = 5
console.log(fibonacci(n)) // [0, 1, 1, 2, 3]




// The factorial of a number is the product of all positive integers from 1 up to that number. For example, 5! = 5 × 4 × 3 × 2 × 1 = 120. 
const factorialOfANumber = (n) => {
}

const factorialNumber = 5;
console.log(factorialOfANumber(factorialNumber)); 