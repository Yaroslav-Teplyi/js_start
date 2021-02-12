'use strict'

// Function Declaration

function greed(name) {
    console.log('Hi - ', name)
}

greed('Yarik')

// Function Expression, объявление функции долждно быть раньше, чем ее вызов

const greed2 = function(name) {
    console.log('Hi - ', name)
}

greed2('Yarikdd')


// анонимные функции

// let counter = 0;

// const interval = setInterval(function() {
//     if(counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 100)

// Стрелочные функции

const arrow = (name) => {
    console.log('Hi, ', name)
}
arrow('Yat')

const pow2 = num => num ** 2;
console.log(pow2(10))

// Параметры по умолчанию

const sumNum = (a = 22, b = 10) => a + b
console.log(sumNum())

// Замыкания 

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Yar');
console.log(logWithLastName('tei'))
console.log(logWithLastName('wdes'))