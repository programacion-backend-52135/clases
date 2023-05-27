
const dividir = (dividento, divisor) => {
    // Creamos una promesa
    const promesa = new Promise((resolve, reject) => {

        if(divisor == 0) reject('Division entre 0') // Si falla, exec reject
        else resolve(dividento / divisor) // Si esta bien, exec resove
    })

    return promesa
}

const p1 = dividir(34, 7)

p1
    .then(resultado => 'El resultado es' + resultado)
    .then(otroResult => {
        console.log(otroResult)
        const tt = 7
        return tt
    })
    .then(r => {console.log(r)})
    .then(r => console.log(r))
    .catch(error => console.error(error)) // Si fallo

dividir(56, 0)
    .then(resultado => console.log('el resultado es', resultado))
    .catch(error => console.error(error))