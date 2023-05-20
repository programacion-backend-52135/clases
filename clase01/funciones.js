function miNombre(name, lastname) {
    let varInterna = 127
    console.log("Saludos a mi amigo ", name)
    
    return varInterna
}

console.log('INIT')
const valorRetorno = miNombre('Andres Galtan')
const valorRetorno2 = miNombre('Valentin Ábalo')
console.log(valorRetorno)
console.log(valorRetorno2)

console.log('---------------------')

const saludar = (name, age) => {
    console.log('Saludos para ', name)
    return age * 2
}

const t = saludar('Aguston', 25)
console.log(t)

const a = o => o * 23

console.log(a(13))