import OrderDTO from "../DAO/DTO/orders.dto.js";

export default class OrderRepository {

    constructor(dao) {
        this.dao = dao
    }

    getOrders = async () => { return await this.dao.getOrders() }
    getOrderById = async(oid) => { return await this.dao.getOrderById(oid) }
    createOrder = async(store) => { 
        const orderToInsert = new OrderDTO(store)
        return await this.dao.createOrder(orderToInsert)
    }
    resolveOrder = async (oid, resolve) => {
        const order = this.getOrderById(oid)
        order.status = resolve
        
        return await this.dao.updateOrder(oid, order)
    }
}
