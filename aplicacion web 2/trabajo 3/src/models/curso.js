const mongoose = require('mongoose')


const cursoSchema = mongoose.Schema({
    descripcion: {
        type: String,
        required: true
    },
    fecha_inicio: {
        type: String,//puede ser String o Date
        require: true
    },
    hora_inicio: {
        type: String,
        require: true
    }
})

module.exports =mongoose.model('Curso', cursoSchema)