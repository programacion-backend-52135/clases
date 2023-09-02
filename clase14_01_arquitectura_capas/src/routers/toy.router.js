import { Router } from "express";
import { getAll, create, getCheapest } from "../controllers/toy.controller.js";

const router = Router()

router.get('/', getAll)
router.get('/cheapest', getCheapest)
router.post('/', create)
router.post('/create', create)

export default router