const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) return reject('Division entre 0')
        resolve(dividendo / divisor)
    })
}

const funcionAsincronico = async () => {
    try {
        const resultado = await dividir(10, 5)
        const otroResult = 'El resultado es' + resultado

        console.log(otroResult)
        const tt = 7
        console.log(tt)

        const resultado2 = await dividir(100, 0)

        console.log(resultado, resultado2)
    } catch (e) {
        console.log('Se ejecuto un error: ', e)
    }
}

funcionAsincronico()