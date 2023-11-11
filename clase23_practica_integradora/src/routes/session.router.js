import { Router } from 'express'
import { register, login, privateUser, errorUser } from '../controllers/session.controller.js'
import { passportJWT } from '../utils.js'
import passport from 'passport'

const router = Router()

router.post(
    '/register',
    passport.authenticate('register', {
        failureRedirect: '/session/error'
    }),
    register
)
router.post(
    '/login',
    passport.authenticate('login', {
        failureRedirect: '/session/error'
    }),
    login
)

router.get('/private', passportJWT, privateUser)

router.get('/error', errorUser)

export default router