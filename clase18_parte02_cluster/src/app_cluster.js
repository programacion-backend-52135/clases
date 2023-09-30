import express from 'express'
import cluster from 'cluster'
import { cpus } from 'os'

//console.log(`[${process.pid}] Start ProgramisPrimary (primary: ${cluster.isPrimary})` )

if( cluster.isPrimary) {

    console.log( cpus().length )

    for (let i = 0; i < cpus().length; i++) {       
        cluster.fork()
    }

} else {
    const app = express()
    app.get('/', (req, res) => {
        res.send({status: 'success', message: `Request from ${process.pid}`})
    })
    
    app.get('/simple', (req, res) => {
        let sum = 0
        for (let i = 0; i < 1_000_000; i++) sum += i
    
        res.send({ sum })
    })
    
    app.get('/complex', (req, res) => {
        let sum = 0
        for (let i = 0; i < 5e8; i++) sum += i
    
        res.send({ sum })
    })
    
    app.listen(8080, () => console.log(`[${process.pid}] Listening...`))
}

