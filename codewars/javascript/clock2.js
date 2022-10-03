// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s) {
    //#Happy Coding! ^_^
    let time = 0

    time += (h * 3600000)
    time += (m * 60000)
    time += (s * 1000)
    time += 0
    return time
}

const hours = 5
const minutes = 40
const seconds = 5

console.log(past(hours, minutes, seconds))

// best practice solution 
function past(h, m, s) {
    return ((h * 3600) + (m * 60) + s) * 1000;
}
