const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config()

const app = express()

//capturar body

app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

//Conexion a la Base de Datos
const url = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.19hseq5.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado a DB'))
    .catch((error) => console.log('Error: '+ error))

// Creacion e importacion de rutas
const authRoutes = require('./routes/auth')

//Ruta de middleware
app.use('/api/user', authRoutes)

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'Todo bien...'
    })
})


//Iniciamos el servidor
const PORT = process.env.PORT || 10000
app.listen(PORT, () => {
    console.log(`Servidor en puerto: ${PORT}`)
})
