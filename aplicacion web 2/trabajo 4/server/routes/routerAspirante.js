const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require('../controller/controllAspirante')

/**
 * @description Root Route
 * @method GET /
 */
route.get("/", services.homeRoutes);

/**
 * @description add aspirante
 * @method GET /add-aspirante
 */
route.get("/add-aspirante", services.add_aspirante);
/**
 * @description update aspirante
 * @method GET /update-aspirante
 */
route.get("/update-aspirante", services.update_aspirante);

// API
route.post('/api/aspirantes', controller.create)
route.get('/api/aspirantes', controller.find)
route.put('/api/aspirantes/:id', controller.update)
route.delete('/api/aspirantes/:id', controller.delete)

module.exports = route;
