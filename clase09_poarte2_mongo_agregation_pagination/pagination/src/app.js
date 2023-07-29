import express from 'express'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.routes.js'
import __dirname from './utils.js'

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/', viewsRouter)

const URL = "mongodb+srv://r2:6qhmKEmvtcWzeQHf@clusterr2.4vz3j9h.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URL, {dbName: 'clase09_mongo01'})
    .then(() => console.log('DB connected!'))
    .then(() => app.listen(8080, () => console.log('Listening...')) )
