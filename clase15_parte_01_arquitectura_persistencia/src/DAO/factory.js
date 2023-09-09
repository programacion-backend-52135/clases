import config from "../config/config.js";
import mongoose from "mongoose";

export let Contacts

switch (config.persistence) {
    case 'MEMORY':
        console.log('Persistence with memory')

        const { default: ContactsMemory } = await import('./memory/contacts.memory.js')
        Contacts = ContactsMemory
        break;

    case 'FILE':
        console.log('Persistence with File')

        const { default: ContactsFile } = await import('./files/contacts.files.js')
        Contacts = ContactsFile
        break;

    case 'MONGO':
        console.log('Persiscence with Mongo')

        mongoose.connect(config.dbUrl, {
            useNewUrlParser: true,
            UseUnifiedTopology: true,
            dbName: config.dbName
        })
            .then(r => { console.log('DB connected!') })
            .catch(e => {
                throw new Error('No DB connected', e)
            })

        const { default: ContactsMongo } = await import('./mongo/contacts.mongo.js')
        Contacts = ContactsMongo
        break;
    default:
        throw new Error('Not persistence is configured')
}