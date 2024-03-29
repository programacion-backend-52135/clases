import mongoose from 'mongoose'

export default mongoose.model('users', new mongoose.Schema({
    first_name: {
        type: String,
        index: true
    },
    last_name: String,
    email: String,
    gender: String
}))