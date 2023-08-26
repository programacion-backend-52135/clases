
process.on('exit', code => {
    console.log('Este code se ejecuta antes de salir del proceso')
})

process.on('uncaughtException', code => {
    console.log('Una exception no ha sido controlada')
})

process.on('message', message => {
    console.log('Ese code recibio un mensaje de otro proceso')
})

console.log("INIT process")
console()