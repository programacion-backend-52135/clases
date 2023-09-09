import { Router } from "express";

const router = Router()

router.get('/', getOrders)
router.get('/:oid', getOrderByID)
router.post('/', createOrder)
router.post('/:oid', resolveOrder)

export default Router