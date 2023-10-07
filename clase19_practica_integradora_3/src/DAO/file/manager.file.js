import fs from 'fs'
import config from '../../config/config.js'

class FileManager {

    constructor(path) {
        this.path = config.pathFile + path
    }

    read = async () => {
        if(fs.existsSync(this.path)) {
            return fs.promises.readFile(this.path, 'utf-8')
                .then(r => JSON.parse(r))
                .catch(e => {
                    console.log(`Path not found. Return []`)
                    return[]
                })
        } else {
            await fs.promises.mkdir(config.pathFile)
            await this.write()
        }

        return []
    }

    write = (list) => {
        return fs.promises.writeFile(this.path, JSON.stringify(list))
    }

    get = async() => { 
        return this.read()
    }
    getOneByParam = async (param, value) => {
        return (await this.read()).find(d => d[param] === value)
    }

    add = async(obj) => {
        const list = await this.read()
        obj._id = list.length + 1

        list.push(obj)
        await this.write(list)

        return obj
    }

    update = async(obj) => {
        const list = await this.read()
        const idx = list.findIndex(d => d._id === obj._id)
        if(idx < 0) throw new Error('Not Found into File')

        list[idx] = obj
        await this.write(list)

        return obj
    }
}

export default FileManager