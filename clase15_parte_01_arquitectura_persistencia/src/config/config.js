import dotenv from 'dotenv'

dotenv.config()
export default {
    persistence: process.env.PERSISTENCE,
    dbName: process.env.DB_NAME || 'clase_15_01',
    dbUrl: process.env.DB_URL,
    PORT: process.env.PORT || 8080
}