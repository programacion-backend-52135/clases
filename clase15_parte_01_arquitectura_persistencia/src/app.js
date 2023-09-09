import express from 'express'
import contactsRouter from './routes/contacts.router.js'
import config from './config/config.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/contacts', contactsRouter)
app.use('/', (req, res) => { res.send('OK') })


app.listen(config.PORT, () => { console.log('Listening...') })
