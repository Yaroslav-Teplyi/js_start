'use strict'

const myName = 'Yariik',
    age = 21;

const output1 = 'Hi, my name is ' + myName + ' and I am ' + age + '.'
console.log(output1)

const output = `Hi, my name is ${myName} and I am ${age < 20 ? 'A' : 'B'}.`
console.log(output)

console.log(myName.length)
console.log(myName.toUpperCase())
console.log(myName.indexOf('i'))
console.log(myName.charAt(0))
console.log(myName.startsWith('Ya'))
console.log(myName.repeat(10))

const string = '           asdasd          '
console.log(string)
console.log(string.trim())
console.log(string.trimLeft())
console.log(string.trimRight())