var Inscripcion = require("../model/inscripcion");

// Crear y guardar un aspirante
exports.create = (req, res) => {
  // validar solicitud
  if (!req.body) {
    res.status(404).send({ message: "el contenido no puede estar vacio" });
    return;
  }

  // Nuevo aspirante
  const inscripcion = new Inscripcion({
    fecha: req.body.fecha,
    hora: req.body.hora,
    valor_cancelar: req.body.valor_cancelar,
  });

  // Guardar aspirante en base de datos
  inscripcion
    .save(inscripcion)
    .then((data) => {
      //res.send(data);
      res.redirect('/add-inscripcion')
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

         Inscripcion.findById(id)
         .then(data => {
            if(!data){
                res.status(404).send({ message : "Inscripcion  no encontrado con id:" + id})
            }else {
                res.send(data)
            }
         })
         .catch(err => {
            res.status(500).send({message: "error al recuperar la inscripcion por id" + id})
         })

    }else {
        Inscripcion.find()
        .then((inscripcion) => {
          res.send(inscripcion);
        })
        .catch((err) => {
          res
            .status(500)
            .send({
              message:
                err.message ||
                "se produjo un error al recuperar la información de la inscripcion",
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
  Inscripcion.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `No se puede actualizar la inscripcion con el ${id}. tal vez la identificación está mal`,
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

  Inscripcion.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `no se puede eliminar con id ${id}. tal vez la identificación está mal`,
          });
      } else {
        res.send({
          message: "La inscripcion fue eliminado exitosamente",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "No se pudo eliminar el inscripcion con id=" + id
      });
    });
};
