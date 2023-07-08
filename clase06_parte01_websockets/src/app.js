import express from 'express'
import { Server } from 'socket.io'
import __dirname from './utils.js'

const app = express()
app.use('/static', express.static(__dirname + '/public'))

app.get('/', (req, res) => {

    res.send('<h1> HOME </h1>')
})

const httpServer = app.listen(8080)
const socketServer = new Server(httpServer)

socketServer.on('connection', socket => {
    console.log('Nuevo cliente conectado')

    socket.on('message', data => {
        console.log(data)

        socket.emit('message_one', 'Solo le llega al conectado')
        socket.broadcast.emit('msn_rest', 'Todos los ven, menos el actual')
        socketServer.emit('msn_all', data)
    })
})