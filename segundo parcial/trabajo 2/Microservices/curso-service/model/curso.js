const { Schema, model } = require("mongoose");




const CursoSchema = Schema({

    Descripcion: {
        type: String,
        required:[true, 'El campo Descripcion es obligatorio']
    },

    Fecha_Inicio: {
        type: String,
        required:[ true, 'El campo Fecha_Inicio es obligatorio' ]
    }
})


module.exports= model('Curso', CursoSchema)