import { Router } from "express";
import { generateToken, authToken, passportCall, authorization } from "../utils.js";

const usersDB = [
    { 
        email: 'dario@gmail.com', 
        password: '123456', 
        name: 'Dario',
        role: 'user' 
    },
    { 
        email: 'noah@gmail.com', 
        password: '123456', 
        name: 'Noah Brisa',
        role: 'seller'
    },
]
const router = Router()

router.post('/register', (req, res) => {
    const user = req.body

    if (usersDB.find(u => u.email === user.email)) {
        return res.status(400).send('User already exits')
    }

    usersDB.push(user)
    const access_token = generateToken(user)

    res.cookie('coderCookie', access_token, {
        maxAge: 60*60*1000,
        httpOnly: true
    }).send({message: 'Logged In!'})
})

router.post('/login', (req, res) => {
    const { email, password } = req.body

    const user = usersDB.find(u => u.email === email && u.password === password)
    if(!user) return res.status(401).send({status: "error", error: 'Invalid pass'})

    const access_token = generateToken(user)
    
    res.cookie('coderCookie', access_token, {
        maxAge: 60*60*1000,
        httpOnly: true
    }).send({message: 'Logged In!'})

})

router.get('/everyone', passportCall('jwt'), (req, res) => {
    console.log('Path /everyone')
    res.send({ status: 'success', payload: req.user })
})

router.get('/current', passportCall('jwt'), authorization('user'), (req, res) => {
    console.log('Path /current')
    res.send({ status: 'success', payload: req.user })
})

export default router