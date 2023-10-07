import FileManager from "./manager.file.js";

export default class Ticket {
    constructor() {
        this.fileManager = new FileManager('tickets.json')
    }

    get = async() => {
        const result = await this.fileManager.get() 
        return result
    }
    create = async(data) => { return this.fileManager.add(data)}
    getByID = async(_id) => { return this.fileManager.getOneByParam('_id', _id)}
    update = async(data) => { return this.fileManager.update(data)}
}