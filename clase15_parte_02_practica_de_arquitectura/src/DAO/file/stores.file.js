import FileManager from "./file.manager.js"

export default class Store extends FileManager {
    constructor(filename = './db.stores.json') {
        super(filename)
    }

    getStores = async (query = {}) => { return await this.get(query) }
    getStoreById = async (id) => { return await this.getById(id) }
    saveStore = async (store) => { return await this.add(store) }
    updateStore = async (id, store) => {
        store.id = id
        return await this.update(store)
    }
}