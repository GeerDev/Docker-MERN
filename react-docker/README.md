# Contenedor React

>   - Creamos una imagen partiendo de una imagen de Node bastante liviana (Alpine).
>   - Establecemos un directorio de trabajo "/home/react-docker".
>   - Copiamos los archivos que contengan "package" más cualquier otra cosa con la extensión ".json" en el directorio de trabajo.
>   - Establecemos la variable de entorno para realizar las peticiones a nuestro back-end.
>   - Corremos el comando para instalar todas las dependencias.
>   - Copiamos ahora todo nuestro proyecto dentro del contenedor.
>   - Instalamos las dependencias necesarias para poder servir contenido estático desde el contenedor.
>   - Corremos el comando para generar una "build" de producción de nuestro proyecto en React.
>   - Exponemos el puerto que va a tener disponible este contenedor.
>   - Ejecutamos el comando para que podamos servir nuestro archivo de producción, este arrancará el contenedor.

### Modo producción
```
FROM node:lts-alpine3.15

WORKDIR /home/react-docker 

COPY package*.json .

ENV REACT_APP_URL=http://localhost:8080

RUN npm install

COPY . .

RUN npm i -g serve

RUN npm run build

EXPOSE 3000 

CMD ["serve", "-s", "build"] 
```

>   - Agregamos una variable de entorno adicional "WATCHPACK_POLLING" para que se puedan observar cambios en tiempo real cuando estemos en modo desarrollo en este contenedor.
>   - Ejecutamos el comando para arrancar el contenedor en desarrollo como si lo estuvieramos corriendo en nuestra propia máquina (localhost).

### Modo desarrollo
```
FROM node:lts-alpine3.15

WORKDIR /home/react-docker 

COPY . .

ENV REACT_APP_URL=http://localhost:8080
ENV WATCHPACK_POLLING=true

RUN npm install

EXPOSE 3000 

CMD ["npm", "start"] 
```

Nota: Es muy importante generar las variables de entorno de este contenedor en el momento que se construye esta imagen, no despues cuando se construyen todos los servicios a la vez en "docker-compose.yml".