import { Router } from "express";
import { get, create, addTicket, reminder } from "../controllers/users.controller.js";

const router = Router()

router.get('/', get)
router.get('/reminder/:userID', reminder)
router.post('/', create)
router.put('/add', addTicket)

export default router