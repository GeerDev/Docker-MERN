# Contenedor Node

>   - Creamos una imagen partiendo de una imagen de Node bastante liviana (Alpine).
>   - Establecemos el directorio de trabajo en "/home/node-docker".
>   - Copiamos lo que se encuentre en la carpeta en la que estamos trabajando al directorio dentro del contenedor.
>   - Ejecutamos el comando para instalar todos los paquetes ya que hemos puesto como excepción subir al contenedor "/node_modules".
>   - Exponemos el puerto con el que se accederá al contenedor.
>   - Proporcionamos el comando que arrancará el contenedor.

### Modo producción
```
FROM node:lts-alpine3.15

WORKDIR /home/node-docker 

COPY . /home/node-docker 

RUN npm install

EXPOSE 3017 

CMD ["npm", "start"] 
```

>   - En la versión de desarrollo hemos creado un comando para que podamos observar los cambios en tiempo real con "nodemon" dentro del contenedor.
>   - Esto sucede en entornos Docker utilizando Windows con "Docker Desktop".
>   - El cambio de comando esta en "package.json" -> "dev:docker": "nodemon --legacy-watch index.js".

### Modo desarrollo
```
FROM node:lts-alpine3.15

WORKDIR /home/node-docker 

COPY . /home/node-docker

RUN npm install

EXPOSE 3017 

CMD ["npm", "run", "dev:docker"] 
```

Nota: La información de la conexión a base de datos de MongoDB se encuentra en el archivo docker-compose.yml, por eso no hemos incluido los archivos "Dockerfile" en el archivo ".gitignore".