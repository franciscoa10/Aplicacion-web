var Aspirante = require("../model/aspirante");

// Crear y guardar un aspirante
exports.create = (req, res) => {
  // validar solicitud
  if (!req.body) {
    res.status(404).send({ message: "el contenido no puede estar vacio" });
    return;
  }

  // Nuevo aspirante
  const aspirante = new Aspirante({
    nombre: req.body.nombre,
    correo: req.body.correo,
    identificacion: req.body.identificacion,
  });

  // Guardar aspirante en base de datos
  aspirante
    .save(aspirante)
    .then((data) => {
      //res.send(data);
      res.redirect('/add-aspirante')
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

         Aspirante.findById(id)
         .then(data => {
            if(!data){
                res.status(404).send({ message : "Aspirante no encontrado con id:" + id})
            }else {
                res.send(data)
            }
         })
         .catch(err => {
            res.status(500).send({message: "error al recuperar aspirante con id" + id})
         })

    }else {
        Aspirante.find()
        .then((aspirante) => {
          res.send(aspirante);
        })
        .catch((err) => {
          res
            .status(500)
            .send({
              message:
                err.message ||
                "se produjo un error al recuperar la información del aspirante",
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
  Aspirante.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `No se puede actualizar el aspirante con el ${id}. tal vez la identificación está mal`,
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

  Aspirante.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `no se puede eliminar con id ${id}. tal vez la identificación está mal`,
          });
      } else {
        res.send({
          message: "El aspirante fue eliminado exitosamente",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "No se pudo eliminar el aspirante con id=" + id
      });
    });
};
