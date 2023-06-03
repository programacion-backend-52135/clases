const fs = require('fs')

const filename = 'ejemplo.txt'

// Escribir archivo
fs.writeFileSync(filename, 'Saludos a mi amigo Erick Osuna!!')

if(fs.existsSync(filename)) {
    console.log('El archivo existe')

    // Leer contenido de un archivo
    const contenido = fs.readFileSync(filename, 'utf-8')
    console.log('CONTENIDO:', contenido)

    // Agregar contenido
    fs.appendFileSync(filename, '\nMas saludos para los demas')

    const contenidoNew = fs.readFileSync(filename, 'utf-8')
    console.log('CONTENIDO NEW:', contenidoNew)

    // Borrar un archivo
    fs.unlinkSync(filename)
}


console.log('END')

