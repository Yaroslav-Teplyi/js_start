const cars = ['Mazda', 'Honda', 'Suzuki', 'Toyota']

console.log(cars)
cars.push('Reno', 'Nissan')
cars.unshift('Lexus')
console.log(cars)

const firstCar = cars.shift()
const lastCar = cars.pop()

console.log(firstCar)
console.log(lastCar)
console.log(cars)
console.log(cars.reverse())

console.log(cars.includes('Mersedes'))

const carsUpperCase = cars.map(car => {
    return car.toUpperCase()
})

console.log(carsUpperCase)
console.log(cars)


// Задача 

const sampleText = 'For whom the bell tolls'

const sampleTextreverse = sampleText.split('').reverse().join('')

console.log(sampleTextreverse)

const sampleArr = [1, 2, 3, 5, 8, 13]

const powArr = sampleArr.map(num => num ** 2)

console.log(powArr)

// Другое

const people = [
    {personName: 'Yar', personBudget: 3400},
    {personName: 'SAS', personBudget: 1400},
    {personName: 'KOI', personBudget: 2400}
]

const index = people.find(function(person) {
    return person.personBudget > 2000
})
console.log(index)

// Another
let findedPerson

for(const person of people) {
    // console.log(person)
    if(person.personBudget > 2000) {
        findedPerson = person
    }
}
console.log(findedPerson)

// Another

// const person1 = people.find(person => person.personBudget > 1500)
// console.log(person1)

const midlleBudget = people.filter(person => person.personBudget > 1500)
console.log(midlleBudget)

const sumMiddleBudget = people
    .filter(person => person.personBudget > 1500)
    .reduce((acc, person) => {
    acc += person.personBudget
    return acc
}, 0)
console.log(sumMiddleBudget)