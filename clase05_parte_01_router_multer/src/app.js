import express from 'express'
import usersRouter from './routes/user.router.js'
import petsRouter from './routes/pet.router.js'

const app = express()

app.use((req, res, next) => {
    const url = req.path
    console.log(`[${url}] Time: ${new Date().toLocaleTimeString()}`)
    if(url === '/health') return res.send('Esta url esta prohibida')

    next()
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send('Something broke!')
})

function myMiddleware(req, res, next) {
    req.data = 'My Data'
    console.log('Agregando la data')
    next()
}

function m1(req, res, next) {
    console.log('M1')
    next()
}

function m2(req, res, next) {
    console.log('M2')
    next()
}



app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/static', express.static('./src/public'))

app.use('/api/users', m1, m2, usersRouter)
app.use('/api/pets', myMiddleware, petsRouter)
app.use('/health', (req, res) => res.send('OK'))

app.listen(8080)