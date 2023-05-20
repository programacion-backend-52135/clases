
const mostrarLista = array => {
    console.log('===============================')
    if(array.length == 0) return "Lista vacia."

    array.forEach(element => {
        console.log(element)
    })

    return `La longitud del array es ${array.length}`
}

console.log( mostrarLista([1, 2, 3]) )
console.log( mostrarLista([]) )
console.log( mostrarLista(['R2', 'Tomas Sangoy', 90]) )