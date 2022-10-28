const mongoose = require('mongoose')


var cursoSchema = new mongoose.Schema({
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

const Curso = mongoose.model('cursos', cursoSchema)
module.exports = Curso
//module.exports =mongoose.model('Curso', cursoSchema)