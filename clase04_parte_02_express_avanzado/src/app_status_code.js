import express from 'express'

const app = express()

app.get('/api/products', (req, res) => {
    res.status(200).send('Lista de productos .. []')
})

app.post('/api/products', (req, res) => {
    res.status(200).send('Crear el producto ... {} ')
})

app.put('/api/products', (req, res) => {
    res.status(200).send('Actualizar el producto ... {} ')
})

app.delete('/api/products', (req, res) => {
    res.status(200).send('Borrar el producto ... {} ')
})

app.listen(8080)

