import express, { Request, Response } from "express";

import LocationController from './controllers/LocationsController';
import NewLocationController from './controllers/NewLocationsController';
import UsersController from './controllers/UsersController';

const locationsController = new LocationController();
const newLocationController = new NewLocationController();
const usersController = new UsersController();

const routes = express.Router();

routes.get("/locations", locationsController.index);

routes.get("/locationsnew", newLocationController.index);

routes.get("/code/:location_id", locationsController.generateCode);

routes.post("/checkin", locationsController.checkin);

routes.get("/users/:id", usersController.show);

export default routes;
