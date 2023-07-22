import express from 'express'
import userModel from './models/user.model.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())


// Show all users
app.get('/', async(req, res) => {
    try {
        const users = await userModel.find()
        res.send({result: 'success', payload: users})
    } catch (error) {
        console.error(error);
        res.send({result: 'error', error})
    }
})

// Insertar User
app.post('/', async(req, res) => {
    const result = await userModel.create(req.body)

    res.send({status: 'success', payload: result})
})

const URL = "mongodb+srv://r2:6qhmKEmvtcWzeQHf@clusterr2.4vz3j9h.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URL, {
    dbName: 'clase08_db'
})
    .then(() => {
        console.log('DB connected!!')
        app.listen(8080)
    })
    .catch(e => {
        console.log("Can't connect to DB")
    })