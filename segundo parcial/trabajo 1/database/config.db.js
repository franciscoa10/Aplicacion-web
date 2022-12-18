const  mongoose =  require('mongoose');


const ConnectionDB = async ()=>{

    try{
        await mongoose.connect( 'mongodb://mongodb:27017/database', {useNewUrlParser:true});
        console.log('Base de datos escuchando')
    }
    catch(error){
        console.log(error);
        throw new Error('Error al conectarse con la base de datos')
    }

}
module.exports = {
    ConnectionDB
}