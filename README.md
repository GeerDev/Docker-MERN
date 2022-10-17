# Stack MERN utilizando contenedores Docker
_Este proyecto simula un entorno utilizando el stack MERN usando Docker para construir la arquitectura web_


_Primero montaremos el sistema tirando del sistema local, luego construiremos contenedores y por último veremos una forma distinta de acceder utilizando un cotenedor con una imagen de Nginx instalado_


Nota: Este proyecto se centra en temas de arquitectura web, no en como está montado el código tanto del front como el del back
## Entorno de trabajo: Todo en local (Localhost)
En el primer entorno ejecutamos todo en "localhost" con los puertos que están disponibles:
- En nuestro front con React (puerto 3000)
- Nuestro back con NodeJS (puerto 3017)
- La base de datos MongoDB (puerto 27017)

![foto](./imagenes_readme/localhost.png) 
## Entorno de trabajo: Entorno Dockerizado

![foto](./imagenes_readme/dockerizado.png) 
## Entorno de trabajo: Utilizando Servidor Nginx como proxy inverso

![foto](./imagenes_readme/nginx.png) 
## Ambientes de producción y desarrollo


![foto](./imagenes_readme/sistemalevantado.png) 
```
docker compose up -d
```

```
docker compose -f docker-compose.dev.yml up -d
```




![foto](./imagenes_readme/sistematumbado.png) 
```
docker compose down --rmi all -v
```


Hecho por [Germán Fernández](https://www.linkedin.com/in/geerdev/)