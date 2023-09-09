import { orderService } from "../services/index.js"

export const getOrders = async (req, res) => {
    const result = await orderService.getOrders()
    res.send({ status: 'success', payload: result })
}

export const getOrderByID = async (req, res) => {
    const { oid } = req.params
    const result = await orderService.getOrderByID(oid)

    res.send({ status: 'success', payload: result })
}

export const createOrder = async (req, res) => {
    const order = req.body

    const result = await orderService.createOrder(order)
    res.send({ status: 'success', payload: result })
}

export const resolveOrder = async (req, res) => {
    const { resolve } = req.query
    const { oid } = req.params

    const result = await orderService.resolveOrder(oid, resolve)
    
    res.send({ status: 'success', payload: result })
}