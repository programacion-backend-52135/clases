import mongoose from "mongoose";

const productModel = mongoose.model('products', new mongoose.Schema({
    name: { type: String, require: true },
    stock: Number,
    price: Number
}))

export default productModel