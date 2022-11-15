var Curso = require("../model/curso");

// Crear y guardar un aspirante
exports.create = (req, res) => {
  // validar solicitud
  if (!req.body) {
    res.status(404).send({ message: "el contenido no puede estar vacio" });
    return;
  }

  // Nuevo aspirante
  const curso = new Curso({
    descripcion: req.body.descripcion,
    fecha_inicio: req.body.fecha_inicio,
    hora_inicio: req.body.hora_inicio
  });

  // Guardar aspirante en base de datos
  curso
    .save(curso)
    .then((data) => {
      //res.send(data);
      res.redirect('/add-curso')
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "se produjo un error al crear una operación de creación",
      });
    });
};

// recuperar y retornar todos los aspirantes/recuperar y retornar un aspirante
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id

         Curso.findById(id)
         .then(data => {
            if(!data){
                res.status(404).send({ message : "Curso no encontrado con id:" + id})
            }else {
                res.send(data)
            }
         })
         .catch(err => {
            res.status(500).send({message: "error al recuperar curso con id" + id})
         })

    }else {
        Curso.find()
        .then((curso) => {
          res.send(curso);
        })
        .catch((err) => {
          res
            .status(500)
            .send({
              message:
                err.message ||
                "se produjo un error al recuperar la información del curso",
            });
        });
    }


};

//Actualizar un nuevo aspirante por id
exports.update = (req, res) => {
  if (!req.body) {
    return res
      .status(404)
      .send({ message: "los datos a actualizar no pueden estar vacios" });
  }

  const id = req.params.id;
  Curso.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `No se puede actualizar el curso con el ${id}. tal vez la identificación está mal`,
          });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error al actualizar la informacion" });
    });
};

// Eliminar un aspirante con id requerido
exports.delete = (req, res) => {
  const id = req.params.id;

  Curso.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `no se puede eliminar con id ${id}. tal vez la identificación está mal`,
          });
      } else {
        res.send({
          message: "El curso fue eliminado exitosamente",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "No se pudo eliminar el curso con id=" + id
      });
    });
};
