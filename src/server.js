import express from 'express';
import { PORT } from './config.js'
import { carsRoutes } from './routes/cars.routes.js';
import { usersRoutes } from './routes/users.rotes.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/cars/', carsRoutes);
app.use('/api/v1/users/', usersRoutes);

app.set('port', PORT);
