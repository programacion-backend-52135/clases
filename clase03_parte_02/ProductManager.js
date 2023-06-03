const fs = require('fs')

class ProductManager {

    constructor(path) {
        this.#path = path
    }

    read = () => {
        if (fs.existsSync(this.path)) {
            return fs.promises.readFile(this.path, 'utf-8').then(r => JSON.parse(r))
        } else return []
    }

}

const manager = new ProductManager('db.json')
