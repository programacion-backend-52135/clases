import userModel from "./models/user.model.js";
import mongoose from "mongoose";

const uri = "mongodb+srv://r2:6qhmKEmvtcWzeQHf@clusterr2.4vz3j9h.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri, {dbName: 'clase09_mongo01'})
        .then(async () => {
            console.log('DB connected')

            const response = await userModel.find({first_name: 'Joella'}).explain('executionStats')
            console.log(response)
        })

/**
 * 
 * Find()                   3 milisegundops
 * Find('Celia')            4 milisegundos
 * Find('Celia') with Indes 0 milisegundos
 * 
 */