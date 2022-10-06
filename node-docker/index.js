const express = require('express');
const app = express();

require('dotenv').config()

const { dbConnection } = require('./database/config')

const PORT = process.env.PORT

app.get('/title', (req,res) => {
    res.send('Hola estamos utilizando el stack MERN con Docker :)')
})

// dbConnection()

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))