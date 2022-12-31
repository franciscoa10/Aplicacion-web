const mongoose = require('mongoose');

const database_mongo = async () =>{
    try {
        await mongoose.connect( 'mongodb://mongo:27017/curso-service',  {
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
    database_mongo
}