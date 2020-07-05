import { Request, Response } from "express";
import knex from "../database/connection";
import ip from "ip";
import Location from "../models/Location";

class NewLocationController {
    async index(request: Request, response: Response) {
        const locations = await Location.query()
        .joinRelation('brands')
        .select([
            "locations.id",
            "locations.name",
            "locations.type",
            "locations.assessments",
            "locations.is_open",
            "locations.image",
            "locations.city",
            "locations.state",
            ],
            knex.raw('group_concat(brands.name, \',\') as brands_name'),
            knex.raw('group_concat(brands.image, \',\') as brands_image'),
        ).groupBy('locations.id');
  
        const seralizedLocations = locations.map(location => location.toJSON()); 

        return response.json(locations);
    }
}

export default NewLocationController;