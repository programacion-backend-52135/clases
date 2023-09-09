import { Router } from "express";
import { getUsers, saveUsers, getUserByID } from "../controllers/users.controller.js";

const router = Router()

router.get('/', getUsers)
router.get('/:uid', getUserByID)
router.post('/', saveUsers)

export default router