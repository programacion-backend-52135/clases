import OrderModel from "./models/orders.mongo.model.js"

export default class Order {
    getOrders = async () => { return await OrderModel.find() }
    getOrderById = async (id) => { return await OrderModel.findOne({ _id: id }) }
    createOrder = async (order) => { return await OrderModel.create(order) }
    updateOrder = async (id, order) => {
        return await OrderModel.updateOne({ _id: id }, { $set: order })
    }
}