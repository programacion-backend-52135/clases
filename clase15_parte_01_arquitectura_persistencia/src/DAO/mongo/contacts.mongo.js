import ContactsModel from "./models/contacts.model.js"

export default class Contacts {

    constructor() {

    }

    get = async () => {
        const contacts = await ContactsModel.find()
        return contacts
    }

    insert = async(data) => {
        const result =  await ContactsModel.create(data)

        return result
    }

}