import FileManager from "./file.manager.js"

export default class Order extends FileManager {
    constructor(filename = './db.orders.json') {
        super(filename)
    }

    getOrders = async () => { return await this.get() }
    getOrderById = async (id) => { return await this.getById(id) }
    createOrder = async (order) => { return await this.add(order) }
    updateOrder = async (id, order) => {
        order.id = id
        return await this.update(order)
    }
}