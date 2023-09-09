import { Router } from "express";

const router = Router()

router.get('/', getStores)
router.get('/:sid', getStoreByID)
router.post('/', addStore)
router.post('/:sid/product', addProduct)

export default Router