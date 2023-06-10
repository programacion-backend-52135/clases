const http = require('http')

const server = http.createServer( (request, response) => {
    response.end('Mi primer Hola Mundo desde el backend con R2 ! 😎')

    console.log("Se recibio un request")
})

server.listen(8080, () => {
    console.log('El servidor esta corriendo  y escuchando en el puerto 8080...')
})

/*

Entrar a http://127.0.0.1:8080/
Entrar a http://localhost:8080

Instalar nodemon:: `npm install nodemon`

*/