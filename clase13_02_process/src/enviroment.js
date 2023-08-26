import { config } from 'dotenv'

config({ path: '.env' })


const PORT = process.env.PORT

console.log( { PORT })