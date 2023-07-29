import studentModel from "./models/student.model.js";
import courseModel from "./models/course.model.js";
import mongoose from "mongoose";

const uri = "mongodb+srv://r2:6qhmKEmvtcWzeQHf@clusterr2.4vz3j9h.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri, { dbName: 'clase09_mongo01' })
    .then(async () => {
        console.log('DB connected')

        // Crear un documento en cada coleccion
        // =====================================================
        // await studentModel.create({
        //     name: 'Eri',
        // })

        // await courseModel.create({
        //     title: 'Defensa Contra las Artes Oscuras',
        //     description: 'Saber defenderse de ataques oscuros',
        //     difficulty: 5,
        //     topics: ['Spectro Patronus', 'Expeliermus'],
        //     professor: "Lupin"
        // })


        // Agregamos un curso al estudiante
        // =====================================================
        // const student = await studentModel.findOne({_id: '64c5336428d287744bb7852f'})
        // student.courses.push({course: "64c5336528d287744bb78531"})
        // const result = await studentModel.updateOne({_id: '64c5336428d287744bb7852f'}, student)
        // console.log(result)

        // Hacemos la busqueda
        // =====================================================
        const student = await studentModel.find({_id: '64c5336428d287744bb7852f'})

        console.log(JSON.stringify(student, null, '\t'))

    })
