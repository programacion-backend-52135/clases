import express from 'express'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'
import pokeRouter from './routes/pokemon.router.js'

import __dirname from './utils.js'

const app = express()

// Carpeta publica
app.use('/public', express.static(__dirname + '/public'))

// Para traer info de post como JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Configurar los motores de plantilla
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/pokemon', pokeRouter)
app.get('/', (req, res) => res.send('It works great!!'))

mongoose.set('strictQuery', false)
const URL = "mongodb+srv://r2:6qhmKEmvtcWzeQHf@clusterr2.4vz3j9h.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URL, {
    dbName: 'clase08_pokeDatabase'
})
    .then(() => {
        console.log('DB connected!!')
        
        // Corremos el server
        const server = app.listen(8080, () => console.log('Listening...'))
        server.on('error', e => console.error(e))
    })
    .catch(e => {
        console.log("Can't connect to DB")
    })


