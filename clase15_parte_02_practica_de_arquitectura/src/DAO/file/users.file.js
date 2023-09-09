import FileManager from "./file.manager.js";

export default class User extends FileManager {

    constructor(filename = './db.users.json') {
        super(filename)
    }
    getUsers = async () => { return await this.get() }
    getUserById = async(id) => { return await this.getById(id) }
    saveUser = async(user) => { return await this.add(user)}
}