import userModel from "./models/users.model.js";
import mongoose from "mongoose";

const uri = "mongodb+srv://r2:6qhmKEmvtcWzeQHf@clusterr2.4vz3j9h.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri, {dbName: 'clase09_mongo01'})
        .then(async () => {
            console.log('DB connected')

            //const response = await userModel.find()
            const users = await userModel.paginate({gender: 'Female'}, {
                limit: 20, page: 112
            })

            console.log(users)
        })
