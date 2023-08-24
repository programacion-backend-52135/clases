import passport from "passport";
import passportGoogle from 'passport-google-oauth20'
import UserModel from "../DAO/mongoManager/models/user.model.js";

var GoogleStrategy = passportGoogle.Strategy;

const GOOGLE_CLIENT_ID = '560369328245-m2e5lt3khuadpp838cfr2ibnrs598jf6.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

const initializePassport = () => {

    passport.use('google', new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:8080/callback-google"
    },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile)
            const email = profile.emails[0].value
            const name = profile.displayName

            const user = await UserModel.findOne({ email })
            if(user) {
                console.log('Already exits')
                return done(null, user)
            }            

            const result = await UserModel.create({ email, name, password: '' });

            return done(null, result)
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        const user = await UserModel.findById(id)
        done(null, user)
    })

}

export default initializePassport