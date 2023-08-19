import express from 'express'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import jwtRouter from './routes/jwt.router.js'
import viewsRouter from './routes/views.router.js'

const app = express()
const uri = "mongodb://admin:admin@127.0.0.1:27017"
const dbName = 'clase11_01'

app.use(express.json())

// Data for post json
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

// Handlebares
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/', viewsRouter)
app.use('/jwt', jwtRouter)

mongoose.connect(uri, { dbName })
    .then(() => {
        console.log('DB connected 👌')
        app.listen(8080, () => {
            console.log('Listen 👂 ...')
        })
    })
    .catch(e => console.error(e))