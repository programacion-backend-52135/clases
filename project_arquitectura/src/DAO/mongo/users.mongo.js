import UsersModel from "./models/users.mongo.model.js";

export default class User {
    getUsers = async () => { return await UsersModel.find() }
    getUserById = async(id) => { return await UsersModel.findOne({_id: id}) }
    saveUser = async(user) => { return await UsersModel.create(user)}
}