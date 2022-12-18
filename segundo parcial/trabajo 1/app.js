
const cors = require("cors");
const express  = require("express");
const { ConnectionDB } = require("./database/config.db");
const Inscripcion = require("./model/Inscripcion");

const app =  express();
const PUERTO =  9999;

const database = async ()=>{
    await ConnectionDB();

}
database();

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )


app.get('/', async (req,res)=>{
    const inscripcion = await Inscripcion.find()
    res.status(200).send(
        {
            inscripcion
        }
    ) 
})


app.post ('/', async (req,res)=>{
    const { Fecha, Hora, Valor_Cancelado } = req.body;
    const inscripcion = new Inscripcion({ Fecha, Hora, Valor_Cancelado })
    await inscripcion.save();
    res.status(200).send({
        message:"Dato creados",
        inscripcion
    })
})


app.put('/:id', async (req,res)=>{
    const {id} = req.params;
    const {...data} = req.body;

    const inscripcion = await Inscripcion.findByIdAndUpdate(id,data)
    
    res.status(200).send(
        {
            message:"Actualizado correctamente",
            inscripcion
        }
    )

})


app.delete('/:id', async (req,res)=>{
    const {id} =  req.params;
    const inscripcion = await Inscripcion.findByIdAndDelete(id)
    res.status(200).send({
        response:"Elemento eliminado con exito"
    })
})

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})