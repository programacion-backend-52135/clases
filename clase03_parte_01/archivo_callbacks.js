const fs = require('fs')

const filename = 'ejemplo.txt'

fs.writeFile(filename, 'Saludos a Gabriek Ledesma', (error) => {
    if(error) return console.log('Hubo un error al escribir')
    fs.appendFile(filename, '\nSaludos a mi amiga Andrea Rodriguez 🥰', error => {
        if(error) return console.log('Hubo un error agregando mas info')
        fs.readFile(filename, 'utf-8', (error, contenido) => {
            if(error) return console.log('Hubo un error leyendo el archivo')
            console.log('CONTENIDO: ', contenido)
            fs.unlink(filename, error => {
                if(error) return console.log('Error al eliminar el archivo')
                console.log('Borrado!')
            })
        })
    })
})



console.log('FIN !!')