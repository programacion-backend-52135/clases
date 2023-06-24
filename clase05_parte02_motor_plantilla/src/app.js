import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import userRouter from './routes/user.router.js'

const app = express()
app.use('/static', express.static(__dirname + '/public'))

// Inicializamos el motor de plantilla
app.engine('handlebars', handlebars.engine())

// Indicamos donde estan las plantillas
app.set('views', __dirname + '/views')

// Indicamos qué motor de planitllas usar
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    res.render('index', {
        title: 'My Page',
        name: 'Valentin Abalo'
    })
})
app.get('/other', (req, res) => {
    res.render('other', {title: 'Your Page'})
})
app.use('/user', userRouter)




app.listen(8080)