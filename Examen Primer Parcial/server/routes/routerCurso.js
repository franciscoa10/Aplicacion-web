const express = require("express");
const route = express.Router();

const services = require("../services/renderCurso");
const controller = require('../controller/controllCurso')

/**
 * @description Root Route
 * @method GET /
 */
route.get("/curso", services.cursoRoutes);

/**
 * @description add curso
 * @method GET /add-curso
 */
route.get("/add-curso", services.add_curso);
/**
 * @description update curso
 * @method GET /update-curso
 */
route.get("/update-curso", services.update_curso);//este depende mostrar curso

// API
route.post('/api/cursos', controller.create)
route.get('/api/cursos', controller.find)
route.put('/api/cursos/:id', controller.update)
route.delete('/api/cursos/:id', controller.delete)

module.exports = route;