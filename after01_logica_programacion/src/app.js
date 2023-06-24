import express from "express"

const app = express();
app.use(express.json())

let frase = 'practicando backend en el after con arturito'

app.get('/', (req, res) => {
    res.send('hola')
})

app.get('/api/frase', (req, res) => {
    res.send({ frase })
})

app.get('/api/palabras/:pos', (req, res) => {
    const pos = req.params.pos
    const lista = frase.split(' ')
    const palabra = lista[pos - 1]

    res.send({ palabra })
})

app.post('/api/palabras/', (req, res) => {
    const { palabra } = req.body 

    frase += ' ' + palabra

    const position = frase.split(' ').length

    res.send({
        frase,
        palabra,
        position
    })
})

app.put('/api/palabras/:pos', (req, res) => {
    const { palabra } = req.body 
    const pos = parseInt(req.params.pos) - 1

    const lista = frase.split(' ')
    const palabraAnterior = lista[pos]
    lista[pos] = palabra
    frase = lista.join(' ')

    res.send({
        frase,
        palabraNueva: palabra,
        palabraAnterior
    })

})

app.listen(8080, () => console.log('corriendo server...'));