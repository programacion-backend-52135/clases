const fs = require('fs')

const filename = 'ejemplo.txt'

const operacionAsync = async () => {
    try {
        // Devuelve una promesa que escribe el archivo
        await fs.promises.writeFile(filename, 'Saludos a Ileana Brotsky !!')

        // Devuelve una promesa que lee el archivo
        let contenido = await fs.promises.readFile(filename, 'utf-8')
        console.log('CONTENIDO', contenido)
    } catch (e) {
        console.log('ERROR', e)
    }

}

operacionAsync()
console.log('FIN')