// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

const numArray = [5, 0, 5, 6, 8, 7, 10, 35, 12]
const numArray2 = [5, 0, 5, 6, 8, 7, -10, 35, 12]

// Sum Numbers in codewars
function sum(numbers) {
    "use strict";
    let sum = 0
    for (const num of numbers) {
        sum += num
    }
    return sum
};

console.log(sum(numArray))

// different way to try
const sumMap = (numbers) => {
    let sum = 0
    numbers.map(number => {
        sum += number
    })
    return sum
}
console.log(sumMap(numArray2))

// best practice solution 
function sumBP(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}