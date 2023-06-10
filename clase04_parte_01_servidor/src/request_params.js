import express from 'express'

const app = express()

app.get('/saludo', (request, response) => {
    response.send('Saludo a secas')
})

app.get('/saludo/:nombre', (req, res) => {
    console.log(req.params)
    const nombre = req.params.nombre
    
    res.send(`Saludos a ${nombre}`)
})


app.listen(8080)