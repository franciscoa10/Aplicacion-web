const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // mongodb coneccion string
        const con= await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            //useFindAndModify: false,
            //useCreateIndex: true
        })

        console.log(`Conectado a mongoDB: ${con.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}

module.exports = connectDB