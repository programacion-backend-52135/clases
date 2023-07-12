import fs from 'fs'

class FileManager {

    constructor(filename = './db.json') {
        this.filename = filename
    }

    getNextId = (list) => {
        return (list.length == 0) ? 1 : list[list.length - 1].id + 1
    }

    get = async () => {
        return fs.promises.readFile(this.filename, 'utf-8')
        .then(r => JSON.parse(r))
        .catch(e => {
            return []
        })
    }

    getById = async (id) => {
        const data = await this.get()
        return data.find(d => d.id == id)
    }

    set = async (data) => {
        const list = await this.get()
        data.id = this.getNextId(list)
        list.push(data)
        return fs.promises.writeFile(this.filename, JSON.stringify(list))
    }

    update = async (data) => {
        const list = await this.get()
        const idx = list.findIndex(a => a.id == data.id)
        list[idx] = data
        
        return fs.promises.writeFile(this.filename, JSON.stringify(list))
    }

}

export default FileManager