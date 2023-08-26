import passport from "passport";
import UserModel from '../models/user.model.js'
import GithubStrategy from 'passport-github2'
import passportJWT from 'passport-jwt'
import { extractCookie, generateToken } from "../utils.js";

const JWTstrategy = passportJWT.Strategy
const JWTextract = passportJWT.ExtractJwt

const initializePassport = () => {

    // Login and Register
    passport.use('github', new GithubStrategy(
        {
            clientID: 'Iv1.42ae653ed8a66872',
            clientSecret: '7eff1a591930fc3823944a2934e421ebdda6dba9',
            callbackURL: 'http://127.0.0.1:8080/githubcallback'
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile)
            
            try {
                const email = profile._json.email
                console.log( { email })
                const user = await UserModel.findOne({ email }).lean().exec()
                if(user) {
                    console.log('User already exits!!')
                } else {
                    console.log(`User doesn't exits. So register them`)

                    const newUser = {
                        name: profile._json.name,
                        email,
                        password: '',
                        social: 'github',
                        role: 'user'
                    }
                    const result = await UserModel.create(newUser)
                    console.log(result)
                }

                const token = generateToken(user)
                user.token = token

                return done(null, user)

            } catch (e) {
                return done('Error to login iwth gitrhub' + e) 
            }
        }
    ))

    // Autenticacion. Extrae y valida el JWT
    passport.use('jwt', new JWTstrategy(
        {
            jwtFromRequest: JWTextract.fromExtractors([extractCookie]),
            secretOrKey: 'secretForJWT'
        },
        (jwt_payload, done) => {
            console.log( { jwt_payload } )
            return done(null, jwt_payload)
        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        const user = await UserModel.findById(id)
        return user
    })
}

export default initializePassport