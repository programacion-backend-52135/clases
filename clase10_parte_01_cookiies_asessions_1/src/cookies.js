import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()
// Conectmaos cookies con nuestro servidor
app.use(cookieParser('HacemosLasCookiesCifradas'))

app.get('/', (req, res) => {
    res.send('My Cookies ')
})

app.get('/set', (req, res) => {
    res
        .cookie('cookieEri', 'Thanos siempre tuvo razon !!', {maxAge: 3000})
        .cookie('cookieForever', 'Forever and Ever !!')
        .cookie('cookieSigned', 'El valor de la cookie', {signed: true})
        .send('Cookie seteada')
})

app.get('/get', (req, res) => {
    const cookie = req.cookies
    const cookieSigned = req.signedCookies

    console.log(cookie, cookieSigned)

    res.send('Se ha leido la cookie')
})

app.get('/delete', (req, res) => {
    res.clearCookie('cookieForever').send('Cookie Borrado')
})




app.listen(8080)