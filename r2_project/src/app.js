import express from 'express'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import mongoose from 'mongoose'
import productRouter from './routes/product.router.js'
import cartRouter from './routes/cart.router.js'
import viewsRouter from './routes/views.router.js'
import ProductManager from './DAO/fileManager/product.manager.js'
import __dirname from './utils.js'
import initializePassport from './config/passport.config.js'
import passport from 'passport'
import MongoStore from 'connect-mongo'
import session from 'express-session'

const URL_MONGO = 'mongodb://admin:admin@127.0.0.1:27017'
const MONGO_DB_NAME = 'r2_project'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(session({
    store: MongoStore.create({
        mongoUrl: URL_MONGO,
        dbName: MONGO_DB_NAME,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }),
    secret: 'secret',
    resave: true,
    saveUnitialized: true
}))

initializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')


app.use('/', viewsRouter)
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)

const runServer = () => {
    const httpServer = app.listen(8080, () => console.log('Listneing...'))
    const io = new Server(httpServer)

    io.on('connection', socket => {
        socket.on('new-product', async data => {
            const productManager = new ProductManager()
            await productManager.create(data)

            const products = await productManager.list()
            io.emit('reload-table', products)

        })
    })
}

console.log('Connecting...')
mongoose.connect(URL_MONGO, {
    dbName: MONGO_DB_NAME
})
    .then(() => {
        console.log('DB connected!!')
        runServer()
    })
    .catch(e => console.log(`Can't connect to DB`))




