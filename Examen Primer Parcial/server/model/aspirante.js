const mongoose = require('mongoose')

var aspiranteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    identificacion: {
        type: String,
        required: true,
        unique: true
    }
})

const Aspirante =mongoose.model('aspirantes', aspiranteSchema)
module.exports = Aspirante