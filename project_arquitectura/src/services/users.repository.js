import UserDTO from "../DAO/DTO/users.dto.js";

export default class UserRepository {

    constructor(dao) {
        this.dao = dao
    }

    getUsers = async (populate = false) => { 
        return await this.dao.getUsers(populate) 
    }
    getUserById = async(id) => { return await this.dao.getUserById(id) }
    saveUser = async(user) => { 
        const userToInsert = new UserDTO(user)
        return await this.dao.saveUser(userToInsert)
    }
    addOrderToUser = async ( userId, orderId) => {
        const user = await this.dao.getUserById(userId)
        user.orders.push(orderId)
        return await this.dao.updateUser(user.id, user)
    }
}
