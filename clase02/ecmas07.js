const valores = [1, 2, 4, 5, 8, 9]
const nuevoValores = valores.map( numero => numero ** 2)
const nuevoValores2 = valores.map( (numero, idx) => numero ** idx)
console.log(nuevoValores)

const nombres = ['Valentin', 'Carolina', 'Agustin', 'Exequiel', 'Ayelen']

if( nombres.includes('Ayelen')) {
    console.log('Ayelen llegó a la party !! 👯')
} else {
    console.log('Laparty esta aburrida sin Ayelen 😢')
}

