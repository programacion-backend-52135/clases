import mongoose from 'mongoose'

const pokeCollection = 'pokemons'

const pokeSchema = new mongoose.Schema({
    name: String,
    type: String,
    photo: String,
    id: Number
})

const pokeModel = mongoose.model(pokeCollection, pokeSchema)

export default pokeModel