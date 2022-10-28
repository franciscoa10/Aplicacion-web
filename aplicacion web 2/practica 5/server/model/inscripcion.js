const mongoose = require('mongoose')

const inscripcionSchema = new mongoose.Schema({

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
    aspirante: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'aspirante',
        // required: false
    }],
    curso: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'curso',
        // reqired: false
    }]

})

const Inscripcion = mongoose.model('inscripciones', inscripcionSchema)
module.exports = Inscripcion