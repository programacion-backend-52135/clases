import dotenv from 'dotenv'

dotenv.config()
export default {
    persistence: process.env.PERSISTENCE,
    port: process.env.PORT || 8080,
    dbUrl: 'mongodb://admin:admin@127.0.0.1:27017',
    dbName: 'clase15_02'
}