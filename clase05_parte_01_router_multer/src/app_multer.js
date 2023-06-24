import express from 'express'
import multer from 'multer'

const app = express()
app.use(express.json())

// MOstramos los archivos publics de esta carpeta
app.use(express.static('./src/public'))

//Configuracion de multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // Ubicacion del archivo
        cb(null, './src/public/') 
    },
    filename: function(req, file, cb) {
        // Nombre del archivo
        cb(null, file.originalname)
    }
})
// Middleware para cargar el archivo
const uploader = multer({storage})

app.post('/',  uploader.single('file'), (req, res) => {
    if(!req.file) {
        return res.status(400).send({status: 'error', error: 'No file'})
    }

    console.log(req.file)
    res.send('File Uploaded!')
})

app.listen(8080)