import mongoose from "mongoose";

export default class MongoSingleton {

    static #instance

    constructor() {
        mongoose.connect('mongodb://admin:admin@127.0.0.1:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => { console.log('Connected!') })
            .catch(e => console.log(e))
    }

    static getInstance() {

        if (this.#instance) {
            console.log('Already connected!')
            return this.#instance
        }

        this.#instance = new MongoSingleton()

        return this.#instance
    }


}