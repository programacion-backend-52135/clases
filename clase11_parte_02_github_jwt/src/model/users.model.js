import mongoose from "mongoose";

const userCollection = 'users'

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    name: String
})

const UserModel = mongoose.model(userCollection, userSchema)

export default UserModel