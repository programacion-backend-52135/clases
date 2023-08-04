import mongoose from "mongoose";

const CartModel = mongoose.model('carts', new mongoose.Schema({
    products: {
        type: [{
            id: String,
            quantity: Number
        }]
    }
}))

export default CartModel