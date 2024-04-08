import { Router } from "express";
import { carsControllers } from '../controllers/cars.controllers.js'
import { verificar } from "../middleware/Auth.js";

export const carsRoutes = Router();

carsRoutes.get('/', verificar, carsControllers.getAll);
carsRoutes.get('/:id', verificar, carsControllers.getOne);
carsRoutes.post('/', verificar, carsControllers.create);
carsRoutes.put('/:id', verificar, carsControllers.update);
carsRoutes.delete('/:id', verificar, carsControllers.delete);