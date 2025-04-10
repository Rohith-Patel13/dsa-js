/**
 * Algorithm:- A set of well-defined instructions to solve a particular problem
 * 
 * Time Complexity:- Amount of time taken by an algorithm to run, as a function of input size
 * 
 * Space Complexity:- Amount of time taken by an algorithm to run, as a function of input size
 * 
 * Asymptotic notations:
 *    - Mathematical tools to represent time and space complexity
 *    1. Big-O Notation (O-notation) - Worst case complexity [IMPORTANT]
 *    2. Omega Notation - Best case complexity
 *    3. Theta Notation - Average case complexity
 */



/**
 * Big-O Notation
 * -The worst case complexity of an algorithm is represented using the Big-O notation
 * -Big-O notation describes the complexity of an algorithm using algebraic terms
 * 
 * Big-O Notation Characteristics
 *    1. Big-O notation is expressed in terms of the input
 *    2. Big-O notation focuses on the bigger picture without
 *       getting caught up in the minute details
 */



/**
 * @function summation
 * 
 * @problem Summation of first `n` natural numbers
 * 
 * Big-O Time Complexity
 *    - Count the number of times a statement executes
 *      based on the input size
 *    - Total is `4+2` and of we generalize it
 *      then it will be `n+2` i.e Big-O notation is expressed in terms of the input
 *    - Big-O notation focuses on the bigger picture without
 *      getting caught up in the minute details
 *          n = 100      100+2
 *          n = 1000     1000+2
 *          n = 10000    10000+2
 *          .
 *          .
 *          .
 *          n = 1000000000  1000000000+2
 * 
 * Time Complexity:
 * O(n) - Linear -> [As the size of the input increases the time complexity also increases] 
 */
function summation(n) { // if `n=4`
   let sum = 0; // This line executes only once i.e `1`
   for (let i = 1; i<=n; i++) {
      sum += i; // This line executes four times i.e `4`
   }
   return sum; // This line executes only once i.e `1`
}



/**
 * @function summationMethodTwo
 * 
 * @problem Summation of first `n` natural numbers
 * 
 * Time Complexity:
 * O(1) - Constant
 */
function summationMethodTwo(n) {
   return (n * (n+1)) / 2
}



/**
 * @function twoNestedLoops
 * 
 * 3n^2 + 5n + 1 -->> The Big-O notation drops the less dominant terms,
 * we narrow down to n^2
 * 
 * Time Complexity:
 * O(n^2) - Quadratic
 */
function twoNestedLoops(n) {
   for (i=1; i<=n; i++) {
      for (j = 1; j<=i; j++) {
         // some code
      }
   }
}



/**
 * @function threeNestedLoops
 * 
 * Time Complexity:
 * O(n^3) - Cubic
 */
function threeNestedLoops(n) {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      for (k = 1; k <= j; k++) {
        // some code
      }
    }
  }
}



/**
 * If the input size reduces by half every iteration
 * 
 * Time Complexity:
 * O(logn) - Logarithmic
 */


/**
 * Time Complexity:
 * insert or remove property from an object - O(1),constant time
 * access property from an object - O(1), constant time
 * search for a value in an object - O(n), linear time
 * Object.keys() - O(n), linear time
 * Object.values() - O(n), linear time
 * Object.entries() - O(n), linear time
 */
const person = {
   name: 'John',
   age: 30
}

/**
 * Time Complexity:
 * 
 * insert or remove the property from end of an array - O(1), constant time
 * If you insert or remove the property from the beginning of an array - O(n), linear time
 * access property from an array - O(1), constant time
 * search for a value in an array - O(n), linear time
 * forEach/ map/ filter/ reduce - O(n), linear time
 */
const odd = [1, 3, 5, 7, 9]