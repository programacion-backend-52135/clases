import fs from 'fs'

export default class User {

    constructor(filename = './db.users.json') {
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
        const user = data.find(d => d.id == id) ?? {}
        return { user }
    }

    create = async(user) => {
        const list = await this.get()
        user.id = list.length + 1

        list.push(user)
        fs.writeFileSync(this.filename, JSON.stringify(list))

        return { user }
    }

    update = async(id, user) => {
        const list = await this.get()
        const idx = list.findIndex(d => d.id == id)

        if(idx < 0) return {}

        list[idx] = user
        fs.writeFileSync(this.filename, JSON.stringify(list))

        return { status: 'updated', user }
    }

    remove = async(id) => {
        const list = await this.get()
        const idx = list.findIndex(d => d.id == id)

        if(idx < 0) return {}

        list.splice(idx, 1)
        fs.writeFileSync(this.filename, JSON.stringify(list))

        return { status: 'deleted' }
    }

    getByEmail = async(email) => {
        const data = await this.get()
        const user = data.find(d => d.email == email) ?? {}
        return user
    }

}