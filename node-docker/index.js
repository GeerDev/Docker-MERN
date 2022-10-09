const express = require('express');
const app = express();

const Text = require("./models/Text.js");

require('dotenv').config()

const { dbConnection } = require('./database/config')

const PORT = process.env.PORT

app.get('/title', async (req,res) => {
    const title = await Text.findOne()
    res.send(title)
})

app.post('/title', async (req,res) => {
    await Text.create({title: "Aprendiendo Docker, utilizando el stack MERN :)"})
    res.send('Título creado con éxito')
})

dbConnection()

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))