const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')

//coneccion a DB
const connectDB = require('./server/database/conecction')

const app = express()

dotenv.config({path: 'config.env'})
const port = process.env.PORT || 4000

//solicitar registro
app.use(morgan('tiny'))

// mongodb conecion
connectDB()

// requerir el bodyparser
app.use(bodyparser.urlencoded({ extended: true}))


// set establecer vista 
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

//cargar assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


// cargar rutas
app.use('/', require('./server/routes/routerAspirante'))

app.listen(port, () => {console.log(`Servidor corriendo en http://localhost:${port}`)})
