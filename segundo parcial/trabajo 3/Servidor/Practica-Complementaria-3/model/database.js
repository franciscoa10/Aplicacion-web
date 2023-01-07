const mongoose = require('mongoose');

const mongodb = async () =>{
    try {
        await mongoose.connect( 'mongodb+srv://nota:nota@nota.ah8b1kr.mongodb.net/?retryWrites=true&w=majority',  {
            useNewUrlParser: true,
            useUnifiedTopology: true

        });
        console.log('Base de Datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos')
    }
}


module.exports={
    mongodb
}