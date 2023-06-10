import express from 'express'           // Importar con module
// const express = require('express') Vieja manaera de importar

const app = express()

app.get('/saludo', (request, response) => {
    response.send('Hola a Valentin Abalo desde express !!')
})

app.listen(8080, () => console.log('Running on 8080...'))