const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

//importar las rutas
const cursoRoutes = require('./routes/curso')
const aspiranteRoutes = require('./routes/aspirante')
const inscripcionRoutes = require('./routes/inscripcion')

const app =express()
const port = process.env.PORT || 4000

//middleware
app.use(express.json())
app.use('/api', cursoRoutes)
app.use('/api', aspiranteRoutes)
app.use('/api', inscripcionRoutes)


//routes
app.get('/', (req, res) =>{
    res.send('COSAS QUE FUNCIONAN')
})

//CMONGO CONECCION
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado a mongodb Atlas'))
.catch((error) => console.error(error))

app.listen(port, () => console.log('servidor funcionando en el puerto', port))
