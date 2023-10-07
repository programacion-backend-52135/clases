import express from 'express'
import ticketRouter from './routes/tickets.routes.js'
import userRouter from './routes/users.route.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', userRouter)
app.use('/api/tickets', ticketRouter)

app.listen(8080, () => console.log('Listening 🏃 ...'))