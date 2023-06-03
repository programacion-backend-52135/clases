

const temporizador = (callback) => {
    setTimeout(callback, 5000)
}

const operacion = () => console.log('Boooooommm')

console.log('Tik Tik ...')

temporizador(operacion)

console.log('Finalizamos el proceso')