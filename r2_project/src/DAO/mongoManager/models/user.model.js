import mongoose from "mongoose";

const UserModel = mongoose.model('users', mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    name: String
}))

export default UserModel