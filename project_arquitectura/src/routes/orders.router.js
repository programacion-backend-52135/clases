import { Router } from "express";
import { getOrders, createOrder, resolveOrder, getOrderByID } from "../controllers/orders.controller.js";

const router = Router()

router.get('/', getOrders)
router.get('/:oid', getOrderByID)
router.post('/', createOrder)
router.post('/:oid', resolveOrder)

export default router