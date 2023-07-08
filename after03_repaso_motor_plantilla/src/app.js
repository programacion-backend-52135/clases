import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// Hacer la carpeta public disponible en el server
app.use('/static', express.static(__dirname + '/public'))

// Devuelve un html estatico por string
// BAD !!
app.get('/', (req, res) => {
    res.send('<h1>Esto es un HTML</h1>')
})

// Devolvemos un archivo desde el server
app.get('/v2', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// Editamos el html antes de devolver al client
app.get('/v4', (req, res) => {
    const name = req.query.name || 'R2'
    res.send(`<h1>Esto es un HTML de ${name}. V4</h1>`)
})

app.get('/handlebars', (req, res) => {
    const name = req.query.name || 'R2'
    res.render('v1', { name })
})

app.get('/handlebars/v2', (req, res) => {
    const name = req.query.name || 'R2'
    res.render('v2', { name })
})




app.listen(8080)