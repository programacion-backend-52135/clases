import { storeService } from "../services/index.js"

export const getStores = async (req, res) => {
    const result = await storeService.getStores()
    res.send({ status: 'success', payload: result })
}

export const getStoreByID = async (req, res) => {
    const { sid } = req.params
    const result = await storeService.getStoreByID(sid)

    res.send({ status: 'success', payload: result })
}

export const addStore = async (req, res) => {
    const store = req.body

    const result = await storeService.addStore(store)
    res.send({ status: 'success', payload: result })
}

export const addProduct = async (req, res) => {
    const product = req.body // { name: 'asd', price: 123 }
    const { sid } = req.params

    const result = await storeService.addProduct(sid, product)
    
    res.send({ status: 'success', payload: result })
}