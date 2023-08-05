import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'

const app = express()
const uri = 'mongodb://admin:admin@localhost:27017/'

app.use(session({
    store: MongoStore.create({
        mongoUrl: uri,
        dbName: 'sessions',
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 100
    }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

app.get('/', (req, res) => res.send('ok'))
app.get('/login', (req, res) => {
    if (req.session.user) return res.send('Already logged')

    const { username } = req.query
    if (!username) return res.send('Need an username')

    req.session.user = username
    return res.send('Login sucess')
})

function auth(req, res, next) {
    return req.session?.user ? next() : res.status(401).send('Auth error')
}
app.get('/private', auth, (req, res) => { res.send(`Private page ${req.session.user}`) })

app.listen(8080, () => console.log('listeinng...'));