const express = require("express");
const aspiranteSchema = require("../models/aspirante");

const router = express.Router();

//crear las rutas ejemplo aspirante
router.post("/aspirantes", (req, res) => {
  const aspirante = aspiranteSchema(req.body);
  aspirante
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener todos los aspirantes
router.get("/aspirantes", (req, res) => {
  aspiranteSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: "no encontrado", error }));
});
//PARA ENCONTRAR UN ASPIRANTE EN ESPECIFICO
router.get("/aspirantes/:id", (req, res) => {
  const { id } = req.params;
  aspiranteSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: "no encontrado", error }));
});

//PARA ACTUALIZAR ASPIRANTE

router.put("/aspirantes/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, identificacion, correo } = req.body;
  aspiranteSchema
    .updateOne(
      { _id: id },
      { $set: { nombre, identificacion, correo } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: "no encontrado", error }));
});
//ELIMINAR ASPIRANTE
router.delete("/aspirantes/:id", (req, res) => {
    const { id } = req.params;
    aspiranteSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message:"no encontrado",error }));
});

module.exports = router