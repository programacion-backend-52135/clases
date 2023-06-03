
const temporizador = () => {

    console.log('Iniciamos el temporizador')
    let counter = 0
    const timer = setInterval(() => {
        console.log(++counter)
        if(counter > 5) clearInterval(timer)
    }, 2000)
}

console.log('Tik Tik...')
temporizador()

console.log('FIN !!')