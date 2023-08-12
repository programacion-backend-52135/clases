import { Router } from "express";
import { generateToken, authToken } from "../utils.js";

const usersDB = []
const router = Router()

router.post('/register', (req, res) => {
    const user = req.body

    if( usersDB.find(u => u.email === user.email)) {
        return res.status(400).send('User already exits')
    }

    usersDB.push(user)
    const access_token = generateToken(user)

    res.send({status: 'success', access_token })
})

router.get('/current', authToken, (req, res) => {
    res.send({ status: 'success', payload: req.user })
})

export default router