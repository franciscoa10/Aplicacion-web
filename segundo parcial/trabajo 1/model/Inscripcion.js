const { Schema, model } = require("mongoose");




const SchemaInscripcion = Schema({

    Fecha: {
        type: String,
        required:[true, 'El campo Fecha es obligatorio']
    },

    Hora: {
        type: String,
        required:[ true, 'El campo Hora es obligatorio' ]
    },
    

    Valor_Cancelado: {
        type: String,
        required:[ true, 'El campo Valor_Cancelado es obligatorio' ]
    }
})


module.exports= model('Inscripcion', SchemaInscripcion)