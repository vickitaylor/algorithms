// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    let positiveCount = 0
    let negativeSum = 0
    let answerArr = []

    if (input === null) {
        return answerArr
    }

    for (const num of input) {
        if (num > 0) {
            positiveCount += 1
        }
        else if (num < 0) {
            negativeSum += num
        }
    }

    if (positiveCount !== 0 || negativeSum !== 0){
        answerArr = [positiveCount, negativeSum]
    }
    else {
        answerArr 
    }

    return answerArr
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
const arr2 = [0]
const arr3 = [null]
const arr4 = []
const arr5 = [-21]
const nullExp = null


console.log(countPositivesSumNegatives(arr));
console.log(countPositivesSumNegatives(arr2))
console.log(countPositivesSumNegatives(arr3))
console.log(countPositivesSumNegatives(arr4))
console.log(countPositivesSumNegatives(nullExp))
console.log(countPositivesSumNegatives(arr5))

