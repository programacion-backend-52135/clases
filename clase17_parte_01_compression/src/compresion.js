import express from 'express'
import compression from 'express-compression'

const app = express()

const server = app.listen(8080)


app.use(compression({
    brotli: {enabled: true, zlib: {}}
}))
app.get('/stringlargo', (req, res) => {


    let string = `Estre string es muuyy largo para el request !!`
    for(let i = 0; i < 10e4; i++) {
        string += `<br>Estamos haciendo estre string longer and longer!!`
    }

    res.send(string)

})