import { Router } from "express";
import { getUsers, saveUsers, getUserByID, addOrder } from "../controllers/users.controller.js";

const router = Router()

router.get('/add-order/:userId/:orderId', addOrder)
router.get('/', getUsers)
router.get('/:uid', getUserByID)
router.post('/', saveUsers)

export default router