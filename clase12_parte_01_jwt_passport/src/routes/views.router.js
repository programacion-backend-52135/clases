import { Router } from "express";

const router = Router()

router.get('/login', (req, res) => {
    
    res.render('login', {})
})


export default router