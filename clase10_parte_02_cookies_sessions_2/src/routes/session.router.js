import { Router } from "express";
import UserModel from "../models/user.model.js";

const router = Router()

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await UserModel.findOne({ email, password })
    if(!user) return res.redirect('login')

    req.session.user = user
    
    return res.redirect('/profile')
})

router.post('/register', async (req, res) => {
    const user = req.body
    await UserModel.create(user)

    return res.redirect('/')
})

export default router