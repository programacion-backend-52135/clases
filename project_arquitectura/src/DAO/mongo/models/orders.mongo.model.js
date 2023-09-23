import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    number: Number,
    store: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'stores'
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    status: String,
    totalPrice: Number
})

const OrderModel = mongoose.model('orders', OrderSchema)

export default OrderModel