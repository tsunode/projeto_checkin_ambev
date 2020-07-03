import express, { Request, Response } from "express";

import LocationController from './controllers/LocationsController';
import UsersController from './controllers/UsersController';

const locationsController = new LocationController();
const usersController = new UsersController();

const routes = express.Router();

routes.get("/locations", locationsController.index);

routes.get("/code", locationsController.generateCode);

routes.post("/checkin", locationsController.checkin);

routes.get("/users/:id", usersController.show);

export default routes;
