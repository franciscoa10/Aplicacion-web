const { Schema, model } = require("mongoose");




const aspiranteSchema = Schema({
  
    Nombre: {
        type: String,
        required:[true, 'El campo Descripcion es obligatorio']
    },

    Identificacion: {
        type: String,
        required:[ true, 'El campo Identificacion es obligatorio' ]
    }
})


module.exports= model('Aspirante', aspiranteSchema)