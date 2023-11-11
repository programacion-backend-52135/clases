import dotenv from 'dotenv'

dotenv.config()

export default {
    persistence: process.env.PERSISTENCE || 'MONGO',
    appPort: process.env.PORT || 8080,
    databaseURL: process.env.MONGO_URL,
    databaseNAME: process.env.MONGO_DBNAME,
    jwtPrivateKEY: process.env.JWT_PRIVATE_KEY
}