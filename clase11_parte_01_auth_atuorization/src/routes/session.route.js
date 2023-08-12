import UserModel from "../model/users.model.js";
import { Router } from "express"
import { createHash, isValidPassword } from "../utils.js";

const router = Router()

router.get('/', (req, res) => {res.send('OK')})

// URL para render
router.get('/login', (req, res) => { res.render('login', {}) })
router.get('/register', (req, res) => { res.render('register', {}) })

// Iniciar Session
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    
    // 1) Buscamos por email
    const user = await UserModel.findOne({ email })
    if(!user) {
        console.log('No se enmcontro el user')
        return res.redirect('/login')
    }

    // 2) Validamos el password
    if(!isValidPassword(user, password)) { // Validamos el hash
        console.log('Password not valid')
        return res.redirect('/login')
    }

    req.session.user = user
    return res.redirect('/profile')
})
// Registro
router.post('/register', async (req, res) => {
    const data = req.body
    data.password = createHash(data.password) // Hasheamos !!!

    const result = await UserModel.create(data)
    console.log(result)

    res.redirect('/login')
})

// Profile
function auth(req, res, next) {
    if(req.session?.user) next()
    else res.redirect('/login')
}
router.get('/profile', auth, (req, res) => {
    const user = req.session.user 

    res.render('profile', user)
})

export default router

