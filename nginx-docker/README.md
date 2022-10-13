# Contenedor Nginx

>   - Creamos una imagen con la última versión del servidor web Nginx.
>   - Copiamos nuestro archivo de configuración dentro de la ruta del contenedor de Nginx.
>   - Exponemos el puerto que va a tener disponible este contenedor.

```
FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
```

En el archivo de cofiguración "nginx.conf" principalmente establecemos que las peticiones que acepte el sistema sean por el puerto 80 y establecemos para las ruta "/" para servir el contenedor que contiene nuestra aplicación de React y establecemos la ruta "/title" para servir el contenedor de Nodejs con nuestro back-end.