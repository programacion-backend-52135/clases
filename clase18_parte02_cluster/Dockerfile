# Definimos una imagen base
FROM node

# Crear una carpeda donce vamos a guardar el proyecto
WORKDIR /app

# Copiar los archivos de packages de nuestra carpetea local al /app
COPY package*.json ./

# Corremor el comando para instalar dependencias
RUN npm install

# Tomamos el codido del aplicativo, y lo pegamos
COPY . .

# Habilitamos el puerto que escucha nuestra computadora
EXPOSE 8080

CMD ["npm", "start"]
