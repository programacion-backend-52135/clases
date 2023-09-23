import { userService } from "../services/index.js"

export const getUsers = async (req, res) => {
    let populate = req.query?.populate ?? true
    populate = populate === "false" ? false : true

    const result = await userService.getUsers(populate)
    res.send({ status: 'success', payload: result })
}

export const getUserByID = async (req, res) => {
    const { uid } = req.params
    const result = await userService.getUserById(uid)

    res.send({ status: 'success', payload: result })
}

export const saveUsers = async (req, res) => {
    const user = req.body

    const result = await userService.saveUser(user)
    res.send({ status: 'success', payload: result })
}

export const addOrder = async (req, res) => {
    const { userId, orderId } = req.params

    const result = await userService.addOrderToUser(parseInt(userId), parseInt(orderId))
    res.send({ status: 'success', payload: result })
}