import UserDTO from "../DAO/DTO/users.dto.js";

export default class UserRepository {

    constructor(dao) {
        this.dao = dao
    }

    getUsers = async () => { return await this.dao.getUsers() }
    getUserById = async(id) => { return await this.dao.getUserById(id) }
    saveUser = async(user) => { 
        const userToInsert = new UserDTO(user)
        return await this.dao.saveUser(userToInsert)
    }
}
