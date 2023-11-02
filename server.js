const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
//dependencia de conexión 
const conectarDB = require("./config/db")
//depndencias de rutas 
const bootcampsRoutes = require('./routes/bootcampRoutes')

//configurar dotenv
dotenv.config({
    path:"./config/.env"
})

//conectar a bd

conectarDB()

//crear objeto
//express
const app = express()
//habilitar express para recibir body en formato json

app.use(express.json())


//establecer rutas de proyecto
app.use('/api/v1/bootcamps',
        bootcampsRoutes)

//crear el servidor de 
//aplicaciones express
app.listen(process.env.PUERTO,
     () => {console.log(`el servidor express ejecutando${process.env.PUERTO}`.bgBlue.blue)})
