import mongoose from "mongoose";
import orderModel from "./models/order.model.js";

const URL = "mongodb+srv://r2:6qhmKEmvtcWzeQHf@clusterr2.4vz3j9h.mongodb.net/?retryWrites=true&w=majority"
const run = async () => {
    console.log('DB connected');

    // const result = await orderModel.insertMany(
    //     [
    //         {name: 'Pepperoni', size: 'small', price: 19, quantity: 10, date: "2022-01-11T18:50:30Z"},
    //         {name: 'Pepperoni', size: 'medium', price: 20, quantity: 20, date: "2022-01-15T18:50:30Z"},
    //         {name: 'Pepperoni', size: 'medium', price: 20, quantity: 20, date: "2022-01-15T18:50:30Z"},
    //         {name: 'Pepperoni', size: 'large', price: 21, quantity: 30, date: "2022-01-17T18:50:30Z"},
    //         {name: 'Napolitana', size: 'small', price: 12, quantity: 15, date: "2022-01-11T18:50:30Z"},
    //         {name: 'Napolitana', size: 'medium', price: 13, quantity: 50, date: "2022-01-11T18:50:30Z"},
    //         {name: 'Napolitana', size: 'large', price: 14, quantity: 10, date: "2022-01-11T18:50:30Z"},
    //         {name: 'Fugazzeta', size: 'small', price: 17, quantity: 10, date: "2022-01-11T18:50:30Z"},
    //         {name: 'Fugazzeta', size: 'medium', price: 18, quantity: 10, date: "2022-01-11T18:50:30Z"}
    //     ]
    // )
    // console.log(result)

    //const orders = await orderModel.find()
    const orders = await orderModel.aggregate([
        // Stage 1. Filtrar las ordernes por un criterio
        { $match: {size: 'medium'} },

        // Stage 2. Agrupar por sabores y acumular el numero de cada sabor
        {
            $group: {
                _id: "$name",
                totalQuantity: { $sum: "$quantity"}
            }
        },

        // Stage 3. Order por cantidad
        { $sort: {totalQuantity: -1 }},

        // Stage 4. Gurar el resultado en un documento nuevo
        // El doc nuevo va a tener un _id y orders
        // Hacer $push para guardar todo el resultado anterior en un nuevo campo
        // $$ROOT toma toda la estructura de cada uno de los elementos
        { $group: {
            _id: 1,
            orders: { $push: '$$ROOT'}
        }},

        // Stage 5. Generamos un nuevo ObjectId
        {
            $project: {
                "_id": 0,
                orders: "$orders"
            }
        },

        // Stage 6. Agregamos los elementos a la coleccion
        {
            $merge: {
                into: 'reports'
            }
        }


    ])


    console.log(JSON.stringify(orders, null, 2, '/t'))
}


mongoose.connect(URL, {dbName: 'clase09_mongo02'}).then(run)


