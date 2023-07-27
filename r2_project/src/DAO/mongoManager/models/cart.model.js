import mongoose from "mongoose";

const cartModel = mongoose.model('carts', new mongoose.Schema({
    products: {
        type: [{
            id: String,
            quantity: Number
        }]
    }
}))

export default cartModel