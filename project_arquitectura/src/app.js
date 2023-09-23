import express from 'express'
import config from './config/config.js'
import usersRouter from './routes/users.router.js'
import storesRouter from './routes/stores.router.js'
import ordersRouter from './routes/orders.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', usersRouter)
app.use('/api/stores', storesRouter)
app.use('/api/orders', ordersRouter)

app.listen(config.port, ()  => console.log('Listening...  🛵'))