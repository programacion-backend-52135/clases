import { Router } from 'express'
import CartManager from '../manager/cart.manager.js'

const router = Router()
const cartManager = new CartManager()

router.get('/', async (req, res) => {
    const result = await cartManager.list()
    res.send(result)
})

router.get('/:idc/:idp', async (req, res) => {
    const idc = parseInt(req.params.idc)
    const idp = parseInt(req.params.idp)

    const result = await cartManager.addProduct(idc, idp)
    res.send(result)
})

router.post('/', async (req, res) => {
    const result = await cartManager.create()
    res.send(result)
})

export default router
