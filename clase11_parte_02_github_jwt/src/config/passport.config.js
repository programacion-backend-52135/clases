import passport from "passport";
import local from 'passport-local'
import UserModel from "../model/users.model.js";
import GitHubStrategy from 'passport-github2'
import { createHash, isValidPassword } from "../utils.js";

/**
 * 
 * 
 * App ID: 375156

    Client ID: Iv1.42ae653ed8a66872
 *  Secret: 7eff1a591930fc3823944a2934e421ebdda6dba9
 */

const LocalStrategy = local.Strategy

const initializePassport = () => {

    passport.use('github', new GitHubStrategy(
        {
            clientID: 'Iv1.42ae653ed8a66872',
            clientSecret: '7eff1a591930fc3823944a2934e421ebdda6dba9',
            callbackURL: 'http://127.0.0.1:8080/githubcallback'
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile)

            try  {
                const user = await UserModel.findOne({ email: profile._json.email  })
                if(user) {
                    console.log('User already exits ' + email)
                    return done(null, user)
                }

                const newUser = {
                    name: profile._json.name,
                    email:  profile._json.email,
                    password: ''
                }
                const result = await UserModel.create(newUser)
                return done(null, result)
            } catch(e) {
                return done('Error to login wuth github' + e)
            }
        }
    ))

    // register Es el nomber para Registrar con Local
    passport.use('register', new LocalStrategy(
        {
            passReqToCallback: true,
            usernameField: 'email'
        },
        async (req, username, password, done) => {
            const { name, email } = req.body
            try {
                const user = await UserModel.findOne({ email: username })
                if (user) {
                    console.log('User already exits')
                    return done(null, false)
                }

                const newUser = {
                    name,
                    email,
                    password: createHash(password)
                }
                const result = await UserModel.create(newUser)
                return done(null, result)
            } catch (e) {
                return done('Error to register ' + error)
            }
        }
    ))

    // login Es el nomber para IniciarSesion con Local
    passport.use('login', new LocalStrategy(
        { usernameField: 'email' },
        async (username, password, done) => {
            try {
                const user = await UserModel.findOne({ email: username }).lean().exec()
                if (!user) {
                    console.error('User doesnt exist')
                    return done(null, false)
                }

                if (!isValidPassword(user, password)) {
                    console.error('Password not valid')
                    return done(null, false)
                }

                return done(null, user)
            } catch (e) {
                return done('Error login ' + error)
            }
        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        const user = await UserModel.findById(id)
        done(null, user)
    })

}

export default initializePassport
