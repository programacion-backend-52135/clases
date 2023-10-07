import dotenv from 'dotenv'
import { Command } from 'commander'

dotenv.config()

const program = new Command()
program.option('--persistence <persistence>', 'Persistence')
program.parse()

const persistence = program.opts().persistence ?? process.env.PERSISTENCE ?? 'FILE'

export default {
    persistence,
    mongoURI: process.env.MONGO_URI,
    mongoDBname: process.env.MONGO_DB_NANE,
    pathFile: './db/',
    port: process.env.PORT || 8080,
    mailUser: process.env.MAIL_USER,
    mailPass: process.env.MAIL_PASS
}