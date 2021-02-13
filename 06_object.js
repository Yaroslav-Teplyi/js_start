const person = {
    name: 'Yarik',
    age: 21,
    isProgrammer: true,
    greet() {
        console.log('Greet!!!')
    },
    'complex key': 'complex value',
    ['key_' + (2-1)]: 'value',
    info() {
        console.log('Info about ', this.name)
    }
}

console.log(person.name)
const ageKey = 'age'
console.log(person[ageKey])
console.log(person['complex key'])

delete person['key_1']
console.log(person['key_1'])
person.greet()
console.log(person)

const {name, age: personAge, isProgrammer} = person
console.log(name, personAge, isProgrammer)

// for(let key in person) {
//     if(person.hasOwnProperty(key)) {
//         console.log('key: ' + key)
//         console.log('value: ' + person[key])
//     }
// }

// const keys = Object.keys(person)
// keys.forEach(key => {
//     console.log('key: ' + key)
//     console.log('value: ' + person[key])
// })

// person.info()

const logger = {
    keys() {
        console.log('Object keys: ', Object.keys(this))
    },
    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
        })
    }
}
// logger.keysAndValues(person)
// const bound = logger.keysAndValues.bind(person)
// bound()

logger.keysAndValues.call(person)