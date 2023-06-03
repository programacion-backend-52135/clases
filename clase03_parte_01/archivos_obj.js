const fs = require('fs')

const obj = {
    name: 'Carolina',
    lastname: 'Gavatorta',
    age: 21
}
// Pasamos el objeto a String para guardarlo
const objStr = JSON.stringify(obj)
fs.writeFileSync('objeto.json', objStr)

// Leemos el archivo como string y lo pasamos a Objeto
const contenido = fs.readFileSync('objeto.json', 'utf-8')
const contenidoObj = JSON.parse(contenido)


console.log('CONTENIDO', contenido)
console.log('CONTENIDO OBJ', contenidoObj)

contenidoObj.name = 'Valentin'

console.log('CONTENIDO NEW', contenidoObj)