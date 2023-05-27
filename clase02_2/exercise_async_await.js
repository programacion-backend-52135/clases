const sumar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 === 0) reject('Operacion innecesaria')
        else if (num1 < 0 || num2 < 0) reject('Soy racista 😡')
        else resolve(num1 + num2)
    })
}

const restar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 === 0) return reject('Operacion innecesaria')
        const result = num1 - num2
        if (result < 0) return reject('Soy racista 😡')

        return resolve(result)
    })
}

const multiplicar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 < 0 || num2 < 0) reject('Soy racista 😡') // throw "asdasd"
        else resolve(num1 * num2)
    })
}

const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (dividendo < 0 || divisor < 0) return reject('Soy racista 😡')
        if (divisor == 0) return reject('Division entre 0')

        return resolve(dividendo / divisor)
    })
}

// Then / Catch

sumar(12, -1)
    .then(result => console.log("Sumar: ", result))
    .catch(function(error) {
        console.log(error)
    })

restar(12, 34)
    .then(result => console.log("Restar: ", result))
    .catch(e => console.error(e))

multiplicar(12, 34)
    .then(result => console.log("Multiplicar: ", result))
    .catch(e => console.error(e))

dividir(12, 34)
    .then(result => console.log("Dividir: ", result))
    .catch(e => console.error(e))

// Async Await

console.log('--------------------------------------')
const funcAsync = async() => {
    try {
        console.log(await sumar(12, 34))
        console.log(await restar(12, 34))
        console.log(await multiplicar(12, 34))
        console.log(await dividir(12, 34))
    } catch (error) {
        console.log("ERROR", error)
    }
}
//funcAsync()