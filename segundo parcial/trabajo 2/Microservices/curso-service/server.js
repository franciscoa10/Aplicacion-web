const cors = require("cors");
const express  = require("express");
const  { database_mongo } = require('./model/config')
const Curso = require('./model/curso')

const app =  express();
const PUERTO =  4000;

const database = async ()=>{
    await database_mongo();

}
database();

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )


app.get('/api/v2/curso', async (req,res)=>{

    const data = await Curso.find()
    
    res.status(200).send(
        data
    )
})

app.post ('/api/v2/curso', async (req,res)=>{
    const { Descripcion, Fecha_Inicio } = req.body;
    const data = new Curso({ Descripcion, Fecha_Inicio })
    await data.save();
    res.status(200).send({
        message:"Dato insertado correctamente",
        data
    })
})

app.put('/api/v2/curso/:id', async (req,res)=>{
    const {id} = req.params;
    const {...data} = req.body;

    const datas = await Curso.findByIdAndUpdate(id,data)
    
    res.status(200).send(
        {
            message:"dato modificado correctamente",
            datas
        }
    )

})
app.delete('/api/v2/curso/:id', async (req,res)=>{
    const {id} =  req.params;
    const data = await Curso.deleteOne()
    res.status(200).send({
        response:"Se eliminó el estudiante con éxito!"
    })
})



app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})