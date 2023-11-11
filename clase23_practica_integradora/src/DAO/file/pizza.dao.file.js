import fs from 'fs'

export default class Pizza {

    constructor(filename = './db.json') {
        this.filename = filename
    }

    get = async() => {
        if(fs.existsSync(this.filename)) {
            const data = fs.readFileSync(this.filename, 'utf-8')
            return JSON.parse(data)
        }

        return []
    }

    getById = async(id) => {
        const data = await this.get()
        const pizza = data.find(d => d.id == id) ?? {}
        return { pizza }
    }

    create = async(pizza) => {
        const list = await this.get()
        pizza.id = list.length + 1

        list.push(pizza)
        fs.writeFileSync(this.filename, JSON.stringify(list))

        return { pizza }
    }

    update = async(id, pizza) => {
        const list = await this.get()
        const idx = list.findIndex(d => d.id == id)

        if(idx < 0) return {}

        list[idx] = pizza
        fs.writeFileSync(this.filename, JSON.stringify(list))

        return { status: 'updated', pizza }
    }

    remove = async(id) => {
        const list = await this.get()
        const idx = list.findIndex(d => d.id == id)

        if(idx < 0) return {}

        list.splice(idx, 1)
        fs.writeFileSync(this.filename, JSON.stringify(list))

        return { status: 'deleted' }
    }

}