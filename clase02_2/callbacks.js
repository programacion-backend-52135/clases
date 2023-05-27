
const originales = [1, 2, 3, 4, 5]

const functionForMap = (x) => {
    return x + 1
}

const newValues = originales.map(functionForMap)
const newValues2 = originales.map((x) => {
    return x * 2
})


console.log(newValues)
console.log(newValues2)