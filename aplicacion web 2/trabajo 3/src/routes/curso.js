const express = require("express");
const cursoSchema = require("../models/curso");

const router = express.Router();

//crear las rutas ejemplo curso
router.post("/cursos", (req, res) => {
  const curso = cursoSchema(req.body);
  curso
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener todos los cursos
router.get("/cursos", (req, res) => {
    cursoSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message:"no encontrado",error }));
});

//PARA ENCONTRAR UN CURSO EN ESPECIFICO
router.get("/cursos/:id", (req, res) => {
    const { id } = req.params;
    cursoSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message:"no encontrado",error }));
});

//PARA ACTUALIZAR CURSO

router.put("/cursos/:id", (req, res) => {
    const { id } = req.params;
    const {descripcion, fecha_inicio, hora_inicio} = req.body
    cursoSchema
      .updateOne({ _id: id }, { $set: {descripcion, fecha_inicio, hora_inicio}})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message:"no encontrado",error }));
});

//ELIMINAR CURSO
router.delete("/cursos/:id", (req, res) => {
    const { id } = req.params;
    cursoSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message:"no encontrado",error }));
});


module.exports = router;
