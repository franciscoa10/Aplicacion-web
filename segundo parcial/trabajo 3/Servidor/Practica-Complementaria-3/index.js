const cors = require("cors");
const express  = require("express");
const  { mongodb } = require('./model/database')
const Inscripcion = require('./model/Inscripcion')

const app =  express();
const PUERTO =  1000;

const database = async ()=>{
    await mongodb();

}
database();

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )


app.get('/inscripcion', async (req,res)=>{

    const inscripcion = await Inscripcion.find()
    
    res.status(200).send(
        inscripcion
    )
})
app.get('/inscripcion/:id', async (req,res)=>{
    const {id} = req.params
    const inscripcion = await Inscripcion.findById()
    
    res.status(200).send(
        inscripcion
    )
})

app.post ('/inscripcion', async (req,res)=>{
    const { Fecha, Hora, ValorCancelado } = req.body;
    const inscripcion = new Inscripcion({ Fecha, Hora, ValorCancelado })
    await inscripcion.save();
    res.status(200).send({
        message:"Dato insertado correctamente",
        inscripcion
    })
})

app.put('/inscripcion/:id', async (req,res)=>{
    const {id} = req.params;
    const {...data} = req.body;

    const inscripcion = await Inscripcion.findByIdAndUpdate(id,data)
    
    res.status(200).send(
        {
            message:"dato modificado correctamente",
            inscripcion
        }
    )

})
app.delete('/inscripcion/:id', async (req,res)=>{
    const {id} =  req.params;
    const inscripcion = await Inscripcion.deleteOne()
    res.status(200).send({
        response:"Se eliminó el estudiante con éxito!"
    })
})



app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})