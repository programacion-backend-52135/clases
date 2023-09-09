import mongoose from "mongoose";

export default mongoose.model('contacts', new mongoose.Schema({
    name: String,
    age: Number,
    active: Boolean,
    phone: String
}))