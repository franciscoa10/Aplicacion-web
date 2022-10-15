const mongoose = require('mongoose')

const aspiranteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    identificacion: {
        type: String,
        required: [true, 'La cedula es requerida'],
        unique: true
    },
    correo: {
        type: String,
        required: [true, 'correo requerido']
    }
})

module.exports = mongoose.model('Aspirante', aspiranteSchema)