import FileManager from "./file.manager.js";
import Order from "./orders.file.js";

export default class User extends FileManager {

    constructor(filename = './db.users.json') {
        super(filename)
        this.orderFile = new Order()
    }
    getUsers = async (populate = false) => { 
        const users = await this.get()
        
        if(populate) {
            const orders = await this.orderFile.getOrders()
            for (let i = 0; i < users.length; i++) {
                const result = []
                const orderUsers = users[i].orders
                orderUsers.forEach(oid => {
                    let order = orders.find(o => o.id = oid)
                    result.push(order)
                })
                users[i].orders = result
            }
        }

        return users
    }
    getUserById = async(id) => { return await this.getById(id) }
    saveUser = async(user) => { return await this.add(user)}
    updateUser = async(id, user) => {
        user.id = id
        return await this.update(user)
    }
}