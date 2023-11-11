import jwt from 'jsonwebtoken'
import config from './config/config.js'
import passport from 'passport'

const PRIVATE_KEY = config.jwtPrivateKEY

// Generamos el TOKEN
export const generateToken = user => {
    const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: '24h' })

    return token
}


/**
 * Esto es un truco para poder usar el parametro RESPONSE en el passport.
 * Podemos acceder a las variables res and req
 */
// EXTRAEM el TOKEN
export const passportJWT = () => {
    
    return async (req, res, next) => {
        console.log('exec')
        passport.authenticate('jwt', function (err, user, info) {
            if (err) return next(err)
            if (!user) {
                return res.status(401).send({ error: info.messages ? info.messages : info.toString() })
            }

            req.user = user
            next()
        })(req, res, next)
    }
}

// Comprobamos la atorizacion del TOKEN
export const auth = (role) => {
    return async (req, res, next) => {
        const user = req.user?.user
        console.log(user)

        if (!user) return res.status(401).send({ error: "Unauthenticated" })
        if (user.role != role) return res.status(403).send({ error: 'Unauthorized' })

        return next()
    }
}