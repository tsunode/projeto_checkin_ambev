import express, { Request, Response } from "express";

import LocationController from './controllers/LocationsController';

const locationsController = new LocationController();

const routes = express.Router();

routes.get("/locations", locationsController.index);

routes.get("/code", locationsController.generateCode);

routes.post("/checkin", locationsController.checkin);

export default routes;
