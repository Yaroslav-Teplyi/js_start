'use strict'

console.log('______________________________________________________*')
// variable
const myFirstName = 'Yarik',
    myLastName = 'Teplyi',
    isProgrammer = true;

let age = 21

console.log('My name is ' + myFirstName + '. My last name is ' + myLastName + '. I am ' + age + '. Am I a Programmer?' + isProgrammer)

// console.log('______________________________________________________*')

// const myFatherName = prompt('Enter my father\'s name')

// console.log('My name is ' + myFirstName + '. My last name is ' + myLastName + '. My father\'s name is ' + myFatherName )

console.log('______________________________________________________*')

console.log(age++)
console.log(age)
console.log(--age)

console.log('______________________________________________________*')

const num1 = 44,
    num2 = '44'

console.log( num1 == num2 )
console.log( num1 === num2 )

console.log('______________________________________________________*')

// Тернарное выражение 
const isReady = false

isReady ? console.log('YEs!') : console.log('NOo!')

console.log('______________________________________________________*')

// Функции

function calculateAge (year) {
    return 2021 - year - 1
}
const myAge = console.log('My age is ' + calculateAge(1999))

function logInfo (name, year) {
    console.log('Пользователь по имени ' + name + ', возрастом ' + calculateAge (year) + '.')
}

logInfo('Yarik', 1999)

console.log('______________________________________________________*')

// Arrays

let metal = ['black', 'thrash', 'death']
console.log(metal)

// console.log(metal.length)
// console.log(metal[0])
// console.log(metal[1])
// console.log(metal[2])
// console.log(metal[3])

metal[metal.length] = 'speed'
console.log(metal)

console.log('______________________________________________________*')

// loops

for (let i = 0; i < metal.length; i++) {
    console.log(metal[i])
}

for (let i of metal) {
    console.log(i)
}

console.log('______________________________________________________*')

// objects

const person = {
    firstName: 'Yaroslav',
    lastName: 'Teplyi',
    year: 1999,
    hasLife: false,
    languages: ['Ua', 'En', 'Ru'],
    hello: function () {
        console.log('hello!')
    }
}

console.log(person)

person.hello()
const keyy = 'year'
console.log(person[keyy])