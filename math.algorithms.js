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



/**
 * @function factorialOfANumber
 * 
 * Time Complexity: O(n) - linear
 * 
 * The factorial of a number is the product of all positive integers from 1 up to that number. For example, 5! = 5 × 4 × 3 × 2 × 1 = 120.
 * 
 * @description Generate a factorial of a given number
 * @param {number} n - The number to generate factorial of
 * @returns {number} The factorial of the given number
 */
const factorialOfANumber = (n) => {
    let final = 1 // 1
    for(i=1; i<=n; i++){
        final = final * i // n
    }
    return final // 1
}

const factorialNumber = 5;
console.log(factorialOfANumber(factorialNumber));





// A prime number (or a prime) is a natural number greater than 1 that is not a Prime numbers are natural numbers that are divisible by only 1 and the number itself.
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199 
const isPrimeOrNot = (n) => {
    if(n<2){
        return false
    }
    if(n===2){
        return true
    }
    for(let i=2; i<n; i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

console.log(isPrimeOrNot(5))
