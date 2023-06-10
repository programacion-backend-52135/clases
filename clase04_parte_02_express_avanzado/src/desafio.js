import express from 'express'

const app = express()
app.use(express.json())

let frase = "El profesor Arturo es el desarrollador mas genial del mundo"

app.get('/api/frase', (req, res) => res.json({ frase }) )
app.get('/api/palabras/:pos', (req, res) => {
    const pos = parseInt(req.params.pos) - 1;

    const listaPalabras = frase.split(' ')
    res.json({
        buscada: listaPalabras[pos]
    })
})
app.post('/api/palabras', (req, res) => {
    const { palabra } = req.body

    frase += ` ${palabra}`
    const position = frase.split(' ').length

    res.json({
        agregada: palabra,
        position
    })
})


app.listen(8080)