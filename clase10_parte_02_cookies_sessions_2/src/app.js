import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'

import sessionRouter from './routes/session.router.js'
import viewsRouter from './routes/views.router.js'

import __dirname from './utils.js'

const app = express()
const uri = 'mongodb://admin:admin@localhost:27017/'
const dbName = 'clase10_02'

// CONFIGURACION HANDLEBARS
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// Configuracion para usar JSON en el post
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// CONFIGURACION MONGO SESSIONS
app.use(session({
    store: MongoStore.create({
        mongoUrl: uri,
        dbName,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 100
    }),
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use('/api/session', sessionRouter)
app.get('/health', (req, res) => res.send(`<h1>OK</h1>`))
app.use('/', viewsRouter)

mongoose.connect(uri, {dbName})
    .then(() => {
        console.log('Connected')
        app.listen(8080, () => console.log('Listeing...'))
    })