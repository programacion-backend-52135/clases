import express from 'express'

const app = express()

app.get('/saludo', (req, res) => {

    console.log(req.query)
    const edad = req.query.edad

    res.send(`Tu edad es ${edad} years`)
})

app.listen(8080)