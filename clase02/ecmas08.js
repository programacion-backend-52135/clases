const impuestos = {
    iva: 19,
    renta: 80,
    carro: 170
}

const parLlaveValor = Object.entries(impuestos)
console.log(parLlaveValor)

const fields = Object.keys(impuestos)
console.log(fields)

const values = Object.values(impuestos)
console.log(values)
console.log('------------------------------------------------------------')
const impuestosTotales = values.reduce((acumulacion, item) => {
    console.log('->', acumulacion, item)
    return acumulacion + item
}, 0)
console.log('Resultado: ', impuestosTotales)