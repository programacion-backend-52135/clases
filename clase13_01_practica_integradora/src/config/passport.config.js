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
            clientID: 'Iv1.0e52272e01d5e745',
            clientSecret: '893424e8a2f128938832d5eb179e04941948a7d9',
            callbackURL: 'http://localhost:8080/githubcallback'
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

    // passport.use('register', new LocalStrategy({
    //     passReqToCallback: true,
    //     usernameField: 'email'
    // }, async (req, username, password, done) => {

    //     const {first_name, last_name, email, age } = req.body
    //     try {
    //         const user = await UserService.getOneByEmail(username)
    //         if(user) {
    //             console.log("User already exits");
    //             return done(null, false)
    //         }

    //         const newUser = {
    //             first_name,
    //             last_name,
    //             email,
    //             age,
    //             role: 'user',
    //             social: 'local',
    //             password: createHash(password)
    //         }
    //         const result = await UserService.create(newUser)
            
    //         return done(null, result)
    //     } catch (error) {
    //         return done("[LOCAL] Error al obtener user " + error)
    //     }


    // }))

    // passport.use('login', new LocalStrategy({
    //     usernameField: 'email'
    // }, async (username, password, done) => {
    //     try {
    //         const user = await UserService.getOneByEmail(username)
    //         if(!user) {
    //             console.log("User dont exist");
    //             return done(null, user)
    //         }

    //         if(!isValidPassword(user, password)) return done(null, false)

    //         const token = generateToken(user)
    //         user.token = token

    //         return done(null, user)
    //     } catch (error) {
            
    //     }
    // }))

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

    passport.serializeUser(async (user, done) => {
        console.log('asdasd')
        return done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        const user = await UserModel.findById(id)
        return user
    })
}

export default initializePassport