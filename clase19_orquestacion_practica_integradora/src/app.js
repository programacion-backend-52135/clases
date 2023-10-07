import express from 'express'
const app = express()
app.get('/', (req, res) => res.send('<h1>[R2] My Service 🔥 </h1>'))
app.listen(8080, () => console.log('Listening 🏃...'))

/**
 * 
 * ====Construir la imagen
 * docker build -t lautaroservice .
 * 
 * ===== Ver Lista de imagenes
 * docker images
 * 
 * 
 * ==== Crear un contenedor a partir de la imagen:
 * docker run -d -p 8081:8080 lautaroservice
 * 
 * ==== Ver la lista de contenedores corriendo
 * docker ps
 * 
 * ===== Ver la lista de toods los contenedores
 * docker ps -a
 * 
 * ***********************   PASOS PARA SUBIR A DOCKER HUB *****************************************************
 * 
 * === Login to docker
 * docker login
 * 
 * ==== Asignamos una version a la imagen
 * docker tag lautaroservice arturoverbel/lautaroservice:1.0.0
 * 
 * === Subimso la iamgen que versionamos
 * docker push arturoverbel/lautaroservice:1.0.0
 * 
 * ==== Correr una imagen que se subio
 * docker run -p 8081:8080 --name lautarocontainer -d arturoverbel/lautaroservice:1.0.0
 * 
 * 
 */
