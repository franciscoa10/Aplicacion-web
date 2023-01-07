const { Schema, model } = require("mongoose");




const InscripcionSchema = Schema({

    Fecha: {
        type: String,
        required:[true, 'El campo Fecha es obligatorio']
    },
    Hora: {
        type: String,
        required:[true, 'El campo Ingreso es obligatorio']
    },
    ValorCancelado: {
        type: String,
        required:[true, 'El campo ValorCancelado es obligatorio']
    }
})


module.exports= model('Inscripcion', InscripcionSchema)