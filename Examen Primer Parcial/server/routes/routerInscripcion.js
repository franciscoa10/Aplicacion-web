const express = require("express");
const route = express.Router();

const services = require("../services/renderInscripcion");
const controller = require('../controller/controllInscripcion')

/**
 * @description Root Route
 * @method GET /
 */
route.get("/inscripcion", services.homeRoutes);

/**
 * @description add inscripcion
 * @method GET /add-inscripcion
 */
route.get("/add-inscripcion", services.add_inscripcion);
/**
 * @description update inscripcion
 * @method GET /update-inscripcion
 */
route.get("/update-inscripcion", services.update_inscripcion);

// API
route.post('/api/inscripciones', controller.create)
route.get('/api/inscripciones', controller.find)
route.put('/api/inscripciones/:id', controller.update)
route.delete('/api/inscripciones/:id', controller.delete)
route.delete('/api/inscripciones/deleteMay', controller.delete)

module.exports = route;