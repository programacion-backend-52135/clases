import {fileURLToPath} from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const PRIVATE_KEY = 'CoderKeyFromValentinAAAAA91929129129'

export const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

export const isValidPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password) // true o false
}

// Generamos el token
export const generateToken = (user) => {
    const token = jwt.sign( {user}, PRIVATE_KEY, {expiresIn: '24h'})

    return token
}

// Extraemos el token del header
export const authToken = (req, res, next) => {
    const authHeader = req.headers.auth
    if(!authHeader) {
        return res.status(401).send({
            error: 'Not auth'
        })
    }

    const token = authHeader
    jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
        if(error) return res.status(403).send({error: 'Not authroized'})

        req.user = credentials.user
        next()
    })
}

export default __dirname