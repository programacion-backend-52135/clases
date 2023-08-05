import express from 'express'
import session from 'express-session'

const app = express()

app.use(session({
    secret: 'paraFirmarElIDEnElBrowser',
    resave: true, // Para mantener la session activa
    saveUninitialized: true // Guardar cualquier cosa, asi sea vacio
}))

app.get('/', (req, res) => res.send('ok'))
app.get('/session', (req, res) => {

    console.log(req.session)

    if(req.session.contador) {
        req.session.contador++
        
        return res.send(`Se ha visitado el sitio ${req.session.contador}`)
    }

    req.session.contador = 1
    res.send(`Welcome !!`)
})

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err) return res.send('Logout error')

        return res.send('Logout OK')
    })
})

// LOGIN !!!

const DB = [
    {
        name: 'Noah Lauro',
        username: 'noah',
        password: 'secret',
        rol: 'admin'
    }
]

app.get('/login', (req, res) => {
    const { username, password } = req.query

    const user = DB.find(u => u.username === username && u.password === password)
    if(!user) return res.send('Invalid credentials')

    req.session.user = user

    res.send('Login Success!!')
})

function authentication(req, res, next) {
    if(req.session?.user) return next()

    return res.status(401).send('error de authentication')
}
app.get('/private', authentication, (req, res) => {
    res.send('Esta pagina la puede ver la persona logueada ' + JSON.stringify(req.session.user))
})



app.listen(8080)