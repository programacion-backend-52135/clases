import config from "../config/config.js";
import mongoose from "mongoose";

export let Pizza
export let User

console.log(`Persistence with ${config.persistence}`)

switch (config.persistence) {
    case 'MONGO':

        const dbName = config.databaseNAME
        mongoose.connect(config.databaseURL, { dbName} )
            .then(() => console.log('DB connected! 😎'))
            .catch((e) => {throw 'DB can not connected 🚨'})

        const { default: PizzaMongo } = await import('./mongo/pizza.dao.mongo.js')
        const { default: UserMongo } = await import('./mongo/user.dao.mongo.js')

        Pizza = PizzaMongo
        User = UserMongo

        break;

    case 'FILE':
        const { default: PizzaFile} = await import('./file/pizza.dao.file.js')
        const { default: UserFile} = await import('./file/user.dao.file.js')

        Pizza = PizzaFile
        User = UserFile

        break;
    default:
        throw 'Persistence is not defined'
}