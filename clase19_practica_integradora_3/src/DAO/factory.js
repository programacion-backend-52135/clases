import config from '../config/config.js'
import mongoose from 'mongoose'

export let User
export let Ticket

console.log('PERSISTENCE: ', config.persistence)

switch (config.persistence) {
    case 'FILE':

        const { default: UserFile } = await import('./file/users.file.js')
        const { default: TicketFile } = await import('./file/tickets.file.js')

        User = UserFile
        Ticket = TicketFile

        break;
    case 'MONGO':
        await mongoose.connect(config.mongoURI, { dbName: config.mongoDBname })

        const { default: UserMongo } = await import('./mongo/users.mongo.js')
        const { default: TicketMongo } = await import('./mongo/tickets.mongo.js')

        User = UserMongo
        Ticket = TicketMongo

        break

    default:
        throw new Error(`Persistence don't recognized`)
}