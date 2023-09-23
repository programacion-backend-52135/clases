import { Router } from "express";
import { getStoreByID, addProduct, addStore, getStores } from "../controllers/stores.controller.js";

const router = Router()

router.get('/', getStores)
router.get('/:sid', getStoreByID)
router.post('/', addStore)
router.post('/:sid/product', addProduct)

export default router