
const fs = require('fs')
const crypto = require('crypto')

class ManagerUser {
    constructor(filename) {
        this.filename = filename
        this.format = 'utf-8'
    }

    createUser = async (name, lastname, age, password) => {
        const user = { name, lastname, age}

        user.salt= crypto.randomBytes(128).toString('base64')
        user.password = crypto.createHmac('sha256', user.salt).update(password).digest('hex')

        const list = await this.getUser()
        list.push(user) 

        // Escribimos el archivo (o se sobreescribe si ya existe)
        await fs.promises.writeFile(this.filename, JSON.stringify(list))
    }

    getUser = async () => {
        try {
            // Leer contenido del archivo
            const data = await fs.promises.readFile(this.filename, this.format)
            const dataObj = JSON.parse(data) // Convertimos de string a objeto

            return dataObj
        } catch (error) {
            // Si no existe el archivo, retornamos una lista vacia
            console.log('No se encontro el archivo, se devuelve vacio')
            return []
        }
    }

}

async function run() {
    const manager = new ManagerUser('users.json')
    await manager.createUser('R2', 'Verbel', 23, 'front')

    console.log(await manager.getUser())
}

run()