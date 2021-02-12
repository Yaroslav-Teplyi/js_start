'use srtict'

const stringInt = '40',
    stringFloat = '40.42'
    
console.log(+stringInt + 2)
console.log(parseFloat(stringFloat) + 2)

console.log(0.5 + 0.3)

// MATH

console.log(Math.pow(2, 53))
console.log(Math.sqrt(25))

const mathArr = [2, -3, 5, 20, 1]

console.log(Math.max(...mathArr))
console.log(Math.min(...mathArr))

console.log(Math.floor(4.9))
console.log(Math.ceil(4.9))
console.log(Math.round(4.4))
console.log(Math.trunc(4.9))
console.log(Math.floor(Math.random() * 100) + 1)

// Example

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 42))