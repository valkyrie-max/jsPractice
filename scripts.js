// PROBLEM ONE: Matching values
// Write a function that, if given two arguments that match, will return true, otherwise will return false. For example:

// isMatch('dog', 'dog') // true
// isMatch(1, 1) // true
// isMatch('dog', 'cat') // false
// isMatch(1, 2) // false
// isMatch(1, 'dog') // false

// when creating an arrow function, pass in two parameters (a and b)
// utilize if/else statement 
// if a has equal value AND same type as b, return true
// if it does NOT, return false
// const isMatch = (a, b) => {
//     if (a === b) {
//         return true;
//     } else {
//         return false
//     }
// }

// ========================================================================================================================================================================

// PROBLEM TWO: String repeater
// Write a function that repeats a string a given number of times, for example:

// repeatString('hey', 3) // returns 'heyheyhey'

// when creating an arrow function, pass in two parameters (s (for 'string') and n (for 'number'))
// const repeatString = (s, n) => {
//     if (n < 1) {
//         return ``;
//     } else if (n === 1) {
//         return s;
//     } else {
//         return s + repeatString(s, n - 1)
//     }
// }

// ========================================================================================================================================================================

// PROBLEM THREE: Sum All

// Write a function called sumAll that, if given two arguments, will return the sum of every number in between them:

// sumAll(1, 4) // 1 + 2 + 3 + 4 which is 10

// when creating an arrow function, pass in two parameters (f (for 'first') and l (for 'last'))
// const sumAll = (f, l) => {
//     // math equation
//     return (l* (l + 1) - (f - 1) * f) / 2
// }

// ========================================================================================================================================================================

// PROBLEM FOUR: Count the Vowels

// Write a function that, given a word, will print out the number of vowels in that word. For example:

// countVowels('diamond') // 3

// // const vowels = [`a`, `e`, `i`, `o`, `u`]
// const countVowels = (string) => {
//     return Array.from(string).filter(letter => 'aeiou'.includes(letter)).length;
// }