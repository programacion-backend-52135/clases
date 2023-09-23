import StoreDTO from "../DAO/DTO/stores.dto.js";

export default class StoreRepository {

    constructor(dao) {
        this.dao = dao
    }

    getStores = async () => { return await this.dao.getStores() }
    getStoresVIP = async () =>  { 
        return await this.dao.getStores({vip: true}) 
    }
    getStoreById = async(sid) => { return await this.dao.getStoreById(sid) }
    addStore = async(store) => { 
        const storeToInsert = new StoreDTO(store)
        return await this.dao.saveStore(storeToInsert)
    }
    addProduct = async (sid, product) => {
        const store = await this.getStoreById(sid)
        store.products.push(product)

        return await this.dao.updateStore(sid, store)
    }
}
