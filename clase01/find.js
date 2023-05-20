const array = [
    { id: 1, name: 'Eri Alfonso' },
    { id: 2, name: 'Augusto Bastita' },
    { id: 3, name: 'Christian Corona' },
    { id: 4, name: 'Francisco Perez' }
]

let student = array.find((est) => {
    let found = est.id === 3
    console.log("Valor de found ", found)
    return found
})
let student2 = array.find(e => e.id === 3)

console.log(student)
console.log(student2)