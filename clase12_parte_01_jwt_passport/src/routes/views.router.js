import { Router } from "express";

const router = Router()

router.get('/login', (req, res) => {
    res.render('login', {})
})

router.get('/current', (req, res) => {
    res.render('current', {})
})

export default router