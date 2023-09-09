import StoreModel from "./models/stores.mongo.model.js"

export default class Store {
    getStores = async () => { return await StoreModel.find() }
    getStoreById = async (id) => { return await StoreModel.findOne({ _id: id }) }
    saveStore = async (store) => { return await StoreModel.create(store) }
    updateStore = async (id, store) => {
        return await StoreModel.updateOne({ _id: id }, { $set: store })
    }
}