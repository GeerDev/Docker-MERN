const express = require('express');
const app = express();
// const path = require('path');
const cors = require("cors");

const Text = require("./models/Text.js");

require('dotenv').config()

const { dbConnection } = require('./database/config')

const PORT = process.env.PORT
app.use(cors());

app.get('/title', async (req,res) => {
    const title = await Text.findOne()
    res.send(title)
})

app.post('/title', async (req,res) => {
    await Text.create({title: "Aprendiendo Docker, utilizando el stack MERN :)"})
    res.send('Título creado con éxito')
})

// Si quisieramos que el servidor de Node sirviera el mismo el archivo de producción que crea React -npm run build-
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

dbConnection()

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))