import express from 'express'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import __dirname from './utils.js'
import routerViews from './router/views.router.js'

const app = express()
const httpServer = app.listen(8080, () => console.log("Listening..."))
const io = new Server(httpServer)

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/static', express.static(__dirname + '/public'))

app.get('/health', (req, res) => res.send('OK'))
app.use('/', routerViews)

const messages = []
io.on('connection', socket => {
    socket.on('new', user => console.log(`${user} se acaba de conectar`))

    socket.on('message', data => {
        messages.push(data)
        io.emit('logs', messages)
    })
})