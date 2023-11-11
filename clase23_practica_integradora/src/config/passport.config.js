import passport from 'passport'
import jwt from 'passport-jwt'
import local from 'passport-local'
import config from './config.js'
import UserService from './../services/user.services.js'


const LocalStrategy = local.Strategy
const PRIVATE_KEY = config.jwtPrivateKEY
const userService = new UserService()

const initializePassport = () => {

    passport.use('register', new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'email'
    }, async(req, username, password, done) => {
        const {email, name, role} = req.body
        console.log({email, name, role})
        try {
            const user = await userService.getByEmail(email)
            console.log({user})
            if(user) {
                console.log('User already exits')
                return done(null, false)
            }

            const newUser = { email, name, password, role }
            const result = await userService.create(newUser)

            return done(null, result)
        } catch (error) {
            return done('[LOCAL] Error from register user')
        }
    }))

    passport.use('login', new LocalStrategy({
        usernameField: 'email'
    }, async(username, password, done) => {
        const user = await userService.getByEmail(username)
        if(!user) {
            console.log('User doesnt exist')
            return done(null, false)
        }

        if(user.password !== password) return done(null, false)

        return done(null, user)
    }))


    passport.use('jwt', new jwt.Strategy({
        jwtFromRequest: jwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: PRIVATE_KEY
    }, async (jwt_payload, done) => {
        try {
            return done(null, jwt_payload)
        } catch (e) {
            return done(error)
        }
    }))
}

export default initializePassport