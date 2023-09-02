import express from 'express'
import toyRouter from './routers/toy.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/toy', toyRouter)

app.listen(8080)