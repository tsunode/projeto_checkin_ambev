import { Request, Response } from "express";
import knex from "../database/connection"

class LocationController {

  async index(request: Request, response: Response) {
    
    // retorna todos os bares e suas respectivas cervejas
    const locations = await knex("locations")
    .join("locations_brands", "locations.id", "=", "locations_brands.id_location")
    .join("brands", "locations_brands.id_brand", "=" , "brands.id")
    .select("locations.id","locations.name", "locations.type","locations.assessments", "locations.is_open", "locations.image", "locations.city", "locations.state", "brands.name as name_brand", "brands.image as image_brand");

    let idAux = 0, locationIndex= 0;

    let seralizedLocations:any = [];
    
    //serializa o array 
    locations.map((location) =>{
        
        // se for um id diferente, então temos um novo location
        if(idAux !== location.id){
            idAux = location.id;

            seralizedLocations.push({
                ...location,
                image: `http://192.168.0.107:3333/uploads/locations/${location.image}`,  
                brands:[{ 
                    name: location.name_brand, 
                    image: `http://192.168.0.107:3333/uploads/brands/${location.image_brand}`
                }]
            });
            
            locationIndex++;

            //deleta campos do objeto, pois eles foram movidos para dentro de brands
            delete seralizedLocations[locationIndex - 1].name_brand;
            delete seralizedLocations[locationIndex - 1].image_brand;

        }else{ // senão apenas adicionamos a marca dentro do bar atual
            seralizedLocations[locationIndex - 1].brands.push({ 
                name: location.name_brand, 
                image: `http://192.168.0.107:3333/uploads/brands/${location.image_brand}`
            })
        }
    })

    return response.json(seralizedLocations);
  }
}

export default LocationController;