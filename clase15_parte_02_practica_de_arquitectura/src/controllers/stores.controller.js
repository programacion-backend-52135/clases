

const storesService = new Store()

export const getStores = async (req, res) => {
    const result = await storesService.getStores()
    res.send({ status: 'success', payload: result })
}

export const getStoreByID = async (req, res) => {
    const { sid } = req.params
    const result = await storesService.getStoreByID(sid)

    res.send({ status: 'success', payload: result })
}

export const addStore = async (req, res) => {
    const store = req.body

    const result = await storesService.addStore(store)
    res.send({ status: 'success', payload: result })
}

export const addProduct = async (req, res) => {
    const product = req.body
    const { sid } = req.params

    const result = await storesService.addProduct(sid, product)
    
    res.send({ status: 'success', payload: result })
}