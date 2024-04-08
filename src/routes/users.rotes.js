import { Router } from "express";
import { usersControllers } from "../controllers/users.controllers.js";

export const usersRoutes = Router();

usersRoutes.get('/', usersControllers.getAll);
usersRoutes.get('/:id', usersControllers.getById);
usersRoutes.post('/', usersControllers.create);
usersRoutes.post('/login/', usersControllers.login);
usersRoutes.put('/:id', usersControllers.update);
usersRoutes.delete('/:id', usersControllers.delete);