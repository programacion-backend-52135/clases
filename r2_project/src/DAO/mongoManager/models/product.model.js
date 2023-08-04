import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    stock: Number,
    price: Number
})

productSchema.plugin(mongoosePaginate)

const productModel = mongoose.model('products', productSchema)

export default productModel