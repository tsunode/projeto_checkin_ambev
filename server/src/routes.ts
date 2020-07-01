import express, { Request, Response } from "express";

import LocationController from './controllers/LocationsController';

const locationsController = new LocationController();

const routes = express.Router();

routes.get("/locations", locationsController.index);

export default routes;
