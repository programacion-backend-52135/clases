import UserModel from "./models/user.model.js"


export default class User {
    get = async () => {
        return await UserModel.find()
    }
    getById = async (id) => {
        return await UserModel.findById(id)
    }
    create = async (user) => {
        return await UserModel.create(user)
    }
    update = async (id, user) => {
        return await UserModel.findByIdAndUpdate(id, user)
    }
    remove = async (id) => {
        return await UserModel.findByIdAndDelete(id)
    }

    getByEmail = async(email) => {
        return await UserModel.findOne({ email })
    }
}