import mongoose from "mongoose";

const UsersModel = mongoose.model('users', new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    orders: [
        {
            type: mongoose.SchemaType.ObjectId,
            ref: 'orders'
        }
    ]
}))

export default UsersModel