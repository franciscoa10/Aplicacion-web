const mongoose = require('mongoose')

const inscripcionSchema = mongoose.Schema({

    fecha: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true,
        unique: true
    },
    valor_cancelar: {
        type: String,
        required: [true, 'si no cancela no puede ver los cursos'],
        unique: true
    },
    aspirante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'aspirantes',
        required: false
    },
    curso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cursos',
        reqired: false
    }

})

module.exports = mongoose.model('Inscripcion', inscripcionSchema)