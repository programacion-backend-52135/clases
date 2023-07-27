import { Router } from 'express'
import ProductModel from '../DAO/mongoManager/models/product.model.js'

const router = Router()

router.get('/', async (req, res) => {
    const result = await ProductModel.find()
    res.send(result)
})

router.post('/', async (req, res) => {
    const data = req.body
    
    const result = await ProductModel.create(data)

    res.send(result)
})

export default router
