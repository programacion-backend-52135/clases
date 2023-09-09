const ordersService = new Order()

export const getOrders = async (req, res) => {
    const result = await ordersService.getOrders()
    res.send({ status: 'success', payload: result })
}

export const getOrderByID = async (req, res) => {
    const { oid } = req.params
    const result = await ordersService.getOrderByID(oid)

    res.send({ status: 'success', payload: result })
}

export const createOrder = async (req, res) => {
    const order = req.body

    const result = await ordersService.createOrder(order)
    res.send({ status: 'success', payload: result })
}

export const resolveOrder = async (req, res) => {
    const { resolve } = req.query
    const { oid } = req.params

    const result = await ordersService.resolveOrder(oid, resolve)
    
    res.send({ status: 'success', payload: result })
}