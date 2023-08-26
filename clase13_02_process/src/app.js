import express from 'express'
import dotenv from 'dotenv'
import { fork } from 'child_process'

dotenv.config()
const PORT = process.env.PORT
const app = express()



app.get('/', (req, res) => res.send('OK'))

app.get('/suma', (req, res) => {
    const child = fork('./src/operacionCompleja.js')
    console.log('PID child: ', child.pid)

    child.send('Run !!')
    
    child.on('message', result => {
        res.send(`The result is ${result}`)
    })
})

console.log('PID main: ', process.pid)
app.listen(PORT, () => console.log(`Running (${PORT})🏃 ...`))