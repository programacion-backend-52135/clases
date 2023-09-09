import { Router } from "express";

const router = Router()

router.get('/', getUsers)
router.get('/:uid', getUserByID)
router.post('/', saveUsers)

export default Router