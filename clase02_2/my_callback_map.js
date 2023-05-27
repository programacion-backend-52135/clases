
Array.prototype.myMap2 = function(callback) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        const element = this[i]
        const newElement = callback(element)
        newArray.push(newElement)
    }

    return newArray
}

const miLista = [1, 2, 3, 4, 88]
const newLista = miLista.myMap2(x => x * 3)


console.log(newLista)

