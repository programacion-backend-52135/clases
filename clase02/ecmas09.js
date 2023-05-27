const obj1 = {
    field11: 222,
    field22: 'Romina',
    field33: true,
    field44: 'Agistin Sivila',
    field66: 666
}

const obj2 = {
    field1: '[TUTOR] Santiago',
    field2: [2, 3, 4, 6, 7]
}

// SPREAD OPERATOR
const { field22, field33 } = obj1
console.log(field22, field33)

const obj3 = { ...obj1, ...obj2 }
console.log(obj3)

const obj4 = {
    field111: 222,
    field222: 'R2',
    field333: false,
    field444: 'Marco Giabbani',
    field666: 666
}

// REST OPERATOR
const { field111, field333, ...rest} = obj4
console.log(field111)
console.log(rest)
