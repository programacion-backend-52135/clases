import express from 'express'
import passport from 'passport'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import mongoose from 'mongoose'
import session from 'express-session'
import initializePassport from './config/passport.config.js'

import sessionRouter from './router/session.router.js'
import cookieParser from 'cookie-parser'

const app = express()

// Handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// Config session
app.use(cookieParser())
app.use(session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true
}) )

initializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.use('/', sessionRouter)

const MONGO_URL = 'mongodb://admin:admin@127.0.0.1:27017'
const MONGO_DB_NAME = 'clase13_01'
mongoose.connect(MONGO_URL, { dbName: MONGO_DB_NAME })
    .then(() => {
        console.log('DB connected 👌 ')
        app.listen(8080, () => console.log('Listening ... 🏃'))
    })
    .catch(e => console.error(e))