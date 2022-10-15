const express = require("express");
const inscripcionSchema = require("../models/inscripcion");

const router = express.Router();

//crear las rutas ejemplo inscripcion
router.post("/inscripciones", (req, res) => {
  const inscripcion = inscripcionSchema(req.body);
  inscripcion
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener todos las inscripciones
router.get("/inscripciones", (req, res) => {
  inscripcionSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: "no encontrado", error }));
});

//PARA ENCONTRAR UNA INSCRIPCION EN ESPECIFICO
router.get("/inscripciones/:id", (req, res) => {
  const { id } = req.params;
  inscripcionSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: "no encontrado", error }));
});

//PARA ACTUALIZAR INSCRIPCION

router.put("/inscripciones/:id", (req, res) => {
  const { id } = req.params;
  const { fecha, hora, valor_cancelar } = req.body;
  inscripcionSchema
    .updateOne({ _id: id }, { $set: { fecha, hora, valor_cancelar } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: "no encontrado", error }));
});
//ELIMINAR ASPIRANTE
router.delete("/inscripciones/:id", (req, res) => {
  const { id } = req.params;
  inscripcionSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: "no encontrado", error }));
});

module.exports = router
